import React, {Component} from 'react'
import './navbar.css'

import {Container, Button, Row, Col, Media} from 'reactstrap'

//import Icon here
import IconGraphic from '../Brand-Assets/IconGraphic';

class ProfileButton extends Component {
  render() {
    return (
      <div>
        <Button color="white" className="nav-buttons">
          <i className="fas fa-user-circle fa-2x nav-fas"></i>
        </Button>
      </div>
    )
  }
}

export default ProfileButton
