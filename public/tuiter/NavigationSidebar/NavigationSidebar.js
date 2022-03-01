const NavigationSidebar = () => {
    return(`
            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="../home.html" class="list-group-item list-group-item-action" aria-current="true">
                    <i class="fa fa-home"></i>&nbsp
                    <span class="d-none d-xl-inline d-xxl-inline">Home</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action active">
                    <i class="fa fa-hashtag"></i>&nbsp
                    <span class="d-none d-xl-inline d-xxl-inline">Explore</span>
                </a>
                <a href="../notifications.html" class="list-group-item list-group-item-action">
                    <i class="fa fa-bell"></i>&nbsp<span class="d-none d-xl-inline d-xxl-inline">Notifications</span> </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <i class="fa fa-envelope"></i>&nbsp<span class="d-none d-xl-inline d-xxl-inline">Messages</span> </a>
                <a href="../bookmarks.html" class="list-group-item list-group-item-action">
                    <i class="fa fa-bookmark"></i>&nbsp<span class="d-none d-xl-inline d-xxl-inline">Bookmark</span>  </a>
                <a href="../lists.html" class="list-group-item list-group-item-action">
                    <i class="fa fa-list"></i> &nbsp<span class="d-none d-xl-inline d-xxl-inline">List</span> </a>
                <a href="../profile.html" class="list-group-item list-group-item-action">
                    <i class="fa fa-user"></i>&nbsp<span class="d-none d-xl-inline d-xxl-inline">Profile</span> </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <i class="fa fa-chart-bar"></i>&nbsp<span class="d-none d-xl-inline d-xxl-inline">More</span> </a>
            
            <!-- continue the rest of the list -->
            </div>
            <br>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;



