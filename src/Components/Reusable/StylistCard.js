import React from 'react'
import './App.css';

import {Container, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Row, Col, Media} from 'reactstrap'

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
          <Row>
            <Col sm='2'>
              <Media object src="http://via.placeholder.com/64x64"  className ='rounded-circle' alt="Generic placeholder image" />
            </Col>
            <Col sm='6'>
              <CardTitle className='align-middle'>{this.props.StylistName}</CardTitle>
            </Col>
            <Col sm={{size:1, offset:3}}>
              <i className="fas fa-ellipsis-h 2x"></i>
            </Col>
          </Row>
          <CardText>{this.props.StylistLocation}</CardText>
          <CardText ClassName="user-description-text">Beach and vacations</CardText>
          <Button>Go somewhere</Button>
        </CardBody>
        </Card>
      </Col>
    </Row>
    </Container>
    )
  }
}

export default StylistCard
