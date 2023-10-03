import React from 'react'
import './UnderBuild.css'
import { Link } from 'react-router-dom'

export default function UnderBuild() {
  return (
    <div className='UnderBuild'>
      <h2>
        The Page is under Construction right now !!!  
      </h2>
      <img src={require('../../Assets/Images/uc.png')} alt="under-construction" />
      <p>If you want to help making or fixing this website, please feel free to contact any core member of Coding Junction Club.
      Thank You for your patience...</p>
      <Link to = '/'>
        <button>Go back to Home</button>
      </Link>
    </div>
  )
}
