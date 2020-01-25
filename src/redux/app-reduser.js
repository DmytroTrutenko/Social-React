import {authMe} from "./auth-reduser";

const INITIALIZED_SUCCESS = 'APP/INITIALIZED_SUCCESS';

let initialState = {
    initialized: false
};

const appReduser = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }
        default: {
            return state;
        }
    }
};

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS,});

export const initializeAPP = () => (dispatch) => {
    let promise = dispatch(authMe());
    //dispatch(somethingElse());
    //dispatch(somethingElse());
    //когда все промисы прийдут от всех диспатчей , тогда инициализация = true
    Promise.all([promise])
        .then(() => {
        dispatch(initializedSuccess());
    })
};


export default appReduser;