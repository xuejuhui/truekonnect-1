import rootReducer from '../reducers/index';
import { applyMiddleware, createStore, compose } from 'redux';
import logger from 'redux-logger';
import promises from 'redux-promise-middleware';
import thunk from "redux-thunk";


const initialState = {};
const middleware = [thunk, logger, promises()];
const store = createStore(
	rootReducer,
	initialState,
	compose(
		applyMiddleware(...middleware),
		 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
		)
	);

export default store

