import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = ({
                               active = 'explore'
                           }) => {
    return(<>
            <div className="list-group" align="left"  >
                <Link to="/" className="list-group-item">
                    <i className="fab fa-twitter" ></i>
                </Link>
                <Link to="/tuiter/home" className={`list-group-item list-group-item-action ${active === 'home' ? 'active' : ''}`} aria-current="true">
                    <i className="fa fa-home"></i>
                    <span className="ps-2 d-none d-xl-inline d-xxl-inline">Home</span>
                </Link>
                <Link to="/tuiter/explore" className={`list-group-item list-group-item-action ${active === 'explore' ? 'active' : ''}`}>
                    <i className="fa fa-hashtag"></i>
                    <span className="ps-2 d-none d-xl-inline d-xxl-inline">Explore</span>
                </Link>
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



