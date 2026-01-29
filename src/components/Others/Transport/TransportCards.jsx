import { FaPlane, FaTrain, FaBus, FaShip, FaCar, FaMotorcycle } from "react-icons/fa";
import { Link } from "react-router-dom";

const transportData = [
    {
        id: 1,
        title: "Air Transport",
        desc: "Fast and comfortable flights between major cities of Bangladesh.",
        icon: <FaPlane />,
        bg: "/images/Transport/t1.png",
    },
    {
        id: 2,
        title: "Railway",
        desc: "Scenic, affordable and reliable train journeys across the country.",
        icon: <FaTrain />,
        bg: "/images/Transport/t2.png",
    },
    {
        id: 3,
        title: "Bus Services",
        desc: "The most popular and flexible way to travel between cities.",
        icon: <FaBus />,
        bg: "/images/Transport/t3.png",
    },
    {
        id: 4,
        title: "River Transport",
        desc: "Explore Bangladesh’s rivers by ferry, launch and speed boats.",
        icon: <FaShip />,
        bg: "/images/Transport/t4.png",
    },
    {
        id: 5,
        title: "Car & Ride Sharing",
        desc: "Private cars and ride-sharing for comfort and flexibility.",
        icon: <FaCar />,
        bg: "/images/Transport/t5.png",
    },
    {
        id: 6,
        title: "Local Transport",
        desc: "Rickshaws, CNGs and bikes for short-distance adventures.",
        icon: <FaMotorcycle />,
        bg: "/images/Transport/t6.png",
    },
];

export default function TransportCards() {
    return (
        <section className="py-20 bg-[#f7f4ef]">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Title */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-3">
                        Transport Options in Bangladesh
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Choose the best way to travel based on your budget, comfort, and destination.
                        Every journey starts here.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {transportData.map((item) => (
                        <div
                            key={item.id}
                            className="group relative h-[380px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${item.bg})` }}
                            ></div>

                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                            {/* Content */}
                            <div className="relative z-10 p-8 text-white h-full flex flex-col justify-between">
                                <div>
                                    <div className="text-4xl mb-4 text-white/90">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-gray-200 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>

                                {/* Button */}
                                <Link
                                    to={`/transport/${item.title.toLowerCase().replace(/\s/g, "-")}`}
                                    className="inline-block w-fit bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition transform hover:scale-105"
                                >
                                    View Details →
                                </Link>
                            </div>

                            {/* Glow on Hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-white/10"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
