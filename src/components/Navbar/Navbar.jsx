import React from 'react';
import classes from './Navbar.module.css';
import Friends from './Friends/Friends';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';


const Navbar = (props) => {

  let friednsElements = props.state.friends.map(f => <Friends src={f.src} name={f.name} />);

  return (
    <ul className={classes.nav}>
      <li className={classes.item}>
        <NavLink to='/profile' activeClassName={classes.active}>Profile</NavLink>
      </li>
      <li className={classes.item}>
        <NavLink to='/dialogs' activeClassName={classes.active}>Messages</NavLink>
      </li>
      <li className={classes.item}>
        <NavLink to='/news' activeClassName={classes.active}>News</NavLink>
      </li>
      <li className={classes.item}>
        <NavLink to='/music' activeClassName={classes.active}>Music</NavLink>
      </li>
      <li className={classes.item}>
        <NavLink to='/settings' activeClassName={classes.active}>Settings</NavLink>
      </li>
      <FontAwesomeIcon
        icon={faThumbsUp}
        style={{ color: '#fff' }} />
      <span className={classes.title}>Friends</span>
      <div className={classes.item__friends}>
        <ul>
          {friednsElements}
        </ul>
      </div>
    </ul>
  );
}
export default Navbar;