import React from 'react';
import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
      <div className={classes.profile_info}>
        <img src="https://i.pinimg.com/originals/5e/c0/e7/5ec0e74765d3da72cf78e0ed3c9b6cfa.jpg" className={classes.profile_info_bg}/>
        <div className={classes.descr}>
          ava+descr
        </div>
      </div>
    );
}
export default ProfileInfo;