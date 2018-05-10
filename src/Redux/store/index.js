import rootReducer from '../reducers/index';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import promises from 'redux-promise-middleware';

export default(initialState) => {
    return createStore(
        rootReducer,
        applyMiddleware(logger, promises())
    );
}