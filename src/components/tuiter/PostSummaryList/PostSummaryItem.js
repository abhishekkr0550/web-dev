import React from "react";

const PostSummaryItem = ({
                             post = {
                                 topic: 'Web Development',
                                 userName: 'ReactJS',
                                 time: '2h',
                                 title: 'React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs',
                                 image: '../../images/react.png'
                             }
                         }) => {
            return(
                <>
                <a classNameName="list-group-item" aria-current="true" align="left" href="templink.html">
                    <p classNameName="wd-p-white">
                        {post.topic}
                        <img className="wd-author-img float-end wd-rounded-corners-all-around wd-image-margin-right"
                             src={post.image} alt="image" width="80px"/>
                    </p>
                    <p className="wd-p-white-small ">{post.userName} <i className="fas fa-check-circle"></i></p>


                    <p className="wd-p-gray-font">
                        {post.title}

                    </p>

                </a>
                    <hr className="wd-hr-border"></hr>

                </>
                );
}
export default PostSummaryItem;


