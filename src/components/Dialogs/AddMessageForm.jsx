import { Field, reduxForm } from "redux-form";
import classes from "./Dialogs.module.scss";
import buttonImg from "./../../assets/icons/send_message.png";
import { Input } from "../common/FormsControls/FormsControls";
import { maxLengthCreator } from "../../utils/validators";
import Button from "../common/Button/Button";

const maxLength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={classes.formWrapper}>
      <Field
        component={Input}
        validate={[maxLength100]}
        placeholder="Send message..."
        name="newMessageText"
        className={classes.input}
      />
      <Button>
        <img src={buttonImg} alt="message-icon" />
      </Button>
    </form>
  );
};

export default reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm);
