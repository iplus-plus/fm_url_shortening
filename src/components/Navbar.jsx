import { useState } from "react";
import LOGO from "../assets/images/logo.svg";
import MENU_ICON from "../assets/images/menu-1-svgrepo-com.svg";

const NAV_LINKS_SECTION = ["Features", "Pricing", "Resources"];
const NAV_LINKS_AUTH = ["Login", "Sign Up"];
const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    return (
        <header className="px-6 py-8 relative">
            <div className="flex items-center justify-between lg:justify-start gap-12 max-w-screen-xl mx-auto">
                <img className="" src={LOGO} alt="logo" />
                <Nav navOpen={navOpen} setNavOpen={setNavOpen} />
                <button
                    onClick={() => setNavOpen(prev => !prev)}
                    className="lg:hidden"
                    aria-label="Toggle navigation menu"
                    aria-expanded={navOpen}
                    aria-controls="primary-navigation"
                >
                    <img src={MENU_ICON} className="size-8" alt="" />
                </button>
            </div>
        </header>
    );
};

const Nav = ({ navOpen, setNavOpen }) => {
    return (
        <nav
            id="primary-navigation"
            aria-label="Primary"
            className={`${navOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"} flex flex-col transition-all lg:opacity-100 lg:pointer-events-auto lg:translate-y-0 duration-300 absolute bg-[var(--purple-950)] items-center top-0 z-10 right-0 rounded-lg left-0 mt-[5.5rem] p-8 mx-4 gap-4 lg:w-full lg:mx-0 lg:p-0 lg:relative lg:flex-row lg:mt-0 lg:bg-transparent lg:justify-between *:flex *:flex-col *:items-center lg:*:flex-row lg:*:gap-12 lg:*:w-auto *:w-full *:gap-6`}
        >
            <ul className="max-lg:border-b max-lg:pb-6">
                {NAV_LINKS_SECTION.map(navlink => (
                    <Link to="#" key={navlink} name={navlink} onClick={() => setNavOpen(false)} />
                ))}
            </ul>
            <ul>
                {NAV_LINKS_AUTH.map(navlink => (
                    <Link to="#" key={navlink} name={navlink} onClick={() => setNavOpen(false)} />
                ))}
            </ul>
        </nav>
    );
};

const Link = ({ name, to, onClick }) => {
    return (
        <li className="w-full lg:w-auto text-center">
            <a
                href={to}
                onClick={onClick}
                className={`block font-bold text-white lg:text-[var(--gray-400)] ${name.toLowerCase() === "sign up" ? "rounded-3xl text-white lg:text-white px-6 py-2 bg-[var(--blue-400)] w-full" : ""}`}
            >
                {name}
            </a>
        </li>
    );
};

export default Navbar;