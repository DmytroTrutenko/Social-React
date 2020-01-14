import React from 'react';
import preloader from './../../../assets/img/load1.gif';
import classes from './Preloader.module.css';

const Preloader = (props) => {

    return <div className={classes.preloader}>
        <img src={preloader} />
    </div>
}



export default Preloader;