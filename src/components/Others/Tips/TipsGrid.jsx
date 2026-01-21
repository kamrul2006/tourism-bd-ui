import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function TipsGrid() {
    const [tips, setTips] = useState([]);
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = [
        "All",
        "Essentials",
        "Budget",
        "Safety",
        "Culture",
        "Adventure",
        "Food"
    ];

    useEffect(() => {
        fetch("/data/tips.json")
            .then(res => res.json())
            .then(data => setTips(data));
    }, []);

    const filteredTips =
        activeCategory === "All"
            ? tips
            : tips.filter(tip => tip.category === activeCategory);

    return (
        <section className="py-20 bg-[#f7f4ef]">
            <div className="max-w-7xl mx-auto px-6">

                {/* Categories */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full font-semibold transition
                ${activeCategory === cat
                                    ? "bg-emerald-700 text-white"
                                    : "bg-white text-gray-700 hover:bg-emerald-100"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    {filteredTips.map(tip => (
                        <div
                            key={tip.id}
                            className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer h-105"
                        >
                            {/* Image */}
                            <img
                                src={tip.image}
                                alt={tip.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent"></div>

                            {/* Badge */}
                            <span className="absolute top-4 left-4 bg-emerald-600 text-white text-xs px-3 py-1 rounded-full z-10">
                                {tip.badge}
                            </span>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                                <h3 className="text-white text-3xl font-bold mb-1">
                                    {tip.title}
                                </h3>

                                <p className="text-gray-200 text-lg my-2 border-y-2 w-fit py-1 border-gray-500">
                                    {tip.shortDesc}
                                </p>

                                <p className="text-gray-400  mb-3">
                                    {tip.date}
                                </p>

                                <Link
                                    to={`/tips/${tip.id}`}
                                    className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2 rounded-md font-semibold transition"
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}
