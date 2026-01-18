import { FaUserShield, FaWallet, FaMapMarkedAlt, FaHeadset } from "react-icons/fa";

export default function WhyChooseUs() {
    const features = [
        {
            id: 1,
            title: "Trusted Guides",
            desc: "Experienced local guides to make your journey safe and memorable.",
            icon: <FaUserShield />,
            color: "text-emerald-600",
            bg: "bg-emerald-100",
        },
        {
            id: 2,
            title: "Affordable Planning",
            desc: "Best travel plans that fit your budget without compromising quality.",
            icon: <FaWallet />,
            color: "text-orange-500",
            bg: "bg-orange-100",
        },
        {
            id: 3,
            title: "Local Experiences",
            desc: "Explore hidden gems and authentic culture with local insights.",
            icon: <FaMapMarkedAlt />,
            color: "text-blue-600",
            bg: "bg-blue-100",
        },
        {
            id: 4,
            title: "24/7 Support",
            desc: "We’re always here to help you, anytime and anywhere.",
            icon: <FaHeadset />,
            color: "text-purple-600",
            bg: "bg-purple-100",
        },
    ];

    return (
        <section className="py-20 bg-[#f7f4ef]">
            <div className="max-w-7xl mx-auto px-6">

                {/* Title */}
                <div className="flex items-center justify-center mb-12">
                    <div className="h-1 rounded-full w-80 bg-linear-to-l from-gray-400 to-[#f7f4ef]"></div>
                    <h2 className="mx-4 text-3xl md:text-5xl chicleRegular text-emerald-900">
                        Why Choose Us
                    </h2>
                    <div className="h-1 w-80 rounded-full bg-linear-to-r from-gray-400 to-[#f7f4ef]"></div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((item) => (
                        <div
                            key={item.id}
                            className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 text-center hover:-translate-y-2"
                        >
                            {/* Icon */}
                            <div
                                className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full ${item.bg}`}
                            >
                                <span className={`text-3xl ${item.color}`}>
                                    {item.icon}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-gray-600">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
