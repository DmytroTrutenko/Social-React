import React from 'react';
import classes from './Header.module.css';
import img from '../../assets/img/logo1.png';
import {NavLink} from 'react-router-dom';


const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <div className={classes.head__img}>
                    <img src={img} alt="logo"/>
                </div>
                <span>Duckbook</span>
            </div>
            <div className={classes.auth}>
                {props.isAuth
                    ? <div className={classes.auth_log}>
                        <img className={classes.avaHead} src="https://sun9-48.userapi.com/c857436/v857436113/8313a/ORmUCmG6PI8.jpg?ava=1" alt="ava"/>
                        <span>{props.login}</span>
                    </div>
                    : <NavLink to={'/login'} className={classes.login}>
                        <span>Login</span>
                    </NavLink>}
            </div>
        </header>
    );
}
export default Header;