import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import classes from './ProfileInfo.module.scss';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/user.png';

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (event) => {
    if (event.target.files.length) {
      savePhoto(event.target.files[0])
    }
  }

  return (
    <div>
      <div className={classes.descriptionBlock}>
        <h3 className={classes.descriptionBlock__title}>
          Hello, {profile.fullName}
        </h3>
        <div>
          <img
            src={profile.photos.large || userPhoto}
            className={classes.descriptionBlock__imgUser}
            alt='user-img'
          />
          { isOwner && <input type={'file'} onChange={onMainPhotoSelected} /> }
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </div>
        <div className={classes.descriptionBlock__about}>
          <p>About me: {profile.aboutMe}</p>
          {profile.lookingForAJob ? (
            <p>I'm looking for a job</p>
          ) : (
            <span>&#128526;</span>
          )}
          <p>Job Description: {profile.lookingForAJobDescription}</p>
        </div>
        <div className={classes.descriptionBlock__contacts}>
          <h3>Find me here</h3>
          {profile.contacts.facebook ? <p>{profile.contacts.facebook}</p> : ''}
          {profile.contacts.website ? <p>{profile.contacts.website}</p> : ''}
          {profile.contacts.vk ? <p>{profile.contacts.vk}</p> : ''}
          {profile.contacts.twitter ? <p>{profile.contacts.twitter}</p> : ''}
          {profile.contacts.instagram ? (
            <p>{profile.contacts.instagram}</p>
          ) : (
            ''
          )}
          {profile.contacts.youtube ? <p>{profile.contacts.youtube}</p> : ''}
          {profile.contacts.github ? <p>{profile.contacts.github}</p> : ''}
          {profile.contacts.mainLink ? <p>{profile.contacts.mainLink}</p> : ''}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
