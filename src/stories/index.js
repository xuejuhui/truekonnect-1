import React from 'react';


import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';



import SignUpForm from '../Components/Reusable/SignUpForm';

import StylistCard from '../Components/Reusable/StylistCard';



storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Login', module)
  .add('Login Boxes', () => <SignUpForm />);

storiesOf('Cards', module)
  .add('Stylist Card', () => <StylistCard StylistName='Chris Jannenga' />)
