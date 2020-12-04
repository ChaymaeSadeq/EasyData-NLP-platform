import React from "react";
import PropTypes from "prop-types";
import {ProgressBar} from 'react-bootstrap'

const Progress = ({ percentage }) => {
  return (
    <div className="container d-flex" style={{marginTop:"40px", alignItems:"center", justifyContent:"center" }}>
      <ProgressBar animated variant="success" min={0} max={100} now={percentage} label={`${percentage}%`} style={{width:"80%"}} />
      </div>
  );
};

Progress.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default Progress;
