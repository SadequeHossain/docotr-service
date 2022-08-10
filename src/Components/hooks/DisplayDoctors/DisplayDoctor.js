import React from 'react';
import './DisplayDoctor.css'
import { useNavigate,Link } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function DisplayDoctor(props) {

    const { key, name, img,specialist,category,education} = props.doctor
     


    

    const handleProfile=()=>{

    }
    
    return (
        <Col className="Specialize-div" >
            <Card style={{ width: '18rem',height:'auto', backgroundColor:'#008cff44' }} id="doctor-card">
                <Card.Img style={{ height: '200px' }} variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name} <small style={{ fontSize: '10PX'}}>{education} </small></Card.Title>
                    <div className="car-description">
                        
                            <p> {category}</p>
                            <p></p>
                            
                        
                    </div>
                    <Link to={`/doctor/${key}`}>
                    <Button variant="primary">See Profile</Button>
                    
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default DisplayDoctor;