import React, {Component} from 'react'
import './heart-button.css'


import {Button} from 'reactstrap'

class HeartButton extends Component {
  constructor(props){
    super(props);

    this.state = {};
  };

  render() {
    return (
      <div>
        <Button color="white" className="rounded-circle vibe-or-not-buttons shadow-sm">
          <i className="fas fa-heart"></i>
        </Button>
      </div>
    )
  }
}

export default HeartButton
