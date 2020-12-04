import React from "react";
import "../assets/SideMenu.css";
import "bootstrap/dist/css/bootstrap.min.css";
import history from "./../history.js";

const SideMenu = () => {
  return (
    <div className="ui basic vertical col-md-0.5" style={{ marginTop: "4%" }}>
      <div className="text-center segment">
        <i className="fas fa-user fa-2x" style={{color:"#003459"}}></i>
        <span>nom</span>
      </div>

      <div className="sidebar">
        <a href="/Layout" className="item" style={{ margin: "10px" ,color:"black"}}>
          <i className="fas fa-home fa-2x " style={{color:"#003459"}}></i>
          <h6>Home</h6>
        </a>
        <a
          href="/Home"
          onClick={() => history.push("/Home")}
          className="item"
          style={{ margin: "10px" ,color:"black"}}
        >
          <i className="fas fa-plus fa-2x" style={{color:"#003459"}}></i>
          <h6>Create Dataset</h6>
        </a>
        {/* <a href="/Layout/EditProject" onClick={() => history.push('/EditProject')} className="item" style={{margin: "10px"}}><i className="fas fa-edit fa-2x" ></i> */}
        {/* <h7>Edit Project</h7> */}
        {/* </a> */}
        {/* <a href="/Layout/Download" onClick={() => history.push('/Download')} className="item" style={{margin: "10px"}}><i className="fa fa-download fa-2x" ></i> */}
        {/* <h7>Download</h7> */}
        {/* </a> */}
        {/* <a href="/Layout/Contributeur" onClick={() => history.push('/Contributeur')} className="item" style={{margin: "10px"}}><i className="fas fa-user-cog fa-2x" ></i> */}
        {/* <h7>Contributors</h7> */}
        {/* </a> */}
        {/* <a href="/Layout/AddData" onClick={() => history.push('/AddData')} className="item" style={{margin: "10px"}}><i className="fas fa-folder-plus fa-2x" ></i> */}
        {/* <h7>Add Data</h7> */}
        {/* </a> */}
      </div>
    </div>
  );
};

export default SideMenu;
