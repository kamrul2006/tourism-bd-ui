import React, { useContext, useState } from "react";
import { FaGoogle, FaEyeSlash, FaEye } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import { AuthContext } from "../Providers/AuthProvider";

const LoginPage = () => {
    const axiosPublic = UseAxiosPublic();
    const { LoginUser, setUser, GoogleLogin } = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || "/";

    // -------- EMAIL LOGIN --------
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            const result = await LoginUser(email, password);
            setUser(result.user);

            Swal.fire({
                icon: "success",
                title: "Login Successful",
                text: "Welcome back to TourismBD 🌿",
                timer: 1800,
                showConfirmButton: false,
            });

            navigate(from, { replace: true });
        } catch {
            setError("Invalid email or password. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    // -------- GOOGLE LOGIN --------
    const handleGoogleLogin = async () => {
        try {
            const res = await GoogleLogin();
            setUser(res.user);

            // const userInfo = {
            //     name: res.user.displayName,
            //     email: res.user.email,
            //     role: "user",
            //     isSubscribed: false,
            // };

            // await axiosPublic.post("/users", userInfo);

            Swal.fire({
                icon: "success",
                title: "Google Login Successful",
                timer: 1600,
                showConfirmButton: false,
            });

            navigate(from, { replace: true });
        } catch {
            Swal.fire({
                icon: "error",
                title: "Login Failed",
                text: "Something went wrong. Please try again.",
            });
        }
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
            style={{ backgroundImage: "url('/images/Auth/login-bg.png')" }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Login Card */}
            <div className="relative z-10 w-full max-w-md rounded-2xl bg-white/10 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] px-8 py-8 text-white">

                {/* Logo */}
                <div className="flex justify-center mb-6">
                    <img
                        src="/Logo/logo.png"
                        alt="TourismBD"
                        className="h-12 drop-shadow-lg"
                    />
                </div>

                {/* Heading */}
                <h2 className="text-3xl font-bold text-center mb-1">
                    Welcome Back
                </h2>
                <p className="text-center text-gray-300 mb-6">
                    Log in to explore the beauty of Bangladesh
                </p>

                {/* Error */}
                {error && (
                    <p className="text-red-400 text-sm text-center mb-4">{error}</p>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Email */}
                    <div>
                        <label className="text-sm text-gray-300">Email Address</label>
                        <input
                            name="email"
                            type="email"
                            required
                            placeholder="you@example.com"
                            className="w-full mt-1 px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:ring-2 focus:ring-orange-500 outline-none transition"
                        />
                    </div>

                    {/* Password */}
                    <div className="relative">
                        <label className="text-sm text-gray-300">Password</label>
                        <input
                            name="password"
                            type={showPassword ? "text" : "password"}
                            required
                            placeholder="••••••••"
                            className="w-full mt-1 px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:ring-2 focus:ring-orange-500 outline-none transition"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-11 text-gray-300 hover:text-white transition"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>

                    {/* Forgot Password */}
                    <div className="text-right text-sm">
                        <Link
                            to="/forgot-password"
                            className="hover:text-orange-400 transition"
                        >
                            Forgot password?
                        </Link>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-orange-500 hover:bg-orange-600 active:scale-[0.98] py-3 rounded-lg font-semibold transition disabled:opacity-50"
                    >
                        {loading ? "Logging in..." : "Log In"}
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center my-6">
                    <div className="flex-1 h-px bg-white/30" />
                    <span className="px-4 text-sm text-gray-300">OR</span>
                    <div className="flex-1 h-px bg-white/30" />
                </div>

                {/* Google Login */}
                <button
                    onClick={handleGoogleLogin}
                    className="w-full flex items-center justify-center gap-3 border border-white/40 hover:bg-white/20 py-3 rounded-lg font-semibold transition"
                >
                    <FaGoogle className="text-lg" />
                    Continue with Google
                </button>

                {/* Signup */}
                <p className="text-center text-sm text-gray-300 mt-6">
                    Don’t have an account?{" "}
                    <Link to="/signup" className="text-orange-400 hover:underline">
                        Create one
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
