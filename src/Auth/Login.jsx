import { Link } from "react-router-dom";


export default function Login() {
    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
            style={{
                backgroundImage: "url('/images/Auth/login-bg.png')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Login Card */}
            <div className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl px-8  py-4 text-white">

                {/* Logo */}
                <div className="flex justify-center mb-6">
                    <img
                        src="/Logo/logo.png"
                        alt="TourismBD"
                        className="h-12 drop-shadow-2xl drop-shadow-amber-50"
                    />
                </div>

                {/* Title */}
                <h2 className="text-3xl font-bold text-center mb-2">
                    Welcome Back
                </h2>
                <p className="text-center text-gray-300 mb-4">
                    Login to continue exploring Bangladesh
                </p>

                {/* Form */}
                <form className="space-y-5">
                    {/* Email */}
                    <div>
                        <label className="text-sm text-gray-300">Email</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full mt-1 px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="text-sm text-gray-300">Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full mt-1 px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    {/* Remember & Forgot */}
                    <div className="flex items-center justify-between text-sm text-gray-300">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" className="accent-orange-500" />
                            Remember me
                        </label>
                        <Link
                            to="/forgot-password"
                            className="hover:text-orange-400 transition"
                        >
                            Forgot password?
                        </Link>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition transform hover:scale-[1.02]"
                    >
                        Log In
                    </button>
                </form>

                {/* Divider */}
                <div className="my-3 text-center text-gray-400 text-sm">
                    Don’t have an account?
                </div>

                {/* Sign Up */}
                <Link
                    to="/signup"
                    className="block text-center border border-white/40 hover:bg-white/20 py-3 mb-6 rounded-lg transition font-semibold"
                >
                    Create an Account
                </Link>
            </div>
        </div>
    );
}
