import React from "react";
import posts from "./postitems.json";
import PostItem from "./PostItem";

const PostItemList = () => {
    return(
        <div className="row">


                {

                    posts.map(post => {
                        return(
                            <PostItem post={post} />
                        );
                    })
                }

        </div>
    );
}

export default PostItemList;

