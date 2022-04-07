import React, {useEffect} from "react";
import TuitListItem from "./tuit-list-item";
import {useDispatch, useSelector} from "react-redux";
import {findAllTuits}
    from "../../actions/tuits-actions";

const TuitList = () => {

    const tuits = useSelector(
        state => state.tuits);

    // const [newTuit, setNewTuit] =
    //     useState({tuit: 'New tuit'});

    const dispatch = useDispatch();

    useEffect(() =>
            findAllTuits(dispatch),
        [dispatch]
        );

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

