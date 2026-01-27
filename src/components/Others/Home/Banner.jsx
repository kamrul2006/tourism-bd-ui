import React from "react";
import heroImage from "/images/hero.png";
import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <section
            className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 "></div>

            {/* Content */}
            <div className="relative z-10 text-center px-6">
                <h1 className="chicleRegular text-4xl md:text-6xl lg:text-7xl  text-white drop-shadow-lg">
                    Explore the Beauty of Bangladesh
                </h1>
                <p className="mt-4 text-lg md:text-2xl text-gray-200 drop-shadow-md">
                    Discover stunning destinations, plan trips, and travel smarter
                </p>
                <div className="mt-8 flex justify-center gap-4">
                    <Link to={'/destinations'}>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300">
                            Discover Destinations
                        </button>
                    </Link>
                    <Link to={'/planner'}>
                        <button className="bg-transparent border border-white hover:bg-white hover:text-black text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300">
                            Plan Your Trip
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}


