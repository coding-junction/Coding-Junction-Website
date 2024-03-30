import React from 'react'
import './EventsPage.css'
import galleryJson from './EventsArray.json'
import { Link } from 'react-router-dom'

function EventsPage() {

    const arr = galleryJson.eventsArray;
    console.log(arr.reverse())

    return (
        <div className='EventsPage'>
            <div className='ep-head'>
                Events
            </div>

            {
                [...arr].reverse().map((event, index) => (
                    <div key={index} className='ep-eventbox'>
                        <div className="ep-event-title-date">
                            <h2>
                                {event.key}. {event.name}
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
                        <div className="ep-event-photos">
                            {
                                (event.photosLink.length !=0) ?
                                <>
                                    <h3>Gallery:</h3>
                                    <span className='ep-ep-gc'>
                                        {
                                            event.photosLink.map((imageLink, idx) => (
                                                <span key={idx} className='ep-ep-gi'>
                                                    <img src={imageLink} alt={`Image ${idx}`} />
                                                </span>
                                            ))
                                        }
                                    </span>
                                </>:<></>
                            }
                        </div>
                        {
                            (event.winners.length != 0) ?
                                <>
                                    <div className="ep-event-winners">
                                        <h3>Winners:</h3>
                                        <ul>
                                            {
                                                event.winners.map((w_name, idx) =>
                                                    <li key={idx}>{w_name}</li>
                                                )
                                            }
                                        </ul>
                                    </div>
                                </> :
                                <>
                                </>
                        }
                        {
                            (event.isLive === true)?
                            <>
                                <div className="events-link-button">
                                    <Link to = {event.regLink}>
                                        <button>Register</button>
                                    </Link>
                                </div>
                            </>:
                            <></>
                        }
                    </div>
                ))
            }

        </div>
    )
}

export default EventsPage
