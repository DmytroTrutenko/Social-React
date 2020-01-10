import React from 'react';
import classes from './Header.module.css';
import img from '../../assets/img/logo.svg';

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.head__img}>
                <img src={img} alt="logo" />
            </div>
            <span>Reactive Network</span>
        </header>
    );
}
export default Header;