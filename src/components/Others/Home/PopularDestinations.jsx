import { Link } from "react-router-dom";

const destinations = [
    {
        id: 1,
        name: "Cox’s Bazar",
        img: "https://speedholidays.com.bd/wp-content/uploads/2019/11/Coxs-Bazar-3.jpg",
        desc: "World’s longest natural sea beach",
    },
    {
        id: 2,
        name: "Sajek Valley",
        img: "https://www.thetouristplace.com/wp-content/uploads/2021/12/Sajek-Valley-Cloud.jpg",
        desc: "The queen of hills in Bangladesh",
    },
    {
        id: 3,
        name: "Sundarbans",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/23/Sundarban_Tiger.jpg",
        desc: "Largest mangrove forest",
    },
    {
        id: 4,
        name: "Saint Martin",
        img: "https://upload.wikimedia.org/wikipedia/commons/d/db/Saint_Martins_Island_with_boats_in_foreground.jpg",
        desc: "The only coral island",
    },
    // {
    //     id: 5,
    //     name: "Srimangal",
    //     img: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Sreemangal_tea_garden_2017-08-20.jpg",
    //     desc: "Tea capital of Bangladesh",
    // },
    // {
    //     id: 6,
    //     name: "Bandarban",
    //     img: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Bandarban_Landscape_21.jpg",
    //     desc: "Hills, waterfalls & adventure",
    // },
];
export default function PopularDestinations() {
    return (
        <section className="py-20 bg-[#f7f4ef]">
            <div className="max-w-7xl mx-auto px-6">

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-900 mb-10">
                    Popular Destinations
                </h2>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {destinations.map((place) => (
                        <div
                            key={place.id}
                            className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer"
                        >
                            {/* Image */}
                            <img
                                src={place.img}
                                alt={place.name}
                                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Dark overlay */}
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition duration-300"></div>

                            {/* Place name (always visible) */}
                            <h3 className="absolute bottom-8 left-20 chicleRegular text-white text-2xl  z-10 drop-shadow">
                                {place.name}
                            </h3>

                            {/* Hover Content */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 z-10">
                                <Link
                                    to="/destinations"
                                    className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-semibold shadow-md transition transform hover:scale-105"
                                >
                                    Explore More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <Link
                        to="/destinations"
                        className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition duration-300 hover:scale-105"
                    >
                        View All Places
                    </Link>
                </div>

            </div>
        </section>
    );
}
