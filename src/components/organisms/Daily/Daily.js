import React, { Fragment } from 'react'
import { TitleA, Loading } from '../../atoms'
import { Character } from '../../molecules'

function Daily(props) {
  const { character, loading } = props

  return (
    <Fragment>
      <section className="row mt-5 pl-5">
        <TitleA>Daily</TitleA>
      </section>
      {loading &&
        <Loading />
      }
      {character &&
        <Character character={character} />
      }
    </Fragment>

  )
}

export default Daily