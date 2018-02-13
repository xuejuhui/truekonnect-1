import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBFEdZg8MAuR418IROwh-ypm6D-imqTAGI",
    authDomain: "instawesome-263a4.firebaseapp.com",
    databaseURL: "https://instawesome-263a4.firebaseio.com",
    projectId: "instawesome-263a4",
    storageBucket: "instawesome-263a4.appspot.com",
    messagingSenderId: "349229241615"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
