import React from 'react'

import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Row, Col} from 'reactstrap'

class StylistCard extends React.Component {
  constructor(props) {
    super(props);
    this.state= {}
  }

  render () {
    return (
      <Row>
      <Col sm="8">
        <Card body>
          <CardTitle>{this.props.StylistName}</CardTitle>
          <CardText>{this.props.StylistLocation}</CardText>
          <Button>Go somewhere</Button>
          <Button>Blankness</Button>
        </Card>
      </Col>
    </Row>
    )
  }
}

export default StylistCard
