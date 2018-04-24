import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import { auth } from '../firebase';
import * as routes from '../constants/routes';

import './PasswordForget.css';

const PasswordForgetPage = () =>
  (
    <Row>
      <Col md={12}>
        <div id="mainDiv4">
          <div id="formDiv4">
            <h2>Reset Password</h2>
            <br /><br />
            <div>
              <PasswordForgetForm />
            </div>
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
  error: null,
};

class PasswordForgetForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { email } = this.state;

   
    auth.doPasswordReset(email)
      .then(() => {
        this.setState(() => (this.setState({ ...INITIAL_STATE })));
      })
      .catch((error) => {
        this.setState(byPropKey('error', error));
      });
  }

  render() {
    const {
      email,
      error,
    } = this.state;

    const isInvalid = email === '';

    return (
      <form id="pfForm" onSubmit={this.handleSubmit}>
        <div className="form-group row">
          <div className="col-sm-10">
            <input
              id="pfEmail"
              value={this.state.email}
              onChange={event => this.setState(byPropKey('email', event.target.value))}
              className="form-control"
              type="text"
              placeholder="Email Address"
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10">
            <button disabled={isInvalid} className="btn btn-default" type="submit">
              Reset Password
            </button>
          </div>
        </div>

        {error && <p className="alert alert-danger">{error.message}</p>}
      </form>
    );
  }
}

const PasswordForgetLink = () =>
  (
    <p>
      <Link id="pwForgetLink" to={routes.PASSWORD_FORGET}>
        Forgot Password?
      </Link>
    </p>
  );

export default PasswordForgetPage;

export {
  PasswordForgetForm,
  PasswordForgetLink,
};
