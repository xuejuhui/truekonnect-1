import React, {Component} from 'react'
import './next-button.css'


import {Button} from 'reactstrap'

class NextButton extends Component {
  constructor(props){
    super(props);

    this.state = {};
  };

  render() {
    return (
      <div>
        <Button color="white" className="rounded-circle vibe-or-not-buttons shadow-sm">
          <i className="fas fa-chevron-right"></i>
        </Button>
      </div>
    )
  }
}

export default NextButton
