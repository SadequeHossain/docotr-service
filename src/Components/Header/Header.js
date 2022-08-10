import React from 'react';
import { Container, Navbar, Nav,NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Header.css'

import bannerimg1 from '../../Images/Banner/Banner3.jpg'

const Header = () => {
    return (

        <div  className="header">
        <Navbar collapseOnSelect expand="lg"  variant="dark">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">Services</Nav.Link>
              <NavDropdown title="Doctor Profile" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Eye specialist</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Dentis
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">General</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                 
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Book an Apponitment</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                LogIn
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      </div>
    );
};

export default Header;