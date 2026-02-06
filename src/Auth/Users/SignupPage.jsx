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
import { Fade, Slide, Zoom } from "react-awesome-reveal";

const SignupPage = () => {
    const axiosPublic = UseAxiosPublic();
    const navigate = useNavigate();
    const { CreateUserByMailPass, setUser, updatedProfile, GoogleLogin } =
        useContext(AuthContext);

    const [error, setError] = useState("");
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);

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

            await updatedProfile({ displayName: name, photoURL: "" });
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
        } catch {
            setError("Signup failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

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
        } catch {
            setError("Google signup failed.");
        }
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover  relative px-4"
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

            {/* Card */}
            <Zoom triggerOnce>
                <div className="relative z-10 w-md md:w-2xl  bg-white/10 backdrop-blur-2xl rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.6)] px-6 sm:px-8 py-8 text-white my-5 md:my-10">

                    {/* Logo */}
                    <Slide direction="down" triggerOnce>
                        <div className="flex justify-center mb-5">
                            <img
                                src="/Logo/logo.png"
                                alt="TourismBD"
                                className="h-12 sm:h-14 drop-shadow-xl"
                            />
                        </div>
                    </Slide>

                    {/* Title */}
                    <Fade triggerOnce>
                        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-1">
                            Create an Account
                        </h2>
                        <p className="text-center text-gray-300 mb-6 text-sm sm:text-base">
                            Explore Bangladesh with TourismBD
                        </p>
                    </Fade>

                    {/* Error */}
                    {error && (
                        <Fade>
                            <p className="bg-red-500/20 text-red-300 p-3 rounded-xl mb-4 text-sm text-center">
                                {error}
                            </p>
                        </Fade>
                    )}

                    {/* Form */}
                    <Slide direction="up" triggerOnce>
                        <form onSubmit={handleSignUp} className="space-y-4">

                            {/* Name */}
                            <div className="relative">
                                <FaUser className="absolute top-4 left-3 text-gray-300" />
                                <input
                                    name="name"
                                    required
                                    placeholder="Full Name"
                                    className="w-full pl-10 py-3 rounded-xl bg-white/20 border border-white/30 focus:ring-2 focus:ring-orange-500 outline-none transition"
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
                                    className="w-full pl-10 py-3 rounded-xl bg-white/20 border border-white/30 focus:ring-2 focus:ring-orange-500 outline-none transition"
                                />
                            </div>

                            {/* Password */}
                            <div className="relative">
                                <FaLock className="absolute top-4 left-3 text-gray-300" />
                                <input
                                    name="password"
                                    type={show ? "text" : "password"}
                                    required
                                    placeholder="Password"
                                    className="w-full pl-10 pr-10 py-3 rounded-xl bg-white/20 border border-white/30 focus:ring-2 focus:ring-orange-500 outline-none transition"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShow(!show)}
                                    className="absolute right-3 top-4 text-orange-500 hover:scale-110 transition"
                                >
                                    {show ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>

                            {/* Confirm */}
                            <input
                                name="confirm"
                                type="password"
                                required
                                placeholder="Confirm Password"
                                className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 focus:ring-2 focus:ring-orange-500 outline-none transition"
                            />

                            {/* Submit */}
                            <button
                                disabled={loading}
                                className="w-full bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 py-3 rounded-xl font-semibold shadow-xl transition active:scale-[0.97] disabled:opacity-50"
                            >
                                {loading ? "Creating Account..." : "Sign Up"}
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
                            onClick={handleGoogleSignup}
                            className="w-full flex items-center justify-center gap-3 border border-white/40 hover:bg-white/20 py-3 rounded-xl transition hover:scale-[1.02]"
                        >
                            <FaGoogle className="text-white" />
                            Sign up with Google
                        </button>
                    </Slide>

                    {/* Login */}
                    <Fade delay={300} triggerOnce>
                        <p className="text-center text-gray-300 mt-6 text-sm">
                            Already have an account?{" "}
                            <Link
                                to="/login"
                                className="text-orange-400 hover:underline"
                            >
                                Log In
                            </Link>
                        </p>
                    </Fade>
                </div>
            </Zoom>
        </div>
    );
};

export default SignupPage;
