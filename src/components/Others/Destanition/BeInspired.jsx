import { Link } from "react-router-dom";

export default function BeInspired() {
    return (
        <section className="pb-20 bg-[#f7f4ef]">
            <div className="max-w-7xl mx-auto px-6">

                {/* Title in middle with gray line */}
                <div className="flex items-center justify-center mb-12">
                    <div className="h-1 w-80 rounded-full bg-linear-to-l from-gray-400 to-[#f7f4ef]"></div>
                    <h2 className="mx-4 chicleRegular text-3xl md:text-5xl  text-emerald-900">
                        Be Inspired
                    </h2>
                    <div className="h-1 w-80 rounded-full bg-linear-to-r from-gray-400 to-[#f7f4ef]"></div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Card 1 */}
                    <div
                        className="group relative rounded overflow-hidden shadow-xl h-65 flex items-center"
                        style={{
                            backgroundImage:
                                "url('/images/Des/d1.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="absolute inset-0 bg-black/50"></div>

                        <div className="relative z-10 p-8 max-w-md text-white">
                            <h3 className="text-3xl chicleRegular mb-2">
                                Travel Tips for Visiting Bangladesh
                            </h3>
                            <p className="text-gray-200 mb-5">
                                Get essential tips and guides for a safe and memorable journey.
                            </p>

                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Enter your email..."
                                    className="w-full px-4 py-2 rounded-l text-gray-800 focus:outline-none bg-white"
                                />
                                <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-r text-white font-semibold">
                                    Subscribe
                                </button>

                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div
                        className="group relative rounded overflow-hidden shadow-xl h-65 flex items-center"
                        style={{
                            backgroundImage:
                                "url('/images/Des/d2.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="absolute inset-0 bg-black/40"></div>

                        <div className="relative z-10 p-8 max-w-md text-white">
                            <h3 className="text-3xl chicleRegular mb-2">
                                Plan Your Dream Trip to Bangladesh
                            </h3>
                            <p className="text-gray-200 mb-5">
                                Use our tools and resources to create a smooth travel experience.
                            </p>

                            <Link
                                to="/planner"
                                className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded font-semibold shadow-md transition transform hover:scale-105"
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
