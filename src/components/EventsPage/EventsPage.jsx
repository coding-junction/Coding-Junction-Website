import React from 'react'
import './EventsPage.css'
import UnderBuild from '../UnderBuild/UnderBuild'

function EventsPage() {
    const date = "23/12/2022"
    return (
        <div className='EventsPage'>
            <div className='ep-head'>
                Events
            </div>
            <div className='ep-eventbox'>
                <div className="ep-event-title-date">
                    <h2>
                        1. First Event
                    </h2>
                    <p>
                        Date of the Event : {date}
                    </p>
                </div>
                <div className="ep-event-banner">
                    <img src="https://res.cloudinary.com/dneogaofx/image/upload/v1710927719/CJ%20Website%20Event%20Images/tifcvhyk0mcrvs72xaz0.jpg" alt="" />
                </div>
                <div className="ep-event-desc">
                    <h3>Description : </h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, perferendis repellendus exercitationem maxime esse ullam amet ducimus voluptas harum ea, nobis earum incidunt sit sint! Cupiditate, unde repellat voluptas, dolorum hic eveniet dolor ratione quae culpa maxime asperiores nam iste soluta! Dolor nam eaque aliquam dolorem neque, asperiores quasi ex!
                </div>
                <div className="ep-event-photos">
                    <h3>
                        Gallery : 
                    </h3>
                    <span className='ep-ep-gc'>
                        <span className='ep-ep-gi'>
                            <img src="https://res.cloudinary.com/dneogaofx/image/upload/v1710927907/CJ%20Website%20Event%20Images/gm16nlr28x7pcjljrhxi.jpg" alt="p1" />
                        </span>
                        <span className='ep-ep-gi'>
                            <img src="https://res.cloudinary.com/dneogaofx/image/upload/v1710927909/CJ%20Website%20Event%20Images/uete2kgzjl8hwjwl22hz.jpg" alt="p2" />
                        </span>
                        <span className='ep-ep-gi'>
                            <img src="https://res.cloudinary.com/dneogaofx/image/upload/v1710927908/CJ%20Website%20Event%20Images/q7wmdc6tiukzcc90m1zb.jpg" alt="p3" />
                        </span>
                        <span className='ep-ep-gi'>
                            <img src="https://res.cloudinary.com/dneogaofx/image/upload/v1710927906/CJ%20Website%20Event%20Images/zoajsuqhfu6cw7iqjm1b.jpg" alt="p4" />
                        </span>
                    </span>
                </div>
                <div className="ep-event-winners">
                    <h3>Winners : </h3>
                    <p>
                        <ul>
                            <li> name1</li>
                            <li> name2</li>
                        </ul>
                    </p>
                </div>
            </div>

            <UnderBuild />
        </div>
    )
}

export default EventsPage
