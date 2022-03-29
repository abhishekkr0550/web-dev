import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
    const who = useSelector((state) => state.who);
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