import React from 'react'
import './Events.css'

function Events() {
  return (
    <div className='Events'>
        <div className="events-head">
            <h1>Upcoming Events</h1>
        </div>
        <div className="events-container">
            <img src={require("../../Assets/Images/intro-eve-banner.png")} alt="event-banner" />
        </div>
    </div>
  )
}

export default Events;
