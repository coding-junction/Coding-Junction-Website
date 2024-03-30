import React from 'react'
import './UpcomingEvents.css'
import { Link } from 'react-router-dom';
import eveArr from '../EventsPage/EventsArray.json'

function UpcomingEvents() {
  const liveEvents = eveArr.eventsArray.filter(event => event.isLive);

  return (
    <div className='upcomingEvents'>
      <div className="events-head">
        <h1>Upcoming Events</h1>
      </div>
      {liveEvents.map(event => (
        <div key={event.key}>
          <div className="events-container">
            <img src={event.bannerLink} alt="event-banner" />
          </div>
          <div className="events-link-button">
            <Link to={event.regLink}>
              <button>Register</button>
            </Link>
          </div>
        </div>
      ))} 
    </div>
  );
}

export default UpcomingEvents;

