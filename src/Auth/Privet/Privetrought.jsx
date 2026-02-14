import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Loader from "../../components/Fixed/Loader";
import { Fade, Slide } from "react-awesome-reveal";
import { FaLock, FaSignInAlt, FaHome } from "react-icons/fa";

const PrivateRout = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader />
            </div>
        );
    }

    if (user) {
        return children;
    }

    return (



        <div
            className="overflow-hidden  min-h-screen flex items-center justify-center bg-cover bg-center relative"
            style={{
                backgroundImage: "url('/images/login-bg.png')"
            }}
        >

            <div
                className="absolute inset-0 bg-cover bg-center scale-105 animate-[slowZoom_20s_linear_infinite]"
                style={{
                    backgroundImage: "url('/images/login-bg.png')",
                }}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-2xl text-white">
                {/* Logo */}
                <img
                    src="/Logo/logo.png"
                    alt="TourismBD"
                    className="h-14 mx-auto mb-2 drop-shadow-lg drop-shadow-amber-50"
                />

                {/* 404 */}
                <h1 className="text-5xl md:text-7xl leading-none text-white/50 animate-pulse drop-shadow-xl flex l items-center justify-center">
                    Access Restricted
                </h1>

                {/* Message */}

                <p className="text-gray-300 my-8 text-lg">
                    You must be logged in to continue exploring TourismBD.
                    <br className="hidden md:block" />
                    Please login to access this page.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        to="/"
                        className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 transition font-semibold shadow-lg"
                    >
                        <FaHome />
                        Back to Home
                    </Link>

                    <Link
                        to="/login"
                        className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg border border-white/40 hover:bg-white/20 transition font-semibold"
                    >
                        <FaSignInAlt />
                        Login Now
                    </Link>
                </div>
            </div>
        </div>



    );
};

export default PrivateRout;
