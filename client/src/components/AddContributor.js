import React, { Component } from "react";
import "../assets/AddContributor.css";

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class AddContributor extends Component {
  constructor(props) {
    super(props);

    this.state = {
     
      liste: null,
      formErrors: {
        liste: ""
      }
    };
  }

 

  

  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper">
        <div className="form-wrapper-create">
          <h1>Add Contributor</h1>
          <form onSubmit={this.handleSubmit} noValidate>
          
            <div className="liste">
              <label htmlFor="liste">Contributor-Email</label>
              <input
                placeholder="Email"
                type="text"
                name="liste"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div>
              
            </div>
            <div>
            <ul>
  <li>
    <input type="radio" id="f-option" name="selector"/>
    <label for="f-option"> Admin</label>
    
    <div class="check"></div>
  </li>
  
  <li>
    <input type="radio" id="s-option" name="selector"/>
    <label for="s-option"> Annotator</label>
    
    <div class="check"><div class="inside"></div></div>
  </li>
  </ul>
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

export default AddContributor;
