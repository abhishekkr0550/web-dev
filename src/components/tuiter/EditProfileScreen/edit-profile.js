import React, {useState} from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";



const EditProfile = () => {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.profile);
    const [profileChange, setProfileChange] = useState(profile);

    const todoChangeFirstName = (event) => {
        const name = event.target.value;
        const newProfile = {
            ... profileChange,
            firstName: name
        };
        setProfileChange(newProfile);
    }

    const todoChangeLastName = (event) => {
        const name = event.target.value;
        const newProfile = {
            ... profileChange,
            lastName: name
        };
        setProfileChange(newProfile);
    }

    const assertChanges = (event) => {
        dispatch({type: 'change-profile', profileChange})
    }

    return(
        <>
        <div className="pos-relative" >
            <span className="text-start float-start" >Edit Profile</span>
            <span>
                <Link to="/tuiter/profile">
                    <button className="btn btn-primary-white rounded-pill float-end mt-3 " onClick={assertChanges}>

                        Save

                    </button>
                </Link>
            </span>
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
            <div className="pos-relative float-left" align="left">
                <h5>First Name</h5>

                <input value={profileChange.firstName} onChange={todoChangeFirstName} className="form-control"/><br/>
                <h4>Last Name</h4>
                <input value={profileChange.lastName} onChange={todoChangeLastName} className="form-control"/>
                <div className="wd-author-handle float-start">
                    @{profile.handle}</div><br></br>
                {/*{JSON.stringify(profile)}*/}

                <div>{profile.bio}</div>

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


            </div>
            </>
    );
}

export default EditProfile