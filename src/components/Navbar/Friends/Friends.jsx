import React from 'react';
import classes from './Friends.module.css';


const Friends = (props) => {
  return (

    <li className={classes.friend}>
      <a href="#">
        <div className={classes.img_cont}>
          <img src={props.src} alt="ava" />
          <span className={classes.online_icon}></span>
        </div>
        {props.name}
      </a>
    </li>

  );
}
export default Friends;