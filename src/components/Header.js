import React from 'react'
import IMAGES from '../icons/images'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <div className="flex fixed top-0 w-full" id="nav-root">
                <nav className="w-full text-white" id="navbar">
                    <Link className="inline-block" to="/welcome"><img src={IMAGES.imgfour} alt="" height="80" width="80" className="ml-24" /></Link>
                    <div className="w-96 inline-block" id="nav-div">
                        <ul className='grid grid-cols-5'>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/skills">Skills</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/resume">Resume</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <a href="https://github.com/harshit-46" target='_blank' rel='noreferrer'><button><img src={IMAGES.imgthree} alt="" height="32" width="32" className="" id="github-logo" /></button></a>
                </nav>
            </div>
        </>
    )
}

export default Header