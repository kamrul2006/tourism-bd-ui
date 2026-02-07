import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";

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
        <section className="py-10 bg-[#f7f4ef]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Title with line */}
                <Fade direction="up"  >

                    <div className="flex flex-col md:flex-row items-center justify-center mb-5 md:mb-10">

                        <Slide>
                            <div className=" md:block h-1 w-24 md:w-48 lg:w-80 rounded-full bg-linear-to-l from-gray-400 to-[#f7f4ef]" />
                        </Slide>
                        <h2 className="mx-2 text-3xl md:text-5xl chicleRegular text-emerald-900 text-center my-3 md:my-0">
                            Popular Destinations
                        </h2>
                        <Slide direction="right">
                            <div className=" md:block h-1 w-24 md:w-48 lg:w-80 rounded-full bg-linear-to-r from-gray-400 to-[#f7f4ef]" />
                        </Slide>
                    </div>
                </Fade>


                {/* Cards Grid */}
                <Fade cascade damping={0.1} triggerOnce>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                        {currentDestinations.map((place) => (
                            <div
                                key={place.id}
                                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition h-80 sm:h-96"
                            >
                                {/* Image */}
                                <img
                                    src={place.image}
                                    alt={place.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent"></div>

                                {/* Content */}
                                <div className="absolute bottom-0 p-4 z-10 text-white">
                                    <h3 className="text-xl md:text-2xl chicleRegular border-b-2 w-fit pr-4 pb-1 border-orange-600">
                                        {place.name}
                                    </h3>

                                    <p className="text-sm text-gray-200 my-2 line-clamp-2">
                                        {place.desc}
                                    </p>

                                    <Link
                                        to={`/destinations/${place.id}`}
                                        className="inline-block mt-2 bg-orange-500 hover:bg-orange-600 text-white text-xs px-4 py-2 rounded font-semibold transition transform hover:scale-105"
                                    >
                                        Read More
                                    </Link>
                                </div>

                                {/* Soft hover glow */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-white/10"></div>
                            </div>
                        ))}
                    </div>
                </Fade>

                {/* Pagination */}
                <Fade delay={300} triggerOnce>
                    <div className="flex flex-wrap justify-center gap-3 mt-14">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                            <button
                                key={num}
                                onClick={() => setCurrentPage(num)}
                                className={`w-10 h-10 rounded-full font-semibold transition transform hover:scale-110 ${currentPage === num
                                    ? "bg-emerald-700 text-white shadow-lg"
                                    : "bg-white shadow text-gray-700 hover:bg-emerald-100"
                                    }`}
                            >
                                {num}
                            </button>
                        ))}
                    </div>
                </Fade>

            </div>
        </section>
    );
}
