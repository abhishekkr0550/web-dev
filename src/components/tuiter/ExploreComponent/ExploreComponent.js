import React from "react";

import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(
        <>

            <div className="row">
                <div className="mt-1 mb-3 input-icons">
                    <i className="fas fa-search ms-3 mt-2"></i>

                    <input className="wd-search-color-gray wd-rounded-corners-all-around wd-margin-left ps-4 rounded-pill" id="text-fields-search" placeholder="Search Tuiter"/>
                    <a className="wd-margin-right wd-float-right mt-1" href="explore-settings.html">    <i className="fa fa-cog"></i>
                    </a>
                </div>
                <div className="mb-1">
                    <a className="wd-margin-left wd-color-font-selected wd-padded-top-left-bottom wd-padded-right"  href="explore-settings.html">For You</a>
                    <a className="wd-color-font wd-padded-top-left-bottom wd-padded-right" href="explore-settings.html">Trending</a>
                    <a className="wd-color-font wd-padded-top-left-bottom wd-padded-right" href="explore-settings.html">COVID-19</a>
                    <a className="wd-color-font wd-padded-top-left-bottom wd-padded-right" href="explore-settings.html">News</a>
                    <a className="wd-color-font wd-padded-top-left-bottom wd-padded-right" href="explore-settings.html">Sports</a>
                    <a className="wd-color-font wd-padded-top-left-bottom wd-padded-right" href="explore-settings.html">Entertainment</a> <br></br><br></br>
                </div>
           </div>
           <ul className="nav mb-2 nav-tabs">
           </ul>
           <img src="../../images/spacex.jpeg" alt="image"
                             width="90%"/>

           <div className="bottom-left">Space X's Starship</div>


            <PostSummaryList/>

    </>);
}

export default ExploreComponent;
