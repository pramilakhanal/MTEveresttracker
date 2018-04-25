import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import SignOutButton from './SignOut';
import * as routes from '../constants/routes';
import './Navigation.css';

const Navigation = (props, { authUser }) =>
  (
    <nav>
      {
        authUser
          ? <NavigationAuth />
          : <NavigationNonAuth />
      }
    </nav>
  );

Navigation.contextTypes = {
  authUser: PropTypes.object,
};

const NavigationAuth = () =>
  (
    <div className="navbar" id="mainNav">
      <p id="logo">TREKr-TRAKr</p>
      <form className="form-inline mt-2 mt-md-0" id="navForm1">
        <Link className="nav-link" id="aboutLink" to={routes.LANDING}>About</Link>
        <Link className="nav-link" id="homeLink" to={routes.HOME}>TREK Info</Link>
        <Link className="nav-link" id="statusLink" to={routes.TREKKER}>TREKr Status</Link>
      </form>
      <form className="form-inline mt-2 mt-md-0" id="navForm2">
        <Link className="nav-link" id="accountLink" to={routes.ACCOUNT}>Account</Link>
        <SignOutButton id="signOutButton" />
      </form>
    </div>
  );

const NavigationNonAuth = () =>
  (
    <div className="navbar" id="mainNav">
      <p id="logo">TREKr-TRAKr</p>
      <form className="form-inline mt-2 mt-md-0" id="navForm1">
        <Link className="nav-link" id="aboutLink" to={routes.LANDING}>About</Link>
        <Link className="nav-link" id="signInLink" to={routes.SIGN_IN}>Sign In</Link>
      </form>
    </div>
  );

export default Navigation;
