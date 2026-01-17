import { Link } from "react-router-dom";

const tips = [
    {
        id: 1,
        name: "Best time to visit Bangladesh",
        desc: "Season guide",
        img: "/images/Tips/bd.png",
    },
    {
        id: 2,
        name: "Travel on low budget",
        desc: "Save more, explore more",
        img: "/images/Tips/bc.png",
    },
    {
        id: 3,
        name: "Safety tips for tourists",
        desc: "Travel smart & safe",
        img: "/images/Tips/bb.png",
    },
];

export default function FeaturedExperience() {
    return (
        <section className="py-20 bg-[#f7f4ef]">
            <div className="max-w-7xl mx-auto px-6 space-y-20">

                {/* ================= Featured Experience ================= */}
                <div
                    className="relative rounded-3xl overflow-hidden shadow-2xl bg-cover bg-center h-130 flex items-center"
                    style={{
                        backgroundImage:
                            "url('/images/tipsBg.webp')",
                    }}
                >
                    <div className="absolute inset-0 bg-linear-to-r from-black to-black/30  "></div>

                    <div className="relative z-10 px-8 md:px-16 max-w-2xl text-white">
                        <p className="text-sm uppercase tracking-widest text-orange-400 mb-2">
                            Adventure • Nature • Culture
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Discover Bangladesh Like Never Before
                        </h2>
                        <p className="text-gray-200 mb-6">
                            Jungle, rivers, mountains, and beaches — explore the true beauty of Bangladesh.
                        </p>
                        <Link
                            to="/destinations"
                            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded font-semibold shadow-lg transition transform hover:scale-105"
                        >
                            Start Exploring
                        </Link>
                    </div>
                </div>

                {/* ================= Travel Tips ================= */}
                <div>
                    {/* Title */}
                    <div className="flex items-center justify-center my-20">
                        <div className="h-1 rounded-full w-80 bg-linear-to-l from-gray-400 to-[#f7f4ef]"></div>
                        <h2 className="mx-4 text-3xl md:text-5xl chicleRegular text-emerald-900">
                            Travel Tips
                        </h2>
                        <div className="h-1 w-80 rounded-full bg-linear-to-r from-gray-400 to-[#f7f4ef]"></div>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {tips.map((place) => (
                            <div
                                key={place.id}
                                className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer"
                            >
                                {/* Image */}
                                <img
                                    src={place.img}
                                    alt={place.name}
                                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-black to-black/0 transition duration-300"></div>

                                {/* Name + Subtitle in middle */}
                                <div className="absolute inset-0 flex flex-col items-center justify-end mb-6 text-center z-10 transition-all duration-300 group-hover:-translate-y-6">

                                    <h3 className="chicleRegular text-white text-2xl drop-shadow group-hover:">
                                        {place.name}
                                    </h3>

                                    <div className="w-12 h-0.5 bg-orange-400 my-2 group-hover:mb-8"></div>

                                    <p className="text-gray-200 text-sm group-hover:hidden">
                                        {place.desc}
                                    </p>
                                </div>

                                {/* Hover Button */}
                                <div className="absolute inset-0 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition duration-300 z-10">
                                    <Link
                                        to="/tips"
                                        className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded font-semibold shadow-md transition transform hover:scale-105"
                                    >
                                        Explore More
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Button */}
                    <div className="text-center mt-12">
                        <Link
                            to="/tips"
                            className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3 rounded font-semibold shadow-lg transition duration-300 hover:scale-105"
                        >
                            Read All Tips
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}
