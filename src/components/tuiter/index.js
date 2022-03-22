import React from "react";
import {Link} from "react-router-dom";
import ExploreScreen from "./explore-screen/explore-screen";
import PostItem from "./PostList/PostItem";
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
