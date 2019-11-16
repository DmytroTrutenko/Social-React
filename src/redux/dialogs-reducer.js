const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                id: 6,
                message: state.newMessageText,
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            state.newMessageText = action.newText;
            return state;
        }
        default:
            return state;
    }

}

export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
})

export const updateNewMessageTextCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    };
};

export default dialogsReducer;