import React, { useState, useEffect } from 'react'
import EveTemp from './EveTemp'

function IntroSess() {

    window.scrollTo(0,0);

    const [eventInfo, setEventInfo] = useState("isLive");

    useEffect(()=>{
		setEventInfo("isLive");
	}, [])

    const eventTimelines = [
        {
            "l1" : "The Event has not started yet.",
            "l2" : "It will start from 6:00 PM Today",
            "l3" : "Click on below button to join the Event."            
        },
        {
            "l1" : "The Event has been started.",
            "l2" : "We all are excited to onboard with you in this Event",
            "l3" : "Click on the below button to join the Event NOW!!!"
        },
        {
            "l1" : "Thank You for being with us.",
            "l2" : "We hope you really enjoyed this Event",
            "l3" : "You can view the photos of the Event below!!! :)"
        }
    ]
    
    if(eventInfo === "willStart"){
        return(
            <div className='willStart'>
                <EveTemp info = {eventTimelines[0]} />
                <a href="#">
                    <button>JOIN EVENT</button>
                </a>
            </div>

        )
    }
    else if(eventInfo === "isLive"){
        return(
            <div className='isLive'>
                <EveTemp info = {eventTimelines[1]} />
                <a href="#">
                    <button>JOIN EVENT</button>
                </a>
            </div>
        )
    }
    else{
        return(
            <div className='hasEnded'>
                <EveTemp info = {eventTimelines[2]} />
            </div>
        )
    }
}

export default IntroSess
