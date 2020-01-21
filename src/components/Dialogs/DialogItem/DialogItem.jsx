import React from 'react';
import classes from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  return (
    <div className={classes.dialog}>
      <NavLink to={'/dialogs/' + props.id} activeClassName={classes.active}>
        <div className={classes.img_cont}>
          <img src={props.src} alt="ava" />
          <span className={classes.online_icon}/>
        </div>
        <div className={classes.name}>
          {props.name}
        </div>
      </NavLink>
    </div>
  )
};

export default DialogItem;  