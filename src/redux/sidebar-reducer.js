let initialState ={
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

const sidebarReducer = (state = initialState, action) => {
    return state;
};

export default sidebarReducer;