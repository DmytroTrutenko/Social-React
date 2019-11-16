const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [{
        id: 1,
        src: 'https://sun9-13.userapi.com/c855024/v855024959/b6462/g-YIhncShCs.jpg?ava=1',
        message: 'Hi, how are you?',
        likeCounts: 12
      },
      {
        id: 2,
        src: 'https://sun9-53.userapi.com/c855428/v855428880/109943/OMtdQyPFukI.jpg?ava=1',
        message: 'Hey, why nobody love me?',
        likeCounts: 0
      },
      {
        id: 3,
        src: 'https://sun9-33.userapi.com/c844617/v844617633/179933/d5d_lzD8Fqo.jpg',
        message: 'its my first post',
        likeCounts: 55
      },
      {
        id: 4,
        src: 'https://vk.vkfaces.com/841337/v841337851/28168/vcTQNNFV0EY.jpg?ava=1',
        message: 'Yo',
        likeCounts: 10
      },
      {
        id: 5,
        src: 'https://sun9-48.userapi.com/c627316/v627316937/12a7b/EcAdc56hJjk.jpg',
        message: 'Yo',
        likeCounts: 3
      }
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {

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

export const addPostCreator = () => ({
    type: ADD_POST
})

export const updateNewPostTextCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    };
};

export default profileReducer;