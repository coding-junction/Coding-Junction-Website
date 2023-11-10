import React from 'react'
import './Features.css'

export default function Features(props) {
  return (
    <div className='Features'>
       <div className='feat-circle-img'>
            <img src={props.img} alt={props.key} />
       </div>
       <div className="feat-title">
            {props.title}
       </div>
    </div>
  )
}
