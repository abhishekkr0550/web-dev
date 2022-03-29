import React from "react";
import TuitListItem from "./tuit-list-item";
import {useSelector} from "react-redux";

const TuitList = () => {

    const tuits = useSelector(
        state => state.tuits);

    return(
        <div className="row">

            {

                tuits.map(post => {
                    return(
                        <TuitListItem post={post} />
                    );
                })
            }

        </div>
    );
}

export default TuitList;

