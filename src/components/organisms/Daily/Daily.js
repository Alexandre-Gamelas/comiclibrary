import React, { Fragment } from 'react'
import { TitleA, Loading } from '../../atoms'
import { Character } from '../../molecules'
import { Issue } from '../../molecules'

function Daily(props) {
  const { character, issue, loading } = props

  return (
    <Fragment>
      <section className="row mt-5 pl-5">
        <TitleA>Daily</TitleA>
      </section>
      {loading &&
        <Loading />
      }
      {character, issue &&
        <div className="row pt-4 animated fadeIn">
          <Character character={character} />
          <Issue issue={issue} />
        </div>
      }
    </Fragment>

  )
}

export default Daily