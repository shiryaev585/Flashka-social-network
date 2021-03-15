import { Field, reduxForm } from "redux-form";
import classes from "./Dialogs.module.scss";
import buttonImg from "./../../assets/icons/send_message.png";
import { Textarea } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators";

const maxLength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={classes.formWrapper}>
      <Field
        component={Textarea}
        validate={[required, maxLength100]}
        placeholder="Send message..."
        name="newMessageText"
        className={classes.input}
      />
      <button className={classes.btn}>
        <img src={buttonImg} alt="message-icon" />
      </button>
    </form>
  );
};

export default reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm);
