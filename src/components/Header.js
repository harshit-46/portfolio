import React from 'react'

const Header = () => {
    return (
        <div>
            <div className="flex bg-black h-25 w-full border-b-10 border-blue-500">
                <nav className="w-full text-white">This is a header</nav>
                <button className="bg-sky-500 hover:bg-sky-700 rounded-2xl">This is a button</button>
            </div>
        </div>
    )
}

export default Header
