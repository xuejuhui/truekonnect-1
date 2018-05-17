import rootReducer from '../reducers/index';
import { applyMiddleware, createStore, compose } from 'redux';
import logger from 'redux-logger';
import promises from 'redux-promise-middleware';
import thunk from "redux-thunk";
import { reactReduxFirebase } from "react-redux-firebase"
import firebase from "firebase"
import { config as fbConfig, reduxFirebase as reduxConfig } from "../../index"

const store = createStore(rootReducer);

// const initialState = {};
// const middleware = [thunk, logger, promises()];
// firebase.initializeApp(fbConfig);
// const store = createStore(
// 	rootReducer(),
// 	initialState,
// 	compose(
// 		reactReduxFirebase(firebase, reduxConfig),
// 		applyMiddleware(...middleware)
// 		)
// 	);

export default store

