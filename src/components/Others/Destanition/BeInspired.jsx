import { Link } from "react-router-dom";

export default function BeInspired() {
    return (
        <section className="py-20 bg-[#f7f4ef]">
            <div className="max-w-7xl mx-auto px-6">

                {/* Title */}
                <div className="flex items-center justify-center mb-14">
                    <div className="h-0.5 w-24 bg-gray-300"></div>
                    <h2 className="mx-4 text-3xl md:text-4xl font-bold text-emerald-900">
                        Be Inspired
                    </h2>
                    <div className="h-0.5 w-24 bg-gray-300"></div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Card 1 */}
                    <div
                        className="group relative rounded-2xl overflow-hidden shadow-xl h-[260px] flex items-center"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="absolute inset-0 bg-black/50"></div>

                        <div className="relative z-10 p-8 max-w-md text-white">
                            <h3 className="text-2xl font-bold mb-2">
                                Travel Tips for Visiting Bangladesh
                            </h3>
                            <p className="text-gray-200 mb-5">
                                Get essential tips and guides for a safe and memorable journey.
                            </p>

                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Enter your email..."
                                    className="w-full px-4 py-2 rounded-l-md text-gray-800 focus:outline-none"
                                />
                                <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-r-md text-white font-semibold">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div
                        className="group relative rounded-2xl overflow-hidden shadow-xl h-[260px] flex items-center"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1500534314209-a26db0f5c4b9?auto=format&fit=crop&w=1400&q=80')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="absolute inset-0 bg-black/40"></div>

                        <div className="relative z-10 p-8 max-w-md text-white">
                            <h3 className="text-2xl font-bold mb-2">
                                Plan Your Dream Trip to Bangladesh
                            </h3>
                            <p className="text-gray-200 mb-5">
                                Use our tools and resources to create a smooth travel experience.
                            </p>

                            <Link
                                to="/planner"
                                className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold shadow-md transition transform hover:scale-105"
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
