import { Link } from "react-router-dom";

export default function FeaturedExperience() {
    return (
        <section className="py-20 bg-[#f7f4ef]">
            <div className="max-w-7xl mx-auto px-6 space-y-20">

                {/* ================= Featured Experience ================= */}
                <div
                    className="relative rounded-3xl overflow-hidden shadow-2xl bg-cover bg-center h-105 flex items-center"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80')",
                    }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40"></div>

                    {/* Content */}
                    <div className="relative z-10 px-8 md:px-16 max-w-2xl text-white">
                        <p className="text-sm uppercase tracking-widest text-orange-400 mb-2">
                            Adventure • Nature • Culture
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Discover Bangladesh Like Never Before
                        </h2>
                        <p className="text-gray-200 mb-6">
                            From lush jungles and winding rivers to majestic mountains and
                            golden beaches – experience the heart of Bangladesh.
                        </p>
                        <Link
                            to="/destinations"
                            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition transform hover:scale-105"
                        >
                            Start Exploring
                        </Link>
                    </div>
                </div>

                {/* ================= Travel Tips Preview ================= */}
                <div>
                    {/* Title with center gray line */}
                    <div className="flex items-center justify-center mb-12">
                        <div className="h-0.5 w-20 bg-gray-300"></div>
                        <h2 className="mx-4 text-3xl font-bold text-emerald-900">
                            Travel Tips
                        </h2>
                        <div className="h-0.5 w-20 bg-gray-300"></div>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* Card 1 */}
                        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
                            <div className="h-40 bg-cover bg-center"
                                style={{
                                    backgroundImage:
                                        "url('https://images.unsplash.com/photo-1500534314209-a26db0f5c4b9?auto=format&fit=crop&w=800&q=80')",
                                }}
                            ></div>
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    Best time to visit Bangladesh
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Learn the perfect seasons for beaches, hills, and city travel.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
                            <div className="h-40 bg-cover bg-center"
                                style={{
                                    backgroundImage:
                                        "url('https://images.unsplash.com/photo-1500534314209-3cc5c7d73a06?auto=format&fit=crop&w=800&q=80')",
                                }}
                            ></div>
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    Travel on low budget
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Smart tips to explore more while spending less.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
                            <div className="h-40 bg-cover bg-center"
                                style={{
                                    backgroundImage:
                                        "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80')",
                                }}
                            ></div>
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    Safety tips for tourists
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Stay safe and enjoy your trip with confidence.
                                </p>
                            </div>
                        </div>

                    </div>



                    {/* Button */}
                    <div className="text-center mt-12">
                        <Link
                            to="/tips"
                            className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition duration-300 hover:scale-105"
                        >
                            Read All Tips
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}
