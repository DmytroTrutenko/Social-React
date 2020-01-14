import React from 'react';
import classes from './Header.module.css';
import img from '../../assets/img/logo1.png';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.head__img}>
                <img src={img} alt="logo" />
            </div>
            <span>Duckbook</span>
            <div className={classes.auth}>
                {props.isAuth
                    ? props.login 
                    : <NavLink to={'/login'} className={classes.login}>
                        Login
                     </NavLink>}

            </div>
        </header>
    );
}
export default Header;