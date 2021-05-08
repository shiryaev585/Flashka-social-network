import React from 'react';
import { reduxForm } from 'redux-form';
import { createField, Input, Textarea } from '../../common/FormsControls/FormsControls';
import Contact from './Contact';
import classes from './ProfileInfo.module.scss';

const ProfileDataForm = ({ profile, handleSubmit }) => {
    return (
      <form onSubmit={handleSubmit}>
        <div className={classes.descriptionBlock__about}>
        <button>save</button>
        <p>Full name: {createField('Full name', 'fullName', [], Input)}</p> 
        <p>About me: {profile.aboutMe}
        {createField('About me', 'aboutMe', [], Textarea)}</p>
        <p>Looking for a job: {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}</p>
        <p>My professional skills: </p>
        {createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
      </div>
      <div className={classes.descriptionBlock__contacts}>
        <h3>Find me here</h3>
        {/* {Object.keys(profile.contacts).map((key) => (
          <Contact
            key={key}
            contactTitle={key}
            contactValue={profile.contacts[key]}
          />
        ))} */}
      </div>
      </form>
    );
  };

  const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

  export default ProfileDataFormReduxForm;