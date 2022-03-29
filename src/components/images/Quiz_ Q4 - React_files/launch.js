window.GlobalEesy = (window.GlobalEesy || {});
window.var_delay_login_until_support_requested = false;

delete window.GlobalEesy.ActiveLTIName;
delete window.GlobalEesy.ActiveLTIDomain;

(async function () {
    // Returns the element (such as <iframe> or <object>) in which the window is embedded,
    // or null if the element is either top-level or is embedded into a document with a different script origin.
    if (window.frameElement) return;

    document.addEventListener("engineLoaded", function () {
        function handleExternalToolUrl(href) {
            var courseId = href.match("^/courses/([0-9]+)/") ? href.match("^/courses/([0-9]+)/")[1] : undefined;
            const ltiId = resolveActiveLtiId(href);
            if (ltiId) {
                createCustomEvent("registerLtiLaunch", { detail: { launchType: "LTI_LAUNCH", data: ltiId, courseId: courseId}});
            } else if (href.indexOf("external_tools/retrieve") > -1) {
                createCustomEvent("registerLtiLaunch", { detail: { launchType: "LTI_LINK_RETRIVE", data: href.split("?")[1], courseId: courseId}});
            }
        }

        $("a[href*=external_tools]").click(function(e) {
            try {
                handleExternalToolUrl($(this).attr("href"));
            } catch(err) {
                // Swallow errors
            }
        });

        $("iframe[src*=external_tools\\/retrieve]").each(function(i, elm) {
            var courseId = document.location.pathname.match("^/courses/([0-9]+)/") ? document.location.pathname.match("^/courses/([0-9]+)/")[1] : undefined;
            createCustomEvent("registerLtiLaunch", { detail: { launchType: "LTI_EMBED_RETRIVE", data: encodeURIComponent($(elm).prop("src").split("?")[1]), courseId: courseId}});
        });

        handleExternalToolUrl(document.location.pathname);
    });


    var cfg = window.eesyLaunchConfig || {};
    var launchSettings = await $.get('//' + cfg.host + '/rest/public/canvasLaunchSettings');
    var accountUuid = window.accountUuid || (await $.get('/api/v1/impact/data')).account.uuid;
    window.accountUuid = accountUuid;

    if (launchSettings.impactChatbot && !window._chatBotReady) {
        // Skip if legacy launching script already loaded chatbot frontend (_chatBotReady promise).

        const script = document.createElement('script');
        // Select production or staging version of frontend
        script.src = document.location.host === 'chatbot.beta.instructure.com' ?
            'https://dt5vio76voyqa.cloudfront.net/main.js' :
            'https://d1embgbpmfo5b.cloudfront.net/main.js';
        script.async = true;
        script.type = 'text/javascript';

        // Create promise to sync loading chatbot bundle with initialization.
        window._chatBotReady = new Promise((resolve) => {
            script.addEventListener('load', () => {
                // Entry file loaded, now wait for main bundle.
                window._chatBotBundleReady.then(resolve)
            })
        })

        document.head.append(script);
    }

    userLogin = async function (callback) {
        var cfg = window.eesyLaunchConfig || {};
        var launchSettings = await $.get('//' + cfg.host + '/rest/public/canvasLaunchSettings');
        if (!(ENV.current_user_id === undefined || ENV.current_user_id === null)) {
            await loginUser(launchSettings,  getLightRoles);
        } else {
            await loginTempUser(launchSettings, getNonAuthorizedRoles);
        }
    };

    window.eesy_course_id = ENV.COURSE_ID;

    if (ENV.COURSE_ID === undefined && document.location.pathname.match("^/courses/([0-9]+)/")) {
        window.eesy_course_id = document.location.pathname.match("^/courses/([0-9]+)/")[1];
    }

    await handleLtiTools()

    handleEesySoftUser();


    function handleLtiTools() {
        return new Promise(respond => {
            var activeLtiId = resolveActiveLtiId(document.location.pathname);

            if (activeLtiId) {
                $.get('/api/v1/accounts/' + ENV.DOMAIN_ROOT_ACCOUNT_ID + '/external_tools/' + activeLtiId, function (toolInfo) {
                    var states = [];
                    if (toolInfo.name !== null) {
                        states.push({name: "ActiveLTIName", value: toolInfo.name});
                        window.GlobalEesy.ActiveLTIName = {value: toolInfo.name, type: "state", source: "page_load"};
                    }

                    if (toolInfo.domain !== null) {
                        states.push({name: "ActiveLTIDomain", value: toolInfo.domain});
                        window.GlobalEesy.ActiveLTIDomain = {
                            value: toolInfo.domain,
                            type: "state",
                            source: "page_load"
                        };
                    }

                    if (states.length > 0) {
                        $.post('//' + cfg.host + '/rest/public/canvasLtiInfo', {
                            states: JSON.stringify(states),
                            lti_id: toolInfo.id,
                            lti_name: toolInfo.name,
                            lti_description: toolInfo.description,
                            lti_url: toolInfo.url,
                            lti_icon: toolInfo.icon_url,
                            lti_launch_new_window: 0
                        });
                    }

                    respond();
                }).error(function () {
                    getLtiDomainFallback(activeLtiId);
                    respond();
                })
            } else {
                respond();
            }
        });
    }


    function getLtiDomainFallback(activeLtiId) {
        if (ENV.LTI_LAUNCH_RESOURCE_URL) {
            var activeLtiDomain = ENV.LTI_LAUNCH_RESOURCE_URL.split("://").slice(-1)[0].split("/")[0]

            var cfg = window.eesyLaunchConfig || {};

            window.GlobalEesy.ActiveLTIDomain = {value: activeLtiDomain, type: "state", source: "page_load"};

            $.post('//' + cfg.host + '/rest/public/canvasLtiInfo', {
                states: JSON.stringify([{name: "ActiveLTIDomain", value: activeLtiDomain}]),
                lti_id: activeLtiId,
                lti_url: ENV.LTI_LAUNCH_RESOURCE_URL.split("?")[0]
            });
        }
    }

    async function handleEesySoftUser() {
        if (ENV.current_user_id === undefined || ENV.current_user_id === null) {
            window.sessionStorage.eesysoft_session_key = undefined;
            window.sessionStorage.eesysoft_active_user_id = undefined;

            if (window['_chatBotReady']) {
                    await window['_chatBotReady'];

                    const lng = await getLng()

                    window['Impact'].init({
                        sessionKey: '',
                        dashboardUrl: `https://${cfg.host}`,
                        languageId: lng.id
                    }, {
                        contextNodePaths: [],
                        contextRulesIds: [],
                        helpItemsFromContexts: []
                    })
            }

            if (launchSettings.supportNonAuthorizedUsers) {
                window.var_delay_login_until_support_requested = true;
                await setNonAuthorizedUserVariables(launchSettings, cfg.host, getNonAuthorizedRoles());
                loadScript(var_dashboard_url + "/loader.js?__bn=" + var_eesy_build);
            }
        } else if ((window.sessionStorage.eesysoft_session_key
            && window.sessionStorage.eesysoft_active_user_id === ENV.current_user_id)
            || $('.is-masquerading-or-student-view').length) {

            launchEesySoft();
        } else {
            if (launchSettings.impactLight) {
                window.var_delay_login_until_support_requested = true;
                await setNonAuthorizedUserVariables(launchSettings, cfg.host, getLightRoles(launchSettings));
                loadScript(var_dashboard_url + "/loader.js?__bn=" + var_eesy_build);
            } else {
                if (await loginUser(launchSettings, getRoles, false)) {
                    launchEesySoft();
                }
            }
        }
    }

    function loginUser(launchSettings, getRolesFunc) {
        return new Promise(respond => {
            const getToken = () => $.post('/api/v1/jwts?workflows[]=impact');

            Promise.all([getToken(), getRolesFunc(launchSettings)]).then(([token, roles]) => {
                var userPrefix = launchSettings.hostAsUserPrefix ? window.location.hostname + '_' : '';

                var params = {
                    token: token.token,
                    userPrefix: userPrefix,
                    locale: ENV.BIGEASY_LOCALE,
                    rolesExtended: JSON.stringify(roles),
                    key: cfg.key
                };

                $.post('//' + cfg.host + "/UserLogin.jsp?", params, function (loginKey) {
                    var eesy_k = loginKey.trim();
                    if (eesy_k != "") {
                        window.sessionStorage.eesysoft_session_key = eesy_k;
                        window.sessionStorage.eesysoft_active_user_id = ENV.current_user_id;
                        window.var_key = eesy_k;

                        respond(true);
                    } else {
                        respond(false);
                    }
                });
            });
        });
    }

    function loginTempUser(launchSettings, getRolesFunc) {
        return new Promise(respond => {
            Promise.all([getRolesFunc(launchSettings)]).then(async ([roles]) => {
                var userPrefix = launchSettings.hostAsUserPrefix ? window.location.hostname + '_' : '';

                var params = {
                    non_authorized: true,
                    userPrefix: userPrefix,
                    locale: ENV.BIGEASY_LOCALE,
                    rolesExtended: JSON.stringify(roles),
                    key: cfg.key,
                    host: window.location.hostname
                };

                loginKey = await $.post('//' + cfg.host + "/UserLogin.jsp?", params);

                $.post('//' + cfg.host + "/UserLogin.jsp?", params, function (loginKey) {
                    var eesy_k = loginKey.trim();
                    if (eesy_k != "") {
                        window.sessionStorage.eesysoft_session_key = eesy_k;
                        window.sessionStorage.eesysoft_active_user_id = ENV.current_user_id;
                        window.var_key = eesy_k;

                        respond(true);
                    } else {
                        respond(false);
                    }
                });
            });
        });



    }


    async function getSessionAccess(launchSettings, roles) {
        var result = {};

        function addAccess(id, type) {
           result["" + id + ":" + type] = {enabled: true, rolename: ""};
        }

        addAccess(-1, 0);
        addAccess(-5, 0);

        var requests = [];
        for (const role of roles) {
            requests.push($.get('//' + cfg.host + '/rest/public/profile?name='
                + role.id + "&profile_type=" + role.type + "&static=true"
                + (role.caption !== undefined ? "&caption=" + role.caption : "")
                + "&__dbc=" + var_eesy_dbUpdateCount));
        }

        Promise.all(requests).then((responses) => {
            for (const response of responses) {
                addAccess(response.id, 1);
                if (response.category != null) {
                    addAccess(response.category, 0);
                }
            }
        });


        return result;
    }

    function getLng() {
        return $.get('//' + cfg.host + '/rest/public/language/id?locale=' + ENV.BIGEASY_LOCALE);
    }

    async function setNonAuthorizedUserVariables(launchSettings, host, roles) {
        window.var_eesy_build = launchSettings.build_number;
        window.var_eesy_dbUpdateCount = launchSettings.dbUpdateCount;
        window.var_eesy_style_checksum = launchSettings.styleChecksum;
        window.var_eesy_sac = await getSessionAccess(launchSettings, roles); //populate
        window.var_dashboard_url = "https://" + host;
        window.var_style_path = "https://" + host + "/resources";
        window.var_key = "";
        window.var_loadfile = "https://" + host + "/loadFile";
        window.var_eesy_userUpdated = undefined;
        window.var_show_tab_initial = true;
        window.var_show_tab = true;
        window.var_uefMode = false;
        window.var_uefModeOriginal = false;
        window.var_uefModeOriginalUseUefSupportCenter = false;
        window.isUefOriginalSupportCenter = false;
        window.var_loadExpertTool = false;
        window.var_isExpertToolChromePlugin = false;
        window.eesyTemplates;
        window.waitforload = false;
        window.supportTabMinimized = undefined;
        window.doNotLoadEngineForUserAgentPattern = 'not_in_use_05231;';


        const getRuntimeSettings = () => $.get('//' + cfg.host + '/rest/public/runtimeSettings?static=true&u='
            + launchSettings.build_number + "&s=" + launchSettings.styleChecksum );

        Promise.all([getLng(), getRuntimeSettings()]).then(([lng, runtimeSettings]) => {
            window.var_language = lng.id;

            window.var_tab_version = runtimeSettings.tabVersion;
            window.var_proactive_version = runtimeSettings.proactiveVersion;
            window.var_proactive_lms = runtimeSettings.proactiveLMS;
            window.var_proactive_dark = runtimeSettings.proactiveDark;
            window.var_open_as_chat = runtimeSettings.openAsChat;
            window.var_moveable_tab = runtimeSettings.movableTab;
            window.scrollbarRightAdjust = runtimeSettings.scrollbarRightAdjust;
            window.supportTabMoveLimit = runtimeSettings.supportTabMoveLimit;
            window.eesy_minimizedTabWidth = runtimeSettings.minimizedTabWidth;
            window.eesy_maximizedTabWidth = runtimeSettings.maximizedTabWidth;
            window.attemptUnobscure = runtimeSettings.attemptUnobscure;
            window.var_eesy_hiddenHelpItems = {};
            window.var_eesy_helpitemsSeen = {};
            window.var_user_map = {}; //populate
            window.var_instance_name = runtimeSettings.instanceName;
        });
    }

    function setRole(roles, role, role_type, caption, parent_id) {
        roles[role] = {
            id: role,
            type: role_type
        };

        if (caption !== undefined) {
            roles[role].caption = caption;
        }

        if (parent_id !== undefined) {
            roles[role].parent_id = parent_id;
        }
    }


    function getRoles(launchSettings) {
        return new Promise(respond => {
            $.get('/api/v1/users/self/courses', function (courses) {
                var accounts = {};
                courses.forEach(function (course) {
                    accounts[course.account_id] = {};
                });

                var requests = [];
                Object.keys(accounts).forEach(function (id) {
                    requests.push($.get('/api/v1/accounts/' + id, function (account) {
                        accounts[id] = {
                            name: account.name,
                            parent_account_id: account.parent_account_id
                        };
                    }));
                });

                $.when.apply($, requests).always(function () {
                    var roles = {};

                    if (launchSettings.hostAsRolePrefix) {
                        setRole(roles, window.location.hostname, 'system');
                    }

                    courses.forEach(function (course) {
                        var rolePrefix = launchSettings.hostAsRolePrefix ? window.location.hostname + '_' : '';
                        var courseAccountId = 'CourseAccountId_' + course.account_id;
                        var fullAccountId = rolePrefix + courseAccountId;

                        if (accounts[course.account_id].name) {
                            setRole(roles, fullAccountId, 'account', accounts[course.account_id].name,
                                rolePrefix + 'CourseAccountId_' + accounts[course.account_id].parent_account_id);
                        } else {
                            setRole(roles, fullAccountId, 'account', undefined,
                                launchSettings.hostAsRolePrefix ? window.location.hostname : undefined);
                        }

                        if (course.enrollments !== undefined) {
                            course.enrollments.forEach(function (enrollment) {
                                setRole(roles, enrollment.type, "role");

                                if (launchSettings.hostAsRolePrefix) {
                                    setRole(roles, accountUuid + '_' + enrollment.type, 'role',
                                        enrollment.type + ' - ' + window.location.hostname, window.location.hostname);
                                }

                                setRole(roles, enrollment.role, "role");
                                setRole(roles, fullAccountId + '_' + enrollment.type, 'course_role',
                                    enrollment.type, fullAccountId);
                               setRole(roles, fullAccountId + '_' + enrollment.role, 'course_role',
                                   enrollment.role, fullAccountId);
                            });
                        }
                    });

                    ENV.current_user_roles.forEach(function (role) {
                        setRole(roles, role, 'role');
                        if (launchSettings.hostAsRolePrefix) {
                            setRole(roles, window.location.hostname + '_' + role, 'host_role',
                                undefined, window.location.hostname);
                            setRole(roles, accountUuid + '_' + role, 'role',
                                role + ' - ' + window.location.hostname, window.location.hostname);
                        }
                    });

                    const rolesMap = Object.keys(roles).map(function (key) {
                        return roles[key];
                    })
                    respond(rolesMap);
                });
            });
        });
    }

    function getNonAuthorizedRoles() {
        var roles = {};

        setRole(roles, "non_authorized", "role");
        setRole(roles, window.location.hostname + '_' + "non_authorized", 'host_role',
            undefined, window.location.hostname);

        setRole(roles, accountUuid + '_' + "non_authorized", 'role',
            "Non Authorized users: " + window.location.hostname, window.location.hostname);

        return Object.keys(roles).map(function (key) {
            return roles[key];
        });
    }


    function getLightRoles(launchSettings) {
        var roles = {};

        setRole(roles, window.location.hostname, 'system');

        ENV.current_user_roles.forEach(function (role) {
            setRole(roles, role, 'role');
            setRole(roles, window.location.hostname + '_' + role, 'host_role',
                undefined, window.location.hostname);
            setRole(roles, accountUuid + '_' + role, 'role',
                role + window.location.hostname, window.location.hostname);
        });

        return Object.keys(roles).map(function (key) {
            return roles[key];
        });
    }


    function launchEesySoft() {
        loadScript('//' + cfg.host + "/loader.jsp"
            + "?stmp=" + new Date().getTime()
            + "&showquicklink=" + cfg.supportTab
            + "&k=" + window.sessionStorage.eesysoft_session_key);
    }

    function loadScript(url) {
        var __eesyEng = document.createElement('script');
        var cfg = window.eesyLaunchConfig || {};

        __eesyEng.src = url;

        __eesyEng.async = true;
        __eesyEng.type = 'text/javascript';

        var __element = document.getElementsByTagName('script')[0];
        __element.parentNode.insertBefore(__eesyEng, __element);
    }

    function resolveActiveLtiId(fromHref) {
        var externalToolGroups = fromHref.match("^/.*/external_tools/(.*)$");

        // get id from path
        if (externalToolGroups !== null) {
            var externalToolId = externalToolGroups[1];

            if (isNaN(externalToolId)) {
                externalToolId = externalToolId.substr(0, externalToolId.indexOf("?"))
            }

            return externalToolId;
        }

        var placementUrl = $("#ext_outcomes_tool_placement_url").val();

        // get id from DOM
        if (placementUrl) {
            var ltiId = placementUrl.substr(placementUrl.lastIndexOf("/") + 1);

            if (!isNaN(ltiId)) return ltiId;
        }

        return undefined;
    }


} ());
