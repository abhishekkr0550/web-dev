import React from "react";
import who from "./who.json";
import WhoToFollowListItem from "./WhoToFollowListItem";

const WhoToFollowList = () => {
    return(

            <div className="ms-1 me-1">
                <ul className="list-group">
                {
                    who.map(w => {
                        return(
                            <WhoToFollowListItem w={w}/>
                    );
                    })
        }
                </ul>
         </div>
    );
}
export default WhoToFollowList;