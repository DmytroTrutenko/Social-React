import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  return (

    <div className={classes.item}>
      <img className={classes.ava} src='https://sun9-68.userapi.com/c857436/v857436113/83130/ykpyyD_V3Do.jpg' alt='ava' />
      <span>{props.message}</span>
      <div>
        <img className={classes.like} src='https://www.freepngimg.com/thumb/facebook/24958-5-facebook-like-image.png' alt = 'like'/> 
        <span>{props.likeCounts}</span>
      </div>
    </div>

  );
}
export default Post;