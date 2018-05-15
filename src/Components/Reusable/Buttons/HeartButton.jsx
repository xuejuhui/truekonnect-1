import React, {Component} from 'react'
import './float-buttons.css'


import {Button} from 'reactstrap'

class HeartButton extends Component {
  constructor(props){
    super(props);

    this.state = {};
  };

  render() {
    return (
      <div>
        <Button color="white" className="rounded-circle float-buttons">
          <i className="fas fa-heart"></i>
        </Button>
      </div>
    )
  }
}

export default HeartButton
