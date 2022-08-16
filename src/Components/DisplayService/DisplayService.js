import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const DisplayService = (props) => {
    const {servicename,description,img}=props.service

    console.log('This is service',props.service)
    return (
        <Col lg={4} md={6} s={12}className="Specialize-div" >
        <Card style={{ width: '18rem', height: 'auto' }} >
            <Card.Img style={{ height: '200px' }} variant="top" src={img} />
            <Card.Body>
                <Card.Title>{servicename} </Card.Title>
                <div className="car-description">

                    <p> {description}</p>
                    <p></p>


                </div>

                <Button  variant="primary">See Profile</Button>


            </Card.Body>
        </Card>
    </Col>
    );
};

export default DisplayService;