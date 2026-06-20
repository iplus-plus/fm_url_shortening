import { useState, useEffect } from "react";
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
        translateY: "40px"
    },
    {
        id: 3,
        title: "Fully Customizable",
        paragraph:
            "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
        icon: CustomizeIcon,
        translateY: "80px"
    }
];
const Benefit = () => {
    const [results, setResults] = useState(() => {
        return JSON.parse(localStorage.getItem("links")) || [];
    });
    useEffect(() => {
        localStorage.setItem("links", JSON.stringify(results));
    }, [results]);

    return (
        <section className="relative bg-[var(--purple-transparent)] pt-8 pb-52">
            <InputLink results={results} setResults={setResults} />

            <div
                style={{ marginTop: results?.length === 0 ? "12rem" : "5rem" }}
                className="text-center mb-32 center"
            >
                {results && (
                    <ul className="mb-4 flex flex-col gap-4 text-sm">
                        {results.map(r => (
                            <Link key={r.id} data={r} setResults={setResults} />
                        ))}
                    </ul>
                )}
                <h2
                    style={{ marginTop: results.length === 0 ? 0 : "100px" }}
                    className="font-bold text-3xl mb-6 lg:text-4xl"
                >
                    Advanced Statistics
                </h2>
                <p className="text-[var(--gray-500)] font-medium max-w-[540px] mx-auto leading-loose">
                    Track how your links are performing across the web with our
                    advanced statistics dashboard.
                </p>
            </div>
            <BenefitList />
        </section>
    );
};
const InputLink = ({ results, setResults }) => {
    const [value, setValue] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const handleSubmit = async e => {
        e.preventDefault();
        setError(null);
        if (!value.trim()) {
            setError("Fill the empty field!");
            return;
        }
        try {
            setLoading(true);
            const res = await fetch(
                "https://corsproxy.io/?" +
                    encodeURIComponent("https://cleanuri.com/api/v1/shorten"),
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ url: value.toLowerCase() })
                }
            );

            const result = await res.json();
            if (result?.result_url) {
                setResults(prev => [
                    ...prev,
                    {
                        id:
                            prev.length === 0
                                ? 1
                                : prev[prev.length - 1].id + 1,
                        long: value,
                        short: result?.result_url
                    }
                ]);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <form
            onSubmit={handleSubmit}
            className="bg-[var(--gray-900)] absolute -top-[90px] lg:-top-[75px] rounded-xl left-0 right-0 center"
        >
            <div className="p-6 bgInput lg:p-12 rounded-xl bg-no-repeat bg-cover bg-right-top">
                <div className="flex flex-col gap-4 *:rounded-lg lg:flex-row">
                    <input
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        type="text"
                        className="block p-4 w-auto lg:flex-1"
                        placeholder="Shorten a link here..."
                    />
                    <button
                        disabled={loading}
                        className="bg-[var(--blue-400)] p-4 transition-colors duration-200 capitalize font-bold text-white hover:bg-[var(--gray-400)] disabled:opacity-40"
                    >
                        {loading ? "Loading..." : "Shorten It!"}
                    </button>
                </div>
                {error ? <p className="mt-4 text-red-600">{error}</p> : null}
            </div>
        </form>
    );
};

const BenefitList = () => {
    return (
        <div className="flex flex-col lg:flex-row center">
            {BENEFIT_DATA.map(b => (
                <div className="flex flex-col lg:flex-row" key={b.id}>
                    <div
                        style={{ "--transY": b.translateY }}
                        className="bg-white p-10 rounded-lg text-center lg:text-left relative benefit shadow-lg"
                    >
                        <div className="bg-[var(--purple-950)] w-fit mx-auto p-6 rounded-full flex items-center justify-center lg:mx-0 lg:left-6 absolute -top-[44px] left-0 right-0">
                            <img src={b.icon} />
                        </div>
                        <h3 className="mt-12 font-bold text-xl mb-4">
                            {b.title}
                        </h3>

                        <p className="text-base text-[var(--gray-500)]">
                            {b.paragraph}
                        </p>
                    </div>
                    {b.id === 3 ? null : (
                        <div className="w-4 h-32 bg-[var(--blue-400)] mx-auto lg:my-auto lg:h-4 lg:w-32"></div>
                    )}
                </div>
            ))}
        </div>
    );
};

const Link = ({ data, setResults }) => {
    const [copy, setCopy] = useState(false);
    const handleCopy = async text => {
        try {
            await navigator.clipboard.writeText(text);
            setCopy(true);
            setTimeout(() => setCopy(false), 1000);
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <li
            className="bg-white rounded [&_p]:p-4 lg:p-4 text-left lg:flex lg:items-center font-medium shadow lg:[&_p]:text-lg"
            key={data.id}
        >
            <p className="border-b lg:border-b-0 lg:flex-1">{data.long}</p>
            <p className="text-[var(--blue-400)]">{data.short}</p>
            <button
                disabled={copy}
                onClick={() => handleCopy(data.short)}
                className="bg-[var(--blue-400)] block rounded-lg mx-auto w-[calc(100%-2rem)] lg:mb-0 lg:w-[150px] capitalize mb-3 font-bold p-3 text-white text-base disabled:bg-[var(--purple-950)] transition-colors duration-200 lg:ml-4"
            >
                {copy ? "copied!" : "Copy"}
            </button>
            <button
                onClick={() =>
                    setResults(prev => prev.filter(item => item.id != data.id))
                }
                className="bg-red-500 capitalize block p-3 rounded-lg mx-auto w-[calc(100%-2rem)] lg:mb-0 lg:w-[150px] mb-4 font-bold text-white text-base hover:bg-red-300 transition-colors duration-200 lg:ml-4"
            >
                delete
            </button>
        </li>
    );
};
export default Benefit;
