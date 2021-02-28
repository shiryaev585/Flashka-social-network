import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import classes from "./ProfileInfo.module.scss";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  };

  return (
    <div>
      <div>
        <img
          className={classes.imgBg}
          src="https://s3-us-west-2.amazonaws.com/truevirtualtours.com/public/cache/user_5623/Panorama/34751/1280x600/Panorama_34751.jpg"
          alt="img"
          height="400px"
        />
      </div>
      <div className={classes.descriptionBlock}>
        <div>
            <h3>Hi! I'm {props.profile.fullName}</h3>
            <img src={props.profile.photos.large} className={classes.imgUser} />
        </div>
        <div>
            <p>About me: {props.profile.aboutMe}</p>
            {props.profile.lookingForAJob ? <p>I'm looking for a job</p> : <span>&#128526;</span>}
            <p>Job Description: {props.profile.lookingForAJobDescription}</p>
        </div>
        <div className={classes.contacts}>
            <h3>Find me here</h3>
            {props.profile.contacts.facebook ? <p>{props.profile.contacts.facebook}</p> : ''}
            {props.profile.contacts.website ? <p>{props.profile.contacts.website}</p> : ''}
            {props.profile.contacts.vk ? <p>{props.profile.contacts.vk}</p> : ''}
            {props.profile.contacts.twitter ? <p>{props.profile.contacts.twitter}</p> : ''}
            {props.profile.contacts.instagram ? <p>{props.profile.contacts.instagram}</p> : ''}
            {props.profile.contacts.youtube ? <p>{props.profile.contacts.youtube}</p> : ''}
            {props.profile.contacts.github ? <p>{props.profile.contacts.github}</p> : ''}
            {props.profile.contacts.mainLink ? <p>{props.profile.contacts.mainLink}</p> : ''}
        </div>
      </div>
      
    </div>
  );
};

export default ProfileInfo;
