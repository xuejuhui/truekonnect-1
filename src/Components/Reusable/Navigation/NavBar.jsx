import React, {Component} from 'react'
import './navbar.css'

import {Container, Button, Row, Col, Media} from 'reactstrap'

//import Icon here
import IconGraphic from '../Brand-Assets/IconGraphic';

class NavBar extends Component {
  render() {
    return (
      <div>
        <Container className="pt-2">
          <Row className="d-flex justify-content-between align-items-center">
            <Button color="white" className="nav-buttons">
              <i className="fas fa-user-circle fa-2x nav-fas"></i>
            </Button>
            <Button color="white" className="nav-buttons">
              <IconGraphic/>
            </Button>
            <Button color="white" className="nav-buttons">
              <i className="fas fa-comments fa-2x nav-fas"></i>
            </Button>
          </Row>
        </Container>
      </div>
    )
  }
}

export default NavBar
