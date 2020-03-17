import React from 'react'
import { TitleA } from '../../atoms'
import { Character } from '../../molecules'

function Daily(props) {
  const { character } = props

  return (
    <section className="row mt-5 pl-5">
      <TitleA>Daily</TitleA>
      <Character character={character} />
    </section>
  )
}

export default Daily