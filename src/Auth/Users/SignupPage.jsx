import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import {
    FaEye,
    FaEyeSlash,
    FaGoogle,
    FaHome,
    FaUser,
    FaEnvelope,
    FaLock,
} from "react-icons/fa";
import { sendEmailVerification } from "firebase/auth";
import { AuthContext } from "../Providers/AuthProvider";
import { auth } from "../FireBase/firebase.init";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import Swal from "sweetalert2";

const SignupPage = () => {
    const axiosPublic = UseAxiosPublic();
    const navigate = useNavigate();
    const { CreateUserByMailPass, setUser, updatedProfile, GoogleLogin } =
        useContext(AuthContext);

    const [error, setError] = useState("");
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);

    // ---------------- EMAIL SIGNUP ----------------
    const handleSignUp = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if (password !== confirm) {
            setLoading(false);
            return setError("Passwords do not match.");
        }

        if (password.length < 6) {
            setLoading(false);
            return setError("Password must be at least 6 characters.");
        }

        try {
            const userCredential = await CreateUserByMailPass(email, password);
            const user = userCredential.user;

            await updatedProfile({
                displayName: name,
                photoURL: "",
            });

            await sendEmailVerification(auth.currentUser);
            setUser(user);

            await axiosPublic.post("/users", {
                name,
                email,
                role: "user",
                isSubscribed: false,
            });

            Swal.fire({
                icon: "success",
                title: "Account Created!",
                text: "Please verify your email before logging in.",
                timer: 2200,
                showConfirmButton: false,
            });

            navigate("/");
        } catch (err) {
            console.error(err);
            setError("Signup failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    // ---------------- GOOGLE SIGNUP ----------------
    const handleGoogleSignup = async () => {
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
                title: "Signed up with Google!",
                timer: 1800,
                showConfirmButton: false,
            });

            navigate("/");
        } catch (err) {
            console.error(err);
            setError("Google signup failed.");
        }
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
            style={{ backgroundImage: "url('/images/Auth/signup-bg.png')" }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70"></div>

            {/* Back Home */}
            <Link
                to="/"
                className="absolute top-6 left-6 z-20 flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition"
            >
                <FaHome /> Home
            </Link>

            {/* Card */}
            <div className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl px-8 py-6 text-white">
                {/* Logo */}
                <div className="flex justify-center mb-4">
                    <img src="/Logo/logo.png" alt="TourismBD" className="h-12" />
                </div>

                <h2 className="text-3xl font-bold text-center mb-1">
                    Create an Account
                </h2>
                <p className="text-center text-gray-300 mb-5">
                    Explore Bangladesh with TourismBD
                </p>

                {error && (
                    <p className="bg-red-500/20 text-red-300 p-2 rounded mb-3 text-sm">
                        {error}
                    </p>
                )}

                {/* FORM */}
                <form onSubmit={handleSignUp} className="space-y-4">
                    {/* Name */}
                    <div className="relative">
                        <FaUser className="absolute top-4 left-3 text-gray-300" />
                        <input
                            name="name"
                            required
                            placeholder="Full Name"
                            className="w-full pl-10 py-3 rounded-lg bg-white/20 border border-white/30 focus:ring-2 focus:ring-orange-500 outline-none"
                        />
                    </div>

                    {/* Email */}
                    <div className="relative">
                        <FaEnvelope className="absolute top-4 left-3 text-gray-300" />
                        <input
                            name="email"
                            type="email"
                            required
                            placeholder="Email Address"
                            className="w-full pl-10 py-3 rounded-lg bg-white/20 border border-white/30 focus:ring-2 focus:ring-orange-500 outline-none"
                        />
                    </div>

                    {/* Password */}
                    <div className="relative">
                        <FaLock className="absolute top-4 left-3 text-gray-300" />
                        <input
                            name="password"
                            type={show ? "text" : "password"}
                            placeholder="Password"
                            required
                            className="w-full pl-10 pr-10 py-3 rounded-lg bg-white/20 border border-white/30 focus:ring-2 focus:ring-orange-500 outline-none"
                        />
                        <span
                            onClick={() => setShow(!show)}
                            className="absolute right-3 top-4 cursor-pointer text-orange-700 hover:text-emerald-800"
                        >
                            {show ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>

                    {/* Confirm */}
                    <input
                        name="confirm"
                        type="password"
                        placeholder="Confirm Password"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 focus:ring-2 focus:ring-orange-500 outline-none"
                    />

                    {/* Submit */}
                    <button
                        disabled={loading}
                        className="w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-lg font-semibold transition"
                    >
                        {loading ? "Creating Account..." : "Sign Up"}
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center my-4">
                    <hr className="flex-1 border-white/30" />
                    <span className="px-3 text-sm text-gray-300">OR</span>
                    <hr className="flex-1 border-white/30" />
                </div>

                {/* Google */}
                <button
                    onClick={handleGoogleSignup}
                    className="w-full flex items-center justify-center gap-3 border border-white/40 hover:bg-white/20 py-3 rounded-lg transition"
                >
                    <FaGoogle className="text-red-400" />
                    Sign up with Google
                </button>

                {/* Login */}
                <p className="text-center text-gray-300 mt-5 text-sm">
                    Already have an account?{" "}
                    <Link to="/login" className="text-orange-400 hover:underline">
                        Log In
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignupPage;
