import React, { useContext, useState } from "react";
import { FaGoogle, FaEyeSlash, FaEye } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import { AuthContext } from "../Providers/AuthProvider";

const LoginPage = () => {
    const axiosPublic = UseAxiosPublic();
    const { LoginUser, setUser, GoogleLogin } = useContext(AuthContext);

    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || "/";

    // ---------------- EMAIL LOGIN ----------------
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
                title: "লগইন সফল!",
                text: "স্বাগতম TourismBD তে 🌿",
                timer: 1800,
                showConfirmButton: false,
            });

            navigate(from, { replace: true });
        } catch (err) {
            setError("ইমেইল বা পাসওয়ার্ড সঠিক নয়!");
        } finally {
            setLoading(false);
        }
    };

    // ---------------- GOOGLE LOGIN ----------------
    const handleGoogleLogin = async () => {
        try {
            const res = await GoogleLogin();
            setUser(res.user);

            const userInfo = {
                name: res.user.displayName,
                email: res.user.email,
                role: "user",
                isSubscribed: false,
            };

            await axiosPublic.post("/users", userInfo);

            Swal.fire({
                icon: "success",
                title: "গুগল লগইন সফল!",
                timer: 1800,
                showConfirmButton: false,
            });

            navigate(from, { replace: true });
        } catch {
            Swal.fire({
                icon: "error",
                title: "লগইন ব্যর্থ!",
                text: "পুনরায় চেষ্টা করুন।",
            });
        }
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
            style={{ backgroundImage: "url('/images/Auth/login-bg.png')" }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Card */}
            <div className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl px-8 py-6 text-white">

                {/* Logo */}
                <div className="flex justify-center mb-5">
                    <img src="/Logo/logo.png" alt="TourismBD" className="h-12" />
                </div>

                <h2 className="text-3xl font-bold text-center">Welcome Back</h2>
                <p className="text-center text-gray-300 mb-5">
                    Login to continue exploring Bangladesh
                </p>

                {/* Error */}
                {error && (
                    <p className="text-red-400 text-sm text-center mb-3">{error}</p>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Email */}
                    <div>
                        <label className="text-sm text-gray-300">Email</label>
                        <input
                            name="email"
                            type="email"
                            required
                            placeholder="you@example.com"
                            className="w-full mt-1 px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:ring-2 focus:ring-orange-500 outline-none"
                        />
                    </div>

                    {/* Password */}
                    <div className="relative">
                        <label className="text-sm text-gray-300">Password</label>
                        <input
                            name="password"
                            type={show ? "text" : "password"}
                            required
                            placeholder="••••••••"
                            className="w-full mt-1 px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:ring-2 focus:ring-orange-500 outline-none"
                        />
                        <button
                            type="button"
                            onClick={() => setShow(!show)}
                            className="absolute right-4 top-11 text-gray-300"
                        >
                            {show ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>

                    {/* Forgot */}
                    <div className="text-right text-sm">
                        <Link to="/forgot-password" className="hover:text-orange-400">
                            Forgot password?
                        </Link>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-lg font-semibold transition disabled:opacity-50"
                    >
                        {loading ? "Logging in..." : "Log In"}
                    </button>
                </form>

                {/* Divider */}
                <div className="my-4 text-center text-gray-400">OR</div>

                {/* Google Login */}
                <button
                    onClick={handleGoogleLogin}
                    className="w-full flex items-center justify-center gap-3 border border-white/40 hover:bg-white/20 py-3 rounded-lg transition font-semibold"
                >
                    <FaGoogle /> Continue with Google
                </button>

                {/* Signup */}
                <p className="text-center text-sm text-gray-300 mt-5">
                    Don’t have an account?{" "}
                    <Link to="/signup" className="text-orange-400 hover:underline">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
