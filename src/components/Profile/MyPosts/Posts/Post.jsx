import React from 'react';
import classes from './Post.module.css';

const Post = () => {
  return (

    <div className={classes.item}>
      <img src='https://sun9-68.userapi.com/c857436/v857436113/83130/ykpyyD_V3Do.jpg' alt='ava' />
      <span>Hey, why nobody love me?</span>
      <div>
        <span>Like</span>
      </div>
    </div>

  );
}
export default Post;