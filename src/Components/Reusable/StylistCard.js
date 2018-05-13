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
        <Card>
        <CardImg top width='100%' src='http://via.placeholder.com/200x200' />
        <CardBody>
          <Row className="clearfix">
            <Col sm='2'>
              <Media object src="http://via.placeholder.com/64x64"  className ='rounded-circle user-profile-image mx-auto' alt="Generic placeholder image" />
            </Col>
            <Col sm='8' className="inline">
              <CardTitle className="align-middle py-4">{this.props.StylistName}</CardTitle>
            </Col>
            <Col sm='1' className="float-right">
              <i className="fas fa-ellipsis-h"></i>
            </Col>
          </Row>
          <Row>
            <Col sm='2' className="py-1">
            <i className="fas fa-cut dark-grey user-description-icon"></i>
            </Col>
            <Col sm="10" className="py-1">
            <CardText className="user-description-text">Extensions, Chemical Perms, Ethnic Hair{this.props.StylistSpecialty}</CardText>
            </Col>
          </Row>
          <Row>
            <Col sm='2' className="py-1">
            <i className="fas fa-id-card dark-grey user-description-icon"></i>
            </Col>
            <Col sm="10" className="py-1">
            <CardText className="user-description-text">6-10{this.props.StylistExperience} years of experience</CardText>
            </Col>
          </Row>
          <Row>
            <Col sm='2' className="py-1">
            <i className="fas fa-church dark-grey user-description-icon"></i>
            </Col>
            <Col sm="10" className="py-1">
            <CardText className="user-description-text">Spiritual/Other{this.props.StylistReligion}</CardText>
            </Col>
          </Row>
          <Row>
            <Col sm="12">
              <CardText className="user-card-section-title">Bio</CardText>
            </Col>
          </Row>
          <Row>
            <Col sm="12">
              <CardText className="user-bio">Founder of TrueKonnect, where we connect you to your ideal hairstylist. Empowering female entrepreneurs to live the way we were designed to be, PRETTY.</CardText>
            </Col>
          </Row>
          <Row>
            <Col sm={{size:1, offset:4}}>
              <Button outline color="secondary" className="rounded-circle vibe-or-not-buttons"><i className="fas fa-times dark-grey"></i></Button>
            </Col>
            <Col sm={{size:1, offset:1}}>
              <Button outline color="danger" className="rounded-circle vibe-or-not-buttons"><i className="fas fa-heart red"></i></Button>
            </Col>
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
