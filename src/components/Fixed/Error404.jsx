import { Link } from "react-router-dom";
import errorLogo from "/Logo/error.png";
import errorBg from "/images/error.png";


export default function Error404() {
    return (
        <div
            className="min-h-screen w-full bg-cover bg-center relative flex items-center justify-center"
            style={{ backgroundImage: `url(${errorBg})` }}
        >
            {/* Dark overlay for better readability */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-xs"></div>


            {/* Content Card */}
            <div className="relative z-10 text-center max-w-xl w-full  p-8 md:p-12 rounded-3xl ">

                {/* 404 Logo */}
                <div className="flex justify-center mb-6">
                    <img
                        src={errorLogo}
                        alt="404 Error"
                        className="w-64 md:w-80 drop-shadow"
                    />
                </div>

                {/* Text */}
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Page Not Found
                </h2>
                <p className="text-gray-300 leading-relaxed">
                    Oops! You’ve gone off the travel route.
                    This destination doesn’t exist or has been moved.
                </p>

                {/* Button */}
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 mt-6 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-orange-500/50"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
