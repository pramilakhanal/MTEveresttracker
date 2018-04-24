import React from 'react';
import './SignOut.css';
import { auth } from '../firebase';
import { withRouter } from 'react-router-dom';


function signMeOut(history) {
	auth.doSignOut(history);
}

const SignOutButton = withRouter(({ history }) => (
  <button type="button" id="navOutBtn" class="btn btn-success" onClick={()=> signMeOut(history)}>
      Sign Out
    </button>
))

export default SignOutButton;
