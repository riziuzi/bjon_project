import React from 'react';

export default function Navbar2() {

    const renderNavItem = (text, link) => (
        <div className="navItem flex items-center px-3 py-2 justify-center hover:shadow-md hover:bg-skin-primary200 rounded-lg transition ease-in-out  duration-300 mx-5">
            <a className="navLink  text-base text-center font-bold text-skin-text200 whitespace-nowrap w-full justify-center flex" href={link}>
                {text}
            </a>
        </div>
    );

    return (
        <div className="header sticky top-0 px-5 bg-skin-bg200 flex justify-between items-center w-full h-24">
            <a className="logo w-48" href="/welcome">
                <img className='hover:cursor-pointer' src="./img/Logo.svg" alt="Logo" />
            </a>
            <div className="items flex">
                {renderNavItem("Products", "/welcome")}
                {renderNavItem("Projects", "/JournalAI")}
                {renderNavItem("Knowledge base", "/resource")}
                {renderNavItem("About", "/about")}
            </div>

        </div>
    );
}
