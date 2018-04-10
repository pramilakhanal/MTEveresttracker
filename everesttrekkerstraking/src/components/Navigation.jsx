import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import SignOutButton from './SignOut';
import * as routes from '../constants/routes';
import './Navigation.css';

const Navigation = (props, { authUser }) =>
  (
    <nav className="navbar navbar-toggleable-lg navbar-inverse fixed-top bg-inverse">
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
    <div
      className="collapse navbar-collapse"
      id="navbarCollapse"
    >
      <ul
        className="navbar-nav mr-auto"
      >
        <li>
          <Link
            className="nav-link"
            to={routes.HOME}
          >
          Home
          </Link>
        </li>
        <li>
          <Link
            className="nav-link"
            to={routes.ACCOUNT}
          >
          Account
          </Link>
        </li>
      </ul>
      <form
        className="form-inline mt-2 mt-md-0"
      >
        <SignOutButton />
      </form>
    </div>
  );

const NavigationNonAuth = () =>
  (
    <div
      className="collapse navbar-collapse"
      id="navbarCollapse"
    >
      <ul
        className="navbar-nav mr-auto"
      >
        <li
          className="nav-item active"
        >
          <Link
            className="nav-link"
            to={routes.LANDING}
          >
         About
          </Link>
        </li>
      </ul>
      <form
        className="form-inline mt-2 mt-md-0"
      >
        <Link
          className="nav-link"
          to={routes.SIGN_IN}
        >
        Sign In
        </Link>
      </form>
    </div>
  );

export default Navigation;
