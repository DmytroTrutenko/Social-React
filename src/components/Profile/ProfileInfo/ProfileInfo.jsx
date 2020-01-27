import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faAt } from '@fortawesome/free-solid-svg-icons';
import { faVk, faFacebook, faTwitter, faInstagram, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';
import userNoPhoto from './../../../assets/img/duckNoAva2.jpg';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div className={classes.profile_info}>
      <img className={classes.profile_info_bg}
        src="http://habrastorage.org/files/22c/084/d30/22c084d30a884ed59db3e8385e7e9b29.png" />

      {/* Ava+descriptions+status */}
      <div className={classes.main_info}>
        <img src={props.profile.photos.large ? props.profile.photos.large : userNoPhoto} alt="avatar" />
        <div className={classes.profile_data}>
          <h2>{props.profile.fullName}</h2>
          <ProfileStatusWithHooks status={props.status}
          updateUserStatus={props.updateUserStatus}/>
        </div>
      </div>
      {/* Ava+descriptions+status */}

      {/* contacts */}
      <div className={classes.contacts}>
        <ul className={classes.socials}>
          <li><a href={props.profile.contacts.facebook != null && props.profile.contacts.facebook.indexOf('https://') === 0
            ? props.profile.contacts.facebook : 'https://' + props.profile.contacts.facebook}>
            <FontAwesomeIcon
              className={classes.icons}
              icon={faFacebook}
            />
          </a></li>
          <li><a href={props.profile.contacts.website != null && props.profile.contacts.website.indexOf('https://') === 0
            ? props.profile.contacts.website : 'https://' + props.profile.contacts.website}>
            <FontAwesomeIcon
              className={classes.icons}
              icon={faGlobe}
            />
          </a></li>
          <li><a href={props.profile.contacts.vk != null && props.profile.contacts.vk.indexOf('https://') === 0
            ? props.profile.contacts.vk : 'https://' + props.profile.contacts.vk}>
            <FontAwesomeIcon
              className={classes.icons}
              icon={faVk}
            />
          </a></li>
          <li><a href={props.profile.contacts.twitter != null && props.profile.contacts.twitter.indexOf('https://') === 0
            ? props.profile.contacts.twitter : 'https://' + props.profile.contacts.twitter}>
            <FontAwesomeIcon
              className={classes.icons}
              icon={faTwitter}
            />
          </a></li>
          <li><a href={props.profile.contacts.instagram != null && props.profile.contacts.instagram.indexOf('https://') === 0
            ? props.profile.contacts.instagram : 'https://' + props.profile.contacts.instagram}>
            <FontAwesomeIcon
              className={classes.icons}
              icon={faInstagram}
            />
          </a></li>
          <li><a href={props.profile.contacts.youtube != null && props.profile.contacts.youtube.indexOf('https://') === 0
            ? props.profile.contacts.youtube : 'https://' + props.profile.contacts.youtube}>
            <FontAwesomeIcon
              className={classes.icons}
              icon={faYoutube}
            />
          </a></li>
          <li><a href={props.profile.contacts.github != null && props.profile.contacts.github.indexOf('https://') === 0
            ? props.profile.contacts.github : 'https://' + props.profile.contacts.github}>
            <FontAwesomeIcon
              className={classes.icons}
              icon={faGithub}
            />
          </a></li>
          <li><a href={props.profile.contacts.mainLink != null && props.profile.contacts.mainLink.indexOf('https://') === 0
            ? props.profile.contacts.mainLink : 'https://' + props.profile.contacts.mainLink}>
            <FontAwesomeIcon
              className={classes.icons}
              icon={faAt}
            />
          </a></li>
        </ul>
      </div>
      {/* contacts */}

      {/* Job */}
      <div className={classes.Job}>
        <span className={props.profile.lookingForAJob ? classes.job_enable : classes.job_disable}>
          Looking for a Job
        </span>
        <p>{props.profile.lookingForAJobDescription}</p>
      </div>
      {/* Job */}
    </div>
  )

};

export default ProfileInfo;