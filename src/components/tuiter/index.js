import React from "react";
import {Link} from "react-router-dom";
import HomeScreen from "./HomeScreen/HomeScreen";

const Tuiter = () => {
    return(
        <>

            <HomeScreen/>
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
