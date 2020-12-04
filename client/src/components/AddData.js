import React, { useState } from "react";
import "../assets/addData.css";
import FileUpload from "./FileUpload";
import history from "./../history.js";

const EditProject = () => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(true);
  };

  return visible ? (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Add Data</h2>
      <h4 className="display-7 text-center mb-4">
        <i className="far fa-file-alt"></i> CV Upload
      </h4>
      <h6 className="display-10 text-center mb-4">Select file with data</h6>
      <h6 className="display-13 text-center mb-4">
        <p>Please upload a valid pdf file.</p>
      </h6>

      <FileUpload></FileUpload>
    </div>
  ) : (
    <div className="container mt-4">
      <h4 className="display-4 text-center " style={{ marginTop: "40px" }}>
        Add Data
      </h4>
      <button
        className="btn btn-primary btn-block"
        onClick={handleClick}
        style={{ marginTop: "80px" }}
      >
        Upload Raw Data
      </button>
      <h4 className="display-7 text-center ">
        <a
          href="/Layout"
          onClick={() => history.push("/Layout")}
          className="badge badge-secondary"
          style={{
            marginTop: "80px",
            fontWeight: "normal",
            backgroundColor: "lightgray",
          }}
        >
          <i
            class="fas fa-arrow-circle-left"
            style={{ color: "white", marginRight: "5px" }}
          ></i>
          Back To The Project
        </a>
      </h4>
    </div>
  );
};

export default EditProject;
