import { auth } from './firebase';


export const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

export const doSignInWithEmailAndPassword = (email, password) =>
auth.signInWithEmailAndPassword(email, password);

export const doSignOut = () =>{
  auth.signOut();
   localStorage.removeItem("jwtToken");
}


// export const getToken = (currentUser) =>
//   currentUser.getIdToken().then(data => token:data)