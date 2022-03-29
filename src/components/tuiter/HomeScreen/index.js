import TuitList from "../tuit-list";
import React from "react";
import WhatsHappening from "./whats-happening";

const HomeScreen = () => {
    return(
        <div className="row mt-2">
            <WhatsHappening/>

            <TuitList/>


        </div>
    );
};

export default HomeScreen;