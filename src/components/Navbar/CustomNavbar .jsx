import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './CustomNavbar.css'
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';


export default function CustomNavbar () {
  return (
    <Navbar expand="lg" className='d-flex align-items-center position-fixed w-100 z-3 '>
      <Container>
        <Navbar.Brand href="/" className='logo-span mainColor '> Medilab </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><NavLink to="medecal/Home">Home</NavLink></Nav.Link>
            <Nav.Link> <NavLink to="medecal/about">About Us</NavLink></Nav.Link>
            <Nav.Link><NavLink to="medecal/services">Services</NavLink></Nav.Link>
           <Nav.Link><NavLink to="medecal/departments">Departments</NavLink></Nav.Link>
            <Nav.Link > <NavLink to="medecal/contact-us">contact us</NavLink></Nav.Link>
          
          </Nav>
          <div>
          <FontAwesomeIcon icon={faMagnifyingGlass} className='px-3'/>
          
           <NavLink  className='btn btn-primary mx-2 px-5 rounded-4 text-light' to="Appointment">Make An Appointment</NavLink>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
