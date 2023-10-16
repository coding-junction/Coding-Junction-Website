import React from 'react'
import "./AboutUs.css"
import { Link } from 'react-router-dom'

export default function AboutUs() {
  return (
    <div className='AboutUs'>
      <div className='aboutus-text-container-phone'>
        <div className='aboutus-text phone'>
          <p>
            Coding Junction is a college coding club for coding enthusiasts. We are a community of students who are passionate about learning and building with code. We believe that coding is a powerful tool that can be used to solve real-world problems and create innovative solutions.
          </p>
          <p>
            Our mission is to provide a supportive and collaborative environment where students can learn and grow as coders. We are committed to building a diverse and inclusive coding community at our college. We welcome students of all skill levels and backgrounds to join us. Whether you are a complete beginner or an experienced coder, we have a place for you in our community.
          </p>
          <div className='aboutus-more-container'>
            <Link to='/underConstruction'>
              <button>VIEW MORE</button>
            </Link>
          </div>
        </div>
      </div>
      <div className='aboutus-photo'>
        <img src={require("../../Assets/Images/CJ-about-us-temp.jpg")} alt="group pic" />
      </div>
      <div className='aboutus-text-container'>
        <div className='aboutus-text'>
          <p>
            Coding Junction is a college coding club for coding enthusiasts. We are a community of students who are passionate about learning and building with code. We believe that coding is a powerful tool that can be used to solve real-world problems and create innovative solutions.
          </p>
          <p>
            Our mission is to provide a supportive and collaborative environment where students can learn and grow as coders. We are committed to building a diverse and inclusive coding community at our college. We welcome students of all skill levels and backgrounds to join us. Whether you are a complete beginner or an experienced coder, we have a place for you in our community.
          </p>
          <div className='aboutus-more-container'>
            <Link to='/underConstruction'>
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
