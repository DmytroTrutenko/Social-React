import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons';
import { Redirect } from 'react-router-dom';



const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map(
    d => <DialogItem id={d.id} src={d.src} name={d.name} key={d.id} id={d.id}
    />);

  let messagesElements = state.messages.map(
    m => <Message message={m.message} key={m.id}
    />);

  let newMessageElement = React.createRef();  //ссылка на элемент

  let onSendMessage = (e) => {
    props.sendMessage();
  };

  let onNewMessageChange = (e) => {
    let text = newMessageElement.current.value;
    props.updateNewMessageText(text);
  };

  
  if(!props.isAuth){
    return <Redirect to= {'/login'}/>
  }


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
            onChange={onNewMessageChange}
            placeholder='Enter your message'
            ref={newMessageElement}
            className={classes.textarea}
            value={props.newMessageText}
          />
          <button onClick={onSendMessage}>
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