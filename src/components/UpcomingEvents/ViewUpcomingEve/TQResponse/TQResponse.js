import React from 'react'
import './TQResponse.css'

function TQResponse() {
    return (
        <div className='TQResponse'>
            <h2>
                We have got your response regarding your interest.
            </h2>
            <img src={require("../../../../Assets/Images/tqfyr.png")} alt="" />
            <p>A mail will be shortly delivered to you.</p>
            <p>Till then, you can explore our website and follow us on our socials.</p>
            <a href="https://linktr.ee/codingjunction"><button className='view-soc-buttton'>
                View Socials
            </button></a>
        </div>
    )
}

export default TQResponse
