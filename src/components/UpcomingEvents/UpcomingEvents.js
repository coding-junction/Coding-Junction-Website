import React from 'react'
import './UpcomingEvents.css'
import { Link } from 'react-router-dom';

function UpcomingEvents() {
  return (
    <div className='upcomingEvents'>
        <div className="events-head">
            <h1>Upcoming Event</h1>
        </div>
        <div className="events-container">
            <img src={require("../../Assets/Images/web3_event.png")} alt="event-banner" />
        </div>
        <div className="events-link-button">
            <Link to = "https://linktr.ee/konararitra72">
              <button>Register</button>
            </Link>
        </div>
    </div>
  )
}

export default UpcomingEvents;
