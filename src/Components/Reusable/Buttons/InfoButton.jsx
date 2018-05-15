import React, {Component} from 'react'
import './info-button.css'


import {Button} from 'reactstrap'

class InfoButton extends Component {
  constructor(props){
    super(props);

    this.state = {};
  };

  render() {
    return (
      <div>
        <Button color="white" className="rounded-circle vibe-or-not-buttons shadow-sm">
          <i className="fas fa-info"></i>
        </Button>
      </div>
    )
  }
}

export default InfoButton
