import React from 'react'
import IMAGES from '../icons/images'

const Header = () => {
    return (
        <div className="border-2 border-blue-500">
            <div className="flex justify-center">
                <nav className="w-full">
                    Logo
                    <div className="border-4 border-red-600 w-6/12 ml-25">This is div</div>
                </nav>
                <img src={IMAGES.imgone} alt="" height="40" width="40" className="mr-10 mt-3 mb-3"/>
            </div>
        </div>
    )
}

export default Header
