import React, {Component} from 'react'
import './navbar.css'

import {Container, Button, Row, Col, Media} from 'reactstrap'

//import icons & buttons here
import IconGraphic from '../Brand-Assets/IconGraphic';
import ProfileButton from './ProfileButton';
import MessagingButton from './MessagingButton';

class NavBar extends Component {
  render() {
    return (
      <div>
        <Container className="pt-2">
          <Row className="d-flex justify-content-between align-items-center">
            <ProfileButton />
            <IconGraphic/>
            <MessagingButton />
          </Row>
        </Container>
      </div>
    )
  }
}

export default NavBar
