import React from 'react';


import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

// import BRAND ASSET components here
import FullLogo from '../Components/Reusable/Brand-Assets/FullLogo'

// import FORM components here
import SignUpForm from '../Components/Reusable/SignInForm';

// import CARD components here
import StylistCard from '../Components/Reusable/StylistCard';

//import BUTTON components here
import FullButton from '../Components/Reusable/Buttons/FullButton';

storiesOf('Brand Assets', module)
  .add('Full Logo', () => <FullLogo />)

storiesOf('Cards', module)
  .add('Stylist Card', () => <StylistCard StylistName = 'Teresa Young' StylistLocation = 'Scottsdale, AZ' StylistReligion = 'Christian' StylistExperience = '11+' StylistSpecialty = 'Extensions, Chemical Perms, Ethnic Hair' />)

storiesOf('Buttons', module)
  .add('Login', () => <FullButton ButtonText = 'Log In' />)
  .add('Sign Up', () => <FullButton ButtonText= 'Sign Up' />)
  .add('Next', () => <FullButton ButtonText = 'Next' />)

storiesOf('Login', module)
  .add('Login Boxes', () => <SignUpForm />);
