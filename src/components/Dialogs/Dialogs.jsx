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
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem id='1' name='Dimych'/>
        <DialogItem id='2' name='Andrey'/>
        <DialogItem id='3' name='Leska'/>
        <DialogItem id='4' name='Vika'/>
        <DialogItem id='5' name='Danilla'/>
      </div>
      <div className={classes.messages}>
        <MessageItem message='hi'/>
        <MessageItem message='How are you?'/>
        <MessageItem message='What happends?'/>
        <MessageItem message='Hello Dima'/>
        <MessageItem message='i wanna be your dog'/>
      </div>
    </div>
  );
}
export default Dialogs;  