import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

import './Fooer.css'
const Footer = () => {
    return (
        <Row className="footer-div">
            <Col lg={4}>
                <h3>MediKamente</h3>
                <p>Medical and Dental Care</p>

            </Col>
            <Col lg={4}>
                Address: 	60 Grant Ave. Carteret NJ 0708
                (880) 1723801729
                example@gmail.com
            </Col>
            <Col lg={4}>
                Follow us on: 
                <FaFacebook></FaFacebook>
                <FaTwitter></FaTwitter>
                <FaInstagram></FaInstagram>
            </Col>
        </Row>
    );
};

export default Footer;