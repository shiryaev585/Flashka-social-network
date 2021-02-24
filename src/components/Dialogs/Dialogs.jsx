import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import classes from "./Dialogs.module.css";
import buttonImg from "./../../assets/icons/send_message.png";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));
  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  let newMessageText = state.newMessageText;

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (event) => {
    let body = event.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>
        <div>{messagesElements}</div>
        <div className={classes.inputWrapper}>
          <div>
            <input
              type="text"
              placeholder="Send message..."
              onChange={onNewMessageChange}
              className={classes.input}
              value={newMessageText}
            />
            {/* <textarea
              placeholder='Send message'
              onChange={onNewMessageChange}
              className={classes.textarea}
              value={newMessageText}
            /> */}
          </div>
          <div>
            <button className={classes.btn} onClick={onSendMessageClick}>
              <img src={buttonImg} alt="message-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
