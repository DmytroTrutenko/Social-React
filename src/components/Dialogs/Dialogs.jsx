import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {


  let dialogsElements = props.state.dialogs.map(
    d => <DialogItem id={d.id} src={d.src} name={d.name}
    />);

  let messagesElements = props.state.messages.map(
    m => <Message message={m.message}
    />);

  let newMessageElement = React.createRef();  //ссылка на элемент

  let addMessage = () => {
    props.addMessage();
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageText(text);
  }




  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsElements}
      </div>

      <div className={classes.messages}>
        <div className={classes.msg_head}>
          <div className={classes.img_cont}>
            <img src='' alt="ava" />
          </div>
          <span className={classes.name}>Name</span>
        </div>

        <div className={classes.msg_body}>
          <div className={classes.msg_body_left}>
          {messagesElements}
          </div>
          <div className={classes.msg_body_right}>
          {messagesElements}
          </div>
        </div>

        <div className={classes.msg_bot}>
          <div>
            <textarea
              onChange={onMessageChange}
              ref={newMessageElement}
              className={classes.textarea}
              rows="2" cols="30"
              value={props.state.newMessageText}
            />
          </div>
          <button onClick={addMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}
export default Dialogs;  