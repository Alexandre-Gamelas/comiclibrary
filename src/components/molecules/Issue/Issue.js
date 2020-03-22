import React from 'react'

function Issue(props) {
  const { name, image, deck } = props.issue

  return (
    <article className="col-4 col-md-4 pr-5 pl-5 pr-md-5">
      <h2>{name}</h2>
      <p>
        {deck ? deck : "No summary for this issue, we are sorry!"}
      </p>
      <p>
        <img className="img-fluid" src={image.small_url} alt="First Issue Img" />
      </p>
    </article>
  )
}

export default Issue