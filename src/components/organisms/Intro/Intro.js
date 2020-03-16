import React from 'react'
import {Hotspot} from '../../molecules/'

function Intro() {
  return (
    <div className="row justify-content-center align-items-center mt-5 pt-5 pb-5">
      <Hotspot
        text = "Mauris fermentum, elit id gravida ultrices, massa augue commodo lacus, vitae ornare est lorem quis lectus. Quisque metus nibh, gravida eu bibendum et, condimentum eu mauris. Aenean pharetra ut lectus et viverra. Curabitur in efficitur elit. Aenean non nunc eget nulla imperdiet rutrum. Praesent rhoncus, diam nec malesuada aliquet, metus lacus sodales urna, sit amet tempor lectus arcu non odio. Morbi ac porta neque. Donec vitae hendrerit magna."
        icon = {{name: "fa-book-open", color: "#28a745"}}
      />
      <Hotspot
        text = "Mauris fermentum, elit id gravida ultrices, massa augue commodo lacus, vitae ornare est lorem quis lectus. Quisque metus nibh, gravida eu bibendum et, condimentum eu mauris. Aenean pharetra ut lectus et viverra. Curabitur in efficitur elit. Aenean non nunc eget nulla imperdiet rutrum. Praesent rhoncus, diam nec malesuada aliquet, metus lacus sodales urna, sit amet tempor lectus arcu non odio. Morbi ac porta neque. Donec vitae hendrerit magna."
        icon = {{name:"fa-user", color: "#28a745"}}
      />
      <Hotspot
        text = "Mauris fermentum, elit id gravida ultrices, massa augue commodo lacus, vitae ornare est lorem quis lectus. Quisque metus nibh, gravida eu bibendum et, condimentum eu mauris. Aenean pharetra ut lectus et viverra. Curabitur in efficitur elit. Aenean non nunc eget nulla imperdiet rutrum. Praesent rhoncus, diam nec malesuada aliquet, metus lacus sodales urna, sit amet tempor lectus arcu non odio. Morbi ac porta neque. Donec vitae hendrerit magna."
        icon = {{name: "fa-question", color: "#28a745"}}
      />
    </div>


  )
}

export default Intro
