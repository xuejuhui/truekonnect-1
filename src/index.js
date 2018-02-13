import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBOlsm9tL2ut4GEE93AEsa2OFAmqbVgKM8",
    authDomain: "truekonnect-c91d4.firebaseapp.com",
    databaseURL: "https://truekonnect-c91d4.firebaseio.com",
    projectId: "truekonnect-c91d4",
    storageBucket: "truekonnect-c91d4.appspot.com",
    messagingSenderId: "776699990112"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
