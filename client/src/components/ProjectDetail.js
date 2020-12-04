import React, { Component } from "react";
import "../assets/project-detail.css";
import {
  FaChartLine,
  FaEdit,
  FaTags,
  FaUserPlus,
  FaBook,
  FaFolderPlus,
  FaDownload,
  FaList,
} from "react-icons/fa";
import Dropdown from "react-bootstrap/Dropdown";
import { Button } from "react-bootstrap";
import history from "./../history.js";
import EditProject from "./EditProject.js";
import axios from "axios";

class ProjectDetail extends Component {
  state = {
    project: {
      id: "",
      name: "",
      entities: [],
      description: "",
    },
    id: this.props.location.state.id,
  };

  getProject = () => {
    axios
      .get("/api/Projects/" + this.state.id)
      .then((response) => {
        const data = response.data;
        this.setState({ project: data });
        // console.log("Data has been received !", data);
        console.log(this.state.project.entities.join(" , "));
        console.log(this.props.location.state.id);
      })
      .catch((err) => console.log("Error :", err));
  };
  componentDidMount = () => {
    this.getProject();
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="container">
        <div className="box1">
          <div class="D">
            <label id="a">{this.state.project.name}</label>
            <div class="a"></div>
            <span class="icon"></span>
            <label class="A">{this.state.project.description}</label>
            <div>
              <label class="B">PUBLIC</label>
              <label class="B">{this.state.project.name}</label>
              <label class="B">created on</label>
              <label class="B">Contributors</label>
              <div className="dropdown">
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Options
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="/Layout/AddData">
                      <FaFolderPlus /> Add Data
                    </Dropdown.Item>
                    <Dropdown.Item href="/Layout/AddContributor">
                      <FaEdit /> Add Contributors
                    </Dropdown.Item>
                    <Dropdown.Item href="/Layout/Contributeur">
                      <FaList /> View Contributors
                    </Dropdown.Item>
                    <Dropdown.Item href="/Layout/Download">
                      <FaDownload /> Download Json
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>

        <div className="box2">
          <span className="bar">
            <label>%</label>
          </span>

          <table className="hits">
            <tr>
              <td className="green">519</td>
              <td className="blue">23</td>
              <td className="red">123</td>
              <td className="gray">588</td>
            </tr>
            <tr>
              <td className="done">Hits Done</td>
              <td className="skipped">Hits skipped</td>
              <td className="deleted">Hits Deleted</td>
              <td className="total">Total Hits</td>
            </tr>
          </table>
          <div>
            <Button
              className="g"
              onClick={() =>
                history.push({
                  pathname: "/Layout/ProjectDetail/EditProject",
                  state: {
                    id: this.state.id,
                  },
                })
              }
            >
              <FaEdit /> Edit Project
            </Button>
            <Button
              className="g"
              onClick={() =>
                history.push({
                  pathname: "/Layout/ProjectDetail/Tagging",
                  state: {
                    id: this.state.id,
                  },
                })
              }
            >
              <FaTags /> Start Tagging
            </Button>
            {/* <Button className="g" onClick={() => history.push('/Layout/AddContributor/')}><FaEdit/> Add Contributor</Button> */}

            {/* <button  class="g" > <FaEdit/> Edit Project</button> */}
            {/* <button  class="g"> <FaTags/>  tagging</button> */}
            {/* <button class="g"> <FaUserPlus/>  Add Contributor</button> */}
            {/* <button  class="g" > <FaFolderPlus/> Add data</button> */}
          </div>
          <hr></hr>

          <div className="tab">
            <h4>
              <div class="content">
                <FaChartLine /> List of Contributors
              </div>
            </h4>
            <table className="tableau">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Admin/Annotator</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>youssef </td>
                  <td>ymellah@novelis.io</td>
                  <td>Admin</td>
                </tr>
                <tr>
                  <td>Mourtada</td>
                  <td>mourtadaboufelja123@gmail.com</td>
                  <td>Admin</td>
                </tr>
                <tr>
                  <td>rania</td>
                  <td>raniaelbzioui1@gmail.com</td>
                  <td>Admin</td>
                </tr>
                <tr>
                  <td>chaymae</td>
                  <td>chaymaegotmail@gmail.com</td>
                  <td>Admin</td>
                </tr>
                <tr>
                  <td>Sara</td>
                  <td>sara.rabhi1998@gmail.com</td>
                  <td>Admin</td>
                </tr>
                <tr>
                  <td>oumaima</td>
                  <td>oumaima.zayate@gmail.com</td>
                  <td>Admin</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="box3">
          <h3>
            <div>
              <FaBook /> Description
            </div>
          </h3>
        </div>
        <div className="box4">
          <div>
            Description :<h5 className="font"><li>{this.state.project.description}</li></h5>
            Entities    :<h5 className="font"><li>{this.state.project.entities.join(" , ")}</li></h5>

          </div>
        </div>
      </div>
    );
  }
}

export default ProjectDetail;
