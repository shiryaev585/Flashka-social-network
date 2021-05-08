import React, { useState, useEffect } from "react";
import { reduxForm } from "redux-form";

const ProfileStatusWithHooks = (props) => {
  
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    
    setStatus(props.status)
  }, [props.status])

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
          <span onDoubleClick={activateMode}>Status: {props.status || "set status"}</span>
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
