import React from "react";

const NavigationSidebar = () => {
    return(<>
            <div className="list-group" >
                <a className="list-group-item" href="/" >
                    <i className="fab fa-twitter" ></i>
                </a>
                <a href="../HomeScreen/home.html" className="list-group-item list-group-item-action" aria-current="true">
                    <i className="fa fa-home"></i>
                    <span className="ps-2 d-none d-xl-inline d-xxl-inline">Home</span>
                </a>
                <a href="../ExploreScreen/explore.html" className="list-group-item list-group-item-action active">
                    <i className="fa fa-hashtag"></i>
                    <span className="ps-2 d-none d-xl-inline d-xxl-inline">Explore</span>
                </a>
                <a href="../notifications.html" className="list-group-item list-group-item-action">
                    <i className="fa fa-bell"></i><span className="ps-2 d-none d-xl-inline d-xxl-inline">Notifications</span> </a>
                <a href="#" className="list-group-item list-group-item-action">
                    <i className="fa fa-envelope"></i><span className="ps-2 d-none d-xl-inline d-xxl-inline">Messages</span> </a>
                <a href="../bookmarks.html" className="list-group-item list-group-item-action">
                    <i className="fa fa-bookmark"></i><span className="ps-2 d-none d-xl-inline d-xxl-inline">Bookmark</span>  </a>
                <a href="../lists.html" className="list-group-item list-group-item-action">
                    <i className="fa fa-list"></i> <span className="ps-2 d-none d-xl-inline d-xxl-inline">List</span> </a>
                <a href="../profile.html" className="list-group-item list-group-item-action">
                    <i className="fa fa-user"></i><span className="ps-2 d-none d-xl-inline d-xxl-inline">Profile</span> </a>
                <a href="#" className="list-group-item list-group-item-action">
                    <i className="fa fa-chart-bar"></i>  <span className="ps-2 d-none d-xl-inline d-xxl-inline">More</span> </a>
            </div>

            <div className="d-grid mt-2">
                <a href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
        </>
    );
}
export default NavigationSidebar;



