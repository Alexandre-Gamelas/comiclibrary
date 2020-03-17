import React from 'react'
import { Hotspot } from '../../molecules/'

function Intro() {
  return (
    <section className="row justify-content-center mt-5 pt-5">
      <Hotspot icon={{ name: "fa-book-open", color: "#28a745" }}>
        Welcome to Gamelas' library! This is a costum built comic book repo where you can find all the info on your favourite coloured strips and beyond! Feel free to explore and have a good time!
      </Hotspot>

      <Hotspot icon={{ name: "fa-user", color: "#28a745" }}>
        You can use this app to search for characters in detail and find out all about them in a simple and intuative way. You can also check in daily for a random character bellow! Maybe you will find a new favourite!
      </Hotspot>

      <Hotspot icon={{ name: "fa-question", color: "#28a745" }}>
        This app is built using functional components and hooks. It follows an <a href='https://bradfrost.com/blog/post/atomic-web-design/' target='blank'>atomic design</a>. Components that need request logic are encapsulated in containers that take care of said logic. Also uses the context API, styled components and axios. Last but not least this is the first time I use git without a GUI
      </Hotspot>
    </section>


  )
}

export default Intro
