import React, { useState } from 'react';
import './ProjDom.css'
import '../../Assets/Images/webdev.png'

export default function ProjDom() {

  const[isOpen, setIsOpen] = useState(false);
  return (
    <div className='ProjDom'>
      <div className='projDom-head'>
        Project Domains
      </div>
      <div className='projDoms-domains'>
        <span className='domains-card'>
          <h5>
            Web Dev
          </h5>
          <img src= {require("../../Assets/Images/webdev.png")} />
        </span>
        <span className='domains-card'>
          <h5>
            Android
          </h5>
          <img src= {require("../../Assets/Images/android.png")} />
        </span>
        <span className='domains-card'>
          <h5>
            C/C++
          </h5>
          <img src= {require("../../Assets/Images/cpp.png")} />
        </span>
        <span className='domains-card'>
          <h5>
            AI/ML
          </h5>
          <img src= {require("../../Assets/Images/ai.png")} />
        </span>
      </div>
        
    </div>
  )
}
