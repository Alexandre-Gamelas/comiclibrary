import React from 'react'
import styled from 'styled-components'

function TitleA(props) {
  const text = props.children
  return (
    <article className="col-12 pl-5">
      <H1WithStyles className="pl-2 mb-0">{text}</H1WithStyles>
    </article>
  )
}

const H1WithStyles = styled.h1`
    border-left: 5px solid green; 
`

export default TitleA
