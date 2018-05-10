import {combineReducers} from 'redux';
import persons from './persons';

const appReducer = combineReducers({
    persons: persons
});

const rootReducer = (state, action) => {
    if (action.type === 'USER_LOGOUT') {
        state = undefined
    }
    return appReducer(state, action)
}

export default rootReducer;