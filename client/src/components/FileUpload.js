import React, { Fragment, useState } from "react";
import axios from "axios";
import Message from "./Message";
import Progress from "./Progress";
import history from "./../history.js";

const FileUpload = (props) => {
  const [file, setFile] = useState("");
  const [fileName, setFilename] = useState("Choose file");
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState("");
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(true);
  };

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("/api/Files/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (ProgressEvent) => {
          setUploadPercentage(
            parseInt(
              Math.round((ProgressEvent.loaded * 100) / ProgressEvent.total)
            )
          );

          //Clear Percentage
          setTimeout(() => setUploadPercentage(0), 10000);
        },
      });

      // const { fileName, filePath ,data } = res.data;

      props.data(res.data);
      // setUploadedFile({ fileName, filePath });
      setMessage("File Uploaded");
    } catch (err) {
      if (err.response.status === 500) {
        setMessage(err.response.data.msg);
      } else {
        setMessage(err.response.data.msg);
      }
    }
  };

  return (
    <Fragment>
      {message ? <Message msg={message} /> : undefined}
      <form onSubmit={onSubmit} style={{ marginTop: "40px" }}>
        <div className="custom-file mt-4">
          <input
            type="file"
            className="custom-file-input"
            id="customFile"
            onChange={onChange}
          />
          <label className="custom-file-label" htmlFor="customFile">
            {fileName}
          </label>
        </div>
        {visible ? (
          <Progress percentage={uploadPercentage} style={{ width: "100%" }} />
        ) : undefined}

        <input
          type="submit"
          value="Upload"
          className="btn btn-primary btn-block mt-4"
          onClick={handleClick}
        />
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
      </form>

      {/* {uploadedFile ? (
        <div className="row mt-5">
          <div className="col-md-6-auto">
            <h7 className="text-center">
              File name: {uploadedFile.fileName}
            </h7>
          </div>
        </div>
      ) : null}  */}
    </Fragment>
  );
};

export default FileUpload;
