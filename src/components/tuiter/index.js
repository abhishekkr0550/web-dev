import React from "react";
import {Link} from "react-router-dom";
import ExploreScreen from "./explore-screen/explore-screen";

const Tuiter = () => {
    return(
        <>

            <ExploreScreen/>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/">
                Labs
            </Link>
        </>

    )
};

export default Tuiter;
