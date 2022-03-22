import NavigationSidebar from "../NavigationSidebar/NavigationSidebar.js";
import ExploreComponent from "../PostSummaryList/ExploreComponent.js";
import PostItem from "../PostList/PostItem.js";



(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
            <div class="col-2 col-md-2 col-lg-1 col-xl-2">
                ${NavigationSidebar()}
            </div>
            <div class="col-10 col-md-10 col-lg-7 col-xl-6">
                ${PostItem()}
            </div>
            <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                ${ExploreComponent()}
            </div>

        </div>
    `);
})($);