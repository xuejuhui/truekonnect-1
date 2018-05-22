import { auth } from './firebase';
import jwtDecode from 'jwt-decode';

export const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

export const doSignInWithEmailAndPassword = (email, password) =>
auth.signInWithEmailAndPassword(email, password);

export const doSignOut = () =>
  auth.signOut();

// export const getToken = (currentUser) =>
//   currentUser.getIdToken().then(data => token:data)