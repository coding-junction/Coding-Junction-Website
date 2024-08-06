import React from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap';
import { CiInstagram, CiLinkedin } from 'react-icons/ci';
import { DiGithubBadge } from 'react-icons/di';
import { FaXTwitter } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import './TeamCard.css';

function TeamCard(props) {
    return (
      <Col lg="3" md="15" className="mb-5 mb-lg-2">
      <Card className="shadow-sm border-0 rounded t-card p-3">
        <Card.Img variant="top" src={props.image} alt={props.name} className="t-card-photo" />
        <Card.Body className="c-body ">
          <Card.Title className="mb-0 c-name mt-2">{props.name}</Card.Title>
          <Card.Text className="c-role medium">{props.role}</Card.Text>
          <div className="social list-inline">
          <Link to={props.li}>
            <button className='t-card-social-button'><CiLinkedin /></button>
            </Link>
            <Link to={props.gh}>
                    <button className='t-card-social-button'><DiGithubBadge /></button>
                </Link>
                <Link to={props.tw}>
                    <button className='t-card-social-button'><FaXTwitter /></button>
                </Link>
                <Link to={props.ig}>
                    <button className='t-card-social-button'><CiInstagram /></button>
                </Link>
                <Link to={props.em}>
                    <button className='t-card-social-button'><MdAlternateEmail /></button>
                </Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
    )
}

export default TeamCard
