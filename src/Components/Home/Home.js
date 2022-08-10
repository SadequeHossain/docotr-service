import React from 'react';
import Banner from '../Banner/Banner';
// import Container from 'react-bootstrap/Container';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaClock } from 'react-icons/fa'
import { RiFirstAidKitLine } from 'react-icons/ri'
import { MdBookOnline } from 'react-icons/md'
import { AiFillAndroid, AiTwotoneInsurance } from 'react-icons/ai'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Home.css'
import Image from 'react-bootstrap/Image'
import genHealthImg from '../../Images/GneralHealth.jpg';
import DentalCareImg from '../../Images/DentalCare.jpg';
import HeartImg from '../../Images/HeartTreatment.jpg';
import FamilyImg from '../../Images/family.jpg';
import PhotoAlbum from "react-photo-album";




const Home = () => {

    const photos = [
        {
            src: {genHealthImg},
            width: 800,
            height: 600
        },
        {
            src: { HeartImg },
            width: 1600,
            height: 900
        }
    ];
    return (
        <Container className="container-Home">
            <Banner></Banner>
            <Row className='consilataation'>
                <Col lg={4} className="description-div1" >
                    <div >
                        <h1> <FaClock></FaClock> Opening Hours:</h1>
                        <p>Emergency: 24/7</p>
                        <p>Online: 24/7</p>
                        <p>General: Mo-Fri: 8-12 and 14-18 o'clock</p>
                    </div>
                </Col>
                <Col lg={4} className="description-div2">
                    <div >
                        <h2> <MdBookOnline></MdBookOnline> Online Consultation:</h2>
                        <p> Book your online Doctor here</p>
                        <button className="btn btn-primary">Book Now</button>
                    </div>
                </Col>
                <Col lg={4} className="description-div1">

                    <div >
                        <h1> <RiFirstAidKitLine></RiFirstAidKitLine> Appointment:</h1>
                        <p> Book your online Doctor here</p>
                        <button className="btn btn-dark">Chek Appointment</button>
                    </div>

                </Col>
            </Row>



            <Row>

                <div className='title-div'>
                    <h2>
                        We Specialize In
                    </h2>
                </div>


                <Col lg={4} md={6} s={12} className="Specialize-div">
                    <Card style={{ width: '18rem' }} >
                        <Card.Img variant="top" src={genHealthImg} />
                        <Card.Body>
                            <Card.Title>Primary Health Care</Card.Title>
                            <Card.Text>
                                Check up your daily health problem including Blood pressure and other
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>

                </Col>
                <Col lg={4} md={6} s={12} className="Specialize-div">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={DentalCareImg} />
                        <Card.Body>
                            <Card.Title>Dental Care</Card.Title>
                            <Card.Text>
                                We provides dental treatment with our dedicated dental specialist
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>

                </Col>
                <Col lg={4} md={6} s={12} className="Specialize-div">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={HeartImg} />
                        <Card.Body>
                            <Card.Title>Heart Treatment</Card.Title>
                            <Card.Text>
                                We provides dental treatment with our dedicated dental specialist
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>

                </Col>

            </Row>

            <Row>

                <Col lg={6} md={6} s={12} className="Specialize-div">
                    {/* <img src={FamilyImg} alt="" /> */}
                    <Image fluid src={FamilyImg} alt="" />

                </Col>
                <Col lg={6} md={6} s={12} className="Specialize-div">
                    <div>
                        <h1>More About Us</h1>

                        <h2 className="blue-header">We provide Most Professional service since 2020</h2>
                        <p>
                            Building on developments in imaging and diagnostics, Focal Therapy allows men with early to intermediate stage prostate cancer to be treated in a minimally invasive way, eliminating their prostate cancer whilst maintaining their full quality of life.

                            To provide men in the UK with access to this life-changing therapy, our founder, Brian Lynch brought together the SonaCare HIFU system and a group of world-class clinicians to create The Focal Therapy Clinic.

                            Mr Tim Dudderidge, Mr Marc Laniado, Mr Raj Nigam, Mr Alan Doherty and Dr Clare Allen have been pioneering precision diagnostics and HIFU Focal Therapy for 20 years, and have supported the research and clinical trials at UCLH and Imperial Hospital.

                            We believe that Focal Therapy is a powerful alternative to Radical Prostatectomy, Hormone / Radiotherapy treatments and Active Surveillance — offering effective cancer control while preserving sexual and urinary function in patients. These are often seen as a trade-off, and we have developed and supported an approach to managing prostate cancer that preserves patients overall quality of life.

                            Our clinicians have practised Focal Therapy with great success on hundreds of patients and are major contributors to clinical trials demonstrating its effectiveness.
                        </p>

                    </div>
                </Col>


            </Row>

            <Row className="app-div">
                <Col lg={6} md={6} s={12} className="Specialize-div">
                    <div>
                        <h3>
                            <AiFillAndroid></AiFillAndroid> Immunization App
                        </h3>
                        <small>Your immunization Record</small>
                        <p>Tracking immunizations has been easier or more secure with Immunization App. To print your child's record, you will need</p>

                    </div>

                </Col>
                <Col lg={6} md={6} s={12} className="Specialize-div">
                    <div>
                        <h3>
                            <AiTwotoneInsurance></AiTwotoneInsurance>  We Accept most of the Insurance
                        </h3>
                        <small>Use Our Insurance Checker>></small>
                        <p>Tracking immunizations has been easier or more secure with Immunization App. To print your child's record, you will need</p>

                    </div>

                </Col>


            </Row>
            <Col lg={6} md={6} s={12} className="Specialize-div">

            </Col>
            <Col lg={6} md={6} s={12} className="Specialize-div">
                <PhotoAlbum layout="rows" photos={photos} />
            </Col>


            
            <Row>
            </Row>



        </Container>

    );
};

export default Home;