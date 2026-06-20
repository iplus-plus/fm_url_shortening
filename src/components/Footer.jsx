import React from "react";
import facebookIcon from "../assets/images/icon-facebook.svg";
import instagramIcon from "../assets/images/icon-instagram.svg";
import pinterestIcon from "../assets/images/icon-pinterest.svg";
import twitterIcon from "../assets/images/icon-twitter.svg";
const FOOTER_DATA = [
    {
        title: "Features",
        links: ["Link Shortening", "Branded Links", "Analytics"]
    },
    {
        title: "Resources",
        links: ["Blog", "Developers", "Support"]
    },
    {
        title: "Company",
        links: ["About", " Our Team", "Careers", "Contact"]
    }
];

const SOCIAL_ICON = [facebookIcon, twitterIcon, pinterestIcon, instagramIcon];
const Footer = () => {
    return (
        <footer className="bg-[var(--gray-950)] py-16 text-center lg:text-left">
            <div className="flex flex-col items-center gap-14 center text-white lg:flex-row lg:justify-between lg:items-start">
                <p className="font-bold text-3xl capitalize">shortly</p>
                <div className="flex flex-col gap-12 lg:gap-20 lg:flex-row">
                    {FOOTER_DATA.map(f => (
                        <div className="text-base" key={f.title}>
                            <h2 className="font-bold mb-4">{f.title}</h2>
                            <ul className="flex flex-col gap-2">
                                {f.links.map(l => (
                                    <li key={l}>
                                        <a
                                            className="text-[var(--gray-400)] font-medium hover:text-[var(--blue-400)] transition-colors duration-200"
                                            href="#"
                                        >
                                            {l}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className="flex gap-6">
                        {SOCIAL_ICON.map((s, i) => (
                            <a
                                className="hover:text-[var(--blue-400)] transition-colors duration-200"
                                key={i}
                            >
                                <img className="size-7" src={s} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
