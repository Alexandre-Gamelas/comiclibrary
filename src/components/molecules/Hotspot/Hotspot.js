import React from 'react'
import PropTypes from 'prop-types'

import { Icon } from '../../atoms/'

function Hotspot(props) {
  const { icon, text } = props
  return (
    <div className="col-lg-3 col-md-4 col-12 text-center pt-4 ml-lg-4 mr-lg-4 mb-4 mb-md-0">
      <p className="mb-0">
        <Icon detail={icon}/>
      </p>
      <h5 className="mt-3">{text}</h5>
    </div>
  )
}

Hotspot.propTypes = {
  icon: PropTypes.object,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ])
}

export default Hotspot
