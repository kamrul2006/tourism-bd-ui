import { BiBus, BiCalculator, BiHotel } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function PlanYourTrip() {
    return (
        <section className="py-20 bg-[#f7f4ef]">
            <div className="max-w-7xl mx-auto px-6">

                {/* Title with gray line like picture */}
                <div className="flex items-center justify-center mb-12">
                    <div className="h-0.5 w-24 bg-gray-300"></div>
                    <h2 className="mx-4 text-3xl md:text-4xl font-bold text-emerald-900">
                        Plan Your Trip
                    </h2>
                    <div className="h-0.5 w-24 bg-gray-300"></div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

                    {/* Budget Calculator */}
                    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 flex items-center gap-4">
                        <div className="bg-emerald-100 p-4 rounded-lg">
                            <BiCalculator className="text-emerald-700 w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg text-gray-800">
                                Budget Calculator
                            </h3>
                            <p className="text-sm text-gray-600">
                                Estimate your trip cost
                            </p>
                        </div>
                    </div>

                    {/* Find Hotels */}
                    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 flex items-center gap-4">
                        <div className="bg-orange-100 p-4 rounded-lg">
                            <BiHotel className="text-orange-600 w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg text-gray-800">
                                Find Hotels
                            </h3>
                            <p className="text-sm text-gray-600">
                                Best places to stay
                            </p>
                        </div>
                    </div>

                    {/* Transport Info */}
                    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 flex items-center gap-4">
                        <div className="bg-blue-100 p-4 rounded-lg">
                            <BiBus className="text-blue-600 w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg text-gray-800">
                                Transport Info
                            </h3>
                            <p className="text-sm text-gray-600">
                                Travel options & tips
                            </p>
                        </div>
                    </div>

                </div>

                {/* Bottom Section (Travel Tips + Start Adventure Card) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative rounded-xl overflow-hidden shadow-xl bg-cover bg-center py-20 px-24"
                    style={{
                        backgroundImage:
                            "url('https://unsplash.com/photos/green-coconut-trees-near-body-of-water-during-daytime-KRB2m_nLQQA')",
                    }}>

                    <div className="absolute inset-0 bg-white/40"></div>

                    {/* Travel Tips */}
                    <div>
                        <h3 className="text-2xl font-bold text-emerald-900 mb-4">
                            Travel Tips & Guides
                        </h3>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-emerald-600 rounded-full"></span>
                                Packing Tips
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-emerald-600 rounded-full"></span>
                                Safety Advice
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-emerald-600 rounded-full"></span>
                                Local Customs
                            </li>
                        </ul>
                    </div>

                    {/* Start Your Adventure Card */}
                    <div
                        className="relative rounded-xl overflow-hidden shadow-xl bg-cover bg-center"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1541417904950-b855846fe074?auto=format&fit=crop&w=1350&q=80')",
                        }}
                    >
                        <div className="absolute inset-0 bg-black/40"></div>
                        <div className="relative z-10 p-8 text-white">
                            <h3 className="text-2xl font-bold text-orange-400 mb-2">
                                Start Your Adventure
                            </h3>
                            <p className="mb-6 text-gray-200">
                                Get ready to explore the hidden gems of Bangladesh!
                            </p>
                            <Link
                                to="/planner"
                                className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition transform hover:scale-105"
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
