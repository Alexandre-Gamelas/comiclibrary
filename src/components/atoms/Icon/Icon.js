import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'



function Icon(props) {
  const {name, color} = props.detail
  return (
    <IWithStyles className={'fas fa-3x ' + name} color={color}></IWithStyles>
  )
}

Icon.propTypes = {
  name: PropTypes.string
}

const IWithStyles = styled.i`
  color: ${props => props.color ? props.color : 'red'};
  `

export default Icon
