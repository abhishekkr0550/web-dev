import React from "react";
import {deleteTuit}
    from "../../actions/tuits-actions";

import {useDispatch} from "react-redux";
import TuitStats from "./tuit-stats";

const TuitListItem = ({
                      post = {
                          name: 'Elon Musk',
                          handle: 'robert_zubrin',
                          date: 'July 4th',
                          title: 'Amazing show about SpaceX mission.',
                          heading: 'Countdown : Inspiration 4 - Mission to space',
                          data: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
                      }
                  }) => {
    const dispatch = useDispatch();

    // const deleteTuit = (post) => {
    //
    //     dispatch({type: 'delete-tuit', post})
    // };

    return(<>
        <div className="wd-bg-color-black wd-border-solid" align="left">


            <img className="wd-padding-top wd-bookmark-img"
                 src={post.profile} alt="spaceX"/>

            <span className="wd-padding-left-12 wd-author-name">{post.name}</span><i className="fas fa-check-circle"></i>
            <span className="wd-padding-left-12 wd-author-handle">@{post.handle}</span>
            <span className="wd-padding-left-12 wd-author-handle">{post.date}</span>
            <span className="wd-padding-left-12 wd-author-handle float-end"><i onClick={() => deleteTuit(dispatch, post)} className="fas fa-times"></i></span>
            <p className="wd-bookmark-para">{post.title}</p>
            <div className="wd-round-border">
                <img className="wd-padding-top wd-bookmark-big-img wd-rounded-corners-all-around"
                     src={post.image} alt="spaceX"/>

                <p className="wd-bookmark-para"><b>{post.heading}</b></p>
                <p className="wd-bookmark-para-body">{post.data}</p>
            </div>
            <div>
                <a className="wd-icon-lightgray wd-padding-left-64" href="templink.html">
                    <span><i className="far fa-comment"></i></span> <span className="wd-padding-left-12">{post.coment}</span>
                </a>
                <a className="wd-icon-lightgray wd-padding-left-64" href="templink.html">
                    <i className="fas fa-retweet"></i> <span className="wd-padding-left-12">{post.retuit}</span>
                </a>
                <span className="wd-icon-lightgray wd-padding-left-64" >
                    <TuitStats post={post}/>
                </span>
                <a className="wd-icon-lightgray wd-padding-left-64" href="templink.html">
                    <i className="fas fa-upload"></i><span className="wd-padding-left-12">{post.upload}</span>
                </a>
            </div>



        </div>
    </>);
}
export default TuitListItem;