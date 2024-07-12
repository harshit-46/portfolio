import React from 'react'
import IMAGES from '../icons/images'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="border-2 border-blue-500">
            <div className="flex">
                <nav className="w-full">
                    <Link to="/">Main Link</Link>
                    <div className="border-4 border-red-600 w-6/12 ml-25">
                        <ul>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/tech">Tech</Link></li>
                            <li><Link to="/projects">Project</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </nav>
                <img src={IMAGES.imgone} alt="" height="40" width="40" className="mr-10 mt-3 mb-3"/>
            </div>
        </div>
    )
}

export default Header