import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  return (
    <div className={classes.dialog}>
      <NavLink to={'/dialogs/'+props.id} activeClassName={classes.active}>{props.name}</NavLink>
    </div>
  );
}

const MessageItem = (props) =>{
  return(
     <div className={classes.message}>{props.message}</div>
  );
}

const Dialogs = (props) => {

  let dialogsDate = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Leska'},
    {id: 4, name: 'Vika'},
    {id: 5, name: 'Danilla'},
    {id: 6, name: 'Julia'}
  ];

  let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'What happends?'},
    {id: 4, message: 'Hello Dima'},
    {id: 5, message: 'i wanna be your dog'}
  ];

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem id={dialogsDate[0].id} name={dialogsDate[0].name}/>
        <DialogItem id={dialogsDate[1].id} name={dialogsDate[1].name}/>
        
      </div>
      <div className={classes.messages}>
        <MessageItem message={messagesData[0].message}/>
        <MessageItem message={messagesData[1].message}/>
        <MessageItem message={messagesData[2].message}/>
       
      </div>
    </div>
  );
}
export default Dialogs;  