import React from 'react'
import IMAGES from '../icons/images'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="border-2 border-blue-500 justify-between">
            <div className="flex">
                <nav className="w-full bg-black text-white">
                    <Link to="/home">Ⱨ₲.ĐɆV</Link>
                    <div className="border-4 border-red-600 w-6/12 ml-25">
                        <ul className='grid grid-cols-4 gap-1'>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/tech">Tech</Link></li>
                            <li><Link to="/projects">Project</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </nav>
                <a href="https://github.com/harshit-46" target='_blank' rel='noreferrer'><button><img src={IMAGES.imgone} alt="" height="40" width="40" className="mr-10 mt-3 mb-3"/></button></a>
            </div>
        </div>
    )
}

export default Header