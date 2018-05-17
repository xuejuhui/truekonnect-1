import React, {Component} from 'react'
import '../emoji.css'

import {Media} from 'reactstrap'

class SMSEmoji extends Component {
  render() {
    return (
      <div>
        <Media object src="https://truekonnect.com/wp-content/uploads/2018/05/SMS-184@2x.png" alt="custom emoji SMS text message bubble" />
      </div>
    )
  }
}

export default SMSEmoji
