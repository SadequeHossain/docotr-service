import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { userContext } from '../hooks/UseContextProvider';

import './ServiceDetails.css'

const ServiceDetails = () => {
    const { services } = useContext(userContext);
    const { serviceID } = useParams()
    const [serviceDetils, setServiceDetails] = useState([]);
    const negative = useNavigate()

    useEffect(() => {

        const service = services.find(serviceDet => serviceID === serviceDet.key)
        setServiceDetails(service)


    }, [serviceID])


    const handleHome = () => {
        negative('/services')

    }

    // const handleDetails =() => {

    //    const service=services.find(serviceDet=>serviceID===serviceDet.key)
    //    setServiceDetails(service)
    //    console.log('This is service',service)
    // }
    console.log('This is service ID', serviceID)
    console.log('This is serviceDetils', serviceDetils)

    return (
        <Container>
            <div className="container-serviceDetails">
                <Card style={{ width: '18rem', height: 'auto' }} >
                    <Card.Img style={{ height: '200px' }} variant="top" src={serviceDetils.img} />
                    <Card.Body>
                        <Card.Title>{serviceDetils.servicename} </Card.Title>
                        <div className="car-description">

                            <p> {serviceDetils.description}</p>



                        </div>

                        <Button onClick={handleHome} variant="primary">Back to Services</Button>


                    </Card.Body>
                </Card>
            </div>
        </Container>
    );
};

export default ServiceDetails;