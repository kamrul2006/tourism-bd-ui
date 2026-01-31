import { Link } from "react-router-dom";

const budgetData = [
    {
        id: 1,
        title: "Accommodation",
        price: "$10 – $30",
        desc: "Stay at budget hotels, guesthouses, or hostels.",
        image: "/images/budget/accommodation.png",
    },
    {
        id: 2,
        title: "Meals",
        price: "$5 – $15",
        desc: "Eat at local restaurants and street food stalls.",
        image: "/images/budget/meals.png",
    },
    {
        id: 3,
        title: "Transportation",
        price: "$3 – $10",
        desc: "Use buses, trains, and CNG auto-rickshaws.",
        image: "/images/budget/trans.png",
    },
    {
        id: 4,
        title: "Activities",
        price: "$2 – $10",
        desc: "Enjoy free attractions like parks and local markets.",
        image: "/images/budget/acti.png",
    },
];

export default function SampleBudgetBreakdown() {
    return (
        <section className="py-20 bg-[#f7f4ef]">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-900 mb-12">
                    Sample Budget Breakdown
                </h2>

                {/* Background Container */}
                <div
                    className="relative rounded-3xl overflow-hidden shadow-2xl"
                    style={{
                        backgroundImage: "url(/images/budget/bangladesh-map-4k.png)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    {/* Soft Overlay */}
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]"></div>

                    {/* Content */}
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12">

                        {/* Left Cards */}
                        <div className="space-y-6">
                            {budgetData.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex gap-5 bg-white/90 rounded-2xl shadow-lg hover:shadow-xl transition"
                                >
                                    {/* Image */}
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-36 h-28 rounded-l-xl object-cover"
                                    />

                                    {/* Text */}
                                    <div className="flex-1 p-5">
                                        <div className="flex justify-between items-center mb-1">
                                            <h3 className="text-xl font-bold text-emerald-900">
                                                {item.title}
                                            </h3>
                                            <span className="text-lg font-semibold text-emerald-700">
                                                {item.price}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right Side (Empty for Map Focus) */}
                        <div className="hidden lg:block"></div>
                    </div>

                    {/* CTA Button */}
                    <div className="relative z-10 text-center pb-10">
                        <Link
                            to="/budget/details"
                            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition transform hover:scale-105"
                        >
                            View Detailed Guide
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
