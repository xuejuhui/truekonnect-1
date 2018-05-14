import React, {Component} from 'react'
import './full-button.css'


import {Button} from 'reactstrap'

class FullButton extends Component {
  constructor(props){
    super(props);

    this.state = {};
  };

  render() {
    return (
      <div>
        <Button block outline className='active-button rounded-button'>{this.props.ButtonText}</Button>
      </div>
    )
  }
}

export default FullButton
