import React from 'react'
import './IntroSess.css'

function EveTemp(props) {
    return (
        <div className='EveTemp'>
            <h1>Introductory Session</h1>
            <div className="eve-temp-img">
                <img src={require("../../../Assets/Images/intro-eve-banner2.png")} alt="event-banner" />
            </div>
            <div className='eve-temp-info'>
                <h2>Details</h2>
                <h3>{props.info.l1}</h3>
                <h3>{props.info.l2}</h3>
                <h3>{props.info.l3}</h3>
            </div>
        </div>
    )
}

export default EveTemp
