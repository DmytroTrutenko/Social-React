import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = (props) => {
    return (
      <div>
        My post
        <div>
          <textarea></textarea>
          <button>Add Post</button>
        </div>
        <div className = {classes.posts}>
          <Post message='Hi, how are you?' likeCounts ='55'/>
          <Post message='Hey, why nobody love me?' likeCounts ='3'/>
        </div>
      </div>
    );
}
export default MyPosts;