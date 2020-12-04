import React from 'react';
import history from './../history.js';
import 'bootstrap/dist/css/bootstrap.min.css';



class Contributeur extends React.Component{

    constructor(props){
        super(props);
    };
// eslint-disable-next-line

    render(){
        return(
            <div>
                <h1 class="text-center" style={{marginTop:"40px"}}>Contributor Details</h1>

                <h4 className="display-7 text-center ">
                    <a href="/Layout" onClick={() => history.push('/Layout')} className="badge badge-secondary" style={{marginTop:"80px", fontWeight:"normal", backgroundColor:"lightgray"}}>
                        <i class="fas fa-arrow-circle-left" style={{color:"white", marginRight:"5px"}}></i>Back To The Project
                    </a>
                </h4>

            </div>
        );
    }
}


export default Contributeur