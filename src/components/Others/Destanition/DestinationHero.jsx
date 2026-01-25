import { Link } from "react-router-dom";

export default function DestinationHero() {
    return (
        <section
            className="relative h-[90vh] w-full flex items-center justify-center"
            style={{
                backgroundImage:
                    "url('/images/Des/dbg.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-b from-black via-black/40 to-black"></div>

            {/* Content */}
            <div className="relative z-10 text-center max-w-4xl px-6">
                <h1 className="text-4xl md:text-6xl text-white leading-tight mb-6 chicleRegular">
                    Explore the Top Destinations of Bangladesh
                </h1>

                <p className="text-gray-200 text-lg md:text-xl mb-8">
                    Discover stunning places and plan your next adventure to the paradise
                    of Bangladesh.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to={'/tips'}>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded font-semibold shadow-lg transition">
                            Learn More Info
                        </button>
                    </Link>

                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-8 h-14 border-2 border-white rounded-full flex items-start justify-center p-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
            </div>
        </section>
    );
}
