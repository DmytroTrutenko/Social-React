import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {

  return (
    <div className={classes.profile}>
      <ProfileInfo profile={props.profile}
        status={props.status}
        updateUserStatus={props.updateUserStatus} />
      <MyPostsContainer />
    </div>
  );
}

export default Profile;