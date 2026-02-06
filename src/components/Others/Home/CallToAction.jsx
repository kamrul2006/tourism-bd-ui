import { Link } from "react-router-dom";
import { Fade, Zoom, Slide } from "react-awesome-reveal";

export default function CallToAction() {
    return (
        <section
            className="relative py-20 sm:py-24 md:py-28 bg-cover bg-center overflow-hidden"
        >

            <div
                className="absolute inset-0 bg-cover bg-center scale-105 animate-[slowZoom_20s_linear_infinite]"
                style={{ backgroundImage: "url('/images/cta.webp')" }}

            />


            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-tr from-black/50 via-black/75 to-black/50" />

            {/* Content */}
            <div className="relative z-10 max-w-3xl mx-auto text-center px-4 sm:px-6">

                <Fade direction="up" triggerOnce>
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-5 drop-shadow-lg leading-tight">
                        Ready for your next adventure?
                    </h2>
                </Fade>

                <Fade delay={150} triggerOnce>
                    <p className="text-gray-200 mb-8 sm:mb-10 text-base sm:text-lg">
                        Discover breathtaking destinations, plan smarter, and travel better.
                    </p>
                </Fade>

                <Zoom delay={300} triggerOnce>
                    <Link
                        to="/destinations"
                        className="inline-flex items-center gap-2 bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-7  py-3 rounded-lg font-semibold shadow-xl transition transform hover:scale-110"
                    >
                        Start Your Journey
                    </Link>
                </Zoom>

            </div>
        </section>
    );
}
