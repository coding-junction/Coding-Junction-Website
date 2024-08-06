import React from 'react';
import './Team.css';
import json from './team6.json';
import TeamCard from './TeamCard/TeamCard';
// import UnderBuild from '../UnderBuild/UnderBuild';
import { useState } from 'react';
import { Accordion, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Team() {
    const gen = json.genArray; // Gen Array
    const ta = json.teamArray; // Team Array
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
                                <Accordion.Item className='a-item mt-3 mb-2' eventKey={i}>
                                    <Accordion.Header className='a-header'> <div className="header-content">
                                        <span className='fw-bold'>{gen.name}</span>
                                        <div className="photo-preview">
                                            {
                                                ta.filter(member => member.gen === gen.key)
                                                    .slice(0, 3)
                                                    .map((member, j) => (
                                                        <img
                                                            key={j}
                                                            src={member.image}
                                                            alt={member.name}
                                                            className="preview-photo"
                                                        />
                                                    ))
                                            }
                                        </div>
                                    </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <span className='a-des'>{gen.des}</span>
                                        <div className="row pt-4">
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
