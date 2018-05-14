import React from 'react'
import './stylist-card.css';

import {Container, Card, CardImg, CardText, CardBody, CardTitle, Button, Row, Col, Media} from 'reactstrap'

class StylistCard extends React.Component {
  constructor(props) {
    super(props);
    this.state= {}
  }

  render () {
    return (
      <Container>
      <Row>
      <Col sm="10" md='8' lg='6'>
        <Card className="shadow">
        <CardImg top width='100%' src='http://via.placeholder.com/400x400' />
        <CardBody>
          <Row className="clearfix pb-3">
            <Col sm='2'>
              <Media object src="http://via.placeholder.com/42x42"  className ='rounded-circle user-profile-image' alt="Generic placeholder image" />
            </Col>
            <Col sm='9' className="align-self-center">
              <CardTitle className="align-self-center">Teresa Young{/*this.props.StylistName*/}</CardTitle>
            </Col>
            <Col sm='1' className="float-right d-flex align-items-center justify-content-center">
              <i className="fas fa-ellipsis-h fa-lg"></i>
            </Col>
          </Row>
          <Row>
            <Col sm='2' className="py-1 d-flex align-items-center justify-content-center">
              <i className="fas fa-cut fa-lg dark-grey"></i>
            </Col>
            <Col sm="10" className="py-1">
            <CardText className="user-description-text">Extensions, Chemical Perms, Ethnic Hair{this.props.StylistSpecialty}</CardText>
            </Col>
          </Row>
          <Row>
            <Col sm='2' className="py-1 d-flex align-items-center justify-content-center">
              <i className="fas fa-id-card fa-lg dark-grey"></i>
            </Col>
            <Col sm="10" className="py-1">
            <CardText className="user-description-text">11+{this.props.StylistExperience} years of experience</CardText>
            </Col>
          </Row>
          <Row>
            <Col sm='2' className="py-1 d-flex align-items-center justify-content-center">
              <i className="fas fa-church fa-lg dark-grey"></i>
            </Col>
            <Col sm="10" className="py-1">
            <CardText className="user-description-text">Christian{this.props.StylistReligion}</CardText>
            </Col>
          </Row>
          {/* <Row className="pt-2">
            <Col sm="12">
              <CardText className="user-card-section-title">Bio</CardText>
            </Col>
          </Row> */}
          <Row className="py-3">
            <Col sm="12">
              <CardText className="user-bio">Founder of TrueKonnect, where we connect you to your ideal hairstylist. Empowering female entrepreneurs to live the way we were designed to be, PRETTY.</CardText>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
              <Button outline color="secondary" className="rounded-circle vibe-or-not-buttons"><i className="fas fa-times dark-grey"></i></Button>
              <Button outline color="danger" className="rounded-circle vibe-or-not-buttons"><i className="fas fa-heart red"></i></Button>
          </Row>
        </CardBody>
        </Card>
      </Col>
    </Row>
    </Container>
    )
  }
}

export default StylistCard
