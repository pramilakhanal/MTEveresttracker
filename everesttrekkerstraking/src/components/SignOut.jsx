import React from 'react';
import './SignOut.css';
import { auth } from '../firebase';

const SignOutButton = () =>
  (
    <button type="button" id="navOutBtn" class="btn btn-success" onClick={auth.doSignOut}>
      Sign Out
    </button>
  );

export default SignOutButton;
