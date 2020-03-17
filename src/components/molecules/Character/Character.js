import React from 'react'

function Character(props) {
  const { id, name } = props.character
  return (
    <div>
      <article className="col-12">
        <h4>{name}, id: {id}</h4>
      </article>
    </div>
  )
}

export default Character
