import React from 'react';
import {Link} from 'react-router-dom';
import 'animate.css';
import IMAGES from '../icons/images';

const Welcome = () => {
    return (
        <>
            <div id="welcome-main">
                <h1 className="" id="welcome-text">Hello there, </h1> {/* animate__animated animate__bounceInUp */}
                <h1>Welome to my</h1>
                <h1>Portfolio</h1>
                <Link to="/home"><img src={IMAGES.imgfive} alt="" height="40px" width="40px"/></Link>
            </div>
        </>
    )
}

export default Welcome
