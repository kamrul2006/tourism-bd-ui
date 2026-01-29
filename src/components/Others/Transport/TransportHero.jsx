import { Link } from "react-router-dom";
import heroImage from "/images/TransportBG.png";


export default function TransportHero() {
    return (
        <section
            className="relative h-[90vh] w-full bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/70 to-black/90"></div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-6 max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg chicleRegular">
                    Travel Across Bangladesh with Ease
                </h1>
                <p className="text-lg md:text-xl text-gray-50 font-semibold mb-8">
                    From air to rail, river to road – plan your journey smarter, safer, and faster.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    <Link
                        to="/transport/options"
                        className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded font-semibold shadow-lg transition transform hover:scale-105"
                    >
                        Explore More
                    </Link>

                    <Link
                        to="/budget"
                        className="bg-transparent border border-white hover:bg-white hover:text-black text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
                    >
                        Budget Planner
                    </Link>
                </div>

            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-black to-transparent"></div>
        </section>
    );
}
