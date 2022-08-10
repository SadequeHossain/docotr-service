import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import { useParams } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import './Doctors.css'
import DisplayDoctor from '../hooks/DisplayDoctors/DisplayDoctor';
import { Container, Row, Col } from 'react-bootstrap';
import { useEffect } from 'react';
const Doctors = () => {


    const doctors = useContext(UserContext);
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    const { doctorId } = useParams();

   
    return (


        <Container>
            <Row>
                <h1>Doctor ID: {doctorId} </h1>
            </Row>
            <Row>
                <Carousel


                    swipeable={true}
                    draggable={true}
                    showDots={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={false}
                    autoPlaySpeed={1100}
                    keyBoardControl={true}
                    customTransition="all 1"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    // deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >

                    {
                        doctors.map(doctor => <DisplayDoctor key={doctor.key} doctor={doctor}></DisplayDoctor>)
                    }
                </Carousel>
            </Row>

        </Container>
    );
};

export default Doctors;