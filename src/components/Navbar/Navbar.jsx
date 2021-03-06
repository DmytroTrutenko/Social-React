import React from 'react';
import classes from './Navbar.module.css';
import Friends from './Friends/Friends';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser, faEnvelope, faNewspaper, faMusic, faCogs, faUsers, faSearch
} from '@fortawesome/free-solid-svg-icons';



const Navbar = (props) => {
  
  let friendsElements = props.sidebar.friends.map(f => <Friends key={f.id} src={f.src} name={f.name} />);
  
  return (
    <ul className={classes.nav}>
      <li className={classes.item}>
        <NavLink to='/profile' activeClassName={classes.active}>
          <FontAwesomeIcon
            className={classes.icons}
            icon={faUser}
          />
          Profile
                </NavLink>
      </li>
      <li className={classes.item}>
        <NavLink to='/dialogs' activeClassName={classes.active}>
          <FontAwesomeIcon
            className={classes.icons}
            icon={faEnvelope}
          />
          Messages
                </NavLink>
      </li>
      <li className={classes.item}>
        <NavLink to='/news' activeClassName={classes.active}>
          <FontAwesomeIcon
            className={classes.icons}
            icon={faNewspaper}
          />
          News
                </NavLink>
      </li>
      <li className={classes.item}>
        <NavLink to='/music' activeClassName={classes.active}>
          <FontAwesomeIcon
            className={classes.icons}
            icon={faMusic}
          />
          Music
                </NavLink>
      </li>
      <li className={classes.item}>
        <NavLink to='/settings' activeClassName={classes.active}>
          <FontAwesomeIcon
            className={classes.icons}
            icon={faCogs}
          />
          Settings
                </NavLink>
      </li>
      <li className={classes.item}>
        <NavLink to='/users' activeClassName={classes.active}>
          <FontAwesomeIcon
            className={classes.icons}
            icon={faSearch}
          />
          Find users
                </NavLink>
      </li>

      <div className={classes.title}>
        <FontAwesomeIcon
          className={classes.icons}
          icon={faUsers}
        />
        Friends
              </div>
      <div className={classes.item__friends}>
        <ul>
          {friendsElements}
        </ul>
      </div>
    </ul>
  )
}
export default Navbar;