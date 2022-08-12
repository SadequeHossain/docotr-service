import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

import './login.css'
const Login = () => {
    return (
        <Row>
            <Col lg={12} md={6} s={12} className="Specialize-div">


                <div  className="login-form">
                    <Form>
                        <h5> Sign in Please</h5>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Stay Login" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                        <p>Did not register yet?</p>

                        <Button variant="primary" type="submit">
                            Signup
                        </Button>

                    </Form>

                    
                </div>

            </Col>


        </Row>
    );
};

export default Login;