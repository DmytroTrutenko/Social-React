import React from 'react';
import profileReducer, {addPostCreator, deletePostCreator} from "./profile-reducer";

let state = {
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
        }
    ],
};

// test1
it('length of posts should be incremented', () => {

    // 1. test data
    let action = addPostCreator('its new test post');

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(5);
});

// test 2
it('message should be `its new test post`', () => {

    // 1.
    let action = addPostCreator('its new test post');

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts[0].message).toBe('its new test post');
});

// test 3
it('after deleting length of posts should be decrement', () => {

    // 1.
    let action = deletePostCreator(1);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(3);
});

// test 4
it(`after deleting length of posts shouldn't be decrement`, () => {

    // 1.
    let action = deletePostCreator(10000);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(4);
});
