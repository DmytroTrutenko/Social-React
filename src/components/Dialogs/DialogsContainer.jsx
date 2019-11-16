import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { updateNewMessageTextCreator, sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {

  let state = props.store.getState();

  let onSendMessage = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = (text) => {
    props.store.dispatch(updateNewMessageTextCreator(text));
  };
 
  return <Dialogs
          updateNewMessageText = {onNewMessageChange}
          sendMessage = {onSendMessage}
          dialogsPage = {state.dialogsPage}
          newMessageText={state.dialogsPage.newMessageText}
        />
}
export default DialogsContainer;  