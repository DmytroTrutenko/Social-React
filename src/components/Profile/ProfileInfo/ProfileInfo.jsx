import React from 'react';
import classes from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
  return (
    <div className={classes.profile_info}>
      <img src="http://www.f-covers.com/cover/japan-cherry-blossoms-and-mount-facebook-cover-timeline-banner-for-fb.jpg"
        className={classes.profile_info_bg} />
      <div className={classes.main_info}>
        <img src="https://sun9-23.userapi.com/c857436/v857436113/83131/YrLqLyoi1Hs.jpg" alt="avatar" />
        <div className={classes.profile_data}>
          <h2>Dmitry Trutenko</h2>
          <p>Minimum experience, but Maximum desire, motivation and interest.
                I'm a junior front-end developer. In five years, i plan on becoming a senior developer. =)
                I am engaged in self-development and personal growth. </p>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;