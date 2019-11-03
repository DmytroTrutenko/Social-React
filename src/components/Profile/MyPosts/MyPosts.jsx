import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = (props) => {

  let postData = [
    {id: 1, message: 'Hi, how are you?', likeCounts: 12},
    {id: 2, message: 'Hey, why nobody love me?', likeCounts: 0},
    {id: 3, message: 'its my first post', likeCounts: 55},
    {id: 4, message: 'Yo', likeCounts: 10},
    {id: 5, message: 'Yo', likeCounts: 3}
  ];

    return (
      <div className={classes.myPosts}>
      <h3>My post</h3>
        <div>
          <div>
            <textarea className={classes.textarea}></textarea>
            </div>
          <div>
          <button>Add Post</button>
          </div>
        </div>
        <div className = {classes.posts}>
          <Post message={postData[0].message} likeCounts ={postData[0].likeCounts}/>
          <Post message={postData[1].message} likeCounts ={postData[1].likeCounts}/>
        </div>
      </div>
    );
}
export default MyPosts;