import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ITEMS_PER_PAGE = 12;

export default function TipsGrid() {
    const [tips, setTips] = useState([]);
    const [activeCategory, setActiveCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);

    const categories = [
        "All",
        "Essentials",
        "Budget",
        "Safety",
        "Culture",
        "Food",
        "Adventure"
    ];

    useEffect(() => {
        fetch("/data/tips.json")
            .then((res) => res.json())
            .then((data) => setTips(data));
    }, []);

    // Filter by category
    const filteredTips =
        activeCategory === "All"
            ? tips
            : tips.filter((tip) => tip.category === activeCategory);

    // Pagination logic
    const totalPages = Math.ceil(filteredTips.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentTips = filteredTips.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE
    );

    return (
        <section className="py-20 bg-[#f7f4ef]">
            <div className="max-w-7xl mx-auto px-6">

                {/* Category Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => {
                                setActiveCategory(cat);
                                setCurrentPage(1);
                            }}
                            className={`px-6 py-2 rounded-full border transition font-semibold
                ${activeCategory === cat
                                    ? "bg-emerald-700 text-white"
                                    : "bg-white text-gray-700 hover:bg-emerald-100"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {currentTips.map((tip) => (
                        <div
                            key={tip.id}
                            className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer"
                        >
                            {/* Image */}
                            <img
                                src={tip.image}
                                alt={tip.title}
                                className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 to-black/10"></div>

                            {/* Title + Category */}
                            <div className="absolute inset-0 flex flex-col items-center justify-end mb-5 text-center z-10 transition-all duration-300 group-hover:-translate-y-6">
                                <h3 className="chicleRegular text-white text-xl drop-shadow">
                                    {tip.title}
                                </h3>
                                <div className="w-12 h-0.5 bg-orange-400 my-2"></div>
                                <p className="text-gray-200 text-sm tracking-wide">
                                    {tip.category}
                                </p>
                            </div>

                            {/* Hover Button */}
                            <div className="absolute inset-0 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition duration-300 z-10">
                                <Link
                                    to={`/tips/${tip.id}`}
                                    className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded font-semibold shadow-md transition transform hover:scale-105"
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-12 gap-2">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index + 1)}
                            className={`px-4 py-2 rounded-full font-semibold transition
                ${currentPage === index + 1
                                    ? "bg-emerald-700 text-white"
                                    : "bg-white text-gray-700 hover:bg-emerald-100"
                                }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>

            </div>
        </section>
    );
}
