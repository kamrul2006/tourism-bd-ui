import { Link } from "react-router-dom";

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
        <section className="pb-10 pt-20 bg-[#f7f4ef]">
            <div className="max-w-7xl mx-auto px-6">

                {/* Title in middle with gray line */}
                <div className="flex items-center justify-center mb-12">
                    <div className="h-1 w-80 rounded-full bg-linear-to-l from-gray-400 to-[#f7f4ef]"></div>
                    <h2 className="mx-4 chicleRegular text-3xl md:text-5xl  text-emerald-900">
                        Popular Destinations
                    </h2>
                    <div className="h-1 w-80 rounded-full bg-linear-to-r from-gray-400 to-[#f7f4ef]"></div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {destinations.map((place) => (
                        <div
                            key={place.id}
                            className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer"
                        >
                            {/* Image */}
                            <img
                                src={place.img}
                                alt={place.name}
                                className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/95 to-black/10 transition duration-300"></div>

                            {/* Name + Subtitle in middle */}
                            <div className="absolute inset-0 flex flex-col items-center justify-end mb-5 text-center z-10 transition-all duration-300 group-hover:-translate-y-6">
                                <h3 className="chicleRegular text-white text-2xl drop-shadow">
                                    {place.name}
                                </h3>
                                <div className="w-12 h-0.5 bg-orange-400 my-2"></div>
                                <p className="text-gray-200 text-sm tracking-wide">
                                    {place.desc}
                                </p>
                            </div>

                            {/* Hover Button */}
                            <div className="absolute inset-0 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition duration-300 z-10">
                                <Link
                                    to="/destinations"
                                    className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded font-semibold shadow-md transition transform hover:scale-105"
                                >
                                    Explore More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button with center line like image */}
                <div className="flex items-center justify-center mt-14">

                    <Link
                        to="/destinations"
                        className="mx-4 bg-emerald-700 hover:bg-emerald-800 text-white px-2 md:px-8 py-2 md:py-3 text-xs md:text-base rounded font-semibold shadow-lg transition duration-300 hover:scale-105"
                    >
                        View All Places
                    </Link>

                </div>

            </div>
        </section>
    );
}
