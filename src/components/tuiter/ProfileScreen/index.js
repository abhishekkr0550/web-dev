import {Provider} from "react-redux";
import NavigationSidebar from "../navigation-sidebar";
import ProfileComp from "./profile";
import profileReducer from "../reducers/profile-reducer";
import {combineReducers, createStore} from "redux";
import tuitsReducer from "../reducers/tuits-reducer";
import whoReducer from "../reducers/who-reducer";

const reducer = combineReducers({
    profile: profileReducer, tuits: tuitsReducer
});

const store = createStore(reducer);

const ProfileScreen = () => {
    console.log("Profile");

    return (
        <Provider store={store}>
            <div className="row mt-2">
                <div className="col-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="profile"/>
                </div>
                <div className="col-10 col-lg-11 col-xl-10">
                    {/*<Outlet/>*/}
                    <ProfileComp/>
                </div>


            </div>
        </Provider>
    );
};
export default ProfileScreen;