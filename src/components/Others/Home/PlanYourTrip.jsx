import { BiBus, BiCalculator, BiHotel } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import BG from "/images/ptbg.png";
import BGIn from "/images/ptbgin.png";

export default function PlanYourTrip() {
    return (
        <section className="py-3 md:py-16 bg-[#f7f4ef] overflow-hidden">
            <div className="mx-auto">

                {/* Title */}
                <Fade direction="up"  >
                    <div className="flex items-center justify-center mb-12 md:mb-16 px-4">
                        <div className=" md:block h-1 w-24 md:w-48 lg:w-80 rounded-full bg-linear-to-l from-gray-400 to-[#f7f4ef]" />

                        <h2 className="mx-4 text-3xl md:text-5xl chicleRegular text-emerald-900 text-center">
                            Plan Your Trip
                        </h2>
                        <div className=" md:block h-1 w-24 md:w-48 lg:w-80 rounded-full bg-linear-to-r from-gray-400 to-[#f7f4ef]" />

                    </div>
                </Fade>

                {/* Top Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24 max-w-5xl mx-auto px-4">
                    {[
                        {
                            icon: <BiCalculator className="text-emerald-700 text-3xl" />,
                            bg: "bg-emerald-100",
                            title: "Budget Calculator",
                            desc: "Estimate your trip cost",
                        },
                        {
                            icon: <BiHotel className="text-orange-600 text-3xl" />,
                            bg: "bg-orange-100",
                            title: "Find Hotels",
                            desc: "Best places to stay",
                        },
                        {
                            icon: <BiBus className="text-blue-600 text-3xl" />,
                            bg: "bg-blue-100",
                            title: "Transport Info",
                            desc: "Travel options & tips",
                        },
                    ].map((item, index) => (
                        <Slide key={index} direction="left" delay={index * 120}  >
                            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 flex items-center gap-4 hover:-translate-y-1">
                                <div className={`${item.bg} p-4 rounded-lg`}>
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-800">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </Slide>
                    ))}
                </div>

                {/* Bottom Image Section */}
                <div
                    className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 py-20 md:py-32 px-4 md:px-12 lg:px-20"
                    style={{
                        backgroundImage: `url(${BG})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-linear-120 from-white via-white/10 to-black/90 backdrop-blur-[2px]" />

                    {/* Left Content */}
                    <Fade direction="left"  >
                        <div className="relative z-10 bg-white/80 backdrop-blur-md rounded-xl p-6 md:p-10 max-w-md">
                            <h3 className="text-xl md:text-3xl chicleRegular text-emerald-900 mb-5">
                                Travel Tips & Guides
                            </h3>
                            <ul className="space-y-2 text-gray-800 font-semibold font-serif italic">
                                {["Packing Tips", "Safety Advice", "Local Customs"].map(
                                    (tip, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <span className="w-2.5 h-2.5 bg-emerald-600 rounded-full"></span>
                                            {tip}
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    </Fade>

                    {/* Right Card */}
                    <Zoom delay={200}  >
                        <div
                            className="relative z-10 rounded-xl overflow-hidden shadow-xl bg-cover bg-center"
                            style={{ backgroundImage: `url(${BGIn})` }}
                        >
                            <div className="absolute inset-0 bg-linear-to-r from-white via-white/70 to-white/10" />

                            <div className="relative p-6 md:p-10 max-w-sm">
                                <h3 className="text-xl md:text-3xl chicleRegular text-orange-800 mb-2">
                                    Start Your Adventure
                                </h3>
                                <p className="mb-6 text-gray-700 font-serif font-semibold">
                                    Get ready to explore the hidden gems of Bangladesh!
                                </p>
                                <Link
                                    to="/planner"
                                    className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition transform hover:scale-105"
                                >
                                    Start Planning
                                </Link>
                            </div>
                        </div>
                    </Zoom>
                </div>

            </div>
        </section>
    );
}
