import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const DisplayService = (props) => {
    const { servicename, description, img, key } = props.service

    const navigate = useNavigate()

    const handleService = () => {
        navigate(`/servicedetails/${key}`)




    }


    return (
        <Col lg={4} md={6} s={12} className="Specialize-div" >

            <Card style={{ width: '18rem', height: 'auto' }} >
                <Card.Img style={{ height: '200px' }} variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{servicename} </Card.Title>
                    <div className="car-description">

                        <p > {description.slice(0, 100)}</p>



                    </div>

                    <Button onClick={handleService} variant="primary">See More</Button>


                </Card.Body>
            </Card>
        </Col>
    );
};

export default DisplayService;