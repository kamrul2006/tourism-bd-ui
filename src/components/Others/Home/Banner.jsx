import React from "react";
import heroImage from "/images/hero.png";
import { Link } from "react-router-dom";
import { Fade, Zoom, Slide } from "react-awesome-reveal";

export default function Hero() {
    return (
        <section
            className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center overflow-hidden"
        >

            <div
                className="absolute inset-0 bg-cover bg-center scale-105 animate-[slowZoom_20s_linear_infinite]"
                style={{ backgroundImage: `url(${heroImage})` }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 sm:px-6 md:px-10 max-w-4xl">

                {/* Heading */}
                <Zoom triggerOnce>
                    <h1 className="chicleRegular text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white drop-shadow-lg leading-tight">
                        Explore the Beauty of Bangladesh
                    </h1>
                </Zoom>

                {/* Subtitle */}
                <Fade delay={200} triggerOnce>
                    <p className="mt-4 text-base sm:text-lg md:text-2xl text-gray-200 drop-shadow-md">
                        Discover stunning destinations, plan trips, and travel smarter
                    </p>
                </Fade>

                {/* Buttons */}
                <Slide direction="up" delay={400} triggerOnce>
                    <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/destinations">
                            <button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition duration-300 hover:scale-105">
                                Discover Destinations
                            </button>
                        </Link>

                        <Link to="/planner">
                            <button className="w-full sm:w-auto bg-transparent border border-white hover:bg-white hover:text-black text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition duration-300 hover:scale-105">
                                Plan Your Trip
                            </button>
                        </Link>
                    </div>
                </Slide>
            </div>
        </section>
    );
}
