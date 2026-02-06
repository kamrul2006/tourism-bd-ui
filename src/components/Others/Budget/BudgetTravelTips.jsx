import { Link } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";
import { FaBus, FaHotel, FaUtensils, FaMapMarkedAlt } from "react-icons/fa";

const tipsData = [
    {
        id: 1,
        title: "Affordable Transportation",
        desc: "Commute using buses, trains, and budget-friendly transport options.",
        img: "/images/budget/tips1.jpg",
        icon: <FaBus />,
    },
    {
        id: 2,
        title: "Friendly Accommodation",
        desc: "Stay in local hostels, guesthouses, and affordable hotels.",
        img: "/images/budget/tips2.jpg",
        icon: <FaHotel />,
    },
    {
        id: 3,
        title: "Cheap Eats & Local Delicacies",
        desc: "Enjoy delicious street food and local meals at low cost.",
        img: "/images/budget/tips3.webp",
        icon: <FaUtensils />,
    },
    {
        id: 4,
        title: "Free & Low Cost Activities",
        desc: "Explore parks, markets, and cultural spots without spending much.",
        img: "/images/budget/tips4.jpg",
        icon: <FaMapMarkedAlt />,
    },
];

export default function BudgetTravelTips() {
    return (
        <section className="py-16 md:py-20 bg-[#f7f4ef]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Title */}
                <Fade direction="down" triggerOnce>
                    <div className="flex items-center justify-center mb-12">
                        <div className="h-1 w-24 sm:w-40 md:w-80 rounded-full bg-linear-to-l from-gray-400 to-[#f7f4ef]"></div>
                        <h2 className="mx-4 chicleRegular text-2xl sm:text-3xl md:text-5xl text-emerald-900 text-center">
                            Budget Travel Tips
                        </h2>
                        <div className="h-1 w-24 sm:w-40 md:w-80 rounded-full bg-linear-to-r from-gray-400 to-[#f7f4ef]"></div>
                    </div>
                </Fade>

                {/* Cards */}
                <Slide cascade damping={0.12} triggerOnce>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {tipsData.map((tip) => (
                            <div
                                key={tip.id}
                                className="group relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                            >
                                {/* Image */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${tip.img})` }}
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-black via-black/70 to-transparent"></div>

                                {/* Content */}
                                <div className="relative z-10 p-5 text-white h-full flex flex-col justify-end">

                                    {/* Icon */}
                                    <div className="mb-3 text-orange-400 text-3xl opacity-90">
                                        {tip.icon}
                                    </div>

                                    <h3 className="text-lg sm:text-xl md:text-2xl mb-2 chicleRegular border-b-2 w-fit pr-2 pb-1 border-orange-500">
                                        {tip.title}
                                    </h3>

                                    <p className="text-sm text-gray-200 mb-4 leading-relaxed line-clamp-3">
                                        {tip.desc}
                                    </p>

                                    <Link
                                        to="/tips"
                                        className="inline-block w-fit bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all hover:scale-110"
                                    >
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </Slide>

            </div>
        </section>
    );
}
