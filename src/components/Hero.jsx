const Hero = () => {
    
    return (
        <section className="overflow-x-hidden">
            
            <div className="lg:ml-[5%] flex flex-col lg:flex-row-reverse gap-12 lg:items-center items-center w-full justify-center lg:justify-between pb-[200px] pt-[50px] overflow-x-hidden">
                <div className="max-md:ml-6 heroBg h-[482px] w-full md:w-[750px] lg:min-w-[600px] bg-no-repeat object-left"></div>
                <div className="lg:basis-[60%] flex-1 text-center lg:text-left">
                    <h1 className="text-5xl text-[var(--gray-950)] lg:text-7xl max-w-[14ch] font-bold leading-[1.2] lg:mx-0 mx-auto">
                        More than just shorter links
                    </h1>
                    <p className="mt-2 mb-8 mx-auto md:max-w-[85%] lg:mx-0 text-[var(--gray-500)] font-medium">
                        Build your brand’s recognition and get detailed insights
                        on how your links are performing.
                    </p>
                    <button className="capitalize bg-[var(--blue-400)] py-3 px-8 rounded-full text-white font-bold">
                        get started
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
