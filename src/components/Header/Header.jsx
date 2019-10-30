import React from 'react';
import classes from  './Header.module.css';

const Header = () => {
    return (
        <header className = {classes.header}>
           <img src = 'https://animoto.com/static/logo-f7bad0df2a4af8688773dca5ee0b1ed6.png'/>
           <span>React Social</span>
        </header>
    );
}
export default Header;