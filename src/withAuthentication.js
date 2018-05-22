import React from 'react';
import { firebase } from './firebase';
import AuthUserContext from './Components/AuthUserContext';
import { auth } from './firebase';
import jwtDecode from 'jwt-decode';

const withAuthentication = (Component) => {
  class WithAuthentication extends React.Component {
  	constructor(props) {
      super(props);

      this.state = {
        authUser: null,
        token:""
      };
    }

    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        if (authUser){
        authUser.getIdToken().then(data => this.setState(() => ({ token: data })))
        this.setState(() => ({ authUser }))
        } else {
        this.setState(() => ({ authUser: null }));
        }
      });
    }
    render() {
    const { authUser } = this.state;
          console.log(authUser)
      return (
        <AuthUserContext.Provider value={authUser}>
          <Component />
        </AuthUserContext.Provider>
      );
    }
  }

  return WithAuthentication;
}

export default withAuthentication;