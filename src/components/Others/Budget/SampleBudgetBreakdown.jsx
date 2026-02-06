import { Link } from "react-router-dom";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

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
        <section className="py-14 bg-[#f7f4ef]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">


                {/* Title with line */}
                <Fade direction="up"  >

                    <div className="flex flex-col md:flex-row items-center justify-center mb-5 md:mb-10">

                        <Slide>
                            <div className=" md:block h-1 w-24 md:w-48 lg:w-80 rounded-full bg-linear-to-l from-gray-400 to-[#f7f4ef]" />
                        </Slide>
                        <h2 className="mx-2 text-3xl md:text-5xl chicleRegular text-emerald-900 text-center my-3 md:my-0">
                            Sample Budget Breakdown
                        </h2>
                        <Slide direction="right">
                            <div className=" md:block h-1 w-24 md:w-48 lg:w-80 rounded-full bg-linear-to-r from-gray-400 to-[#f7f4ef]" />
                        </Slide>
                    </div>
                </Fade>

                {/* Background Container */}
                <Zoom triggerOnce>
                    <div
                        className="relative rounded-3xl overflow-hidden shadow-2xl"
                        style={{
                            backgroundImage: "url(/images/budget/bangladesh-map-4k.png)",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]" />

                        {/* Content */}
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 p-5 sm:p-8 md:p-12">

                            {/* Left Cards */}
                            <div className="space-y-6">
                                {budgetData.map((item, index) => (
                                    <Slide
                                        key={item.id}
                                        direction="left"
                                        delay={index * 120}
                                        triggerOnce
                                    >
                                        <div className="flex flex-col sm:flex-row gap-4 bg-white/90 rounded-2xl shadow-lg hover:shadow-xl transition">

                                            {/* Image */}
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full sm:w-36 h-40 sm:h-28 object-cover rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none"
                                            />

                                            {/* Text */}
                                            <div className="flex-1 p-4 sm:p-5">
                                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-2">

                                                    <h3 className="text-xl sm:text-2xl md:text-3xl text-emerald-900 chicleRegular">
                                                        {item.title}
                                                    </h3>

                                                    <span className="text-xl sm:text-2xl font-semibold font-mono text-emerald-900">
                                                        {item.price}
                                                    </span>
                                                </div>

                                                <p className="text-gray-600 text-sm leading-relaxed">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </Slide>
                                ))}
                            </div>

                            {/* Right empty space for map */}
                            <div className="hidden lg:block" />
                        </div>

                        {/* CTA */}
                        <Fade direction="up" delay={300} triggerOnce>
                            <div className="relative z-10 text-center pb-10">
                                <Link
                                    to="/budget/details"
                                    className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded font-semibold shadow-xl transition transform hover:scale-110"
                                >
                                    View Detailed Guide
                                </Link>
                            </div>
                        </Fade>
                    </div>
                </Zoom>
            </div>
        </section>
    );
}
