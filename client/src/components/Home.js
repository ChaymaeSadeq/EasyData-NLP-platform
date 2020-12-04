import React, { Component } from "react";
import project from "../data/home.json";
import history from "../history.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/ProjectPage.css";
import "../assets/Home.css";
import { BrowserRouter as Router } from "react-router-dom";
import SideMenu from "./SideMenu";
import { Container, Col, Row } from "react-bootstrap";

export default function Home(props) {
  return (
    <Container>
      <Router>
        <Row>
          <Col xs={2}>
            <SideMenu />
          </Col>
          <Col xs={10}>
            <div className="container justify-content-center mt-5 ">
              <h2 className="text-capitalize font-weight-bold">
                Create Dataset
              </h2>
              <br />
              <br />

              <div className="row">
                {project.map(
                  ({ id, name, type, percentage, nbrDataAnnot, total }) => (
                    <div className="project-container col-6 m-6" key={id}>
                      <div
                        className="ui card vertical"
                        style={{
                          width: "40%",
                          marginLeft: "3%",
                          marginRight: "3%",
                          marginBottom: "5%",
                          cursor: "pointer",
                        }}
                      >
                        <h4 className=" ui text-capitalize font-weight-bold">
                          {name}
                        </h4>
                        <div
                          className="p-1 m-2 text-capitalize"
                          style={{
                            width: "20%",
                            borderRadius: "5px",
                            background:
                              "rgb(161, 188, 204) none repeat scroll 0% 0%",
                            color: "white",
                          }}
                        >
                          {type}
                        </div>
                        {/* <h6 className="ui text-capitalize">document annotation</h6> */}
                        <span></span>
                        <hr />
                        <button
                          className="ui btn-primary btn-sm mb-3"
                          onClick={() => history.push("/Layout/CreateDataset")}
                          style={{ border: "transparent" }}
                        >
                          Create
                        </button>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Router>
    </Container>
  );
}
