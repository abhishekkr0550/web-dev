import React from "react";
import {useSelector} from "react-redux";


const ProfileComp = () => {

    const profile = useSelector(state => state.profile);
    return(
<>
            <div className="pos-relative" style={{height:"200px"}}>
                <img className="wd-padding-top wd-banner-image"
                     src={profile.bannerPicture} alt="spaceX"/>
                <img className="wd-padding-top wd-profile-image rounded-circle"
                     src={profile.profilePicture} alt="spaceX"/>
            </div>
            {/*<div className="row-2" style={{height:"23%"}}>*/}

            {/*</div>*/}
            <div className="pos-relative">
                <h4 className="float-start" >{profile.firstName} {profile.lastName}</h4>
                <div className="wd-author-handle float-start">
                        @{profile.handle}</div>
                {/*{JSON.stringify(profile)}*/}
            </div>
</>


    );
}
export default ProfileComp;
