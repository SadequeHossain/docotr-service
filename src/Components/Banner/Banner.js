

import Carousel from 'react-bootstrap/Carousel';
import bannerimg1 from '../../Images/Banner/Banner2.png'
import bannerimg2 from '../../Images/Banner/Banner1.jpg'

import './Baner.css'

import React from 'react';
import { Button } from 'bootstrap';

const Banner = () => {
    return (
        
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bannerimg1}
                        alt="First slide"
                        style={{height:'80vh'}}
                    />
                    {/* <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bannerimg2}
                        alt="First slide"
                        style={{height:'80vh'}}
                    />
                    <Carousel.Caption style={{color:'white'}}>
                        <h3>YOUR HEALTH OUR FIRST PRIORITY</h3>
                        <h4>We deserve better Than Any Other</h4>
                        <p>Not sure what is going on?</p>
                        <p> Book an appointment to chekup</p>
                        <button class="btn btn-primary">Check Appointment</button>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                
            </Carousel>
      
    );
};

export default Banner;