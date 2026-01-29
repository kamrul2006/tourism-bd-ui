import { FaPlane, FaTrain, FaBus, FaShip, FaCar, FaMotorcycle } from "react-icons/fa";
import { Link } from "react-router-dom";

const transportData = [
    {
        id: 1,
        title: "Air Transport",
        desc: "Fast and comfortable flights between major cities of Bangladesh.",
        icon: <FaPlane />,
        color: "from-sky-500 to-blue-700",
    },
    {
        id: 2,
        title: "Railway",
        desc: "Scenic, affordable and reliable train journeys across the country.",
        icon: <FaTrain />,
        color: "from-emerald-500 to-green-700",
    },
    {
        id: 3,
        title: "Bus Services",
        desc: "The most popular and flexible way to travel between cities.",
        icon: <FaBus />,
        color: "from-orange-500 to-red-600",
    },
    {
        id: 4,
        title: "River Transport",
        desc: "Explore Bangladesh’s rivers by ferry, launch and speed boats.",
        icon: <FaShip />,
        color: "from-cyan-500 to-blue-600",
    },
    {
        id: 5,
        title: "Car & Ride Sharing",
        desc: "Private cars and ride-sharing for comfort and flexibility.",
        icon: <FaCar />,
        color: "from-violet-500 to-purple-700",
    },
    {
        id: 6,
        title: "Local Transport",
        desc: "Rickshaws, CNGs and bikes for short-distance adventures.",
        icon: <FaMotorcycle />,
        color: "from-pink-500 to-rose-600",
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
                        Choose the best way to travel based on your budget, comfort, and
                        destination. Every journey starts here.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {transportData.map((item) => (
                        <div
                            key={item.id}
                            className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition"
                        >
                            {/* Gradient Background */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-90`}
                            ></div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/30"></div>

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
                                    className="mt-6 inline-block w-fit bg-white/20 hover:bg-white/30 border border-white/40 text-white px-5 py-2 rounded-full text-sm font-semibold transition transform hover:scale-105"
                                >
                                    View Details →
                                </Link>
                            </div>

                            {/* Hover Glow */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-white/10"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
