import {combineReducers} from 'redux';
import authState from './authState';


const rootReducer = combineReducers({
    authState,
});

export default rootReducer;