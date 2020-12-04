import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EasyData4 from '../assets/images/EasyData4.png';
import {Container, Nav, Col, Row, NavLink } from 'react-bootstrap';
import history from './../history.js';


const Header = () => {
    return (
      <Container fluid className="containerHeader transparant">
        <Row>
        <Col>
        <a href="/" onClick={() => history.push('/')} >
        <img src={EasyData4} alt="website logo" style={{height:"70px", width:"80px"}} />
        </a>
        </Col>
        <Col xs></Col>
        <Col md="auto">
          <Nav className="justify-content-end mt-2" defaultActiveKey="/home" as="ul">
            <Nav.Item as="li">
              <Nav.Link href="/" style={{color:"black", fontSize:"18px" , fontFamily:"Verdana"}}>Hosting</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/Login" style={{color:"black", fontSize:"18px" , fontFamily:"Verdana"}}>Sign in</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        </Row>
      </Container>
    )
}


export default Header;
