import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DESTINATIONS_PER_PAGE = 8;

export default function PopularDestinations() {
    const [destinations, setDestinations] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetch("/data/destinations.json")
            .then((res) => res.json())
            .then((data) => setDestinations(data));
    }, []);

    const totalPages = Math.ceil(destinations.length / DESTINATIONS_PER_PAGE);
    const startIndex = (currentPage - 1) * DESTINATIONS_PER_PAGE;
    const currentDestinations = destinations.slice(
        startIndex,
        startIndex + DESTINATIONS_PER_PAGE
    );

    return (
        <section className="py-20 bg-[#f7f4ef]">
            <div className="max-w-7xl mx-auto px-6">

                {/* Title in middle with gray line */}
                <div className="flex items-center justify-center mb-12">
                    <div className="h-1 w-80 rounded-full bg-linear-to-l from-gray-400 to-[#f7f4ef]"></div>
                    <h2 className="mx-4 chicleRegular text-3xl md:text-5xl  text-emerald-900">
                        Popular Destinations
                    </h2>
                    <div className="h-1 w-80 rounded-full bg-linear-to-r from-gray-400 to-[#f7f4ef]"></div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {currentDestinations.map((place) => (
                        <div
                            key={place.id}
                            className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer h-96"
                        >
                            {/* Image */}
                            <img
                                src={place.image}
                                alt={place.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent"></div>

                            {/* Content */}
                            <div className="absolute bottom-0 p-4 z-10 text-white">
                                <h3 className="text-lg md:text-3xl chicleRegular border-b-2 w-fit pr-4  py-2 border-orange-700">{place.name}</h3>

                                <p className="text-sm md:text-base text-gray-200 mb-3 h-6 overflow-hidden my-2">{place.desc}</p>
                                <Link
                                    to={`/destinations/${place.id}`}
                                    className="bg-orange-500 hover:bg-orange-600 text-white text-xs px-4 py-2 rounded font-semibold"
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center gap-3 mt-12">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                        <button
                            key={num}
                            onClick={() => setCurrentPage(num)}
                            className={`w-10 h-10 rounded-full font-semibold transition ${currentPage === num
                                ? "bg-emerald-700 text-white"
                                : "bg-white shadow text-gray-700 hover:bg-emerald-100"
                                }`}
                        >
                            {num}
                        </button>
                    ))}
                </div>

            </div>
        </section>
    );
}
