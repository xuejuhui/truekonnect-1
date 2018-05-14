import React, {Component} from 'react'
import './icon-graphic.css'

import {Media} from 'reactstrap'

class IconGraphic extends Component {
  render() {
    return (
      <div>
        <Media object src="https://truekonnect.com/wp-content/uploads/2018/05/TK-icon-green@3x-noTM.png"  className ='app-logo' alt="TrueKonnect icon" />
      </div>
    )
  }
}

export default IconGraphic
