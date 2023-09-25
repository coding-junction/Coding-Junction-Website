import React, { useState } from 'react';
import './ProjDom.css'

export default function ProjDom() {

  const[isOpen, setIsOpen] = useState(false);
  return (
    <div className='ProjDom'>
      <div className='projDom-head'>
        Project Domains
      </div>
      <div className='projDoms-domains'>
        <span className='domains-card'>Web Dev</span>
        <span className='domains-card'>Android</span>
        <span className='domains-card'>C/C++</span>
        <span className='domains-card'>AI/ML</span>
      </div>
        
    </div>
  )
}
