import React from 'react';
import IMAGES from '../icons/images';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="flex fixed top-0 w-full bg-gray-800" id="nav-root">
            <nav className="w-full text-white flex items-center justify-between" id="navbar">
                <Link to="/welcome" className="inline-block"><img src={IMAGES.imgfour} alt="" height="80" width="80" className="ml-4" /></Link>
                <div className="inline-block border-1 border-red-500" id="nav-div">
                    <ul className='flex space-x-4' id="nav-elemnts">
                        <li><Link to="/home" className='px-4 py-2 rounded'>Home</Link></li>
                        <li><Link to="/skills" className='px-4 py-2 rounded'>Skills</Link></li>
                        <li><Link to="/projects" className='px-4 py-2 rounded'>Projects</Link></li>
                        <li><Link to="/resume" className='px-4 py-2 rounded'>Resume</Link></li>
                        <li><Link to="/contact" className='px-4 py-2 rounded'>Contact</Link></li>
                    </ul>
                </div>
                <a href="https://github.com/harshit-46" target='_blank' rel='noreferrer'><button className="mr-4"><img src={IMAGES.imgthree} alt="" height="32" width="32" id="github-logo" /></button></a>
            </nav>
        </div>
    );
}

export default Header;