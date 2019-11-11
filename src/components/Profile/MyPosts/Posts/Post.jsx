import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  return (

    <div className={classes.item}>
      <a href="#" className={classes.avka}>
        <img src={props.src} alt='ava' />
        {props.message}
      </a>
      <div className={classes.like}>
        <img src='https://www.freepngimg.com/thumb/facebook/24958-5-facebook-like-image.png' alt='like' />
        <span>{props.likeCounts}</span>
      </div>
    </div>

  );
}
export default Post;