// import axios from 'axios';
// import * as ACTION from './actionTypes';
// import { pushState } from 'react-router-redux';
// import { browserHistory } from 'react-router';
import { firebase } from '../../firebase';
import setAuthorizationToken from "../../setAuthorizationToken"
import jwtDecode from 'jwt-decode';
import { SET_CURRENT_USER } from "./actionTypes" 
// import { auth } from '../../firebase';


export function signIn(email, verificationCode){ 
	return dispatch=>{  
	firebase.auth.signInWithEmailAndPassword(email, verificationCode)
      .then(() => {
      	dispatch(login())
      })
      .catch(error => {
		console.log(error)
      });


    }}
export function phoneLogin(phoneNum, appVerifier) {
	return dispatch =>{
        const phoneNumber = '+1' + phoneNum;
        return firebase.auth.signInWithPhoneNumber(phoneNumber, appVerifier)
            .then(function (confirmationResult) {
                let code = prompt(`We have sent a code to ${phoneNumber}, please enter it here`, "");
                if (code) {
                    confirmationResult.confirm(code).then(function (result) {
                      dispatch(login())
                    }).catch(function (error) {
                        alert(error.message)
                    });
                }
            }).catch(function (error) {
            alert(error.message)
        });
    }}

export function logout(){
	return dispatch=>{
		firebase.auth.signOut();
	   	localStorage.removeItem("jwtToken");
	   	setAuthorizationToken(false)
	   	dispatch(setCurrentUser({}))
	}
}
export function login() {
	return dispatch =>{
		return  firebase.auth.onAuthStateChanged(authUser => {
        if (authUser){
        authUser.getIdToken().then(data => {
        	const token = data;
        	localStorage.setItem("jwtToken", token)
        	setAuthorizationToken(token)
        	dispatch(setCurrentUser(jwtDecode(token)))
        });
	}
})}}

export function setCurrentUser(user){
	return {
		type: SET_CURRENT_USER,
		user
	}
}

