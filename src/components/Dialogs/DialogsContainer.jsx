import React from 'react';
import { updateNewMessageTextCreator, sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';


const DialogsContainer = (props) => {



  return (
    <StoreContext.Consumer>
      {
          (store) => {
            let state = store.getState().dialogsPage;
    
            let onSendMessage = () => {
              store.dispatch(sendMessageCreator());
            };
          
            let onNewMessageChange = (text) => {
              store.dispatch(updateNewMessageTextCreator(text));
            };
            
            return(
              <Dialogs
              updateNewMessageText = {onNewMessageChange}
              sendMessage = {onSendMessage}
              dialogsPage = {state}
              newMessageText={state.newMessageText}
            />
            );
          }
      }
    </StoreContext.Consumer>
  );
}
export default DialogsContainer;  