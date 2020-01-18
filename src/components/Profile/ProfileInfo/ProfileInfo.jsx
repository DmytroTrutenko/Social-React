import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faAt } from '@fortawesome/free-solid-svg-icons';
import { faVk, faFacebook, faTwitter, faInstagram, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';
import userNoPhoto from './../../../assets/img/duckNoAva2.jpg';

class ProfileInfo extends React.Component {

  state = {
    editMode: false
  }

  activateEditMode = () => {
    this.setState({ editMode: true })
  }

  deactivateEditMode = () => {
    this.setState({ editMode: false })
  }



  render() {
    if (!this.props.profile) {
      return <Preloader />
    }

    return (
      <div className={classes.profile_info}>
        <img className={classes.profile_info_bg}
          src="http://habrastorage.org/files/22c/084/d30/22c084d30a884ed59db3e8385e7e9b29.png" />

        {/* Ava+descriptions */}
        <div className={classes.main_info}>
          <img src={this.props.profile.photos.large ? this.props.profile.photos.large : userNoPhoto} alt="avatar" />
          <div className={classes.profile_data}>
            <h2>{this.props.profile.fullName}</h2>

        {/* status aboutMe */}
            <div style={{ paddingTop: 20 + 'px' }}>
              {!this.state.editMode &&
                <div>
                  <span className={this.props.profile.aboutMe ? classes.about_enable : classes.about_disable}
                    onDoubleClick={this.activateEditMode}>
                    {this.props.profile.aboutMe}
                  </span>
                </div>}
              {this.state.editMode &&
                <div>
                  <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status} />
                </div>}
            </div>

          </div>
        </div>

        {/* contacts */}
        <div className={classes.contacts}>
          <ul className={classes.socials}>
            <li><a href={this.props.profile.contacts.facebook != null && this.props.profile.contacts.facebook.indexOf('https://') === 0 ? this.props.profile.contacts.facebook : 'https://' + this.props.profile.contacts.facebook}>
              <FontAwesomeIcon
                className={classes.icons}
                icon={faFacebook}
              />
            </a></li>
            <li><a href={this.props.profile.contacts.website != null && this.props.profile.contacts.website.indexOf('https://') === 0 ? this.props.profile.contacts.website : 'https://' + this.props.profile.contacts.website}>
              <FontAwesomeIcon
                className={classes.icons}
                icon={faGlobe}
              />

            </a></li>
            <li><a href={this.props.profile.contacts.vk != null && this.props.profile.contacts.vk.indexOf('https://') === 0 ? this.props.profile.contacts.vk : 'https://' + this.props.profile.contacts.vk}>
              <FontAwesomeIcon
                className={classes.icons}
                icon={faVk}
              />
            </a></li>
            <li><a href={this.props.profile.contacts.twitter != null && this.props.profile.contacts.twitter.indexOf('https://') === 0 ? this.props.profile.contacts.twitter : 'https://' + this.props.profile.contacts.twitter}>
              <FontAwesomeIcon
                className={classes.icons}
                icon={faTwitter}
              />
            </a></li>
            <li><a href={this.props.profile.contacts.instagram != null && this.props.profile.contacts.instagram.indexOf('https://') === 0 ? this.props.profile.contacts.instagram : 'https://' + this.props.profile.contacts.instagram}>
              <FontAwesomeIcon
                className={classes.icons}
                icon={faInstagram}
              />
            </a></li>
            <li><a href={this.props.profile.contacts.youtube != null && this.props.profile.contacts.youtube.indexOf('https://') === 0 ? this.props.profile.contacts.youtube : 'https://' + this.props.profile.contacts.youtube}>
              <FontAwesomeIcon
                className={classes.icons}
                icon={faYoutube}
              />
            </a></li>
            <li><a href={this.props.profile.contacts.github != null && this.props.profile.contacts.github.indexOf('https://') === 0 ? this.props.profile.contacts.github : 'https://' + this.props.profile.contacts.github}>
              <FontAwesomeIcon
                className={classes.icons}
                icon={faGithub}
              />
            </a></li>
            <li><a href={this.props.profile.contacts.mainLink != null && this.props.profile.contacts.mainLink.indexOf('https://') === 0 ? this.props.profile.contacts.mainLink : 'https://' + this.props.profile.contacts.mainLink}>
              <FontAwesomeIcon
                className={classes.icons}
                icon={faAt}
              />
            </a></li>
          </ul>
        </div>
        {/* contacts */}
        
        <div className={classes.Job}>
          <span className={this.props.profile.lookingForAJob ? classes.job_enable : classes.job_disable}>
            Looking for a Job
        </span>
          <p>{this.props.profile.lookingForAJobDescription}</p>
        </div>
      </div>
    )
  }

}

export default ProfileInfo;