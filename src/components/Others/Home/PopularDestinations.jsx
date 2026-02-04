import { Link } from "react-router-dom";
import { Fade, Zoom, Slide } from "react-awesome-reveal";

const destinations = [
    {
        id: 1,
        name: "Cox’s Bazar",
        img: "https://speedholidays.com.bd/wp-content/uploads/2019/11/Coxs-Bazar-3.jpg",
        desc: "Longest Sea Beach",
    },
    {
        id: 2,
        name: "Sajek Valley",
        img: "https://www.thetouristplace.com/wp-content/uploads/2021/12/Sajek-Valley-Cloud.jpg",
        desc: "Misty Mountains",
    },
    {
        id: 3,
        name: "Sundarbans",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/23/Sundarban_Tiger.jpg",
        desc: "Wildlife Adventure",
    },
    {
        id: 4,
        name: "Saint Martin",
        img: "https://upload.wikimedia.org/wikipedia/commons/d/db/Saint_Martins_Island_with_boats_in_foreground.jpg",
        desc: "Coral Island",
    },
];

export default function PopularDestinations() {
    return (
        <section className="pb-12 pt-16 md:pt-20 bg-[#f7f4ef]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Title */}
                <Fade direction="up" triggerOnce>
                    <div className="flex items-center justify-center mb-10 md:mb-14 md:gap-3 gap-2">
                        <div className=" md:block h-1 w-24 md:w-48 lg:w-80 rounded-full bg-linear-to-l from-gray-400 to-[#f7f4ef]" />
                        <h2 className="chicleRegular text-2xl sm:text-3xl md:text-5xl text-emerald-900 text-center">
                            Popular Destinations
                        </h2>
                        <div className=" md:block h-1 w-24 md:w-48 lg:w-80 rounded-full bg-linear-to-r from-gray-400 to-[#f7f4ef]" />
                    </div>
                </Fade>

                {/* Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {destinations.map((place, index) => (
                        <Slide
                            key={place.id}
                            direction="up"
                            delay={index * 120}
                            triggerOnce
                        >
                            <div className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer">

                                {/* Image */}
                                <img
                                    src={place.img}
                                    alt={place.name}
                                    className="w-full h-56 sm:h-60 object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/40 to-black/10"></div>

                                {/* Text */}
                                <div className="absolute inset-0 flex flex-col items-center justify-end pb-6 text-center z-10 transition-all duration-500 group-hover:-translate-y-6">
                                    <h3 className="chicleRegular text-white text-xl sm:text-2xl drop-shadow">
                                        {place.name}
                                    </h3>

                                    <div className="w-10 h-0.5 bg-orange-400 my-2 mb-8 md:mb-0 ">

                                    </div>

                                    <p className="text-gray-200 text-sm tracking-wide">
                                        {place.desc}
                                    </p>
                                </div>

                                {/* Hover Button */}
                                <div className="absolute inset-0 flex items-end justify-center pb-6 md:opacity-0 md:group-hover:opacity-100 transition duration-500 z-10">
                                    <Link
                                        to="/destinations"
                                        className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md font-semibold shadow-md transition transform hover:scale-105"
                                    >
                                        Explore More
                                    </Link>
                                </div>
                            </div>
                        </Slide>
                    ))}
                </div>

                {/* View All Button */}
                <Zoom delay={300} triggerOnce>
                    <div className="flex justify-center mt-12 md:mt-16">
                        <Link
                            to="/destinations"
                            className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 md:px-10 py-2.5 md:py-3 text-sm md:text-base rounded-lg font-semibold shadow-lg transition duration-300 hover:scale-105"
                        >
                            View All Places
                        </Link>
                    </div>
                </Zoom>

            </div>
        </section>
    );
}
