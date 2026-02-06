import React, { useContext, useState } from "react";
import { FaGoogle, FaEyeSlash, FaEye, FaHome } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import { AuthContext } from "../Providers/AuthProvider";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

const LoginPage = () => {
    const axiosPublic = UseAxiosPublic();
    const { LoginUser, setUser, GoogleLogin } = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || "/";

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

    const handleGoogleLogin = async () => {
        try {
            const res = await GoogleLogin();
            setUser(res.user);

            await axiosPublic.post("/users", {
                name: res.user.displayName,
                email: res.user.email,
                role: "user",
                isSubscribed: false,
            });

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
            className="min-h-screen relative flex items-center justify-center bg-cover   px-4"
            style={{ backgroundImage: "url('/images/Auth/login-bg.png')" }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70" />

            {/* Back Home */}
            <div className="absolute top-10 md:top-6 left-10  md:left-6 z-20">
                <Fade direction="down" triggerOnce>
                    <Link
                        to="/"
                        className=" flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition"
                    >
                        <FaHome />  <span className="hidden md:block ">Home</span>
                    </Link>
                </Fade>
            </div>

            {/* Login Card */}
            <Zoom triggerOnce>
                <div className=" z-10 w-md md:w-2xl rounded-3xl bg-white/10 backdrop-blur-2xl shadow-[0_30px_80px_rgba(0,0,0,0.6)] px-6 sm:px-8 py-8 text-white my-5 md:my-10">

                    {/* Logo */}
                    <Slide direction="down" triggerOnce>
                        <div className="flex justify-center mb-6">
                            <img
                                src="/Logo/logo.png"
                                alt="TourismBD"
                                className="h-12 sm:h-14 drop-shadow-xl"
                            />
                        </div>
                    </Slide>

                    {/* Heading */}
                    <Fade triggerOnce>
                        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-1">
                            Welcome Back
                        </h2>
                        <p className="text-center text-gray-300 mb-6 text-sm sm:text-base">
                            Log in to explore the beauty of Bangladesh
                        </p>
                    </Fade>

                    {/* Error */}
                    {error && (
                        <Fade>
                            <p className="text-red-400 text-sm text-center mb-4">
                                {error}
                            </p>
                        </Fade>
                    )}

                    {/* Form */}
                    <Slide direction="up" triggerOnce>
                        <form onSubmit={handleSubmit} className="space-y-5">

                            {/* Email */}
                            <div>
                                <label className="text-sm text-gray-300">
                                    Email Address
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="you@example.com"
                                    className="w-full mt-1 px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:ring-2 focus:ring-orange-500 outline-none transition"
                                />
                            </div>

                            {/* Password */}
                            <div className="relative">
                                <label className="text-sm text-gray-300">
                                    Password
                                </label>
                                <input
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    required
                                    placeholder="••••••••"
                                    className="w-full mt-1 px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:ring-2 focus:ring-orange-500 outline-none transition"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-11 text-orange-500 hover:scale-110 transition"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>

                            {/* Forgot */}
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
                                className="w-full bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 py-3 rounded-xl font-semibold shadow-xl transition active:scale-[0.97] disabled:opacity-50"
                            >
                                {loading ? "Logging in..." : "Log In"}
                            </button>
                        </form>
                    </Slide>

                    {/* Divider */}
                    <Fade delay={200} triggerOnce>
                        <div className="flex items-center my-6">
                            <div className="flex-1 h-px bg-white/30" />
                            <span className="px-4 text-sm text-gray-300">OR</span>
                            <div className="flex-1 h-px bg-white/30" />
                        </div>
                    </Fade>

                    {/* Google */}
                    <Slide direction="up" delay={200} triggerOnce>
                        <button
                            onClick={handleGoogleLogin}
                            className="w-full flex items-center justify-center gap-3 border border-white/40 hover:bg-white/20 py-3 rounded-xl font-semibold transition hover:scale-[1.02]"
                        >
                            <FaGoogle />
                            Continue with Google
                        </button>
                    </Slide>

                    {/* Signup */}
                    <Fade delay={300} triggerOnce>
                        <p className="text-center text-sm text-gray-300 mt-6">
                            Don’t have an account?{" "}
                            <Link
                                to="/signup"
                                className="text-orange-400 hover:underline"
                            >
                                Create one
                            </Link>
                        </p>
                    </Fade>
                </div>
            </Zoom>
        </div>
    );
};

export default LoginPage;
