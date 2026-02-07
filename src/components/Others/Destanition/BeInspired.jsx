import { Link } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";

export default function BeInspired() {
    return (
        <section className="pb-20 bg-[#f7f4ef]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Section Title */}
                <Slide direction="down" triggerOnce>
                    <div className="flex items-center justify-center mb-14">
                        <div className="hidden sm:block h-1 w-40 md:w-64 rounded-full bg-linear-to-l from-gray-400 to-transparent"></div>
                        <h2 className="mx-4 chicleRegular text-3xl sm:text-4xl md:text-5xl text-emerald-900 text-center">
                            Be Inspired
                        </h2>
                        <div className="hidden sm:block h-1 w-40 md:w-64 rounded-full bg-linear-to-r from-gray-400 to-transparent"></div>
                    </div>
                </Slide>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Card 1 */}
                    <Fade direction="left" triggerOnce>
                        <div
                            className="group relative rounded-2xl shadow-xl min-h-80 flex items-center transition hover:shadow-2xl overflow-hidden"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center scale-105 animate-[slowZoom_20s_linear_infinite]"
                                style={{
                                    backgroundImage: "url('/images/Des/d1.png')",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            />

                            <div className="absolute inset-0 bg-black/60"></div>

                            <div className="relative z-10 p-6 sm:p-8 max-w-md text-white">
                                <h3 className="text-2xl sm:text-3xl chicleRegular mb-2">
                                    Travel Tips for Visiting Bangladesh
                                </h3>
                                <p className="text-gray-200 mb-5 text-sm sm:text-base">
                                    Get essential tips and guides for a safe and memorable journey.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-2 md:gap-0">
                                    <input
                                        type="email"
                                        placeholder="Enter your email..."
                                        className="w-full px-4 py-2 rounded md:rounded-none md:rounded-l text-gray-800 focus:outline-none bg-white"
                                    />
                                    <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded md:rounded-none md:rounded-r text-white font-semibold transition transform hover:scale-105">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Fade>

                    {/* Card 2 */}
                    <Fade direction="right" triggerOnce>
                        <div
                            className="group relative rounded-2xl overflow-hidden shadow-xl min-h-80 flex items-center transition hover:shadow-2xl "
                        >

                            <div
                                className="absolute inset-0 bg-cover bg-center scale-105 animate-[slowZoom_20s_linear_infinite]"
                                style={{
                                    backgroundImage: "url('/images/Des/d2.png')",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            />

                            <div className="absolute inset-0 bg-black/50"></div>

                            <div className="relative z-10 p-6 sm:p-8 max-w-md text-white">
                                <h3 className="text-2xl sm:text-3xl chicleRegular mb-2">
                                    Plan Your Dream Trip to Bangladesh
                                </h3>
                                <p className="text-gray-200 mb-6 text-sm sm:text-base">
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
                    </Fade>

                </div>
            </div>
        </section>
    );
}
