import React from 'react';


import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';



import SignUpForm from '../Components/Reusable/SignUpForm';



storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Login', module)
  .add('Login Boxes', () => <SignUpForm />)
