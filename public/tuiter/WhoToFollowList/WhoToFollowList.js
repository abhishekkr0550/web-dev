import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
    return(`

            <div class="ms-1 me-1">
                <ul class="list-group">
                ${
                    who.map(w => {
                        return(WhoToFollowListItem(w));
                    }).join('')
        }
                </ul>
         </div>
    `);
}
export default WhoToFollowList;