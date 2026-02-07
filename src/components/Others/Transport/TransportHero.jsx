import { Link } from "react-router-dom";
import heroImage from "/images/TransportBG.png";
import { Fade, Slide } from "react-awesome-reveal";

export default function TransportHero() {
    return (
        <section
            className="relative min-h-[90vh] w-full bg-cover bg-center flex items-center justify-center overflow-hidden"

        >


            <div
                className="absolute inset-0 bg-cover bg-center scale-105 animate-[slowZoom_20s_linear_infinite]"
                style={{ backgroundImage: `url(${heroImage})` }}

            />



            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/70 to-black/90" />

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl">

                {/* Title */}
                <Fade direction="down" triggerOnce>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl leading-tight font-bold mb-4 drop-shadow-xl chicleRegular">
                        Travel Across Bangladesh with Ease
                    </h1>
                </Fade>

                {/* Subtitle */}
                <Fade direction="up" delay={150} triggerOnce>
                    <p className="text-base sm:text-lg md:text-xl text-gray-100 font-medium mb-8 max-w-3xl mx-auto">
                        From air to rail, river to road – plan your journey smarter,
                        safer, and faster.
                    </p>
                </Fade>

                {/* Buttons */}
                <Slide direction="up" delay={300} triggerOnce>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Link
                            to="/transport/options"
                            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold shadow-xl transition transform hover:scale-105 active:scale-95"
                        >
                            Explore More
                        </Link>

                        <Link
                            to="/budget"
                            className="border border-white text-white hover:bg-white hover:text-black px-7 py-3 rounded-lg font-semibold shadow-xl transition transform hover:scale-105 active:scale-95"
                        >
                            Budget Planner
                        </Link>
                    </div>
                </Slide>
            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-black to-transparent" />
        </section>
    );
}
