import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Posts/Post';


const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post
    src={p.src}
    message={p.message}
    likeCounts={p.likeCounts}
  />)

  let newPostElement = React.createRef();  //ссылка на элемент

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={classes.myPosts}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            placeholder='Enter your message'
            ref={newPostElement}
            className={classes.textarea}
            rows="3" cols="50"
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={onAddPost}>Add Post</button>
        </div>
      </div>
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  );
}
export default MyPosts;