import React, { useState } from 'react';
import {motion, spring} from "framer-motion";
// import { useState } from 'react';
import './ProjDom.css'

export default function ProjDom() {

  const[isOpen, setIsOpen] = useState(false);
  return (
    <div className='ProjDom'>
      <div className='projDom-head'>Project Domains</div>
        < motion.div 
          transition={{ layout: { duration: 0.1, type: "spring"}}} 
          layout 
          onClick={() => setIsOpen(!isOpen)} 
          className='cards'>
          <motion.h2 layout="position" className='card-title'>Web Development
            {isOpen &&
              <motion.div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quasi debitis nam, exercitationem ad unde accusamus maiores asperiores amet saepe odit voluptatibus recusandae quibusdam sequi quaerat soluta ab maxime voluptates.</p>
              </motion.div>
            }
          </motion.h2>
        </motion.div>
    </div>
  )
}
