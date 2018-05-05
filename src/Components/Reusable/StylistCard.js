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
      <Col sm="6">
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <Col sm="6">
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
    </Row>
    )
  }
}

export default StylistCard
