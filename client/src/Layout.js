import React, { Component } from 'react';
import {Switch, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Col, Row} from 'react-bootstrap';
import Download from './components/Download.js';
import CreateDataset from "./components/CreateDataset";
import Contributeur from "./components/Contributeur";
import AddData from "./components/AddData";
import ProjectPage from "./components/ProjectPage";
import ProjectDetail from "./components/ProjectDetail";
import EditProject from './components/EditProject.js';
import Tagging from './components/Tagging.js';
import AddContributor from './components/AddContributor.js';
import SideMenu from './components/SideMenu';
import Home from './components/Home.js';
import Choose from './components/Choose.js';



import { BrowserRouter as Router } from 'react-router-dom';



class Layout extends Component {
  render() {
    return (
      <Container>
        <Router>
            <Row>
            <Col xs={2}>
                <SideMenu />
            </Col>
            <Col xs={10}>
                <Switch>
                    <Route path="/Layout" exact component={ProjectPage} />
                    <Route path="/Layout/AddData" exact component={AddData} />
                    <Route path="/Layout/Contributeur" exact component={Contributeur} />
                    <Route path="/Layout/CreateDataset" exact component={CreateDataset} />
                    <Route path="/Layout/Download" exact component={Download} />
                    <Route path="/Layout/ProjectDetail/EditProject" exact component={EditProject} />
                    <Route path="/Layout/ProjectDetail" exact component={ProjectDetail} />
                    <Route path="/Layout/ProjectDetail/Tagging" exact component={Tagging} />
                    <Route path="/Layout/AddContributor" exact component={AddContributor}/>
                    <Route path="/Home" exact component={Home} />
                    <Route path="/Choose" exact component={Choose} />

                    

                    {/* <Route path="/:someParam" component={Privateroutes} /> */}
                </Switch>
            </Col>
            </Row>
        </Router>
      </Container>
    ) 
  }
}


export default Layout;