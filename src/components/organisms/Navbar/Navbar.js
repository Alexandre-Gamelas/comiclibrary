import React from 'react'

function Navbar() {
  return (
    <nav className="row bg-dark pl-5 p-4 align-items-center">
        <article className="col-2">
          <h5 className="text-light mb-0">Gamelas' Library</h5>
        </article>
      
        <article className="col-10">
          <p className="text-warning mb-0">*In Development*</p>
        </article>
    </nav>
  )
}

export default Navbar
