//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./component/home.jsx";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faClock } from '@fortawesome/free-solid-svg-icons'; 

library.add(faClock);


// include your styles into the webpack bundle
import "../styles/index.css";


//render your react application


let sec = 0;
setInterval(() => {
    const One = Math.floor((sec / 1) % 10);
    const Two = Math.floor((sec / 10) % 10);
    const Three = Math.floor((sec / 100) % 10);
    const Four = Math.floor((sec / 1000) % 10);
    const Five = Math.floor((sec / 10000) % 10);
    const Six = Math.floor((sec / 100000) % 10);
    sec += 1
    ReactDOM.createRoot(document.getElementById('app')).render(<Home digitOne={One} digitTwo={Two} digitThree={Three} digitFour={Four} digitFive={Five} digitSix={Six} />);
}, 1000);