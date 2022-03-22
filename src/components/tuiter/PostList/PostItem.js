import React from "react";

const PostItem = () => {
    return(<>
    <div className="row">
        <div className="wd-bg-color-black wd-border-solid" align="left">


            <img className="wd-padding-top wd-bookmark-img"
                 src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"/>

            <span className="wd-padding-left-12 wd-author-name">Elon Musk</span><i className="fas fa-check-circle"></i>
            <span className="wd-padding-left-12 wd-author-handle">@robert_zubrin</span>
            <span className="wd-padding-left-12 wd-author-handle">July 4th</span>

            <p className="wd-bookmark-para">Amazing show about SpaceX mission.</p>
            <div className="wd-round-border">
                <img className="wd-padding-top wd-bookmark-big-img wd-rounded-corners-all-around {"
                src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"/>

                <p className="wd-bookmark-para"><b>Countdown : Inspiration 4 - Mission to space</b></p>
                <p className="wd-bookmark-para-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a chance.</p>
            </div>
            <div>
                <a className="wd-icon-lightgray wd-padding-left-64" href="#">
                    <span><i className="far fa-comment"></i></span> <span className="wd-padding-left-12">12</span>
                </a>
                <a className="wd-icon-lightgray wd-padding-left-64" href="#">
                    <i className="fas fa-retweet"></i> <span className="wd-padding-left-12">12</span>
                </a>
                <a className="wd-icon-red wd-padding-left-64" href="#">
                    <i className="fas fa-heart"></i><span className="wd-padding-left-12">12</span>
                </a>
                <a className="wd-icon-lightgray wd-padding-left-64" href="#">
                    <i className="fas fa-upload"></i><span className="wd-padding-left-12">12</span>
                </a>
            </div>

            <div className="wd-bg-color-black wd-border-solid wd-padding-left-16">


                <img className="wd-padding-top wd-bookmark-img rounded-circle"
                     src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"/>

                <span className="wd-padding-left-12 wd-author-name">Sundar Pichai</span><i className="fas fa-check-circle"></i>
                <span className="wd-padding-left-12 wd-author-handle">@sundar_pichai</span>
                <span className="wd-padding-left-12 wd-author-handle">July 4th</span>

                <p className="wd-bookmark-para">Amazing show about SpaceX mission.</p>
                <div className="wd-round-border">
                    <img className="wd-padding-top wd-bookmark-big-img wd-rounded-corners-all-around {"
                    src="../../images/react.png"/>

                    <p className="wd-bookmark-para"><b>Countdown : Inspiration 4 - Mission to space</b></p>
                    <p className="wd-bookmark-para-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a chance.</p>
                </div>
                <div>
                    <a className="wd-icon-lightgray wd-padding-left-64" href="#">
                        <i className="far fa-comment"></i><span className="wd-padding-left-12">12</span>
                    </a>
                    <a className="wd-icon-lightgray wd-padding-left-64" href="#">
                        <i className="fas fa-retweet"></i><span className="wd-padding-left-12">12</span>
                    </a>
                    <a className="wd-icon-red wd-padding-left-64" href="#">
                        <i className="fas fa-heart"></i><span className="wd-padding-left-12">12</span>
                    </a>
                    <a className="wd-icon-lightgray wd-padding-left-64" href="#">
                        <i className="fas fa-upload"></i><span className="wd-padding-left-12">12</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
    </>);
}
export default PostItem;