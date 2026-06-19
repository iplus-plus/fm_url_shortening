import React from "react";
import HERO_IMAGE from "../assets/images/illustration-working.svg";

const Hero = () => {
    return (
        <section className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-4 lg:justify-between lg:items-center max-w-screen-xl mx-auto overflow-x-hidden pb-48 lg:pt-8">
            <img
                className="block h-auto w-full lg:mx-0 ml-6 lg:ml-0 min-w-[600px] lg:px-0 basis-2/5"
                src={HERO_IMAGE}
                alt="Illustration of a person working at a desk with a monitor and plants"
            />
            <div className="text-center lg:text-left basis-7/12">
                <h1 className="max-w-[14ch] text-4xl lg:text-7xl text-[var(--gray-950)] mx-auto lg:mx-0 font-bold leading-10">
                    More than just shorter links
                </h1>
                <p className="py-6 max-w-[40ch] mx-auto lg:mx-0 text-[var(--gray-500)] font-medium lg:max-w-none lg:mx-0 lg:py-0 lg:pt-4 lg:max-w-[70%] lg:pb-8">
                    Build your brand’s recognition and get detailed insights on
                    how your links are performing.
                </p>
                <button className="capitalize bg-[var(--blue-400)] py-3 px-8 rounded-full text-white font-bold">
                    get started
                </button>
            </div>
        </section>
    );
};

export default Hero;
