import React from 'react';

import { auth } from '../../firebase';

const SignOutButton = () =>
  <button
    type="button"
    onClick={auth.doSignOut, console.log("logout")}
  >
    Sign Out
  </button>

export default SignOutButton;