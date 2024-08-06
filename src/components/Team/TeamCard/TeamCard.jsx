import React from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap';
import { CiFacebook, CiInstagram, CiLinkedin } from 'react-icons/ci';
import { DiGithubBadge } from 'react-icons/di';
import { Link } from 'react-router-dom';
import './TeamCard.css';

function TeamCard(props) {
    return (
      <Col lg="3" md="4" className="mb-5 mb-lg-2">
      <Card className="shadow-sm border-0 rounded t-card">
        <Card.Img variant="top" src={props.image} alt={props.name} className="t-card-photo" />
        <Card.Body className="p-4">
          <Card.Title className="mb-0 c-name">{props.name}</Card.Title>
          <Card.Text className="medium text-muted">{props.role}</Card.Text>
          <div className="social mb-0 list-inline mt-3">
          <Link to={props.li}>
            <button className='t-card-social-button'><CiLinkedin /></button>
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
        </Card.Body>
      </Card>
    </Col>
    )
}

export default TeamCard
