import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import store from './redux/state';
import './index.css';
import 'normalize.css';
import App from './App';
import {BrowserRouter}  from 'react-router-dom';


let rerenderEntireTree = (state) =>{
    ReactDOM.render(
            <BrowserRouter>
                 <App 
                 state ={store.getState()} 
                 addPost={store.addPost} 
                 updateNewPostText={store.updateNewPostText}
                 addMessage={store.addMessage}
                 updateNewMessageText={store.updateNewMessageText}
                 />
            </BrowserRouter>, document.getElementById('root'));
} 


rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

serviceWorker.unregister();
