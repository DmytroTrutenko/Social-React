import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faAt } from '@fortawesome/free-solid-svg-icons';
import { faVk, faFacebook, faTwitter, faInstagram, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';

import userNoAva from './../../../assets/img/userNoAva.png';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div className={classes.profile_info}>
      <img className={classes.profile_info_bg}
        src="http://habrastorage.org/files/22c/084/d30/22c084d30a884ed59db3e8385e7e9b29.png" />

      {/* AVA+descriptions */}
      <div className={classes.main_info}>
        <img src={props.profile.photos.large ? props.profile.photos.large : userNoAva} alt="avatar" />
        <div className={classes.profile_data}>
          <h2>{props.profile.fullName}</h2>
          <span className={props.profile.aboutMe ? classes.about_enable : classes.about_disable}>
            {props.profile.aboutMe}
          </span>
        </div>
      </div>
      {/* contacts */}
      <div className={classes.contacts}>
        <ul className={classes.socials}>
          <li><a href={props.profile.contacts.facebook}>
            <FontAwesomeIcon
              className={classes.icons}
              icon={faFacebook}
            />
          </a></li>
          <li><a href={props.profile.contacts.website}>
            <FontAwesomeIcon
              className={classes.icons}
              icon={faGlobe}
            />

          </a></li>
          <li><a href={props.profile.contacts.vk}>
            <FontAwesomeIcon
              className={classes.icons}
              icon={faVk}
            />
          </a></li>
          <li><a href={props.profile.contacts.twitter}>
            <FontAwesomeIcon
              className={classes.icons}
              icon={faTwitter}
            />
          </a></li>
          <li><a href={props.profile.contacts.instagram}>
            <FontAwesomeIcon
              className={classes.icons}
              icon={faInstagram}
            />
          </a></li>
          <li><a href={props.profile.contacts.youtube}>
            <FontAwesomeIcon
              className={classes.icons}
              icon={faYoutube}
            />
          </a></li>
          <li><a href={props.profile.contacts.github}>
            <FontAwesomeIcon
              className={classes.icons}
              icon={faGithub}
            />
          </a></li>
          <li><a href={props.profile.contacts.mainLink}>
            <FontAwesomeIcon
              className={classes.icons}
              icon={faAt}
            />
          </a></li>
        </ul>
      </div>
      {/* contacts */}
      <div className={classes.Job}>
        <span className={props.profile.lookingForAJob ? classes.job_enable : classes.job_disable}>
          Looking for a Job
        </span>
        <p>{props.profile.lookingForAJobDescription}</p>
      </div>
    </div>
  )
}

export default ProfileInfo;