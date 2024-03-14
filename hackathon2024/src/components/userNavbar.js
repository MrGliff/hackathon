import React from 'react'
import './styles/userNavbar.css'

export default function userNavbar() {
    return (
        <>
            <div className="navbar">
                <header className="text-gray-400 body-font">
                    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                            <span className="ml-0 text-xl">grind</span>
                        </a>
                        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                            <a className="mr-5 title">Home</a>
                            <a className="mr-5 title">Friends</a>
                            <a className="mr-5 title">My Habits</a>
                            <a className="mr-5 title">Work Log</a>
                        </nav>
                        <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 profile">Profile</button>
                    </div>
                </header>
            </div>
        </>
    );
}