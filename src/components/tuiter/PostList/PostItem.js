import React from "react";

const PostItem = ({
                      post = {
                          name: 'Elon Musk',
                          handle: 'robert_zubrin',
                          date: 'July 4th',
                          title: 'Amazing show about SpaceX mission.',
                          image: 'https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg',
                          heading: 'Countdown : Inspiration 4 - Mission to space',
                          data: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
                      }
                  }) => {
    return(<>
        <div className="wd-bg-color-black wd-border-solid" align="left">


            <img className="wd-padding-top wd-bookmark-img"
                 src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg" alt="spaceX"/>

            <span className="wd-padding-left-12 wd-author-name">{post.name}</span><i className="fas fa-check-circle"></i>
            <span className="wd-padding-left-12 wd-author-handle">@{post.handle}</span>
            <span className="wd-padding-left-12 wd-author-handle">{post.date}</span>

            <p className="wd-bookmark-para">{post.title}</p>
            <div className="wd-round-border">
                <img className="wd-padding-top wd-bookmark-big-img wd-rounded-corners-all-around"
                src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg" alt="spaceX"/>

                <p className="wd-bookmark-para"><b>{post.heading}</b></p>
                <p className="wd-bookmark-para-body">{post.data}</p>
            </div>
            <div>
                <a className="wd-icon-lightgray wd-padding-left-64" href="templink.html">
                    <span><i className="far fa-comment"></i></span> <span className="wd-padding-left-12">12</span>
                </a>
                <a className="wd-icon-lightgray wd-padding-left-64" href="templink.html">
                    <i className="fas fa-retweet"></i> <span className="wd-padding-left-12">12</span>
                </a>
                <a className="wd-icon-red wd-padding-left-64" href="templink.html">
                    <i className="fas fa-heart"></i><span className="wd-padding-left-12">12</span>
                </a>
                <a className="wd-icon-lightgray wd-padding-left-64" href="templink.html">
                    <i className="fas fa-upload"></i><span className="wd-padding-left-12">12</span>
                </a>
            </div>



            </div>
    </>);
}
export default PostItem;