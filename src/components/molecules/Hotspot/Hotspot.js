import React from 'react'
import PropTypes from 'prop-types'

import { Icon } from '../../atoms/'

function Hotspot(props) {
  const { icon, text } = props
  return (
    <div className="col-lg-3 col-md-4 col-12 text-center card pt-4 ml-lg-4 mr-lg-4 mb-4 mb-md-0">
      <p className="mb-0">
        <Icon detail={icon}/>
      </p>
      <p className="mt-3">{text}</p>
    </div>
  )
}

Hotspot.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string
}

export default Hotspot
