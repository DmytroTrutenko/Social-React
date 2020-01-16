import React from 'react';
import { updateNewMessageTextCreator, sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

//как работает connect() в react-redux библиотеке
// const DialogsContainer = (props) => {    
//   return (
//     <StoreContext.Consumer>
//       {
//         (store) => {
//           let state = store.getState().dialogsPage;

//           let onSendMessage = () => {
//             store.dispatch(sendMessageCreator());
//           };

//           let onNewMessageChange = (text) => {
//             store.dispatch(updateNewMessageTextCreator(text));
//           };

//           return (
//             <Dialogs
//               updateNewMessageText={onNewMessageChange}
//               sendMessage={onSendMessage}
//               dialogsPage={state}
//               newMessageText={state.newMessageText}
//             />
//           );
//         }
//       }
//     </StoreContext.Consumer>
//   );
// }

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    newMessageText: state.dialogsPage.newMessageText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (text) => {
      dispatch(updateNewMessageTextCreator(text));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    }
  }
}


// let AuthRedirectComponent = withAuthRedirect(Dialogs);  //вызываем HOC на редирект
// // отрисовываем презент компоненту с переданными ей данными
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);


//функция compose вызывает конвеер функций для начальной какой-то компоненты.
//вызываются функции снизу вверх

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs); 