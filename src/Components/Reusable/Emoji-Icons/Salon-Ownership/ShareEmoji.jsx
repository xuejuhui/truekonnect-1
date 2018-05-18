import React, {Component} from 'react'
import '../emoji.css'

import {Media} from 'reactstrap'

class ShareEmoji extends Component {
  render() {
    return (
      <Media object className="w-25" src="https://truekonnect.com/wp-content/uploads/2018/05/SalonSpace-shared@2x.png" alt="custom emoji showing two women sharing a space" />
    )
  }
}

export default ShareEmoji
