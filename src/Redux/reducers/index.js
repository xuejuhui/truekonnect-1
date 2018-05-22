import {combineReducers} from 'redux';
import persons from './persons';
import sessionReducer from './session';
import authState from './authState';
import { firebaseReducer as firebase } from "react-redux-firebase"

const rootReducer = combineReducers({
    authState,
});

// const rootReducer = (state, action) => {
//     if (action.type === 'USER_LOGOUT') {
//         state = undefined
//     }
//     return appReducer(state, action)
// }

export default rootReducer;