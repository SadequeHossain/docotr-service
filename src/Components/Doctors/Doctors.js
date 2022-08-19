import React, { useContext, useRef, useState, useEffect } from 'react';
import { UserContext } from '../../App';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import DateTimePicker from 'react-datetime-picker';


import './Doctors.css'
import DisplayDoctor from '../hooks/DisplayDoctors/DisplayDoctor';
import { Container, Row, Col, Button, Image, Card, Form } from 'react-bootstrap';
// import { useEffect } from 'react';
import { userContext } from '../hooks/UseContextProvider';
const Doctors = () => {


    const { doctors } = useContext(userContext);
    const childRef = useRef();

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
    const [dr, setDoctor] = useState([])
    let navigate = useNavigate();
    console.log(doctorId)
    // useEffect(() => {

    //     doctors.map(doctor => {
    //         if (doctor.key == doctorId) {
    //             setDoctor(doctor)
    //         }
    //     })

    // }, [])


    useEffect(() => {
        const doctor = doctors.find(dr => doctorId === dr.key)
        setDoctor(doctor)

    }, [doctorId])



    console.log('This is Dr', dr)


    const handleAppointment = () => {
        navigate('reg')
    }

    const [value, onChange] = useState(new Date());



    return (


        <Container>
            <Row >
                <Col lg={6} md={6} s={12} className="Specialize-div">
                    {(dr) ?

                        (<Card style={{ width: '25rem' }}>
                            <Card.Img variant="top" src={dr.img} />
                            <Card.Body>
                                <Card.Title>{dr.name}

                                    <small style={{ fontSize: '10px' }}> {dr.education} </small>


                                </Card.Title>
                                <Card.Text>
                                    Specialist in {dr.specialist}
                                </Card.Text>
                                <Card.Text>
                                    Catagory: {dr.category}
                                </Card.Text>
                                Visting Time: {dr.day}, {dr.consultationTime} O'Clock
                            </Card.Body>

                        </Card>) :
                        (
                            <h3>Please select a Doctor</h3>
                        )

                    }







                </Col>

                <Col lg={6} md={6} s={12} className="Specialize-div">

                    <Form className="Register-form" onSubmit={handleAppointment}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Full Name</Form.Label>
                            <input required type="text" placeholder="Please enter name" /> <br />
                            <Form.Text className="text-muted">
                                Please enter your Full Name.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <input required type="email" placeholder="Please enter Email" /> <br />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <DateTimePicker onChange={onChange} value={value} />

                            <Form.Text className="text-muted">
                                Please select your visiting Time
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Keep my info for next visite" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Book an Appoitment
                        </Button>
                    </Form>

                </Col >
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