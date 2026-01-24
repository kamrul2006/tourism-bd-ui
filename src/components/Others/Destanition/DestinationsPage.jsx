import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DESTINATIONS_PER_PAGE = 8;

export default function DestinationsPage() {
    const [destinations, setDestinations] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        // you can replace this with fetch("/data/destinations.json")
        setDestinations([
            {
                id: 1,
                name: "Cox’s Bazar",
                desc: "World's longest natural sandy beach",
                image:
                    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
            },
            {
                id: 2,
                name: "Sajek Valley",
                desc: "Luxurious hill station with breathtaking views",
                image:
                    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80",
            },
            {
                id: 3,
                name: "Sundarbans",
                desc: "Largest mangrove forest, home of Royal Bengal Tigers",
                image:
                    "https://images.unsplash.com/photo-1543248939-7c9b6c6d6aa1?auto=format&fit=crop&w=1000&q=80",
            },
            {
                id: 4,
                name: "Saint Martin",
                desc: "Coral island with crystal clear blue water",
                image:
                    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=80",
            },
            {
                id: 5,
                name: "Rangamati",
                desc: "Hill district with lakes and natural beauty",
                image:
                    "https://images.unsplash.com/photo-1601493700631-2b16a4c3bb9f?auto=format&fit=crop&w=1000&q=80",
            },
            {
                id: 6,
                name: "Srimangal",
                desc: "Tea gardens and the capital of tea",
                image:
                    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
            },
            {
                id: 7,
                name: "Kuakata Beach",
                desc: "Famous for sunrise and sunset views",
                image:
                    "https://images.unsplash.com/photo-1500534314209-3cc5c7d73a06?auto=format&fit=crop&w=1000&q=80",
            },
            {
                id: 8,
                name: "Paharpur",
                desc: "UNESCO World Heritage Buddhist monastery",
                image:
                    "https://images.unsplash.com/photo-1604580864964-0462f5d8b1c6?auto=format&fit=crop&w=1000&q=80",
            },
            {
                id: 9,
                name: "Nilgiri",
                desc: "Cloud-kissed mountain view",
                image:
                    "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1000&q=80",
            },
        ]);
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
                            className="group relative rounded-xl overflow-hidden shadow-lg h-[280px] cursor-pointer"
                        >
                            <img
                                src={place.image}
                                alt={place.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>

                            {/* Content */}
                            <div className="absolute bottom-0 p-4 text-white z-10">
                                <h3 className="text-xl font-bold">{place.name}</h3>
                                <p className="text-sm text-gray-200 mb-3">{place.desc}</p>
                                <Link
                                    to={`/destinations/${place.id}`}
                                    className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2 rounded font-semibold transition"
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center gap-3 mt-14">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                        <button
                            key={num}
                            onClick={() => setCurrentPage(num)}
                            className={`w-10 h-10 rounded-full font-semibold transition ${currentPage === num
                                ? "bg-emerald-700 text-white"
                                : "bg-white text-gray-700 shadow hover:bg-emerald-100"
                                }`}
                        >
                            {num}
                        </button>
                    ))}
                </div>

                {/* Be Inspired Section (as in your picture) */}
                <div className="mt-24">
                    <div className="flex items-center justify-center mb-12">
                        <div className="h-[2px] w-24 bg-gray-300"></div>
                        <h2 className="mx-4 text-3xl font-bold text-emerald-900">
                            Be Inspired
                        </h2>
                        <div className="h-[2px] w-24 bg-gray-300"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Travel Tips Card */}
                        <div
                            className="relative rounded-2xl overflow-hidden shadow-xl bg-cover bg-center h-[260px]"
                            style={{
                                backgroundImage:
                                    "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80')",
                            }}
                        >
                            <div className="absolute inset-0 bg-black/40"></div>
                            <div className="absolute inset-0 flex flex-col justify-center p-8 text-white">
                                <h3 className="text-2xl font-bold mb-3">
                                    Travel Tips for Visiting Bangladesh
                                </h3>
                                <div className="flex">
                                    <input
                                        type="email"
                                        placeholder="Enter your email..."
                                        className="px-4 py-2 rounded-l-md w-full text-black"
                                    />
                                    <button className="bg-orange-500 px-5 py-2 rounded-r-md font-semibold">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Plan Trip Card */}
                        <div
                            className="relative rounded-2xl overflow-hidden shadow-xl bg-cover bg-center h-[260px]"
                            style={{
                                backgroundImage:
                                    "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80')",
                            }}
                        >
                            <div className="absolute inset-0 bg-black/40"></div>
                            <div className="absolute inset-0 flex flex-col justify-center p-8 text-white">
                                <h3 className="text-2xl font-bold mb-3">
                                    Plan Your Dream Trip to Bangladesh
                                </h3>
                                <p className="text-gray-200 mb-4">
                                    Use our tools and resources for a smooth journey.
                                </p>
                                <Link
                                    to="/plan"
                                    className="bg-orange-500 hover:bg-orange-600 w-fit px-6 py-2 rounded font-semibold"
                                >
                                    Start Planning
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
