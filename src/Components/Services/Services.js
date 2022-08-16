import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import DisplayService from '../DisplayService/DisplayService';
import { userContext } from '../hooks/UseContextProvider';
import { Navigate, Route, useLocation } from 'react-router-dom';

import './Servicess.css'
const Services = () => {
    const { pathname } = useLocation();
    const { services } = useContext(userContext);
    console.log('This is Location', pathname)

    return (
        <Container>
            <Row >
                <Col lg={12} className="Specialize-div">
                    <div>
                        <h1>Services</h1>
                        <p>home{pathname}</p>
                    </div>
                </Col>
            </Row>
            <Row>
                {
                    services.map(service => <DisplayService service={service} key={service.key}></DisplayService>)
                }
            </Row>


            <Row>

                <Col lg={12} className="magazine-div" >
                    <div>
                    <h1 style={{marginRight:'20px'}}>You can purchase our Health Megazine</h1>
                    <Button>Purchase Now</Button>
                    </div>

                </Col>

            </Row>
        </Container>
    )
};

export default Services;