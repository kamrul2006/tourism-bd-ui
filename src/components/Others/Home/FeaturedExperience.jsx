import { Link } from "react-router-dom";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

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
        <section className="py-14 md:py-20 bg-[#f7f4ef] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16 md:space-y-24">

                {/* ================= Featured Experience ================= */}
                <Fade direction="up" triggerOnce>
                    <div
                        className="relative rounded-3xl overflow-hidden shadow-2xl bg-cover bg-center min-h-105 md:min-h-130 flex items-center animate-[slowZoom_20s_linear_infinite]"
                        style={{ backgroundImage: "url('/images/tipsBg.webp')" }}
                    >
                        <div className="absolute inset-0 bg-linear-to-r from-black/90 to-black/30"></div>

                        <div className="relative z-10 px-6 sm:px-10 md:px-16 max-w-xl text-white">
                            <p className="text-xs sm:text-sm uppercase tracking-widest text-orange-400 mb-2">
                                Adventure • Nature • Culture
                            </p>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
                                Discover Bangladesh Like Never Before
                            </h2>
                            <p className="text-gray-200 mb-6 text-sm sm:text-base">
                                Jungle, rivers, mountains, and beaches — explore the true beauty of Bangladesh.
                            </p>
                            <Link
                                to="/destinations"
                                className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold shadow-lg transition transform hover:scale-105"
                            >
                                Start Exploring
                            </Link>
                        </div>
                    </div>
                </Fade>

                {/* ================= Travel Tips ================= */}
                <div>
                    {/* Title */}
                    <Fade direction="up" triggerOnce>
                        <div className="flex items-center justify-center mb-14 px-4">
                            <div className=" md:block h-1 w-24 md:w-48 lg:w-80 rounded-full bg-linear-to-l from-gray-400 to-[#f7f4ef]" />

                            <h2 className="mx-4 text-3xl md:text-5xl chicleRegular text-emerald-900 text-center">
                                Travel Tips
                            </h2>
                            <div className=" md:block h-1 w-24 md:w-48 lg:w-80 rounded-full bg-linear-to-r from-gray-400 to-[#f7f4ef]" />

                        </div>
                    </Fade>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {tips.map((place, index) => (
                            <Slide
                                key={place.id}
                                direction="left"
                                delay={index * 120}
                                triggerOnce
                            >
                                <div className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer">

                                    {/* Image */}
                                    <img
                                        src={place.img}
                                        alt={place.name}
                                        className="w-full h-64 sm:h-72 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-linear-to-t from-black/90 to-black/10"></div>

                                    {/* Text */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-end pb-6 text-center z-10 transition-all duration-500 group-hover:-translate-y-6">
                                        <h3 className="chicleRegular text-white text-xl sm:text-2xl drop-shadow">
                                            {place.name}
                                        </h3>
                                        <div className="w-12 h-0.5 bg-orange-400 my-2 transition-all group-hover:mb-8"></div>
                                        <p className="text-gray-200 text-sm group-hover:hidden">
                                            {place.desc}
                                        </p>
                                    </div>

                                    {/* Hover Button */}
                                    <div className="absolute inset-0 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition duration-500 z-10">
                                        <Link
                                            to="/tips"
                                            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md font-semibold shadow-md transition transform hover:scale-105"
                                        >
                                            Explore More
                                        </Link>
                                    </div>
                                </div>
                            </Slide>
                        ))}
                    </div>

                    {/* Button */}
                    <Zoom delay={300} triggerOnce>
                        <div className="text-center mt-12">
                            <Link
                                to="/tips"
                                className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition duration-300 hover:scale-105"
                            >
                                Read All Tips
                            </Link>
                        </div>
                    </Zoom>
                </div>

            </div>
        </section>
    );
}
