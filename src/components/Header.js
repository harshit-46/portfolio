import React from 'react'
import '../App.css';
import IMAGES from '../icons/images'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <div className="flex fixed top-0 w-full" id="nav-root">
                <nav className="w-full text-base leading-6 font-semibold text-white" id="navbar">
                    <Link className="inline-block" to="/home"><img src={IMAGES.imgfour} alt="" height="80" width="80" className="ml-20 mt-4" /></Link>
                    <div className="w-96 inline-block" id="nav-div">
                        <ul className='grid grid-cols-4'>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/tech">Tech</Link></li>
                            <li><Link to="/projects">Project</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <a href="https://github.com/harshit-46" target='_blank' rel='noreferrer'><button><img src={IMAGES.imgthree} alt="" height="32" width="32" className="" /></button></a>
                </nav>
            </div>
        </>
    )
}

export default Header