import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = () => {
    return (
      <div>
        My post
        <div>
          <textarea></textarea>
          <button>Add Post</button>
        </div>
        <div className = {classes.posts}>
          <Post/>
          <Post/>
          <Post/>
        </div>
      </div>
    );
}
export default MyPosts;