import React from "react";
import "../assets/Tagging.css";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
// import './fontawesome-free-5.13.0-web/css/fontawesome.min.css';

class Tagging extends React.Component {
  dictionnarie = {};
  state = {
    taggedText: [{ entity: "", value: "" }],
    Files: [[]],
    project: {
      id: "",
      name: "",
      entities: [],
      description: "",
    },
    id: this.props.location.state.id,
    currentDoc: 0,
    show: false,
  };
  //close the Modal
  handleClose = () => {
    this.setState({
      ...this.state,
      show: false,
    });
  };
  //   initialiser la liste des entités taggués et passer au CV suivant
  nextFile = () => {
    if (this.state.currentDoc < this.state.Files.length - 1) {
      this.setState({
        ...this.state,
        currentDoc: this.state.currentDoc + 1,
        taggedText: [{ entity: "", value: "" }],
      });
    }
  };
  //   initialiser la liste des entités taggués et revenir au CV précedent
  previousFile = () => {
    if (this.state.currentDoc > 0) {
      this.setState({
        ...this.state,
        currentDoc: this.state.currentDoc - 1,
        taggedText: [{ entity: "", value: "" }],
      });
      // console.log(this.state.Files.length, this.state.currentDoc);
    }
  };
  //pour recuperer le nom et les entités des projets
  getProject = () => {
    axios
      .get("/api/Projects/" + this.state.id)
      .then((response) => {
        const data = response.data;
        this.setState({ project: data });
        // console.log("Data has been received !", data);
        console.log(this.state.project.entities.join(" , "));
      })
      .catch((err) => console.log("Error :", err));
  };

  componentWillMount = () => {
    this.getProject();
    this.getFiles();
  };

  getFiles = () => {
    axios
      .get("/api/Files")
      .then((response) => {
        const data = response.data;
        this.setState({ Files: data });
        console.log("Files", data);
      })
      .catch((err) => console.log("Error :", err));
  };
  // eslint-disable-next-line

  handleSelect = () => {
    let txt = "";

    if (window.getSelection) {
      txt = window.getSelection().toString();
    } else if (document.getSelection) {
      txt = document.getSelection();
    } else if (document.selection) {
      txt = document.selection.createRange().text;
    }
    if (txt == "" || txt == " ") return;

    this.setState({
      ...this.state,
      show: true,
    }); /* console.log("tagged txt: " + txt); */
    /*     console.log(this.state.taggedText);
     */
    //console.log(this.state.project.name);
  };
  //Save  tagged text with the entity
  handleTagg = (key) => {
    let txt = "";
    const tmp = this.state.taggedText;
    if (window.getSelection) {
      txt = window.getSelection().toString();
    } else if (document.getSelection) {
      txt = document.getSelection();
    } else if (document.selection) {
      txt = document.selection.createRange().text;
    }

    //verify if the entity exists and replace the value of this entity
    let bol = true;
    for (let i of tmp) {
      if (i.entity == key) {
        i.value = txt;
        bol = false;
        break;
      }
    }

    if (bol) {
      tmp.push({ entity: key, value: txt });
    }

    this.setState({
      ...this.state,
      taggedText: tmp,
    });
    console.log("the staaate ;", this.state.taggedText);
    /*  console.log(key);
      console.log(txt); */

    // this.setState({
    //   ...this.state,
    //   dictionnarie: { ...this.state.dictionnarie, [key]: txt },
    // });

    /* this.dictionnarie.push(txt); */
    this.dictionnarie = { ...this.dictionnarie, [key]: txt };
    console.log(this.dictionnarie);
    console.log(txt);

    this.handleClose();
  };
  //save the dictionnary of entity:value pair in DATABASE
  saveDictionnary = () => {
    const dictionnary = this.dictionnarie;
    axios({
      url: "/api/Dictionnaries",
      method: "POST",
      data: dictionnary,
    })
      .then(() => {
        console.log("Dictionnary has been sent to the server");
        console.log(dictionnary);
      })
      .catch(() => {
        console.log("Tagging component : Internal server error !");
      });
    this.nextFile();
  };

  render() {
    return (
      <div>
        <div className=" container-fluid row justify-content-between">
          <div>
            <h1 className="F">{this.state.project.name}</h1>
          </div>
          <div className="left">
            <button className="btn btn-info Space" onClick={this.previousFile}>
              {" "}
              Previous
            </button>
            <button className="btn btn-info Space" onClick={this.nextFile}>
              {" "}
              Next
            </button>
            <button
              className="btn btn-info Space"
              onClick={this.saveDictionnary}
            >
              {" "}
              Save Annotation
            </button>
          </div>
        </div>

        <div className="div2">
          <ul>
            <li className="text-center">
              Click on the document and then drag to select text and select a
              label.
            </li>
            <li className="text-self-center">
              More queries?{" "}
              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=vU3nwu4SwX4&t=71s"
              >
                See Demo Videos
              </a>
            </li>
          </ul>
        </div>

        <div className="CV" style={{ paddingLeft: "1.5rem" }}>
          <h5>Entities</h5>
          <p class="B" id="nom">
            {this.state.project.entities.join(" //// ")}
          </p>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Choose the entity</Modal.Title>
            </Modal.Header>
            {/* <Modal.Body>
          choose which entity is associated with the tagged text
        </Modal.Body> */}
            <Modal.Footer>
              {this.state.project.entities.map((entity) => (
                <Button
                  variant="secondary"
                  onClick={() => this.handleTagg(entity)}
                >
                  {entity}
                </Button>
              ))}
            </Modal.Footer>
          </Modal>
          {/*           show selected text for the user

 */}{" "}
          <p style={{ paddingLeft: "1.5rem", backgroundColor: "#999" }}>
            {this.state.taggedText.length > 1 && (
              <>
                History of Tagging:
                <br />
                {this.state.taggedText.map((object) => (
                  <p style={{ display: "inline" }}>
                    {" "}
                    <span style={{ backgroundColor: "#2185d0", color: "#FFF" }}>
                      {object.entity}
                    </span>{" "}
                    : {object.value}
                  </p>
                ))}
              </>
            )}
          </p>
          {this.state.Files[this.state.currentDoc].map((data) => (
            <div
              /* key={this.state.currentDoc} */
              className="document"
              onMouseUp={this.handleSelect}
            >
              {/* {this.props.reading}  */}
              {data} <br />{" "}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Tagging;
