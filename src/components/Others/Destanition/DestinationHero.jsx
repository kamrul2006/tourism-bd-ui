import { Link } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";

export default function DestinationHero() {
    return (
        <section
            className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden"
        >
            <div
                className="absolute inset-0 bg-cover bg-center scale-105 animate-[slowZoom_20s_linear_infinite]"
                style={{
                    backgroundImage: "url('/images/Des/dbg.avif')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    loading: "lazy"
                }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-b from-black/90 via-black/50 to-black/90"></div>

            {/* Content */}
            <div className="relative z-10 text-center max-w-4xl px-4 sm:px-6">

                {/* Heading */}
                <Slide direction="down" triggerOnce>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl text-white leading-tight mb-6 chicleRegular drop-shadow-lg">
                        Explore the Top Destinations of Bangladesh
                    </h1>
                </Slide>

                {/* Description */}
                <Fade delay={200} triggerOnce>
                    <p className="text-gray-200 text-base sm:text-lg md:text-xl mb-8">
                        Discover stunning places and plan your next adventure to the paradise
                        of Bangladesh.
                    </p>
                </Fade>

                {/* Button */}
                <Fade delay={400} triggerOnce>
                    <div className="flex justify-center">
                        <Link to="/tips">
                            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded font-semibold shadow-lg transition transform hover:scale-105 active:scale-95">
                                Learn More Info
                            </button>
                        </Link>
                    </div>
                </Fade>
            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-black to-transparent"></div>
        </section>
    );
}
