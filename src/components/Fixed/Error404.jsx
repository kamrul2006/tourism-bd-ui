import { Link } from "react-router-dom";
import errorBg from "/images/error.png"; // put your generated image here

export default function Error404() {
    return (
        <div
            className="min-h-screen w-full bg-cover bg-center relative flex items-center justify-center"
            style={{ backgroundImage: `url(${errorBg})` }}
        >
            {/* Dark overlay for better readability */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>

            {/* Content Box */}
            <div className="relative z-10 text-center max-w-lg px-8 py-10 bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20">
                <h1 className="text-5xl md:text-6xl font-extrabold text-orange-400 drop-shadow">
                    404
                </h1>
                <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
                    Page Not Found
                </h2>

                <p className="mt-4 text-gray-200 leading-relaxed">
                    Oops! Looks like you’ve wandered off the map.
                    The page you’re looking for doesn’t exist or has been moved.
                </p>

                <Link
                    to="/"
                    className="inline-block mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
