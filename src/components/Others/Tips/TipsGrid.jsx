import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function TipsGrid() {
    const [tips, setTips] = useState([]);
    const [activeCategory, setActiveCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);

    const tipsPerPage = 12;

    const categories = [
        "All",
        "Essentials",
        "Budget",
        "Safety",
        "Culture",
        "Adventure",
        "Food",
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

    // Pagination Logic
    const totalPages = Math.ceil(filteredTips.length / tipsPerPage);
    const startIndex = (currentPage - 1) * tipsPerPage;
    const currentTips = filteredTips.slice(
        startIndex,
        startIndex + tipsPerPage
    );

    return (
        <section className="py-20 bg-[#f7f4ef]">
            <div className="max-w-7xl mx-auto px-6">

                {/* Categories */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => {
                                setActiveCategory(cat);
                                setCurrentPage(1);
                            }}
                            className={`px-6 py-2 rounded-full font-semibold transition-all
                ${activeCategory === cat
                                    ? "bg-emerald-700 text-white shadow-md scale-105"
                                    : "bg-white text-gray-700 hover:bg-emerald-100"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    {currentTips.map((tip) => (
                        <div
                            key={tip.id}
                            className="group relative rounded-2xl overflow-hidden shadow-xl cursor-pointer h-107.5"
                        >
                            {/* Image */}
                            <img
                                src={tip.image}
                                alt={tip.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent"></div>

                            {/* Badge */}
                            <span className="absolute top-4 left-4 bg-emerald-600 text-white text-xs px-3 py-1 rounded-full z-10 shadow">
                                {tip.badge}
                            </span>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-5 z-10 transition-all duration-300 group-hover:-translate-y-2">
                                <h3 className="text-white text-xl font-bold mb-1 leading-snug border-b-2 border-amber-600 w-fit pb-2 pr-2">
                                    {tip.title}
                                </h3>

                                <p className="text-gray-200 text-sm mb-1">
                                    {tip.shortDesc}
                                </p>

                                <p className="text-gray-400 text-xs mb-4">
                                    {tip.date}
                                </p>

                                <Link
                                    to={`/tips/${tip.id}`}
                                    className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2 rounded font-semibold transition transform hover:scale-105"
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                    ))}

                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center mt-12 gap-3">
                    <button
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage((p) => p - 1)}
                        className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-40"
                    >
                        Prev
                    </button>

                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index + 1)}
                            className={`px-4 py-2 rounded font-semibold transition
                ${currentPage === index + 1
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
                        className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-40"
                    >
                        Next
                    </button>
                </div>

            </div>
        </section>
    );
}
