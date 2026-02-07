import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";
import { MdKeyboardArrowDown, MdSearchOff } from "react-icons/md";
import Loader from "../../Fixed/Loader";
import TipsHero from "./THero";

export default function TipsGrid() {
    const [tips, setTips] = useState([]);
    const [activeCategory, setActiveCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const tipsPerPage = 12;
    const categories = ["All", "Essentials", "Budget", "Safety", "Culture", "Adventure", "Food"];

    // ----------- Fetch tips from server --------------
    useEffect(() => {
        const fetchTips = async () => {
            try {
                const res = await fetch("http://localhost:5000/blogs");
                if (!res.ok) throw new Error("Failed to fetch tips");
                const data = await res.json();
                setTips([...data].reverse());
            } catch (err) {
                setError("No Tips Found ...");
            } finally {
                setLoading(false);
            }
        };
        fetchTips();
    }, []);

    // ----------- Filter & search --------------
    const filteredTips = tips
        .filter((tip) => (activeCategory === "All" ? true : tip.category === activeCategory))
        .filter((tip) => tip.title.toLowerCase().includes(searchTerm.toLowerCase()));

    // -------------- Pagination --------------
    const totalPages = Math.ceil(filteredTips.length / tipsPerPage);
    const startIndex = (currentPage - 1) * tipsPerPage;
    const currentTips = filteredTips.slice(startIndex, startIndex + tipsPerPage);

    if (loading) return <Loader />;

    if (error)
        return (
            <div>
                <TipsHero />
                <div className="flex flex-col items-center justify-center py-20 text-center text-gray-600">
                    <MdSearchOff className="text-6xl mb-4 animate-bounce" />
                    <h3 className="text-2xl md:text-3xl font-semibold mb-2">No tips found</h3>
                    <p className="text-gray-500">There must be a problem while loading. <br /> Please try again after some time.</p>
                </div>
            </div>
        );

    return (
        <section className="bg-[#f7f4ef]">

            <section
                className="relative h-[65vh] flex items-center justify-center bg-cover bg-center pt-20 "
            >

                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/Tips/tips-bg.jpg')" }}

                />

                <div className="absolute inset-0 bg-black/70"></div>
                <div className="relative z-10 text-center max-w-3xl px-6">
                    <Fade direction="down" triggerOnce>
                        <h1 className="text-4xl md:text-6xl chicleRegular text-white mb-4 drop-shadow-lg">
                            Travel Tips for Visiting Bangladesh
                        </h1>
                        <p className="text-gray-200 mb-8 text-lg">
                            Your ultimate guide to exploring the beauty, culture, and safety of this amazing country.
                        </p>

                        {/* ------------Search + Category Dropdown------------ */}
                        <div className="flex  items-center gap-4 justify-center">
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                    setCurrentPage(1);
                                }}
                                placeholder="Search tips..."
                                className="flex-1 md:w-96 px-6 py-3 rounded-full outline-none bg-white text-gray-700 shadow-lg"

                            />

                            <div className="relative">
                                <button
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                    className="flex items-center gap-2 bg-emerald-700 text-white px-5 py-3 rounded-full shadow-lg hover:bg-emerald-800 transition"
                                >
                                    {activeCategory} <MdKeyboardArrowDown className="text-xl" />
                                </button>
                                {dropdownOpen && (
                                    <div className="absolute right-0 z-50 mt-2 w-40 bg-white rounded-xl shadow-lg overflow-hidden ">
                                        {categories.map((cat) => (
                                            <button
                                                key={cat}
                                                onClick={() => {
                                                    setActiveCategory(cat);
                                                    setCurrentPage(1);
                                                    setDropdownOpen(false);
                                                }}
                                                className={`w-full text-left px-4 py-2 hover:bg-emerald-100 transition ${activeCategory === cat ? "bg-emerald-200 font-semibold" : ""
                                                    }`}
                                            >
                                                {cat}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </Fade>
                </div>
            </section>



            {/* Tips Grid */}
            {filteredTips.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-center text-gray-600">
                    <MdSearchOff className="text-6xl mb-4 animate-bounce" />
                    <h3 className="text-2xl md:text-3xl font-semibold mb-2">No tips found</h3>
                    <p className="text-gray-500">Try adjusting your search or selecting a different category.</p>
                </div>
            ) : (
                <Slide cascade damping={0.1} triggerOnce>
                    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 m-12">
                        {currentTips.map((tip) => (
                            <div
                                key={tip._id}
                                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 cursor-pointer h-80 md:h-105"
                            >
                                <img
                                    src={tip.image}
                                    alt={tip.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent" />
                                <span className="absolute top-4 left-4 bg-emerald-600 text-white text-xs px-3 py-1 rounded-full z-10 shadow">
                                    {tip.badge}
                                </span>
                                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 z-10 transition-all duration-300 group-hover:-translate-y-2">
                                    <h3 className="text-white text-lg md:text-xl font-bold mb-1 leading-snug border-b-2 border-amber-500 w-fit pb-2 pr-2">
                                        {tip.title}
                                    </h3>
                                    <p className="text-gray-200 text-sm mb-1 line-clamp-2">{tip.shortDesc}</p>
                                    <p className="text-gray-400 text-xs mb-3">{tip.date}</p>
                                    <Link
                                        to={`/tips/${tip._id}`}
                                        className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2 rounded font-semibold transition transform hover:scale-105"
                                    >
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </Slide>
            )}

            {/* Pagination */}
            {totalPages > 1 && filteredTips.length > 0 && (
                <div className="flex flex-wrap justify-center items-center mt-12 gap-2 md:gap-3">
                    <button
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage((p) => p - 1)}
                        className="px-3 md:px-4 py-2 text-sm rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-40"
                    >
                        Prev
                    </button>

                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index + 1)}
                            className={`px-3 md:px-4 py-2 text-sm rounded font-semibold transition ${currentPage === index + 1
                                ? "bg-emerald-700 text-white"
                                : "bg-white text-gray-700 hover:bg-emerald-100"
                                }`}
                        >
                            {index + 1}
                        </button>
                    ))}

                    <button
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage((p) => p + 1)}
                        className="px-3 md:px-4 py-2 text-sm rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-40"
                    >
                        Next
                    </button>
                </div>
            )}
        </section>
    );
}

