import React from "react";
import LOGO from "../assets/images/logo.svg";
import MENU_ICON from "../assets/images/menu-1-svgrepo-com.svg";

const NAV_LINKS = ["Features", "Pricing", "Resources"];
const Navbar = () => {
    return (
        <header className="p-4 relative">
            <div className="flex items-center justify-between">
                <img className="" src={LOGO} alt="logo" />
                <nav className="lg:relative absolute bg-[var(--purple-950)] top-0 z-10 lg:w-auto p-4">
                    <ul>
                        {NAV_LINKS.map(navlink => (
                            <li key={navlink}>
                                <a href="#">{navlink}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <button className="lg:hidden">
                    <img src={MENU_ICON} className="size-8" />
                </button>
            </div>
        </header>
    );
};

export default Navbar;
