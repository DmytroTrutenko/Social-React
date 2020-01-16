import React from 'react';
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import { compose } from 'redux';


//как работает connect() в react-redux библиотеке
// const MyPostsContainer = (props) => {

//   return (
//     <StoreContext.Consumer>
//       {
//         (store) => {

//           let state = store.getState();

//           let addPost = () => {
//             store.dispatch(addPostCreator());
//           };

//           let onPostChange = (text) => {
//             store.dispatch(updateNewPostTextCreator(text));
//           }

//           return (
//             <MyPosts
//               updateNewPostText={onPostChange}
//               addPost={addPost}
//               posts={state.profilePage.posts}
//               newPostText={state.profilePage.newPostText}
//             />
//           )
//         }

//       }
//     </StoreContext.Consumer>)
// }



const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextCreator(text));
    },
    addPost: () => {
      dispatch(addPostCreator());
    }
  }
}


export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(MyPosts); 