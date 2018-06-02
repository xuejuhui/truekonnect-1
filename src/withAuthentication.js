import React from 'react';
import AuthUserContext from './Components/AuthUserContext';
import { connect } from "react-redux"
import { login } from "./Redux/actions/auth"
import setAuthorizationToken from "./setAuthorizationToken"

const withAuthentication = (Component) => {
  class WithAuthentication extends React.Component {
    componentDidMount() {
      this.props.login();
    }


    render() {
    setAuthorizationToken(localStorage.jwtToken);
    const { isAuthenticated } = this.props
      return (
        <AuthUserContext.Provider value={ isAuthenticated }>
          <Component />
        </AuthUserContext.Provider>
    
      );
    }
  }

  function mapStateToProps(state){
    return{
      isAuthenticated:state.authState.isAuthenticated
    }
  }

  return connect(mapStateToProps, { login })(WithAuthentication);
}

export default withAuthentication;
