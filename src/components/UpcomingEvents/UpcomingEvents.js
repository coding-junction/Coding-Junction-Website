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
            <div className="ep-event-title-date">
              <h2>
                &#9733; {event.name}
                <div className='ec-live-circle'></div>
                <span className='ec-live'>Live</span>
              </h2>
              <h2>
                {(event.isLive === true) ?
                  <>
                    <div className='ec-live-circle-mob'></div>
                    <span className='ec-live-mob'>Live</span>
                  </> :
                  <></>
                }
              </h2>
              <p>
                Date of the Event: {event.doe}
              </p>
            </div>
            <div className="ep-event-banner">
              <img src={event.bannerLink} alt={`Image of ${event.name}`} />
            </div>
            <div className="ep-event-desc">
              <h3>Description:</h3>
              <p>
                {event.desc}
              </p>
            </div>
            <div className="events-link-button">
              <Link to='/view-event'>
                <button>Register</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UpcomingEvents;

