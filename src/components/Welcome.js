import React from "react";
import { Link } from "react-router-dom";
import "animate.css";
import IMAGES from "../icons/images";

const Welcome = () => {
    return (
        <>
            <div id="welcome-main">
                <div id="welcome-text">
                    <h1 id="hello">Hello there,</h1>
                    <h1>Welome to my</h1>
                    <h1>Portfolio</h1>
                </div>
                <div id="arrow-icon">
                    <Link to="/home">
                        <img src={IMAGES.imgfive} alt="" height="120px" width="120px" />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Welcome;
