import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './signin.css';
import { SignUpLink } from './SignUp';
import { PasswordForgetLink } from './PasswordForget';
import { auth } from '../firebase';
import * as routes from '../constants/routes';

const SignInPage = ({ history }) =>
  (
    <Row>
      <Col md={12}>
        <div id="mainDiv2">
          <div id="formDiv2">
            <h1>Sign In</h1>
            <br/>
            <SignInForm history={history} />
            <PasswordForgetLink />
            <br/>
            <SignUpLink />
          </div>
        </div>
      </Col>
    </Row>
  );

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch((error) => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <form id="signInForm" onSubmit={this.onSubmit}>
        <br />
        <div className="form-group row">
          <div className="col-sm-10">
            <input
              id="signInEmail"
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
              id="signInPassword"
              value={password}
              onChange={event => this.setState(byPropKey('password', event.target.value))}
              className="form-control"
              type="password"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10">
            <button disabled={isInvalid} className="btn btn-default" type="submit">
              Sign In
            </button>
          </div>
        </div>

        { error && <p className="alert alert-danger">{ error.message }</p> }
      </form>
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};
