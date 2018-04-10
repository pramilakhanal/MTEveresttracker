import React from 'react';

import { auth } from '../firebase';

const SignOutButton = () =>
  (
    <button
      type="button"
      className="btn btn-outline-danger"
      onClick={auth.doSignOut}
    >
      Sign Out
    </button>
  );

export default SignOutButton;
