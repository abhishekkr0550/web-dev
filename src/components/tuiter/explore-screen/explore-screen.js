import React from "react";
import NavigationSidebar from "../navigation-sidebar";
import ExploreComponent from "../ExploreComponent/ExploreComponent";
import WhoToFollowList from "../WhoToFollowList";
import whoReducer from "../reducers/who-reducer";
import tuitsReducer from "../reducers/tuits-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";

const reducer = combineReducers({
    tuits: tuitsReducer, who: whoReducer
});
const store = createStore(reducer);

const ExploreScreen = () => {
    return(
        <Provider store={store}>


            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="explore"/>
                </div>
                <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                     style={{"position": "relative"}}>
                    <ExploreComponent/>
                </div>
                <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>
            </div>
        </Provider>
    );
};
export default ExploreScreen;
