import React from "react";
import InputBg from "../assets/images/bg-shorten-mobile.svg";
import BrandIcon from "../assets/images/icon-brand-recognition.svg";
import DetailIcon from "../assets/images/icon-detailed-records.svg";
import CustomizeIcon from "../assets/images/icon-fully-customizable.svg";

const BENEFIT_DATA = [
    {
        id: 1,
        title: "Brand Recognition",
        paragraph:
            "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
        icon: BrandIcon,
        translateY: "0px"
    },
    {
        id: 2,
        title: "Detailed Records",
        paragraph:
            "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
        icon: DetailIcon,
        translateY: "32px"
    },
    {
        id: 3,
        title: "Fully Customizable",
        paragraph:
            "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
        icon: CustomizeIcon,
        translateY: "64px"
    }
];
const Benefit = () => {
    return (
        <div className="relative bg-[var(--gray-400)] pt-8 pb-24 px-6">
            <InputLink />
            <div className="text-center mt-36 px-6 mb-20">
                <h2 className="font-bold text-3xl mb-8">Advanced Statistics</h2>
                <p className="text-[var(--gray-900)] font-medium">
                    Track how your links are performing across the web with our
                    advanced statistics dashboard.
                </p>
            </div>
            <BenefitList />
        </div>
    );
};
const InputLink = () => {
    return (
        <form className="bg-[var(--gray-900)] absolute -top-[90px] lg:-top-[50px] w-[80%] rounded-xl left-0 right-0 mx-auto">
            <div
                style={{ backgroundImage: `url(${InputBg})` }}
                className="p-6 lg:p-12 rounded-xl flex flex-col gap-4 bg-no-repeat bg-right-top *:rounded-lg lg:flex-row"
            >
                <input
                    type="text"
                    className="block p-4 lg:flex-1"
                    placeholder="Shorten a link here..."
                />
                <button className="bg-[var(--blue-400)] p-4 capitalize font-bold text-white">
                    Shorten It!
                </button>
            </div>
        </form>
    );
};

const BenefitList = () => {
    return (
        <div className="flex flex-col lg:flex-row max-w-screen-xl mx-auto">
            {BENEFIT_DATA.map(b => (
                <React.Fragment key={b.id}>
                    <div
                        style={{ "--transY": b.translateY }}
                        className={`bg-white p-8 rounded-lg text-center relative benefit`}
                        
                    >
                        <div className="bg-[var(--gray-900)] w-fit mx-auto p-6 rounded-full flex items-center justify-center absolute -top-[44px] left-0 right-0">
                            <img src={b.icon} />
                        </div>
                        <h3 className="mt-12 font-bold text-xl mb-4">
                            {b.title}
                        </h3>

                        <p className="text-base">{b.paragraph}</p>
                    </div>
                    {b.id === 3 ? null : (
                        <div className="w-4 h-32 bg-[var(--blue-400)] mx-auto lg:my-auto lg:h-4 lg:w-32"></div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};
export default Benefit;
