import React from 'react';

import "./Landing.css";

export default function Welcome() {
  window.scrollTo(0,0);
  return (
    <div className='landing'>
      <div className='intro'>
          <h1>WE ARE THE CODING JUNCTION</h1>
      </div>
      <div className='typing-text'>
        <h3>
          University Institute of Technology
        </h3>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/uWiQGzq2R8Y?si=nKv2SlT8dOaX3RIQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
  )
}
