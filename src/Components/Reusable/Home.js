import React from 'react';
import UpLoad from "./UpLoad"
import SyncValidationForm from "./Upload/SyncValidationForm"

import withAuthorization from '../../withAuthorization';

const HomePage = () =>
  <div>
    <h1>Home Page</h1>
    <p>The Home Page is accessible by every signed in user.</p>
    <UpLoad />
  </div>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);