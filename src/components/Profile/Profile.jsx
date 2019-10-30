import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
    return (
      <div>
        <div>
          <img className={classes.imgHead} src='https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'></img>
        </div>
        <div>
          ava+descr
        </div>
        <MyPosts/>
      </div>
    );
}
export default Profile;