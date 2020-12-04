import React, { Component } from "react";
import history from "./../history.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/ProjectPage.css";
import { ProgressBar } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import SideMenu from "./SideMenu";
import { Container, Col, Row } from "react-bootstrap";

export default function Choose(props) {
  return (
    <Container style={{ marginBottom: "21%" }}>
      <Router>
        <div className="container justify-content-center mt-5 ">
          <h2 className="text-capitalize font-weight-bold">Choose The Task</h2>
          <br />
          <br />
          <div className="row">
            <div className="project-container col-6 m-6">
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
                  Extraction Model
                </h4>
                <div
                  className="p-1 m-2 text-capitalize"
                  style={{
                    width: "20%",
                    borderRadius: "5px",
                    background: "rgb(161, 188, 204) none repeat scroll 0% 0%",
                    color: "white",
                  }}
                >
                  Collect Cv Data
                </div>

                <span></span>
                <hr />
                <button
                  className="ui btn-primary btn-sm mb-3"
                  onClick={() => history.push("/ExtractData")}
                  style={{ border: "transparent" }}
                >
                  Go
                </button>
              </div>
            </div>

            <div className="project-container col-6 m-6">
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
                  Document Annotation
                </h4>
                <div
                  className="p-1 m-2 text-capitalize"
                  style={{
                    width: "20%",
                    borderRadius: "5px",
                    background: "rgb(161, 188, 204) none repeat scroll 0% 0%",
                    color: "white",
                  }}
                >
                  Annotate Cv
                </div>

                <span></span>
                <hr />
                <button
                  className="ui btn-primary btn-sm mb-3"
                  onClick={() => history.push("/Layout")}
                  style={{ border: "transparent" }}
                >
                  Go
                </button>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </Container>
  );
}
