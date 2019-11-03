import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: 1, message: 'Hi, how are you?', likeCounts: 12},
    {id: 2, message: 'Hey, why nobody love me?', likeCounts: 0},
    {id: 3, message: 'its my first post', likeCounts: 55},
    {id: 4, message: 'Yo', likeCounts: 10},
    {id: 5, message: 'Yo', likeCounts: 3}
  ];

  let dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Leska'},
    {id: 4, name: 'Vika'},
    {id: 5, name: 'Danilla'},
    {id: 6, name: 'Julia'}
  ];

  let messages =  [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'What happends?'},
    {id: 4, message: 'Hello Dima'},
    {id: 5, message: 'i wanna be your dog'}
  ];


ReactDOM.render(<App posts ={posts} 
                     dialogs={dialogs}
                     messages={messages} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
 