import React from 'react'
import './ArchList.css'
import { Link } from 'react-router-dom'

function ArchList(props) {
    return (
        <Link to={props.link}>
        <button className='ArchList'>
            <div className='AL-title'>
                <h2>{props.title}</h2>
            </div>
            <div className='AL-date'>
                <p>{props.date}</p>
            </div>
        </button>
        </Link>
    )
}

export default ArchList
