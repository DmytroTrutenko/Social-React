import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Posts/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state';



const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post
    src={p.src}
    message={p.message}
    likeCounts={p.likeCounts}
  />)

  let newPostElement = React.createRef();  //ссылка на элемент

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  }

  return (
    <div className={classes.myPosts}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            className={classes.textarea}
            rows="3" cols="50"
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Add Post</button>
        </div>
      </div>
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  );
}
export default MyPosts;