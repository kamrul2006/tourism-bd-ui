import {
    FaPlane,
    FaTrain,
    FaBus,
    FaShip,
    FaCar,
    FaMotorcycle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";

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
        <section className="py-14 bg-[#f7f4ef]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Section Title */}
                <Fade direction="down" triggerOnce>
                    <div className="text-center mb-14">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl chicleRegular text-emerald-900 mb-3">
                            Transport Options in Bangladesh
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Choose the best way to travel based on your budget,
                            comfort, and destination. Every journey starts here.
                        </p>
                    </div>
                </Fade>

                {/* Cards */}
                <Slide direction="up" cascade damping={0.15} triggerOnce>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {transportData.map((item) => (
                            <div
                                key={item.id}
                                className="group relative h-80 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition"
                            >
                                {/* Background Image */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{
                                        backgroundImage: `url(${item.bg})`,
                                    }}
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent" />

                                {/* Content */}
                                <div className="relative z-10 p-5 text-white h-full flex flex-col justify-end">


                                    <div>
                                        <h3 className="text-2xl md:text-3xl mb-2 chicleRegular w-fit border-b-2 pr-3 pb-2 border-orange-500">
                                            {item.title}
                                        </h3>

                                        <p className="text-gray-200 text-sm leading-relaxed">
                                            {item.desc.slice(0, 50)}...
                                        </p>
                                    </div>

                                    {/* Button */}
                                    <Link
                                        to={`/transport/${item.title
                                            .toLowerCase()
                                            .replace(/\s/g, "-")}`}
                                        className="inline-block w-fit border border-orange-500 hover:bg-orange-600 text-orange-500 hover:text-white px-4 py-1.5 rounded text-sm font-semibold transition transform hover:scale-105 mt-3"
                                    >
                                        Learn More
                                    </Link>
                                </div>

                                {/* Hover Glow */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-white/10" />
                            </div>
                        ))}
                    </div>
                </Slide>
            </div>
        </section>
    );
}
