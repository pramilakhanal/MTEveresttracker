import React, { Component } from 'react';
import {
  Link,
  withRouter,
} from 'react-router-dom';
import PropTypes from 'prop-types';

import { auth, db } from '../firebase';
import * as routes from '../constants/routes';

const SignUpPage = ({ history }) =>
  (
    <div className="container">
      <h1>Sign Up</h1>
      <SignUpForm history={history} />
    </div>
  );

SignUpPage.propTypes = {
  history: PropTypes.string.isRequired,
};

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    event.preventDefault();

    const {
      username,
      email,
      passwordOne,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then((authUser) => {
        db.doCreateUser(authUser.uid, username, email)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            history.push(routes.HOME);
          })
          .catch((error) => {
            this.setState(byPropKey('error', error));
          });
      })
      .catch((error) => {
        this.setState(byPropKey('error', error));
      });
  }

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <form id="signUpForm" onSubmit={this.onSubmit}>
        <br />
        <div className="form-group row">
          <div className="col-sm-10">
            <input
              id="signUpUsername"
              value={username}
              onChange={event => this.setState(byPropKey('username', event.target.value))}
              className="form-control"
              type="text"
              placeholder="Full Name"
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10">
            <input
              id="signUpEmail"
              value={email}
              onChange={event => this.setState(byPropKey('email', event.target.value))}
              className="form-control"
              type="text"
              placeholder="Email Address"
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10">
            <input
              id="signUpPasswordOne"
              value={passwordOne}
              onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
              className="form-control"
              type="password"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10">
            <input
              id="signUpPasswordTwo"
              value={passwordTwo}
              onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
              className="form-control"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10">
            <button disabled={isInvalid} className="btn btn-primary" type="submit">
              Sign Up
            </button>
          </div>
        </div>

        { error && <p className="alert alert-danger">{error.message}</p> }
      </form>
    );
  }
}

const SignUpLink = () =>
  (
    <p>
      {" Don't have an account? "}
      {' '}
      <Link to={routes.SIGN_UP}>Sign Up</Link>
    </p>
  );

export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpLink,
};
