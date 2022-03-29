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


            <div className="row mt-2">

                <div style={{"position": "relative"}}>
                    <ExploreComponent/>
                </div>

            </div>
    );
};
export default ExploreScreen;
