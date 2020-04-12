import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = props => {
  const userElements = props.dialog.userData.map((u, i) => (
    <DialogItem name={u.name} id={u.id} key={u.id} />
  ));
  const messageElements = props.dialog.messageData.map((m, i) => (
    <MessageItem text={m.message} key={m.id} />
  ));
  let newMessageText = props.dialog.newMessageBody;

  let onSendMessageClick = () => {
    props.onSendMessageClick();
  };

  let onNewMessageChange = e => {
    let body = e.target.value;
    props.onNewMessageChange(body)
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{userElements}</div>
      <div className={style.messages}>
        <div>{messageElements}</div>
        <div>
          <div>
            <textarea
              onChange={onNewMessageChange}
              value={newMessageText}
              placeholder="Enter your message"
            />
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
