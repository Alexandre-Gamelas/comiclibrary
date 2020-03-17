import React from 'react'

function Character(props) {
  const { id, name, image, birth, origin, deck } = props.character
  const { nameO } = origin
  const { icon_url, small_url, medium_url, screen_url } = image

  return (
    <section className="row pl-5 pt-4 animated fadeIn">
      <article className="col-3">
        <img src={small_url} alt="" className="img-fluid" />
      </article>
      <article className="col-6">
        <h2>{name}</h2>
        <p>{birth}</p>
        <p>{deck}</p>
      </article>
    </section>
  )
}

export default Character
