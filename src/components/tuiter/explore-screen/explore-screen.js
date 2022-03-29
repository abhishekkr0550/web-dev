import React from "react";
import ExploreComponent from "../ExploreComponent/ExploreComponent";
import whoReducer from "../reducers/who-reducer";
import tuitsReducer from "../reducers/tuits-reducer";
import {combineReducers, createStore} from "redux";

const reducer = combineReducers({
    tuits: tuitsReducer, who: whoReducer
});

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
