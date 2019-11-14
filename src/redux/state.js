
let store = {
  _state : {
    profilePage: {
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
    },
    dialogsPage: { 
      dialogs: [{
          id: 1,
          src: 'https://sun9-50.userapi.com/c855424/v855424092/6902e/jPafH--ZKo0.jpg?ava=1',
          name: 'Rytne'
        },
        {
          id: 2,
          src: 'https://sun9-5.userapi.com/c622030/v622030403/13b31/Kut_UtmJ9ug.jpg?ava=1',
          name: 'Mr.Grey'
        },
        {
          id: 3,
          src: 'https://sun9-50.userapi.com/c636530/v636530654/864e/UUqYpFKbWLE.jpg',
          name: 'Lesik'
        },
        {
          id: 4,
          src: 'https://sun9-13.userapi.com/c855024/v855024959/b6462/g-YIhncShCs.jpg?ava=1',
          name: 'Lesha'
        },
        {
          id: 5,
          src: 'https://sun9-33.userapi.com/c844617/v844617633/179933/d5d_lzD8Fqo.jpg',
          name: 'Vika'
        },
        {
          id: 6,
          src: 'https://vk.vkfaces.com/841337/v841337851/28168/vcTQNNFV0EY.jpg?ava=1',
          name: 'Conor'
        }
      ],
  
      messages: [{
          id: 1,
          message: 'Hi'
        },
        {
          id: 2,
          message: 'How are you?'
        },
        {
          id: 3,
          message: 'What happends?'
        },
        {
          id: 4,
          message: 'Hello Dima'
        },
        {
          id: 5,
          message: 'i wanna be your dog'
        }
      ],
      newMessageText: ''
    },
    sidebar: {
      friends: [{
          id: 1,
          src: 'https://sun9-50.userapi.com/c855424/v855424092/6902e/jPafH--ZKo0.jpg?ava=1',
          name: 'Rytne'
        },
        {
          id: 2,
          src: 'https://sun9-5.userapi.com/c622030/v622030403/13b31/Kut_UtmJ9ug.jpg?ava=1',
          name: 'Mr.Grey'
        },
        {
          id: 3,
          src: 'https://sun9-50.userapi.com/c636530/v636530654/864e/UUqYpFKbWLE.jpg',
          name: 'Lesik'
        }
      ]
    }
  },

  _callSubscriber(){
    console.log('state change');
  },



  getState(){
    return this._state;
  },
  
  subscribe (observer){            //ПАТЕРН => наблюдатель
    this._callSubscriber = observer;         //передача функции из index.js   
  },

  
  dispatch(action){
    if(action.type === 'ADD-POST'){
      let newPost={
        id:6,
        src: 'https://sun9-23.userapi.com/c857436/v857436113/83131/YrLqLyoi1Hs.jpg',
        message: this._state.profilePage.newPostText,
        likeCounts: 0
      };
      this._state.profilePage.posts.unshift(newPost);
      this._state.profilePage.newPostText='';
      this._callSubscriber(this._state); 
    }else if(action.type === 'UPDATE-NEW-POST-TEXT'){
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state); 
    }else if(action.type === 'ADD-MESSAGE'){
      let newMessage={
        id:6,
        message: this._state.dialogsPage.newMessageText,
      };
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText='';
      this._callSubscriber(this._state); 
    }else if(action.type === 'UPDATE-NEW-MESSAGE-TEXT'){
      this._state.dialogsPage.newMessageText = action.newText;
      this._callSubscriber(this._state);
    }
  }
  
}

export default store;

window.store = store;  //можна смотреть  store в log 