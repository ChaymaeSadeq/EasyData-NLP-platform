import React, { Component } from 'react';
import Login from './Login.js';
import Signup from './Signup.js';
import history from './../history.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import EasyData4 from '../assets/images/EasyData4.png';

// import HomeImage from '../assets/images/Home.svg';

export default class FrontPage extends Component {
    


    render() {
        return (
            <div className="bb">
            <div className="container-front text-center  " >
                {/* <img src={HomeImage}  style={{height:"60px", marginTop:"10px"}} /> */}
                {/* <div  styles={{ backgroundImage:`url(${HomeImage})` }}></div> */}
                <div >
                <img src={EasyData4} alt="website logo" style={{height:"300px", width:"300px",margin:"auto"}} />
                </div>
                <h2 className="font-weight-bold">Welcome to our plateform</h2>
                <p> we help you annotate your cv and extract information you need </p>
                <div className="">
                <Button className="justify-content-center mb-4 mt-3 mr-5 ml-2 pb-3" size="lg" onClick={() => history.push('/Signup')}>Sign up</Button>
                <Button className="justify-content-center mb-4 mt-3 mr-5 ml-2 pb-3" size="lg" onClick={() => history.push('/Login')}>Sign in</Button>
                </div>
                <div >
                </div>                
            </div>
            {/*<img src="https://media.giphy.com/media/PjJ1cLHqLEveXysGDB/giphy.gif" />*/}

            </div>
        )
    }
}
