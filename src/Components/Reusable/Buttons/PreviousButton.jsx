import React, {Component} from 'react'
import './previous-button.css'


import {Button} from 'reactstrap'

class PreviousButton extends Component {
  constructor(props){
    super(props);

    this.state = {};
  };

  render() {
    return (
      <div>
        <Button color="white" className="rounded-circle vibe-or-not-buttons shadow-sm">
          <i className="fas fa-times"></i>
        </Button>
      </div>
    )
  }
}

export default PreviousButton
