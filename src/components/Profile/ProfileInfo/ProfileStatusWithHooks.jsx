import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../../common/FormsControls/FormsControls";

const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  const activateMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      {!editMode && (
        <div>
          <span onDoubleClick={activateMode}>{props.status || "--------"}</span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            autoFocus={true}
            onBlur={deactivateEditMode}
            onChange={onStatusChange}
            value={status}
          />
          {/* <Field
            type={"text"}
            name={"status"}
            component={Input}
            autoFocus={true}
          /> */}
        </div>
      )}
    </div>
  );
};

const StatusReduxForm = reduxForm({ form: "status" })(ProfileStatusWithHooks);

const Status = (props) => {
  return <StatusReduxForm {...props} />;
};

export default ProfileStatusWithHooks;
