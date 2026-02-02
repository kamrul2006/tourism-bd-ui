import { Link } from "react-router-dom";
import errorLogo from "/Logo/error.png";


const NotFound = () => {
    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
            style={{
                backgroundImage: "url('/images/login-bg.png')"
            }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-2xl text-white">
                {/* Logo */}
                <img
                    src="/Logo/logo.png"
                    alt="TourismBD"
                    className="h-14 mx-auto mb-6 drop-shadow-lg"
                />

                {/* 404 */}
                <h1 className="text-[120px] md:text-[160px] font-extrabold leading-none text-white/50 animate-pulse drop-shadow-xl">
                    404
                </h1>

                {/* Message */}
                <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                    Page Not Found
                </h2>
                <p className="text-gray-300 mb-8">
                    Looks like you're lost in the beauty of Bangladesh.
                    <br className="hidden md:block" />
                    The page you are looking for doesn’t exist.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        to="/"
                        className="px-8 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 transition font-semibold shadow-lg"
                    >
                        Back to Home
                    </Link>

                    <Link
                        to="/contact"
                        className="px-8 py-3 rounded-lg border border-white/40 hover:bg-white/20 transition font-semibold"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
