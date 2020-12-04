import React, { Component } from "react";
import "../assets/edit-project.css";
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

class EditProject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      project: {
        id: "",
        name: "",
        entities: "",
        description: "",
      },
      formErrors: {
        name: "",
        entities: "",
        description: "",
      },
      id: this.props.location.state.id,
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEntitiesChange = this.handleEntitiesChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount = () => {
    console.log(this.state.id);

    axios
      .get("/api/Projects/" + this.state.id)
      .then((response) => {
        const data = response.data;
        this.setState({ project: data });
        console.log("Data has been received !", data);
      })
      .catch((err) => console.log("Error :", err));
  };

  handleNameChange = ({ target }) => {
    const { value } = target;
    console.log(value);
    this.setState({ project: { ...this.state.project, name: value } });
  };
  handleEntitiesChange = ({ target }) => {
    const { value } = target;
    console.log(value);
    this.setState({ project: { ...this.state.project, entities: value } });
  };
  handleDescriptionChange = ({ target }) => {
    const { value } = target;
    console.log(value);
    this.setState({ project: { ...this.state.project, description: value } });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        CreateDataset: ${this.state.project.name}
        ListeTaggs: ${this.state.project.entities}
        Description: ${this.state.project.description}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
    const project = {
      name: this.state.project.name,
      entities: this.state.project.entities.split(","),
      description: this.state.project.description,
    };
    console.log(project);
    // axios.post('http://localhost:3000/Layout'+this.props.match.params.id, project)
    //         .then(res => console.log(res.data));
    axios
      .put("/api/Projects/" + this.state.id, project)
      .then(async (response) => {
        const data = response.data;
        this.setState({ project: data });
        console.log("Data has been received !", data);
      })
      .catch((err) => console.log("Error :", err));
    this.props.history.push("/Layout");
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper">
        <div className="form-wrapper-create">
          <h1>Edit Project</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="projectname">
              <label htmlFor="name">Project Name</label>
              <input
                placeholder="Project Name"
                type="text"
                name="name"
                defaultValue={this.state.project.name}
                noValidate
                onChange={this.handleNameChange}
              />
            </div>
            <div className="liste">
              <label htmlFor="entities">List of tags comma seperated</label>
              <input
                placeholder="nomComplet,nom,prenom,adresse,pays,ville,codePostale..."
                type="text"
                name="entities"
                defaultValue={this.state.project.entities}
                noValidate
                onChange={this.handleEntitiesChange}
              />
            </div>
            <div className="projectname">
              <label htmlFor="description">Tagging Instruction</label>
              <textarea
                name="description"
                cols="30"
                rows="5"
                noValidate
                defaultValue={this.state.project.description}
                onChange={this.handleDescriptionChange}
                className="txt"
                placeholder="Annotation des CVs français et génération du DataSet"
              ></textarea>
            </div>
            <div className="submit">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default EditProject;
//HandelChange
// handleChange = ({e}) => {

//   const project =  {
//     ...this.state.project,
//     name: e.target.value
// }

// this.setState({ project });

//try number 7
//    const { name, value } = e.target;
//  this.setState({ [name]: value });

//try number 6
// this.setState({
//   project: Object.assign({}, this.state.project, {[e.target.name]:e.target.value})
// });

//try number 5
// const {project}={...this.state};
// const currentState=project;
// const{name,value}=e.target;
// currentState[name]=value;
// this.setState({user:currentState});

// this.setState({
//   project: Object.assign({}, this.state.project, {name: value})
// });

//try number 4
//   this.setState(prevState => ({
//     ...prevState,
//     project: {
//         ...prevState.project,
//         name: e.target.value
//     }
// }))

//try number 3
// const newState={...this.state.project,[e.target.name]:e.target.value}
// this.setState({project :newState})

//try number 2
// var project={...this.state.project}
// var newValue = e.target.name;
// project.newValue=e.target.value;
// this.setState({project})

//try number 1
// this.setState({
//   project : {...this.state.project,[e.target.name]:e.target.value}
// })
// this.setState({
//   [event.target.name] : event.target.value
// })

//not worlking
// const { name, value } = target;
// console.log(value);

//not woorking
//   this.setState({
//    [project.name]: value,
//  });

//not working
//   this.setState((state) => {
//     state.project.name = value;
//   });

//not working
// this.state.project.name = value;

//alert for testing
// alert("Editi  ");
// };

//edit project
/* EditProject() {
    const project = {
      name: this.state.name,
      entities: this.state.entities,
      description: this.state.description,
    };

    axios
      .put("/api/Projects/" + this.state.id, project)
      .then((response) => {
        const data = response.data;
        this.setState({ project: data });
        console.log("Data has been received !", data);
      })
      .catch((err) => console.log("Error :", err));
  } */
//ComponentDidMount
// componentDidMount = () => {
//   console.log(this.state.id);

//   axios
//     .get("/api/Projects/" + this.state.id)
//     .then((response) => {
//       const data = response.data;
//       this.setState({ project: data });
//       console.log("Data has been received !", data);
//     })
//     .catch((err) => console.log("Error :", err));

//   const project = {
//     name: this.state.name,
//     entities: this.state.entities,
//     description: this.state.description,
//   };

//   axios
//     .put("/api/Projects/" + this.state.id, project)
//     .then((response) => {
//       const data = response.data;
//       this.setState({ project: data });
//       console.log("Data has been received !", data);
//     })
//     .catch((err) => console.log("Error :", err));
// };
