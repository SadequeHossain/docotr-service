import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import { useNavigate, useParams } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import DateTimePicker from 'react-datetime-picker';


import './Doctors.css'
import DisplayDoctor from '../hooks/DisplayDoctors/DisplayDoctor';
import { Container, Row, Col, Button, Image, Card, Form } from 'react-bootstrap';
import { useEffect } from 'react';
import { userContext } from '../hooks/UseContextProvider';
const Doctors = () => {


    const {doctors} = useContext(userContext);


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
    useEffect(() => {

        doctors.map(doctor => {
            if (doctor.key == doctorId) {
                setDoctor(doctor)
            }
        })

    }, [])
    const { name, img, category, education, day, consultationTime, specialist } = dr
    console.log('This is dr',dr.name)
    const handleClick = () => {
        navigate('/home')

    }

    const [value, onChange] = useState(new Date());


console.log('Dr returned',dr)
    return (


        <Container>
            <Row >
                <Col lg={6} md={6} s={12} className="Specialize-div">
                    <Card style={{ width: '25rem' }}>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>{dr.name}

                                <small style={{ fontSize: '10px' }}> {education} </small>


                            </Card.Title>
                            <Card.Text>
                                Specialist in {specialist}
                            </Card.Text>
                            <Card.Text>
                                Catagory: {category}
                            </Card.Text>
                            Visting Time: {day}, {consultationTime} O'Clock
                        </Card.Body>
                    </Card>

                </Col>

                <Col lg={6} md={6} s={12} className="Specialize-div">

                    <Form className="Register-form">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" />
                            <Form.Text className="text-muted">
                                Please enter your Full Name.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
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
                            <Form.Check type="checkbox" label="Check me out" />
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
            <Button onClick={handleClick} variant="primary" >RETURN Home</Button>
        </Container>
    );
};

export default Doctors;