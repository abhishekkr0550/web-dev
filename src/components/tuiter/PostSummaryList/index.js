import React from "react";
import posts from "./posts.json";
import PostSummaryItem from "./PostSummaryItem";

const PostSummaryList = () => {
    return(
        <div className="ms-1 me-1">
            <ul className="list-group">
                    {

                    posts.map(post => {
                        return(
                            <PostSummaryItem post={post} />
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default PostSummaryList;

