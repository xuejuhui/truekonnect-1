import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../Reusable/SignOut';
import AuthUserContext from '../AuthUserContext.js';
import * as routes from '../../constants/routes';

const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

const NavigationAuth = () =>
  <div>
    <ul>
      <li><Link to={routes.LANDING}>Landing</Link></li>
      <li><Link to={routes.HOME}>Home</Link></li>
      <li><Link to={routes.ACCOUNT}>Account</Link></li>
      <li><Link to={routes.ADMIN}>Admin</Link></li>
      <li><SignOutButton /></li>
    </ul>
  </div>
  const NavigationNonAuth = () => 
    <div>
      <ul>
        <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
        <li><Link to={routes.SIGN_UP}>Sign Up</Link></li>
      </ul>
    </div>

export default Navigation;