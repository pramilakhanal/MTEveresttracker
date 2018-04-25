import React, { Component } from 'react';

import { auth } from '../firebase';

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { passwordOne } = this.state;

    auth.doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch((error) => {
        this.setState(byPropKey('error', error));
      });
  }

  render() {
    const {
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '';

    return (
      <form id="pcForm" onSubmit={this.handleSubmit}>
        <div className="form-group row">
          <div className="col-sm-10">
            <input
              id="pcPasswordOne"
              value={passwordOne}
              onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
              className="form-control"
              type="password"
              placeholder="New Password"
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10">
            <input
              value={passwordTwo}
              onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
              className="form-control"
              type="password"
              placeholder="Confirm New Password"
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10">
            <button disabled={isInvalid} className="btn btn-default" type="submit">
              Reset My Password
            </button>
          </div>
        </div>

        {error && <p className="alert alert-danger">{error.message}</p>}
      </form>
    );
  }
}

export default PasswordChangeForm;
