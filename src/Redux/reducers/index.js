import {combineReducers} from 'redux';
import authState from './authState';
import { reducer as reduxFormReducer } from "redux-form";

const rootReducer = combineReducers({
    authState,
    form: reduxFormReducer,
});

export default rootReducer;