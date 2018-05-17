import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAPolGXOq3CFjHYlmCNZAEWGz7kpi-4OtA",
    authDomain: "true-konnect-mvp.firebaseapp.com",
    databaseURL: "https://true-konnect-mvp.firebaseio.com",
    projectId: "true-konnect-mvp",
    storageBucket: "true-konnect-mvp.appspot.com",
    messagingSenderId: "776189930808"
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};