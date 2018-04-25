import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

// Import Components
import Navigation from './Navigation';
import LandingPage from './Landing';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import PasswordForgetPage from './PasswordForget';
import HomePage from './Home';
import TrekkerstatusPage from './Trekker';
import AccountPage from './Account';
import './App.css';


import * as routes from '../constants/routes';
import withAuthentication from './withAuthentication';

const App = () =>
  (
    <Router>
      <div>
        <Navigation />
        <hr />
        <div className="container-fluid">
          <Route exact path={routes.LANDING} component={() => <LandingPage />} />
          <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
          <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
          <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
          <Route exact path={routes.HOME} component={() => <HomePage />} />
          <Route exact path={routes.TREKKER} component={() => <TrekkerstatusPage />} />
          <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
        </div>
      </div>
    </Router>
  );

export default withAuthentication(App);
