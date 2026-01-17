import { BiBus, BiCalculator, BiHotel } from "react-icons/bi";
import { Link } from "react-router-dom";
import BG from "/images/ptbg.png";
import BGIn from "/images/ptbgin.png";


export default function PlanYourTrip() {
    return (
        <section className="py-10 bg-[#f7f4ef]">
            <div className=" mx-auto">

                {/* Title */}
                <div className="flex items-center justify-center mb-14">
                    <div className="h-0.5 w-24 bg-gray-300"></div>
                    <h2 className="mx-4 text-3xl md:text-5xl chicleRegular text-emerald-900">
                        Plan Your Trip
                    </h2>
                    <div className="h-0.5 w-24 bg-gray-300"></div>
                </div>

                {/* Top Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-5xl mx-auto">

                    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 flex items-center gap-4">
                        <div className="bg-emerald-100 p-4 rounded-lg">
                            <BiCalculator className="text-emerald-700 text-3xl" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg text-gray-800">Budget Calculator</h3>
                            <p className="text-sm text-gray-600">Estimate your trip cost</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 flex items-center gap-4">
                        <div className="bg-orange-100 p-4 rounded-lg">
                            <BiHotel className="text-orange-600 text-3xl" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg text-gray-800">Find Hotels</h3>
                            <p className="text-sm text-gray-600">Best places to stay</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 flex items-center gap-4">
                        <div className="bg-blue-100 p-4 rounded-lg">
                            <BiBus className="text-blue-600 text-3xl" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg text-gray-800">Transport Info</h3>
                            <p className="text-sm text-gray-600">Travel options & tips</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Image Section */}
                <div
                    className="relative grid grid-cols-1 lg:grid-cols-2 gap-10  overflow-hidden py-40 px-20"
                    style={{
                        backgroundImage:
                            `url(${BG})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-linear-120 from-white via-white/0 to-black/90 backdrop-blur-[2px]"></div>

                    {/* Left Content */}
                    <div className="relative z-10 p-12">
                        <h3 className="text-2xl md:text-3xl chicleRegular text-emerald-900 mb-5">
                            Travel Tips & Guides
                        </h3>
                        <ul className="space-y-1 text-gray-800 font-semibold font-serif italic">
                            <li className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 bg-emerald-600 rounded-full"></span>
                                Packing Tips
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 bg-emerald-600 rounded-full"></span>
                                Safety Advice
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 bg-emerald-600 rounded-full"></span>
                                Local Customs
                            </li>
                        </ul>
                    </div>

                    {/* Right Card */}
                    <div
                        className="relative z-10 m-8 rounded-xl overflow-hidden shadow-xl bg-cover bg-center"
                        style={{
                            backgroundImage:
                                `url(${BGIn})`,
                        }}
                    >
                        <div className="absolute inset-0 bg-linear-to-r from-white via-white/50 to-white/0 "></div>

                        <div className="relative p-10 text-white w-2/3">
                            <h3 className="text-2xl md:text-3xl chicleRegular text-orange-800 mb-2">
                                Start Your Adventure
                            </h3>
                            <p className="mb-6 text-gray-700 font-serif font-semibold">
                                Get ready to explore the hidden gems of Bangladesh!
                            </p>
                            <Link
                                to="/planner"
                                className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded font-semibold shadow-lg transition transform hover:scale-105"
                            >
                                Start Planning
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
