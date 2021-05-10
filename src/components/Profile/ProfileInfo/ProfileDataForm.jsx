import React from 'react';
import { reduxForm } from 'redux-form';
import {
  createField,
  Input,
  Textarea,
} from '../../common/FormsControls/FormsControls';
import classes from './ProfileInfo.module.scss';
import classesError from '../../common/FormsControls/FormsControls.module.scss';

const ProfileDataForm = ({ profile, handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.descriptionBlock__about}>
        {error && <div className={classesError.formSummaryError}>{error}</div>}
        <p>Full name: {createField('Full name', 'fullName', [], Input)}</p>
        <p>
          About me:
          {createField('About me', 'aboutMe', [], Textarea)}
        </p>
        <p>
          Looking for a job:{' '}
          {createField('', 'lookingForAJob', [], Input, { type: 'checkbox' })}
        </p>
        <p>My professional skills: </p>
        {createField(
          'My professional skills',
          'lookingForAJobDescription',
          [],
          Textarea
        )}
      </div>
      <div className={classes.descriptionBlock__contacts}>
        <h3>Find me here</h3>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key}>
              <b>
                {key}: {createField(key, 'contacts.' + key, [], Input)}
              </b>
            </div>
          );
        })}
      </div>
      <button>Save changes</button>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(
  ProfileDataForm
);

export default ProfileDataFormReduxForm;
