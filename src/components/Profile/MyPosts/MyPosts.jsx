import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = (props) => {

let postsElements = props.posts.map( p =>  <Post message={p.message} likeCounts ={p.likeCounts}/>)

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
          {postsElements}
        </div>
      </div>
    );
}
export default MyPosts;