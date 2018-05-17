import React, {Component} from 'react'
import './profile-build-card.css'

import {Container, Card, CardImg, CardText, CardBody, CardTitle, Button, Row, Col, Media} from 'reactstrap'

// Import emojis here
import PreviousButton from '../Buttons/PreviousButton.jsx'
import NextButton from '../Buttons/NextButton.jsx'

class ProfileBuildCard extends Component {
  constructor(props) {
    super(props);

    this.state = {};

  }

  render() {
    return (
      <Container>
      <Row>
      <Col sm="10" md='8' lg='6'>
        <Card className="shadow">
        <CardBody>
          <Row className="clearfix pb-3">
            <Col sm='12' className="d-flex align-self-center justify-content-center">
              <CardTitle className="align-self-center">I prefer stylists in their{this.props.AgeTitle}</CardTitle>
            </Col>
          </Row>
          <Row>
            <Col sm='6' className="py-1 d-flex align-items-center justify-content-center ProfileButton">
              {/* <ProfileButton /> */}
              <Media object src="https://camo.githubusercontent.com/0c394a0e5996343410dcafb13e65e6e6f997e4b6/68747470733a2f2f6d65646961312e67697068792e636f6d2f6d656469612f6939424c394a76597963786f492f3230302e676966" alt="no no no" class="ProfileButton"/>
            </Col>
            <Col sm='6' className="py-1 d-flex align-items-center justify-content-center">
              {/* <ProfileButton /> */}
              <Media object src="https://camo.githubusercontent.com/0c394a0e5996343410dcafb13e65e6e6f997e4b6/68747470733a2f2f6d65646961312e67697068792e636f6d2f6d656469612f6939424c394a76597963786f492f3230302e676966" alt="no no no" class="ProfileButton"/>
            </Col>
          </Row>
          <Row>
            <Col sm='6' className="py-1 d-flex align-items-center justify-content-center ProfileButton">
              {/* <ProfileButton /> */}
              <Media object src="https://camo.githubusercontent.com/0c394a0e5996343410dcafb13e65e6e6f997e4b6/68747470733a2f2f6d65646961312e67697068792e636f6d2f6d656469612f6939424c394a76597963786f492f3230302e676966" alt="no no no" class="ProfileButton"/>
            </Col>
            <Col sm='6' className="py-1 d-flex align-items-center justify-content-center">
              {/* <ProfileButton /> */}
              <Media object src="https://camo.githubusercontent.com/0c394a0e5996343410dcafb13e65e6e6f997e4b6/68747470733a2f2f6d65646961312e67697068792e636f6d2f6d656469612f6939424c394a76597963786f492f3230302e676966" alt="no no no" class="ProfileButton"/>
            </Col>
          </Row>
          <Row>
            <Col sm='6' className="py-1 d-flex align-items-center justify-content-center ProfileButton">
              {/* <ProfileButton /> */}
              <Media object src="https://camo.githubusercontent.com/0c394a0e5996343410dcafb13e65e6e6f997e4b6/68747470733a2f2f6d65646961312e67697068792e636f6d2f6d656469612f6939424c394a76597963786f492f3230302e676966" alt="no no no" class="ProfileButton"/>
            </Col>
            <Col sm='6' className="py-1 d-flex align-items-center justify-content-center">
              {/* <ProfileButton /> */}
              <Media object src="https://camo.githubusercontent.com/0c394a0e5996343410dcafb13e65e6e6f997e4b6/68747470733a2f2f6d65646961312e67697068792e636f6d2f6d656469612f6939424c394a76597963786f492f3230302e676966" alt="no no no" class="ProfileButton"/>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
              <PreviousButton />
              <NextButton />
          </Row>
        </CardBody>
        </Card>
      </Col>
    </Row>
    </Container>
    )
  }
}

export default ProfileBuildCard
