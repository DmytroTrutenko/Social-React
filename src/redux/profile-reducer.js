import {profileAPI} from "../api/api";

const ADD_POST = 'PROFILE/ADD-POST',
    SET_USER_PROFILE = 'PROFILE/SET_USER_PROFILE',
    SET_STATUS = 'PROFILE/SET_STATUS',
    DELETE_POST = 'PROFILE/DELETE_POST';

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
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 6,
                src: 'https://sun9-23.userapi.com/c857436/v857436113/83131/YrLqLyoi1Hs.jpg',
                message: action.newPostBody,
                likeCounts: 0
            };
            return {
                ...state,
                posts: [newPost, ...state.posts]
            };
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId)
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        default:
            return state;
    }
};

export const addPostCreator = (newPostBody) => ({
    type: ADD_POST,
    newPostBody
});

export const deletePostCreator = (postId) => ({
    type: DELETE_POST,
    postId
});

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    };
};

//thunk function
export const setProfile = (profileId) => async (dispatch) => {
    let response = await profileAPI.getProfile(profileId);
    dispatch(setUserProfile(response.data));
};

export const setStatus = (status) => ({type: SET_STATUS, status})

//thunk function
export const getUserStatus = (userID) => async (dispatch) => {
    let response = await profileAPI.getStatus(userID);
    dispatch(setStatus(response.data));
};

export const updateUserStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};

export default profileReducer;