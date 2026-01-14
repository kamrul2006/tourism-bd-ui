import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "/Logo/logo.png";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Smooth background transition
    const isHome = location.pathname === "/";
    const navbarBg =
        isHome && !scrolled
            ? "bg-transparent"
            : "bg-emerald-900/90 backdrop-blur-xl shadow-xl";

    const linkStyle =
        "text-white/90 hover:text-orange-400 transition-all duration-300 font-medium relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-orange-400 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full";

    const activeStyle = "text-orange-400 after:w-full";

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out ${navbarBg}`}
        >
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

                {/* Logo - Left */}
                <Link to="/" className="flex items-center">
                    <img
                        src={logo}
                        alt="TourismBD Logo"
                        className="w-28 drop-shadow drop-shadow-amber-50"
                    />
                </Link>

                {/* NavLinks - Center */}
                <ul className="hidden md:flex gap-10 absolute left-1/2 -translate-x-1/2">
                    {[
                        { name: "Home", path: "/" },
                        { name: "Destinations", path: "/destinations" },
                        { name: "Budget", path: "/budget" },
                        { name: "Transport", path: "/transport" },
                        { name: "Tips", path: "/tips" },
                    ].map((item) => (
                        <li key={item.path}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    `${linkStyle} ${isActive ? activeStyle : ""}`
                                }
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Right Buttons */}
                <div className="hidden md:flex items-center gap-4">
                    <Link
                        to="/login"
                        className="text-white border border-white/40 px-4 py-1.5 rounded-full hover:bg-white hover:text-emerald-900 transition-all duration-300"
                    >
                        Login
                    </Link>
                    <Link
                        to="/signup"
                        className="bg-orange-500 text-white px-4 py-1.5 rounded-full hover:bg-orange-600 transition-all duration-300 shadow-lg"
                    >
                        Sign Up
                    </Link>
                </div>

                {/* Mobile Menu Icon */}
                <div
                    className="md:hidden text-white text-xl cursor-pointer"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-700 ease-in-out ${open ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
                    } bg-emerald-900/95 backdrop-blur-lg`}
            >
                <div className="flex flex-col items-center py-6 space-y-4">
                    {[
                        { name: "Home", path: "/" },
                        { name: "Destinations", path: "/destinations" },
                        { name: "Budget", path: "/budget" },
                        { name: "Transport", path: "/transport" },
                        { name: "Tips", path: "/tips" },
                    ].map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            onClick={() => setOpen(false)}
                            className={linkStyle}
                        >
                            {item.name}
                        </NavLink>
                    ))}

                    <div className="flex gap-4 pt-4">
                        <Link
                            to="/login"
                            onClick={() => setOpen(false)}
                            className="text-white border border-white/40 px-4 py-1.5 rounded-full hover:bg-white hover:text-emerald-900 transition-all duration-300"
                        >
                            Login
                        </Link>
                        <Link
                            to="/signup"
                            onClick={() => setOpen(false)}
                            className="bg-orange-500 text-white px-4 py-1.5 rounded-full hover:bg-orange-600 transition-all duration-300 shadow-lg"
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
