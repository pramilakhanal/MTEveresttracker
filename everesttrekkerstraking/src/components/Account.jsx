import React from 'react';
import PropTypes from 'prop-types';
import './Account.css';
import {Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import PasswordChangeForm from './PasswordChange';
import withAuthorization from './withAuthorization';

const AccountPage = (props, { authUser }) =>
  (
    <Row>
      <Col md={12}>
        <div id="mainDiv3">
          <div id="formDiv3">
            <h3>Change Password</h3>
            <h4>Account: <small>{authUser.email}</small></h4>
            <br /><br />
            <div>
              <PasswordChangeForm />
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );

AccountPage.contextTypes = {
  authUser: PropTypes.object,
};

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AccountPage);
