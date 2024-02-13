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
            <p>The candidates who applied will be contacted and a test will be conducted followed by an Interview.</p>
            <p>Till then, you can follow this pdf to go through the format and the syllabus of the Test. <a href="www.google.com/">View Syllabus</a></p>
        </div>
    )
}

export default TQResponse
