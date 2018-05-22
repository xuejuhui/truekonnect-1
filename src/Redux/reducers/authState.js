import * as ACTION from '../actions/actionTypes';
import jwtDecode from 'jwt-decode';

const INITIAL_STATE = {
  token: null,
  name: null,
  isAdmin: false,
  registered: false,
  isAuthenticated: false,
  isAuthenticating: false,
  statusText: null,
  hasError: false,
  registrationMessage: null
};

function authState(state = INITIAL_STATE, action) {
  switch(action.type){
    case ACTION.LOGIN_USER_REQUEST : 
      return  {
      	...state,
        'isAuthenticating': true,
        'statusText': null
     
    }

    case ACTION.USER_REGISTRATION_SUCCESS : 
      return  {
      	...state,
        isAuthenticating: false,
        isAuthenticated: false,
        hasError: false,
        token: null,
        name: null,
        registered: true,
        isAdmin: false,
        //statusText: 'Successfully Registered : Awaiting Admin Authorization.'
        statusText: 'Successfully Registered. Please sign in with your new account.'
     
    }

    case ACTION.USER_REGISTRATION_FAILED : 
      const error = action.error.response.data.message || 'Registration Error: Unable to register.  Please contact the administrator';
      return {
      	...state,
        isAuthenticating: false,
        isAuthenticated: false,
        hasError: true,
        token: null,
        name: null,
        registered: false,
        isAdmin: false,
        statusText: error
      
    }

    case ACTION.USER_PENDING_AUTHORIZATION: 
      return {
      	...state,
        isAuthenticating: false,
        isAuthenticated: false,
        hasError: true,
        token: null,
        name: null,
        registered: true,
        isAdmin: false,
        statusText: 'Authorization Error: This account has not been authorized'
     
    }

    case ACTION.LOGIN_USER_SUCCESS : 
      const token = jwtDecode(action.payload.token);
      return {
      	...state,
        isAuthenticating: false,
        isAuthenticated: true,
        hasError: false,
        token: action.payload.token,
        name: token.user.name,
        registered: true,
        isAdmin: token.isAdmin || false,
        statusText: 'You have been successfully logged in.'
    }

    case ACTION.LOGIN_USER_FAILURE : 
      return {
      	...state,
        isAuthenticating: false,
        isAuthenticated: false,
        hasError: true,
        token: null,
        name: null,
        registered: false,
        isAdmin: false,
        statusText: `Authentication Error: ${action.payload.status} ${action.payload.statusText}`
    }

    case ACTION.LOGOUT_USER : 
      return  {
      	...state,
        isAuthenticating: false,
        isAuthenticated: false,
        hasError: true,
        token: null,
        name: null,
        registered: false,
        isAdmin: false,
        statusText: 'You have been successfully logged out.'
    }

    default:
      return state;
  }
};

export default authState;