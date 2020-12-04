import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row} from 'react-bootstrap';
import Routes from './Routes.js';
// import history from './history.js';
// import Login from './components/Login.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import { BrowserRouter as Router } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Container>
        <Router>
          <Row>
            <Header/>
          </Row>
          <Row>
            <Routes />
          </Row>
          <Row>
            <Footer />
          </Row>
        </Router>
      </Container>
    ) 
  }
}


export default App;