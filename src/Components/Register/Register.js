import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import DateTimePicker from 'react-datetime-picker';
import './Register.css'

import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from '../hooks/firebase.init';
import { Link } from 'react-router-dom';


initializeAuthentication();
const provider = new GoogleAuthProvider();


const Register = () => {
    const [value, onChange] = useState(new Date());
    const [email, setEmail] = useState()
    const [passWord, setPassword] = useState()
    const [displayName, setDisplayName] = useState()



    const handleRegistration = (e) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, passWord,displayName)
            .then(result => {
                // Signed in 
                const user = result.user;
                // ...

                console.log(user)
            })

        console.log('Registration will be added')

        e.preventDefault();
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)

        console.log(e.target.value)
    }

    const handlePassWord = e => {
        setPassword(e.target.value)
        console.log(e.target.value)
    }
    const handleDisplayName = e => {
        setDisplayName(e.target.value)
        console.log(e.target.value)
    }
    return (
        <Row>



            <Col lg={12} md={12} s={12} className="Specialize-div">

                <Form className="Register-form" onSubmit={handleRegistration}>
                    <h5>Please Register with your credentials</h5>
                    <Form.Group onBlur={handleDisplayName} className="mb-3" controlId="formBasicName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="name" placeholder="Enter Name" />
                        <Form.Text className="text-muted">
                            Please enter your Full Name.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" required controlId="formBasicEmail" onBlur={handleEmailChange}>
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

                    <Form.Group className="mb-3" controlId="formBasicPassword" onBlur={handlePassWord} >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button  variant="primary" type="submit" >
                        Register
                    </Button>

                    <p>Already Regsitered?</p>

                    <Link to="/login">
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Link>
                </Form>

            </Col >
        </Row>
    );
};

export default Register;