import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import state, {subscribe} from './redux/state';
import './index.css';
import 'normalize.css';
import App from './App';
import {BrowserRouter}  from 'react-router-dom';
import {addPost, updateNewPostText, addMessage, updateNewMessageText} from './redux/state';

let rerenderEntireTree = (state) =>{
    ReactDOM.render(
            <BrowserRouter>
                 <App 
                 state ={state} 
                 addPost={addPost} 
                 updateNewPostText={updateNewPostText}
                 addMessage={addMessage}
                 updateNewMessageText={updateNewMessageText}
                 />
            </BrowserRouter>, document.getElementById('root'));
} 


rerenderEntireTree(state);

subscribe(rerenderEntireTree);

serviceWorker.unregister();
 