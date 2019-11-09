import React from 'react';
import classes from './Navbar.module.css';
import Friends from './Friends/Friends';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {

  let friednsElements = props.state.friends.map(f => <Friends src={f.src} name={f.name} />);

  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to='/profile' activeClassName={classes.active}>Profile</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/dialogs' activeClassName={classes.active}>Messages</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/news' activeClassName={classes.active}>News</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/music' activeClassName={classes.active}>Music</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/settings' activeClassName={classes.active}>Settings</NavLink>
      </div>
      <span className={classes.title}>Friends</span>
      <div className={classes.item__friends}>
        <ul>
          {friednsElements}
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;