import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {
    updateTuit} from "../../actions/tuits-actions";

const TuitStats = ({post}) => {

    const [newTuit, setNewTuit] =
        useState({tuit: 'New tuit'});

    const dispatch = useDispatch();

    // const likeTuit = () => {
    //     dispatch({type: 'like-tuit', post});
    // };
    return (
        <>
    <span onClick={() => updateTuit(dispatch, {
        ...post,
        likes: post.likes + 1
    })}>
    {
        post.liked &&
        <i className="fas fa-heart me-1 wd-padding-right-12"
           style={{color: 'red'}}></i>
    }
        {
            !post.liked &&
            <i className="far fa-heart me-1 wd-padding-right-12"></i>
        }

        {post.likes}
    </span>


    <span className="ps-4" onClick={() => updateTuit(dispatch, {
        ...post,
        dislikes: post.dislikes - 1
    })}>
    {
        post.liked &&
        <i className="fas fa-thumbs-down me-1 wd-padding-right-12"
           style={{color: 'red'}}></i>
    }
        {
            !post.liked &&
            <i className="far fa-thumbs-down me-1 wd-padding-right-12"></i>
        }

        {post.dislikes}
    </span>
    </>
);
}
export default TuitStats;