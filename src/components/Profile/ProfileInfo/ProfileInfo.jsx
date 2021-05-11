import React, { useState } from 'react';
import Preloader from '../../common/Preloader/Preloader';
import classes from './ProfileInfo.module.scss';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/user.png';
import ProfileDataForm from './ProfileDataForm';
import Contact from './Contact';
import Button from '../../common/Button/Button';

const ProfileInfo = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  saveProfile,
}) => {
  const [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (event) => {
    if (event.target.files.length) {
      savePhoto(event.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };

  return (
    <div>
      <div className={classes.descriptionBlock}>
        <h3 className={classes.descriptionBlock__title}>{profile.fullName}</h3>
        <div>
          <div>
            <img
              src={profile.photos.large || userPhoto}
              className={classes.descriptionBlock__imgUser}
              alt='user-img'
            />
            {isOwner && <input className={classes.descriptionBlock__changeAvaInput} type={'file'} onChange={onMainPhotoSelected} />}
          </div>

          {editMode 
            ? <ProfileDataForm
              initialValues={profile}
              profile={profile}
              onSubmit={onSubmit}
            /> 
            : <ProfileData
              goToEditMode={() => {
                setEditMode(true);
              }}
              profile={profile}
              isOwner={isOwner}
            />
          }

          <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </div>
      </div>
    </div>
  );
};

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <>
      <div className={classes.descriptionBlock__about}>
        {isOwner && <Button onClick={goToEditMode}>Edit</Button>}
        <p>About me: {profile.aboutMe}</p>
        {profile.lookingForAJob 
          ? <p>I'm looking for a job</p>
          : <span>&#128526;</span>
        }
        <p>My professional skills: {profile.lookingForAJobDescription}</p>
      </div>
      <div className={classes.descriptionBlock__contacts}>
        <h3>Find me here</h3>
        {Object.keys(profile.contacts).map((key) => (
          <Contact
            key={key}
            contactTitle={key}
            contactValue={profile.contacts[key]}
          />
        ))}
      </div>
    </>
  );
};

export default ProfileInfo;
