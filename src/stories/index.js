import React from 'react';
import '../App.css'

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

// import BRAND ASSET components here
import FullLogo from '../Components/Reusable/Brand-Assets/FullLogo';
import IntroCardGraphic from '../Components/Reusable/Brand-Assets/IntroCardGraphic'
import IconGraphic from '../Components/Reusable/Brand-Assets/IconGraphic'

// import CARD components here
import StylistCard from '../Components/Reusable/StylistCard';
import ProfileBuildCard from '../Components/Reusable/Cards/ProfileBuildCard'

//import NAVIGATION components here
import NavBar from '../Components/Reusable/Navigation/NavBar';

//import BUTTON components here
import FullButton from '../Components/Reusable/Buttons/FullButton';
import HeartButton from '../Components/Reusable/Buttons/HeartButton';
import XButton from '../Components/Reusable/Buttons/XButton';
import PreviousButton from '../Components/Reusable/Buttons/PreviousButton';
import NextButton from '../Components/Reusable/Buttons/NextButton';
import InfoButton from '../Components/Reusable/Buttons/InfoButton';

//import EMOJI components here
import OneCandle from '../Components/Reusable/Emoji-Icons/Age/OneCandle'
import TwoCandles from '../Components/Reusable/Emoji-Icons/Age/TwoCandles'
import ThreeCandles from '../Components/Reusable/Emoji-Icons/Age/ThreeCandles'
import FourCandles from '../Components/Reusable/Emoji-Icons/Age/FourCandles'
import FiveCandles from '../Components/Reusable/Emoji-Icons/Age/FiveCandles'
import SixCandles from '../Components/Reusable/Emoji-Icons/Age/SixCandles'

import ClientEmoji from '../Components/Reusable/Emoji-Icons/User-Types/ClientEmoji'
import StylistEmoji from '../Components/Reusable/Emoji-Icons/User-Types/StylistEmoji'

import MaleEmoji from '../Components/Reusable/Emoji-Icons/Gender/MaleEmoji'
import FemaleEmoji from '../Components/Reusable/Emoji-Icons/Gender/FemaleEmoji'
import LGBTQEmoji from '../Components/Reusable/Emoji-Icons/Gender/LGBTQEmoji'

import MoneyOne from '../Components/Reusable/Emoji-Icons/Money/MoneyOne'
import MoneyTwo from '../Components/Reusable/Emoji-Icons/Money/MoneyTwo'
import MoneyThree from '../Components/Reusable/Emoji-Icons/Money/MoneyThree'
import MoneyFour from '../Components/Reusable/Emoji-Icons/Money/MoneyFour'
import MoneyFive from '../Components/Reusable/Emoji-Icons/Money/MoneyFive'
import MoneySix from '../Components/Reusable/Emoji-Icons/Money/MoneySix'

import CarrierPidgeonEmoji from '../Components/Reusable/Emoji-Icons/Communication/CarrierPidgeonEmoji'
import EmailEmoji from '../Components/Reusable/Emoji-Icons/Communication/EmailEmoji'
import FacebookMessengerEmoji from '../Components/Reusable/Emoji-Icons/Communication/FacebookMessengerEmoji'
import InstagramEmoji from '../Components/Reusable/Emoji-Icons/Communication/InstagramEmoji'
import PhoneEmoji from '../Components/Reusable/Emoji-Icons/Communication/PhoneEmoji'
import SMSEmoji from '../Components/Reusable/Emoji-Icons/Communication/SMSEmoji'

import ChristianEmoji from '../Components/Reusable/Emoji-Icons/Religion/ChristianEmoji'
import JewishEmoji from '../Components/Reusable/Emoji-Icons/Religion/JewishEmoji'
import Mormon from '../Components/Reusable/Emoji-Icons/Religion/Mormon'
import MuslimEmoji from '../Components/Reusable/Emoji-Icons/Religion/MuslimEmoji'
import SpiritualEmoji from '../Components/Reusable/Emoji-Icons/Religion/SpiritualEmoji'
import NoneEmoji from '../Components/Reusable/Emoji-Icons/Religion/NoneEmoji'

import WhiteEmoji from '../Components/Reusable/Emoji-Icons/Ethnicity/WhiteEmoji'
import BlackEmoji from '../Components/Reusable/Emoji-Icons/Ethnicity/BlackEmoji'
import HispanicEmoji from '../Components/Reusable/Emoji-Icons/Ethnicity/HispanicEmoji'
import AsianEmoji from '../Components/Reusable/Emoji-Icons/Ethnicity/AsianEmoji'
import NativeEmoji from '../Components/Reusable/Emoji-Icons/Ethnicity/NativeEmoji'
import OtherEmoji from '../Components/Reusable/Emoji-Icons/Ethnicity/OtherEmoji'


// import FORM components here
import SignUpForm from '../Components/Reusable/SignInForm';

storiesOf('Brand Assets', module)
  .add('Full Logo', () => <FullLogo />)
  .add('Intro Card Graphic', () => <IntroCardGraphic />)
  .add('Icon', () => <IconGraphic />)

storiesOf('Cards', module)
  .add('Stylist Card', () => <StylistCard StylistName = 'Teresa Young' StylistLocation = 'Scottsdale, AZ' StylistReligion = 'Christian' StylistExperience = '11+' StylistSpecialty = 'Extensions, Chemical Perms, Ethnic Hair' />)
  .add('Profile Building', () => <ProfileBuildCard />)

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
  .add('Heart Button', () => <HeartButton />)
  .add('X Button', () => <XButton />)
  .add('Previous Button', () => <PreviousButton />)
  .add('Next Button', () => <NextButton />)
  .add('Info Button', () => <InfoButton />)


storiesOf('Emojis/Age', module)
  .add('Teens', () => <OneCandle />)
  .add('20s', () => <TwoCandles />)
  .add('30s', () => <ThreeCandles />)
  .add('40s', () => <FourCandles />)
  .add('50s', () => <FiveCandles />)
  .add('60s and Older', () => <SixCandles />)

storiesOf('Emojis/Gender', module)
  .add('Male', () => <MaleEmoji />)
  .add('Female', () => <FemaleEmoji />)
  .add('LGBTQ+', () => <LGBTQEmoji />)

storiesOf('Emojis/User-Type', module)
  .add('Client', () => <ClientEmoji />)
  .add('Stylist', () => <StylistEmoji />)

storiesOf('Emojis/Money', module)
  .add('0-50', () => <MoneyOne />)
  .add('50-100', () => <MoneyTwo />)
  .add('100-250', () => <MoneyThree />)
  .add('250-500', () => <MoneyFour />)
  .add('500-1000', () => <MoneyFive />)
  .add('1000+', () => <MoneySix />)

storiesOf('Emojis/Communication', module)
  .add('Phone', () => <PhoneEmoji />)
  .add('Text', () => <SMSEmoji />)
  .add('Email', () => <EmailEmoji />)
  .add('Instagram', () => <InstagramEmoji />)
  .add('Carrier Pidgeon', () => <CarrierPidgeonEmoji />)
  .add('Messenger', () => <FacebookMessengerEmoji />)

storiesOf('Emojis/Religion', module)
  .add('Christian', () => <ChristianEmoji />)
  .add('Jewish', () => <JewishEmoji />)
  .add('Mormon', () => <Mormon />)
  .add('Muslim', () => <MuslimEmoji />)
  .add('Spiritual/Other', () => <SpiritualEmoji />)
  .add('None', () => <NoneEmoji />)

storiesOf('Emojis/Ethnicity', module)
  .add('White/Caucasian', () => <WhiteEmoji />)
  .add('Black/African Descent', () => <BlackEmoji />)
  .add('Hispanic/Latino', () => <HispanicEmoji />)
  .add('Asain/Pacific Islander', () => <AsianEmoji />)
  .add('Native American/Alaskan', () => <NativeEmoji />)
  .add('Other', () => <OtherEmoji />)



storiesOf('Login', module)
  .add('Login Boxes', () => <SignUpForm />);
