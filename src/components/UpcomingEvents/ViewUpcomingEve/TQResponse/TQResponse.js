import React from 'react'
import './TQResponse.css'

function TQResponse() {
    return (
        <div className='TQResponse'>
            <h2>
                Thank You for your response &#128513;
            </h2>
            <img src={require("../../../../Assets/Images/tqfyr.png")} alt="" />
            <p>We have got your response regarding your Interest. A mail will be shortly delivered to you.</p>
        </div>
    )
}

export default TQResponse
