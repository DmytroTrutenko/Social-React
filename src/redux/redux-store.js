import {createStore, combineReducers, applyMiddleware} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReduser from "./auth-reduser";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'
import appReduser from "./app-reduser";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReduser,
    form: formReducer,    //редюсер для redux-form
    app: appReduser
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware)); //подключили store и мидл веер для диспатча санок! 

window.store = store;

export default store;