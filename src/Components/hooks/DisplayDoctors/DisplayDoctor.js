import React, { useState } from 'react';
import './DisplayDoctor.css'
import { useNavigate, Link, useParams } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function DisplayDoctor(props) {

    const { key, name, img, specialist, category, education } = props.doctor

    const navigate = useNavigate()



    const handleProfileClick = () => {
        navigate(`/doctor/${key}`)
    }

    return (
        <Col className="Specialize-div" >
            <Card style={{ width: '18rem', height: 'auto', textAlign: 'center' }} id="doctor-card">
                <Card.Img style={{ height: '200px' }} variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name} <small style={{ fontSize: '10PX' }}>{education} </small></Card.Title>
                    <div className="car-description">

                        <p> {category}</p>
                        <p></p>


                    </div>

                    <Button onClick={handleProfileClick} variant="primary">See Profile</Button>


                </Card.Body>
            </Card>
        </Col>
    );
}

export default DisplayDoctor;