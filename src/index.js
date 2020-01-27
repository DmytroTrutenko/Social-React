import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import './index.css';
import 'normalize.css';
import App from './App';
import {HashRouter}  from 'react-router-dom';
import {Provider} from 'react-redux';


    ReactDOM.render(
            <HashRouter>
               <Provider store = {store}>
                    <App/> 
               </Provider>
            </HashRouter>, document.getElementById('root')
     );


 
serviceWorker.unregister();
