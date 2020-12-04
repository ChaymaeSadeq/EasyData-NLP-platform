import React, { Component } from "react";
import "../assets/createDataset.css";
import history from "../history.js";

import axios from "axios";

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === null && (valid = false);
  });

  return valid;
};

class CreateDataset extends Component {
  state = {
    name: "",
    entities: "",
    description: "",

    formErrors: {
      name: "",
      entities: "",
      description: "",
    },
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        CreateDataset: ${this.state.name}
        ListeTaggs: ${this.state.entities}
        Description: ${this.state.description}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }

    const project = {
      name: this.state.name,
      entities: this.state.entities,
      description: this.state.description,
    };

    axios({
      url: "/api/Projects",
      method: "POST",
      data: project,
    })
      .then(() => {
        console.log("Data has been sent to the server");
        this.ResetInputUser();
      })
      .catch(() => {
        console.log("Internal server error !");
      });
  };

  //Reset Input User After Submit
  ResetInputUser = () => {
    this.setState({
      name: "",
      entities: "",
      description: "",
    });
  };

  render() {
    //const { formErrors } = this.state;

    return (
      <div className="wrapper">
        <div className="form-wrapper-create">
          <h1>Create Dataset</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="datasetname">
              <label htmlFor="datasetname">Dataset Name</label>
              <input
                placeholder="Dataset Name"
                type="text"
                name="name"
                value={this.state.name}
                noValidate
                onChange={this.handleChange}
              />
              {this.state.name ? undefined : <p>Enter a name !</p>}
            </div>
            <div className="liste">
              <label htmlFor="liste">List of Entities/Categories</label>
              <input
                placeholder="List of Classes comma seperated :Car,Cat,Tree"
                type="text"
                name="entities"
                value={this.state.entities}
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="description">
              <label htmlFor="description">Tagging Instruction</label>
              <textarea
                cols="30"
                rows="5"
                name="description"
                noValidate
                value={this.state.description}
                onChange={this.handleChange}
                className="txt"
                placeholder="Document annotation guidelines for your team.e.g Mark javascript as supe-human skill"
              ></textarea>
            </div>
            <div className="submit">
              <button type="submit" onClick={() => history.push("/Layout")}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default CreateDataset;
