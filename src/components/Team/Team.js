import React from 'react'
import './Team.css'
import json from './team6.json'
import TeamCard from './TeamCard/TeamCard'
import UnderBuild from '../UnderBuild/UnderBuild'
import { useState } from 'react'

export default function Team() {

    const ta = json.teamArray;  // Team Array
    const [member, setMember] = useState(1);

    return (
        <div className='Team'>
            <div className='team-title'>
                <h1>Meet our Team</h1>
            </div>

            <div className='team-members'>
                <div className='t-circle'>
                    {
                        ta.map((ta) => (
                            <>
                            <div className='t-inner-circle'
                                onClick= {() => setMember(ta.key)}
                                >
                                    <img src={ta.image} alt={ta.key} />
                                </div>
                            </>
                        ))
                    }
                        <div className="t-ring-1"></div>
                        <div className="t-ring-2"></div>
                    {
                        ta.filter(ta => ta.key == member).map(ta=>
                                <TeamCard key={ta.key}
                                        name={ta.name}
                                        image={ta.image}
                                        li={ta.li}
                                        gh={ta.gh}
                                        fb={ta.fb}
                                        ig={ta.ig}
                                        />
                            )
                    }

                </div>
            </div>
            <div className='teams-not-available'>
                <UnderBuild 
                    head={"This page is only available for PC as of now!!!"}
                />
            </div>
        </div>
    )
}
