import React from 'react';
import PropTypes from 'prop-types';

import PasswordChangeForm from './PasswordChange';
import withAuthorization from './withAuthorization';

const AccountPage = (props, { authUser }) =>
  (
    <div className="container">
      <h1>Account: {authUser.email}</h1>
      <br />
      <div className="row">
        <div className="col-6">
          <PasswordChangeForm />
        </div>
      </div>
    </div>
  );

AccountPage.contextTypes = {
  authUser: PropTypes.object,
};

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AccountPage);
