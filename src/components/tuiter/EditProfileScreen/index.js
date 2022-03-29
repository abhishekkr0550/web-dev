import {Provider} from "react-redux";
import NavigationSidebar from "../navigation-sidebar";
import profileReducer from "../reducers/profile-reducer";
import {combineReducers, createStore} from "redux";
import tuitsReducer from "../reducers/tuits-reducer";
import whoReducer from "../reducers/who-reducer";
import EditProfile from "./edit-profile";

const reducer = combineReducers({
    profile: profileReducer, tuits: tuitsReducer
});

const store = createStore(reducer);

const EditProfileScreen = () => {
    console.log("Profile");
    return (
        <Provider store={store}>
            <div className="row mt-2">
                <div className="col-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="profile"/>
                </div>
                <div className="col-10 col-lg-11 col-xl-10">
                    <EditProfile/>
                </div>


            </div>
        </Provider>
    );
};
export default EditProfileScreen;