import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import DateTimePicker from 'react-datetime-picker';
import './Register.css'
const Register = () => {
    const [value, onChange] = useState(new Date());
    return (
        <Row>



            <Col lg={12} md={12} s={12} className="Specialize-div">
          
                <Form className="Register-form">
                    <h5>Please Register with your credentials</h5>
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
                    {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                        <DateTimePicker onChange={onChange} value={value} />

                        <Form.Text className="text-muted">
                            Please select your visiting Time
                        </Form.Text>
                    </Form.Group> */}

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                       
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Register
                    </Button>

                    <p>Already Regsitered?</p>

                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>

            </Col >
        </Row>
    );
};

export default Register;