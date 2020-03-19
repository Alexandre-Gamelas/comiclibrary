import React, { Fragment } from 'react'

function Character(props) {
  const { name, image, birth, origin, deck, count_of_issue_appearances, publisher, first_appeared_in_issue } = props.character
  const { medium_url } = image

  return (
    <Fragment>
      <article className="col-4 pl-5 pr-5 pl-0">
        <img src={medium_url} alt="" className="img-fluid" />
      </article>
      <article className="col-4 col-md-4 pl-5 pr-5 pr-md-5">
        <h2>{name}</h2>
        <p>{birth}</p>
        <p>{deck}</p>
        <p><span className="font-weight-bold">First Issue:</span> {first_appeared_in_issue.name}</p>
        <span className="badge badge-info p-1">Apearences: {count_of_issue_appearances}</span>
        <span className="badge badge-danger p-1 ml-2">Origin: {origin.name}</span>
        <span className="badge badge-dark p-1 ml-2">Publisher: {publisher.name}</span>
      </article>
    </Fragment>
  )
}

export default Character
