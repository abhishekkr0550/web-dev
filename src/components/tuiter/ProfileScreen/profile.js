import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";


const ProfileComp = () => {

    const profile = useSelector(state => state.profile);
    return(
<>
            <div className="pos-relative" >
                <h4 className="text-start" >{profile.firstName} {profile.lastName}</h4>
                <h6 className="text-start" style={{color:"gray"}}>{profile.tuits} Tuits</h6>
                <img className="wd-padding-top wd-banner-image"
                     src={profile.bannerPicture} alt="spaceX"/>
                <img className="wd-padding-top wd-profile-image rounded-circle"
                     src={profile.profilePicture} alt="spaceX"/>
            </div>
            <div className="row-2" style={{height:"23%"}}>
                <Link to="/tuiter/editprofile">
                    <button className="btn btn-primary-black rounded-pill float-end mt-3 wd-button-border">

                            Edit Profile

                    </button>
                </Link>
            </div>
            <div className="pos-relative pt-5 float-left" align="left">
                <h4 className="text-start" >{profile.firstName} {profile.lastName}</h4>
                <div className="wd-author-handle float-start">
                    @{profile.handle}</div><br></br>
                {/*{JSON.stringify(profile)}*/}

                <div className="pos-relative pt-3 pb-2">{profile.bio}</div>

                <div className="float-left mt-2 " align="left">
                    <span className="wd-text-gray"><i className="fas fa-map-marker-alt"></i></span>
                    <span className="ms-2 wd-text-gray">{profile.location}</span>
                    <span className="ms-5 wd-text-gray"><i className="fas fa-birthday-cake"></i> </span>
                    <span className="ms-2 wd-text-gray">{profile.dateOfBirth}</span>
                    <span className="ms-5 wd-text-gray"><i className="fas fa-calendar-alt"></i> </span>
                    <span className="ms-2 wd-text-gray">{profile.dateJoined}</span>

                </div>
                <div className="text-start mt-3">
                    <span >{profile.followingCount}</span>
                    <span className="ms-2 wd-text-gray">Following</span>
                    <span className="ms-5">{profile.followersCount}</span>
                    <span className="ms-2 wd-text-gray">Followers</span>


                </div>
                <div className="text-start mt-3">
                    <span >{profile.website}</span>
                </div>

            </div>
</>


    );
}
export default ProfileComp;
