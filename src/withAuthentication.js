import React from 'react';
import { firebase } from './firebase';
import AuthUserContext from './Components/AuthUserContext';

const withAuthentication = (Component) => {
  class WithAuthentication extends React.Component {
  	constructor(props) {
      super(props);

      this.state = {
        authUser: null,
      };
    }

    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        authUser
          ? this.setState(() => ({ authUser }))
          : this.setState(() => ({ authUser: null }));
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