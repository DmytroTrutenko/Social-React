import React from 'react';
import classes from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
  return (
    <div className={classes.profile_info}>
      <img src="https://scontent.ftll1-1.fna.fbcdn.net/v/t1.0-9/10801610_1510502545875368_315834141337874871_n.jpg?_nc_cat=108&_nc_oc=AQnLD7dSVQ6ps2oicGAojpFn_8Zqp8YcNVDvGh9EUHHpuIHK9OSXfylGthWQh5QZQCw&_nc_ht=scontent.ftll1-1.fna&oh=6d487f3a98a7aac43f8e9cb069aefe59&oe=5E4F8D3D"
        className={classes.profile_info_bg} />
      <div className={classes.main_info}>
        <div className={classes.avatar}>
          <img src="https://sun9-23.userapi.com/c857436/v857436113/83131/YrLqLyoi1Hs.jpg" alt="avatar" />
        </div>
        <h2>Dmitry Trutenko</h2>
      </div>
      <div className={classes.desc}>
        <p>Minimum experience, but Maximum desire, motivation and interest.
              I'm a junior front-end developer. In five years, i plan on becoming a senior developer. =)
                I am engaged in self-development and personal growth. </p>
      </div>
    </div>
  );
}

export default ProfileInfo;