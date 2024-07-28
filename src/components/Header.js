import React from 'react';
import IMAGES from '../icons/images';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="bg-black">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                <Link to="/welcome" className="flex-shrink-0"><img src={IMAGES.imgfour} alt="" height="80" width="80" className="ml-2 sm:ml-0" /></Link>
                <div className="hidden sm:block">
                    <ul className="flex space-x-4">
                        <li><Link to="/home" className="text-white px-3 py-2 rounded hover:bg-gray-700">Home</Link></li>
                        <li><Link to="/skills" className="text-white px-3 py-2 rounded hover:bg-gray-700">Skills</Link></li>
                        <li><Link to="/projects" className="text-white px-3 py-2 rounded hover:bg-gray-700">Projects</Link></li>
                        <li><Link to="/resume" className="text-white px-3 py-2 rounded hover:bg-gray-700">Resume</Link></li>
                        <li><Link to="/contact" className="text-white px-3 py-2 rounded hover:bg-gray-700">Contact</Link></li>
                    </ul>
                </div>
                <a href="https://github.com/harshit-46" target="_blank" rel="noreferrer"><img src={IMAGES.imgthree} alt="" height="32" width="32" className="ml-4 sm:ml-2" /></a>
            </nav>
        </div>
    );
}

export default Header;