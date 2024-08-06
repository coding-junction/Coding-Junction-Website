import React from 'react';
import './Team.css';
import json from './team6.json';
import TeamCard from './TeamCard/TeamCard';
import UnderBuild from '../UnderBuild/UnderBuild';
import { useState } from 'react';
import { Accordion, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Team() {
    const gen = json.genArray; // Gen Array
    const ta = json.teamArray; // Team Array
    const [count, setCount] = useState(0);
    return (
        <div className='Team'>
            <div className='team-title'>
                <h1>Meet our Team</h1>
            </div>
            <Accordion defaultActiveKey="" className="a-main">
                {
                    gen.map((gen, i) => (
                        <>

                            <Card className="a-card">
                                <Accordion.Item className='a-item' eventKey={i}>
                                    <Accordion.Header className='a-header'> <div className="header-content">
                                        <span>{gen.name}</span>
                                        <div className="photo-preview">
                                            {ta.map((member, j) => (
                                                member.gen === gen.key ? (

                                                    count < 3 ? (
                                                        <img
                                                            key={j}
                                                            src={member.image}
                                                            alt={member.name}
                                                            className="preview-photo"

                                                        />
                                                    ) : (null)
                                                ) : (
                                                    null
                                                )

                                            ))}
                                            {() => {
                                                setCount(0)
                                            }}
                                        </div>
                                    </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <span className='a-des'>{gen.des}</span>
                                        <div class="row pb-5 mb-4">
                                            {
                                                ta.map((ta, j) => (
                                                    ta.gen === gen.key ? (

                                                        <TeamCard key={j}
                                                            name={ta.name}
                                                            role={ta.role}
                                                            image={ta.image}
                                                            li={ta.li}
                                                            gh={ta.gh}
                                                            fb={ta.fb}
                                                            ig={ta.ig}
                                                        />

                                                    ) : (
                                                        null
                                                    )
                                                ))
                                            }

                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Card>

                        </>
                    ))
                }
            </Accordion>
        </div>
    );
}
