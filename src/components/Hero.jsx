import React from "react";
import HERO_IMAGE from "../assets/images/illustration-working.svg";

const Hero = () => {
    return (
        <div className="flex flex-col gap-8 max-w-screen-xl mx-auto">
            <div
                className="min-h-[400px] bg-no-repeat bg-[24px_top] [backgroundSize:140%]"
                style={{ backgroundImage: `url(${HERO_IMAGE})` }}
            ></div>
            <div className="px-6 text-center">
                <h1 className="max-w-[14ch] text-5xl text-[var(--gray-950)] mx-auto font-bold">
                    More than just shorter links
                </h1>
                <p className="py-8 text-[var(--gray-500)] font-medium">
                    Build your brand’s recognition and get detailed insights on
                    how your links are performing.
                </p>
                <button className="capitalize bg-[var(--blue-400)] py-3 px-8 rounded-full text-white font-bold">
                    get started
                </button>
            </div>
        </div>
    );
};

export default Hero;
