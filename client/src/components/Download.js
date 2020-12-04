import React, { useState } from "react";
import Progress from "./Progress";
import axios from "axios";
import Message from "./Message";
import history from "./../history.js";

const Download = () => {
  // const [dictionnaries, setDictionnaries] = useState({ data: [] });
  let temp = [];

  //get Dictionnaries from dataBase
  const getDictionnaries = () => {
    axios
      .get("/api/Dictionnaries/download")
      .then(async (response) => {
        const data = response.data;
        for (let i = 0; i < data.length; i++) {
          temp.push(data[i].liste[0]);
        }
        // setDictionnaries({ data: temp });
        console.log("Dictionnaries has been received !", temp);
        DownloadJSON();
      })
      .catch((err) => console.log("Error :", err));
    console.log("getDictionnaries !!!");
  };

  function DownloadJSON() {
    //Build a JSON array containing Customer records.

    // var customers = new Array();
    // customers.push(["Customer Id", "Name", "Country"]);
    // customers.push([1, "John Hammond", "United States"]);
    // customers.push([2, "Mudassar Khan", "India"]);
    // customers.push([3, "Suzanne Mathews", "France"]);
    // customers.push([4, "Robert Schidner", "Russia"]);

    //Convert JSON Array to string.
    let json = JSON.stringify(temp);

    //Convert JSON string to BLOB.
    json = [json];
    var blob1 = new Blob(json, { type: "text/plain;charset=utf-8" });

    let link = "";
    //Check the Browser.
    var isIE = false || !!document.documentMode;
    if (isIE) {
      window.navigator.msSaveBlob(blob1, "DataSet.json");
    } else {
      var url = window.URL || window.webkitURL;
      link = url.createObjectURL(blob1);
      var a = document.createElement("a");
      a.download = "DataSet.json";
      a.href = link;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
    console.log("file is downloaded");
  }

  return (
    <div
      className="container justify-content-center"
      style={{ marginTop: "70px" }}
    >
      {/*   <form
        onSubmit={onSubmit}
        style={{ justifyContent: "center", alignItems: "center" }}
      > */}
      {/* <h4 className="display-7 text-center mb-4">Project Name: {} </h4> */}
      <h2 className="text-center" style={{ marginBottom: "40px" }}>
        <i class="fas fa-download mr-3"></i>
        Export Data
      </h2>

      <h6
        className="display-13 text-center"
        style={{ marginTop: "40px", marginBottom: "40px" }}
      >
        <p>The file will be downloaded as a JSON Format.</p>
        <p>
          Download file would be a text file where each line is a JSON
          containing the selected text, start index, end index and marked
          category
        </p>
      </h6>
      <input
        type="submit"
        value="Download"
        className="btn btn-primary btn-block mt-4"
        onClick={getDictionnaries}
      />
      {/*  </form> */}

      <h4 className="display-7 text-center " style={{ marginTop: "150px" }}>
        <a
          href="/Layout"
          onClick={() => history.push("/Layout")}
          className="badge badge-secondary mt-5"
          style={{ fontWeight: "normal", backgroundColor: "lightgray" }}
        >
          <i class="fas fa-arrow-circle-left" style={{ color: "white" }}></i>
          {"  "} Back To The Project
        </a>
      </h4>
    </div>
  );
};

export default Download;
