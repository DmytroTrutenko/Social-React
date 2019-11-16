const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReduser = (state, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 6,
                src: 'https://sun9-23.userapi.com/c857436/v857436113/83131/YrLqLyoi1Hs.jpg',
                message: state.newPostText,
                likeCounts: 0
            };
            state.posts.unshift(newPost);
            state.newPostText = '';
            return state;
        }
        case UPDATE_NEW_POST_TEXT: {
            state.newPostText = action.newText;
            return state;
        }
        default:
            return state;
    }

}

export default profileReduser;