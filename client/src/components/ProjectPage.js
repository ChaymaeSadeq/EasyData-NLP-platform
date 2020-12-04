import React, { Component } from "react";
import history from "./../history.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/ProjectPage.css";
import { ProgressBar } from "react-bootstrap";
import axios from "axios";

export default class ProjectPage extends React.Component {
  state = {
    Projects: [],
  };

  componentDidMount = () => {
    this.getProjects();
  };

  getProjects = () => {
    axios
      .get("/api/Projects")
      .then((response) => {
        const data = response.data;
        this.setState({ Projects: data });
        console.log("Data has been received !", data);
      })
      .catch((err) => console.log("Error :", err));
  };

  //Display Projects
  displayProjects = (projects) => {
    if (!projects.length) {
      return <h1>There Is Not Projects Yet !</h1>;
    }

    return projects.map(({ _id, name, entities, description }) => (
      <div className="project-container col-6 m-6" key={_id}>
        {/*         {sessionStorage.setItem("myId", _id)}
         */}{" "}
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
          <h4 className=" ui text-capitalize font-weight-bold">{name}</h4>
          <div
            className="p-1 m-2 text-capitalize"
            style={{
              width: "20%",
              borderRadius: "5px",
              background: "rgb(161, 188, 204) none repeat scroll 0% 0%",
              color: "white",
            }}
          >
            Public
          </div>
          <h6 className="ui text-capitalize">{description}</h6>
          <ProgressBar
            animated
            variant="success"
            min={0}
            max={100}
            now={90}
            label={`${90}%`}
            style={{ width: "80%" }}
          />
          <span>222/250</span>
          <hr />
          <button
            className="ui btn-primary btn-sm mb-3"
            onClick={() =>
              history.push({
                pathname: "/Layout/ProjectDetail",
                state: {
                  id: _id,
                },
              })
            }
            style={{ border: "transparent" }}
          >
            overview
          </button>
        </div>
      </div>
    ));
  };

  render() {
    return (
      <div className="container justify-content-center mt-5 ">
        <h2 className="text-capitalize font-weight-bold">my projects</h2>
        <br />
        <br />
        <div className="row">{this.displayProjects(this.state.Projects)}</div>
        <button
          className="ui btn-primary btn-sm mb-3"
          onClick={() => history.push("/Choose")}
          style={{ border: "transparent", margin: "0 auto", display: "block" }}
        >
          Back to choose the task
        </button>
      </div>
    );
  }
}
