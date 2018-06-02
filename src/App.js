import React from 'react';
import './App.css';
import { 
	BrowserRouter as Router,
	Route 
} from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import LandingPage from './Components/Reusable/Landing';
import SignUpForm from "./Components/Reusable/SignUpForm";
import SignInForm from "./Components/Reusable/SignInForm";
import StylistCard from './Components/Reusable/StylistCard';
import * as routes from './constants/routes';
import PasswordForgetPage from './Components/Reusable/PasswordForget';
import HomePage from './Components/Reusable/Home';
import AccountPage from './Components/Reusable/Account';
import withAuthentication from './withAuthentication';
import Admin from './Components/Reusable/AdminPage';

  
const App = () =>
  <Router>
     <div>
      <Navigation />
      <hr/>
      <Route
        exact path={routes.SIGN_UP}
        component={() => <SignUpForm />}
      />
      <Route
        exact path={routes.SIGN_IN}
        component={() => <SignInForm />}
      />
      <Route
        exact path={routes.ACCOUNT}
        component={() => <StylistCard />}
      />
      <Route
        exact path={routes.LANDING}
        component={() => <LandingPage />}
      />
      <Route
        exact path={routes.ADMIN}
        component={() => <Admin />}
      />
        <Route
        exact path={routes.HOME}
        component={() => <HomePage />}
      />
    </div>
  </Router>

export default withAuthentication(App);

