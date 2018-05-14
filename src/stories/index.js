import React from 'react';


import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

// import BRAND ASSET components here
import FullLogo from '../Components/Reusable/Brand-Assets/FullLogo';
import IntroCardGraphic from '../Components/Reusable/Brand-Assets/IntroCardGraphic'
import IconGraphic from '../Components/Reusable/Brand-Assets/IconGraphic'

// import CARD components here
import StylistCard from '../Components/Reusable/StylistCard';

//import NAVIGATION components here
import NavBar from '../Components/Reusable/Navigation/NavBar';

//import BUTTON components here
import FullButton from '../Components/Reusable/Buttons/FullButton';

// import FORM components here
import SignUpForm from '../Components/Reusable/SignInForm';

storiesOf('Brand Assets', module)
  .add('Full Logo', () => <FullLogo />)
  .add('Intro Card Graphic', () => <IntroCardGraphic />)
  .add('Icon', () => <IconGraphic />)

storiesOf('Cards', module)
  .add('Stylist Card', () => <StylistCard StylistName = 'Teresa Young' StylistLocation = 'Scottsdale, AZ' StylistReligion = 'Christian' StylistExperience = '11+' StylistSpecialty = 'Extensions, Chemical Perms, Ethnic Hair' />)

storiesOf('Navigation', module)
  .add('Top Navbar', () => <NavBar />)

storiesOf('Buttons', module)
  .add('Login', () => <FullButton ButtonText = 'Log In' />)
  .add('Sign Up', () => <FullButton ButtonText= 'Sign Up' />)
  .add('Next', () => <FullButton ButtonText = 'Next' />)
  .add('Resend SMS', () => <FullButton ButtonText = 'Resend SMS' />)
  .add('User Type', () => <FullButton ButtonText = 'User Type:' />)
  .add('Gender', () => <FullButton ButtonText = 'Gender: ' />)
  .add('Match With', () => <FullButton ButtonText = 'Match with:' />)
  .add('Age', () => <FullButton ButtonText = 'Age:' />)
  .add('Age Range Desired', () => <FullButton ButtonText = 'Age Range Desired:' />)
  .add('Experience Desired', () => <FullButton ButtonText = 'Experience Desired:' />)
  .add('Zip Code', () => <FullButton ButtonText = 'Zip Code:' />)
  .add('Search Radius', () => <FullButton ButtonText = 'Search Radius:' />)
  .add('Willing to Spend', () => <FullButton ButtonText = 'Willing to Spend:' />)
  .add('Contact Preference', () => <FullButton ButtonText = 'Contact Preference:' />)
  .add('Religion', () => <FullButton ButtonText = 'Religion:' />)
  .add('Match With Religions', () => <FullButton ButtonText = 'Match with Religions:' />)
  .add('Ethnicity', () => <FullButton ButtonText = 'Ethnicity:' />)
  .add('Services Desired', () => <FullButton ButtonText = 'Services Desired:' />)
  .add('Double Booking OK', () => <FullButton ButtonText = 'Double Booking OK:' />)
  .add('Salon Types', () => <FullButton ButtonText = 'Salon Types:' />)


storiesOf('Login', module)
  .add('Login Boxes', () => <SignUpForm />);
