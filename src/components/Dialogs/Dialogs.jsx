import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons';


const Dialogs = (props) => {


  let dialogsElements = props.state.dialogs.map(
    d => <DialogItem id={d.id} src={d.src} name={d.name}
    />);

  let messagesElements = props.state.messages.map(
    m => <Message message={m.message}
    />);

  let newMessageElement = React.createRef();  //ссылка на элемент

  let addMessage = () => {
    let action={type: 'ADD-MESSAGE'};
    props.dispatch(action);
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    let action={type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text};
    props.dispatch(action);
  };




  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsElements}
      </div>

      <div className={classes.messages}>

        <div className={classes.msg_head}>
          <div className={classes.img_cont}>
            <img src='https://sun9-3.userapi.com/c857436/v857436113/83138/oy9Cp_Oeo54.jpg?ava=1' alt="ava" />
            <span className={classes.online_icon}></span>
          </div>
          <span className={classes.name}>Chat with Kessel</span>
        </div>

        <div className={classes.msg_body}>
          {messagesElements}
        </div>

        <div className={classes.msg_footer}>
          <textarea
            onChange={onMessageChange}
            ref={newMessageElement}
            className={classes.textarea}
            value={props.state.newMessageText}
          />
          <button onClick={addMessage}>
            <FontAwesomeIcon
              className={classes.icons}
              icon={faPaperPlane}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Dialogs;  