import React, {Component} from 'react'
import './full-logo.css'

import {Media} from 'reactstrap'

class FullLogo extends Component {
  render() {
    return (
      <div>
        <Media object src="https://truekonnect.com/wp-content/uploads/2018/05/TK-logo-lockup-stylists-color@3x.png"  className ='' alt="Full color TrueKonnect logo lockup with client-facing tagline" />
      </div>
    )
  }
}

export default FullLogo
