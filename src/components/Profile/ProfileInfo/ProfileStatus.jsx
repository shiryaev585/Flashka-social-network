import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../../common/FormsControls/FormsControls";

class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    status: this.props.status
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      });
    };
    console.log('componentDidUpdate')
  };

  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status || "--------"}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <Field 
              type={"text"}
              name={"status"}
              component={Input} 
              onChange={this.onStatusChange}
              autoFocus={true} 
              onBlur={this.deactivateEditMode} 
              value={this.state.status} 
              onKeyUp={this.handleKeyUp}
            />
          </div>
        )}
      </div>
    );
  }
}

const StatusReduxForm = reduxForm({ form: "status" }) (ProfileStatus)

const Status = (props) => {
  return <StatusReduxForm {...props} />
}

export default Status;
