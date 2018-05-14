import React from 'react';


import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';


// import FORM components here
import SignUpForm from '../Components/Reusable/SignInForm';

// import CARD components here
import StylistCard from '../Components/Reusable/StylistCard';

//import BUTTON components here
import FullButton from '../Components/Reusable/Buttons/FullButton';


storiesOf('Login', module)
  .add('Login Boxes', () => <SignUpForm />);

storiesOf('Cards', module)
  .add('Stylist Card', () => <StylistCard StylistName='Chris Jannenga' StylistLocation='Phoenix, AZ' />)

storiesOf('Buttons', module)
  .add('Login', () => <FullButton />)
