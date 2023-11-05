import React from 'react'
import { CiFacebook, CiInstagram, CiLinkedin } from 'react-icons/ci'
import { DiGithubBadge } from 'react-icons/di'
import { Link } from 'react-router-dom'
import './TeamCard.css'

function TeamCard(props) {
    return (
        <div className="t-card">
            <div className="t-card-photo">
                <img src={props.image} alt="hello" />
            </div>
            <div className="t-card-name">
                <h3>{props.name}</h3>
            </div>
            <div className="t-card-social">
                <Link to={props.li}>
                    <button className='t-card-social-button' onClick={console.log(props.li)}><CiLinkedin /></button>
                </Link>
                <Link to={props.gh}>
                    <button className='t-card-social-button'><DiGithubBadge /></button>
                </Link>
                <Link to={props.fb}>
                    <button className='t-card-social-button'><CiFacebook /></button>
                </Link>
                <Link to={props.ig}>
                    <button className='t-card-social-button'><CiInstagram /></button>
                </Link>
            </div>
        </div>
    )
}

export default TeamCard
