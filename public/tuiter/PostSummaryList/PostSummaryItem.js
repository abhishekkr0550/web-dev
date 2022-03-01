const PostSummaryItem = (post) => {
    console.log(post.image);
    return(`

        
                <li class="list-group-item" aria-current="true" align="left">
                    <p class="wd-p-white">
                        ${post.topic}
                        <img class="wd-author-img float-end wd-rounded-corners-all-around wd-image-margin-right"
                             src=${post.image} />
                    </p>
                    <p class="wd-p-white-small ">${post.userName} <i class="fas fa-check-circle"></i></p>
                    
                    
                    <p class="wd-p-gray-font">
                        ${post.title}.
                    
                    </p>
                    <hr class="wd-hr-border">
                    
                </li>
    `);
}
export default PostSummaryItem;


