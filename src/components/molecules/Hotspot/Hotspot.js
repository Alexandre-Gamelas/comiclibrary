import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Icon } from '../../atoms/'

function Hotspot(props) {
  const { icon } = props
  const text = props.children

  return (
    <div className="col-lg-4 col-md-4 col-12 text-center pt-5 pl-5 pr-5 pb-0 mb-4 mb-md-0">
      <DivWithStyles className="card pt-4 p-5">
        <p className="mb-0">
          <Icon detail={icon}/>
        </p>
        <h5 className="mt-3">{text}</h5>
      </DivWithStyles>
    </div>
  )
}

Hotspot.propTypes = {
  icon: PropTypes.object
}

const DivWithStyles = styled.div`
  min-height: 35vh;
` 

export default Hotspot
