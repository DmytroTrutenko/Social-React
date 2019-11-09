import React from 'react';
import classes from './Friends.module.css';


const Friends = (props) => {
  console.log({ props });
  return (

    <li className={classes.friend}>
      <a href="#">
        <img src={props.src} alt="ava" />
        {props.name}
      </a>
    </li>

  );
}
export default Friends;