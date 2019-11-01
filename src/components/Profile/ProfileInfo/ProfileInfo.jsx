import React from 'react';
import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
      <div>
        <div>
          <img className={classes.imgHead} src='https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'></img>
        </div>
        <div className={classes.descr}>
          ava+descr
        </div>
      </div>
    );
}
export default ProfileInfo;