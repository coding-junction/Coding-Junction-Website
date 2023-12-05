import React from 'react'
import './UpcomingEvents.css'
import { Link } from 'react-router-dom';

function UpcomingEvents() {
  return (
    <div className='upcomingEvents'>
        <div className="events-head">
            <h1>Upcoming Events</h1>
        </div>
        <div className="events-container">
            <img src={require("../../Assets/Images/brain-battle.jpg")} alt="event-banner" />
        </div>
        <div className="events-link-button">
            <Link to = "https://unstop.com/p/brain-battle-university-institute-of-technology-burdwan-university-835810?lb=kKUhd4v">
              <button>Join Event</button>
            </Link>
        </div>
    </div>
  )
}

export default UpcomingEvents;
