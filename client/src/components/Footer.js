import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import EasyData4 from '../assets/images/EasyData4.png';
import map from '../assets/images/map.png';
import history from './../history.js';

 
const Footer = () => {
  return (
    <footer
      className="page-footer font-small mt-2 pt-3"
      style={{
        background: "#283655",
        // opacity: "0.90",
        color: "white",
        height: "350px",
      }}
    >
      <div
        className="container-footer text-center text-md-left"
        style={{ fontSize: "0.95rem" ,fontFamily:"Arial" }}
      >
        <div className="row text-center text-md-left mt-3 pb-3" style={{ height:"200px" }}>
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold" style={{ color: "rgb(102, 153, 153)" }}>ENSA Oujda</h6>
            <p>
              it's a pfa project where we can annote some documentations like
              resumes and help you get the information you are looking for
            </p>
            <img src={map} alt="map" style={{height:"150px", width:"300px"}} />
           {/* <a href="/" onClick={() => history.push('/')} >
           { <img src={EasyData4} alt="website logo" style={{height:"70px", width:"80px",background:"white"}} />}
    </a>*/}
          </div>
          <hr className="w-100 clearfix d-md-none" />
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold" style={{ color: "rgb(102, 153, 153)" }}>About</h6>
            <p>
              <a href="#!" style={{ color: "white" }}>
                Your Account
              </a>
            </p>
            <p>
              <a href="#!" style={{ color: "white" }}>
                About Us
              </a>
            </p>
            <p>
              <a href="#!" style={{ color: "white" }}>
                Project
              </a>
            </p>
            <p>
              <a href="#!" style={{ color: "white" }}>
                Help
              </a>
            </p>
          </div>
          <hr className="w-100 clearfix d-md-none" />
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold" style={{ color: "rgb(102, 153, 153)" }}>Contact</h6>
            <p>
              <i className="fas fa-home mr-2" style={{color:"white"}}></i>Adresse : E.N.S.A - BP 669
              Quartier Alquodss complexe universitaire Oujda Maroc
            </p>
            <p>
              <i className="fas fa-envelope mr-2" style={{color:"white"}}></i> info@gmail.com
            </p>
            <p>
              <i className="fas fa-phone mr-2" style={{color:"white"}}></i>Téléphone : 0536505470
            </p>
          </div>
        </div>
        <hr />
        <div
          className="row d-flex align-items-center justify-content-center"
          style={{ height: "50px" }}
        >
          <div className="col-md-5 col-lg-4 ml-lg-0" >
            <div className="text-center text-md-right" style={{ marginLeft:"40px" }}>
              <ul className="list-unstyled list-inline text-center">
                <li className="list-inline-item">
                  <a className="btn-floating btn-fb mx-3">
                    <i className="fab fa-facebook-f fa-2x" > </i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-tw mx-3">
                    <i className="fab fa-twitter fa-2x" style={{color:"white"}}> </i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-gplus mx-3">
                    <i className="fab fa-google-plus-g fa-2x" > </i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-li mx-3">
                    <i className="fab fa-linkedin-in fa-2x" style={{color:"white"}}> </i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-dribbble mx-3">
                    <i className="fab fa-dribbble fa-2x"> </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
