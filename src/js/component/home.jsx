import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faClock } from '@fortawesome/free-solid-svg-icons'; 
library.add(faClock); 

//create your first component
const Home = (props) => {
    return (
        <div>
            <div className="container bg-counter">
                <div className="row">
                    <div className="col counter icono">
                         <i className="fas fa-clock"></i> 
                    </div>
            <div className="col counter">{props.digitSix}</div>
            <div className="col counter">{props.digitFive}</div>
            <div className="col counter">{props.digitFour}</div>
            <div className="col counter">{props.digitThree}</div>
            <div className="col counter">{props.digitTwo}</div>
            <div className="col counter">{props.digitOne}</div>
                </div>
            </div >
        </div>
    );
};

export default Home;