import React from 'react';
import {memo} from 'react';
import resets from '../css/resetmodule.css';
import classes from '../css/frame24.css';
import image from '../images/1.png';
import image1 from '../images/2.png';
import image2 from '../images/3.png';


const Home = () => {
    const handleClick = () => {
        alert('Button Clicked!');
    };

    return (
        <div className=" flex justify-center  sm:mx-auto item items-center">
            <div className="justify-center">
                <h1 className="font-bold text-7xl	">Try your dream <br/> jobs</h1>
            </div>
            <div>
                <img src={image2} alt="Your Image" className="casualLife3dBoySittingAtTheDes  z-10 ml-24"/>

                <img src={image} alt="Your Image" className="image1 absolute  "/>

                <img src={image1} alt="Your Image" className="image2 absolute "/>
            </div>
        </div>
    );
};

export default Home;
