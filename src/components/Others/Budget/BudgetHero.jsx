import { Link } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";

export default function BudgetHero() {
    return (
        <section className="relative h-[90vh] min-h-150 w-full overflow-hidden">

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center scale-105 animate-[slowZoom_20s_linear_infinite]"
                style={{
                    backgroundImage: "url('/images/BudgetBG.jpg')",
                }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center text-center px-4 sm:px-6">
                <div className="max-w-4xl text-white">

                    <Fade direction="down" triggerOnce>
                        <h1 className="text-3xl sm:text-4xl md:text-6xl mb-6 leading-tight drop-shadow-lg chicleRegular">
                            Budget Travel in Bangladesh
                        </h1>
                    </Fade>

                    <Fade direction="up" delay={150} triggerOnce>
                        <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
                            Discover the best tips for enjoying Bangladesh on a budget without
                            missing out on unforgettable experiences.
                        </p>
                    </Fade>

                    <Slide direction="up" delay={300} triggerOnce>
                        <Link to="/destinations">
                            <button className="bg-orange-500 hover:bg-orange-600 transition-all px-7 sm:px-8 py-3 rounded-full text-white font-semibold text-base sm:text-lg shadow-xl hover:scale-110 active:scale-95">
                                See Destinations
                            </button>
                        </Link>
                    </Slide>

                </div>
            </div>

            {/* Optional gradient fade bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-black/60 to-transparent"></div>
        </section>
    );
}
