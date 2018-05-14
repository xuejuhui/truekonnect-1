import React, {Component} from 'react'
import './intro-card-graphic.css'

import {Media} from 'reactstrap'

class IntroCardGraphic extends Component {
  render() {
    return (
      <div>
        <Media object src="https://truekonnect.com/wp-content/uploads/2018/05/TK-intro-image@3x.png"  className ='' alt="Full color TrueKonnect logo lockup with client-facing tagline" />
      </div>
    )
  }
}

export default IntroCardGraphic
