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

const Message = (props) =>{
  return(
     <div className={classes.message}>{props.message}</div>
  );
}

const Dialogs = (props) => {

  let dialogs = [зммм
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Leska'},
    {id: 4, name: 'Vika'},
    {id: 5, name: 'Danilla'},2
    {id: 6, name: 'Julia'}
  ];

  let messages =  [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'What happends?'},
    {id: 4, message: 'Hello Dima'},
    {id: 5, message: 'i wanna be your dog'}
  ];

  let dialogsElements = dialogs.map( d => <DialogItem id={d.id} name={d.name}/> );
  let messagesElements = messages.map( m => <Message message={m.message}/> );



  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={classes.messages}>
        {messagesElements}
       </div>
    </div>
  );
}
export default Dialogs;  