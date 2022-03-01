import posts from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                <div class="mt-1 mb-3 input-icons"">
                        <i class="fas fa-search ms-3 mt-2"></i>

                        <input class="wd-search-color-gray wd-rounded-corners-all-around wd-margin-left ps-4 rounded-pill" id="text-fields-search" placeholder="Search Tuiter"/>
                        <a class="wd-margin-right wd-float-right mt-1" href="explore-settings.html">    <i class="fa fa-cog"></i>
                        </a>
                    </div>
                    <div class="mb-1">
                        <a class="wd-margin-left wd-color-font-selected wd-padded-top-left-bottom wd-padded-right"  href="explore-settings.html">For You</a>
                        <a class="wd-color-font wd-padded-top-left-bottom wd-padded-right" href="explore-settings.html">Trending</a>
                        <a class="wd-color-font wd-padded-top-left-bottom wd-padded-right" href="explore-settings.html">COVID-19</a>
                        <a class="wd-color-font wd-padded-top-left-bottom wd-padded-right" href="explore-settings.html">News</a>
                        <a class="wd-color-font wd-padded-top-left-bottom wd-padded-right" href="explore-settings.html">Sports</a>
                        <a class="wd-color-font wd-padded-top-left-bottom wd-padded-right" href="explore-settings.html">Entertainment</a> <br><br>
                    </div>       <!-- search field and cog -->
           </div>
           <ul class="nav mb-2 nav-tabs">
                      <!-- tabs -->
           </ul>
           <img src="../../images/spacex.jpeg"
                             width="90%"/>
           
           <div class="bottom-left">Space X's Starship</div>
           
           <ul>
           <br> 
           ${
        posts.map(post => {
            return(PostSummaryItem(post));
        }).join('')
    }
           </ul>
           
    `);
}
export default ExploreComponent;
