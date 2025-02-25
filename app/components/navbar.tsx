import React from "react"
import { NavLink } from "react-router"



const NavBar: React.FC= () => {
    return (
        <header className="w-full px-8 bg-white-50 text-gray-70 shadow-sm ">
            <div className="container flex flex-col md:flex-row items-center justify-between py-4 max-w-7xl  ">
             <div className="flex flex-col md:flex-row items-center">
                <NavLink to="/" className="flex flex-col md:flex-row items-center"><span className="text-xl font-black ">REACT<span className="text-blue-400">Explorer</span></span></NavLink>
                <nav className="flex flex-wrap items-center ml-0 md:ml-8 md:border-l md:pl-8">
                    <NavLink
                    to="/"
                    end
                    className="mr-5 font-medium text-gray-600 hover:text-gray-900 ease-out duration-300 transition-all"
                    >
                    Home
                    </NavLink>
                    <NavLink
                    to="/countries"
                    className="mr-5 font-medium text-gray-600 hover:text-gray-900 ease-out duration-300 transition-all"
                    >
                    Countries
                    </NavLink>
                    <NavLink
                    to="/about"
                    className="mr-5 font-medium text-gray-600 hover:text-gray-900 ease-out duration-300 transition-all"
                    >
                    About
                    </NavLink>
                </nav>
            </div>
            </div>
        </header>
    )
}

export default NavBar
