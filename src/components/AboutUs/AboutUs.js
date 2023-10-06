import React from 'react'
import "./AboutUs.css"
import { Link } from 'react-router-dom'

export default function AboutUs() {
  return (
    <div className='AboutUs'>
      <div className='aboutus-text-container-phone'>
          <div className='aboutus-text phone'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          <div className='aboutus-more-container'>
            <Link to = '/underConstruction'>
              <button>VIEW MORE</button>
            </Link>
          </div>
       </div>
       </div>
       <div className='aboutus-photo'>
            <img src="https://picsum.photos/1720/1080" alt="group pic" />
       </div>
       <div className='aboutus-text-container'>
          <div className='aboutus-text'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          <div className='aboutus-more-container'>
            <Link to = '/underConstruction'>
              <button>VIEW MORE</button>
            </Link>
          </div>
       </div>
       </div>
       <div className='aboutus-head'>
            About Us
        </div>
    </div>
  )
}
