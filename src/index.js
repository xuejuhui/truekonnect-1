import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';
import 'bootstrap/dist/css/bootstrap.css';


var config = {
    apiKey: "AIzaSyAPolGXOq3CFjHYlmCNZAEWGz7kpi-4OtA",
    authDomain: "true-konnect-mvp.firebaseapp.com",
    databaseURL: "https://true-konnect-mvp.firebaseio.com",
    projectId: "true-konnect-mvp",
    storageBucket: "true-konnect-mvp.appspot.com",
    messagingSenderId: "776189930808"
};
firebase.initializeApp(config);

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
