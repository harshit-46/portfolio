import React from 'react'
import IMAGES from '../icons/images'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="">
            <div className="flex bg-black">
                <nav className="w-full bg-black text-base leading-6 font-semibold dark:text-white">
                    <Link className="inline-block" to="/home"><img src={IMAGES.imgfour} alt="" height="80" width="80" className="ml-20 mt-4" /></Link>
                    <div className="w-6/12 inline-block border-2 border-red-500">
                        <ul className='grid grid-cols-4'>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/tech">Tech</Link></li>
                            <li><Link to="/projects">Project</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </nav>
                <a href="https://github.com/harshit-46" target='_blank' rel='noreferrer'><button><img src={IMAGES.imgthree} alt="" height="32" width="32" className="mr-20 mt-4 mb-3" /></button></a>
            </div>
        </div>
    )
}

export default Header