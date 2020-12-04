import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Signup from "./components/Signup.js";
import Login from "./components/Login";
import FrontPage from "./components/FrontPage";
import ProjectDetail from "./components/ProjectDetail";
import history from "./history";
import Layout from "./Layout.js";
import Download from "./components/Download.js";
import CreateDataset from "./components/CreateDataset";
import Contributeur from "./components/Contributeur";
import AddData from "./components/AddData";
import ProjectPage from "./components/ProjectPage";
import EditProject from "./components/EditProject.js";
import Tagging from "./components/Tagging";
import AddContributor from "./components/AddContributor.js";
import Home from "./components/Home.js";
import Choose from "./components/Choose.js";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={FrontPage} />
          <Route path="/Login" component={Login} />
          <Route path="/Signup" component={Signup} />
          <Route path="/Layout" component={Layout} />
          <Route path="/ProjectPage" exact component={ProjectPage} />
          <Route path="/Home" exact component={Home} />
          <Route path="/Layout/AddData" exact component={AddData} />
          <Route path="/Layout/Contributeur" exact component={Contributeur} />
          <Route path="/Layout/CreateDataset" component={CreateDataset} />
          <Route path="/Layout/Download" exact component={Download} />
          <Route
            path="/Layout/ProjectDetail/EditProject"
            exact
            component={EditProject}
          />
          <Route path="/Layout/ProjectDetail" exact component={ProjectDetail} />
          <Route
            path="/Layout/ProjectDetail/Tagging"
            exact
            component={Tagging}
          />
          <Route
            path="/Layout/AddContributor"
            exact
            component={AddContributor}
          />
          <Route path="/Choose" exact component={Choose} />

          {/* <Route path="/:someParam" component={Privateroutes} /> */}
        </Switch>
      </Router>
    );
  }
}
