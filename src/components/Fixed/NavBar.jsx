import { Link, NavLink } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "/Logo/logo.png";
import { AuthContext } from "../../Auth/Providers/AuthProvider";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const { user, UserSignOut } = useContext(AuthContext);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setDropdown(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const navbarBg = !scrolled
        ? "bg-transparent"
        : "bg-emerald-900/90 backdrop-blur-xl shadow-xl";

    const linkStyle =
        "text-white/90 hover:text-orange-400 transition font-medium relative after:absolute after:w-0 after:h-[2px] after:bg-orange-400 after:left-0 after:-bottom-1 after:transition-all hover:after:w-full";

    const activeStyle = "text-orange-400 after:w-full";

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Destinations", path: "/destinations" },
        { name: "Budget", path: "/budget" },
        { name: "Transport", path: "/transport" },
        { name: "Tips", path: "/tips" },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${navbarBg}`}>
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

                {/* Logo */}
                <Link to="/">
                    <img src={logo} alt="TourismBD" className="w-28 drop-shadow" />
                </Link>

                {/* Desktop Nav */}
                <ul className="hidden md:flex gap-10 absolute left-1/2 -translate-x-1/2">
                    {navItems.map((item) => (
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

                {/* Right Section */}
                <div className="hidden md:flex items-center gap-4">
                    {!user ? (
                        <>
                            <Link
                                to="/login"
                                className="text-white border border-white/40 px-4 py-1.5 rounded hover:bg-white hover:text-emerald-900 transition"
                            >
                                Login
                            </Link>
                            <Link
                                to="/signup"
                                className="bg-orange-500 text-white px-4 py-1.5 rounded hover:bg-orange-600 shadow-lg transition"
                            >
                                Sign Up
                            </Link>
                        </>
                    ) : (
                        <div className="relative" ref={dropdownRef}>
                            <img
                                src={user.photoURL || "/images/user.png"}
                                alt="User"
                                onClick={() => setDropdown(!dropdown)}
                                className="w-10 h-10 rounded-full border-2 border-orange-400 cursor-pointer object-cover"
                            />

                            {dropdown && (
                                <div className="absolute right-0 mt-3 w-48 bg-white rounded-xl shadow-xl overflow-hidden">
                                    <div className="px-4 py-3 text-sm text-gray-700 font-semibold">
                                        {user.displayName || "User"}
                                    </div>
                                    <button
                                        onClick={UserSignOut}
                                        className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100 transition"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
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
                className={`md:hidden overflow-hidden transition-all duration-700 ${open ? "max-h-125" : "max-h-0"
                    } bg-emerald-900/95 backdrop-blur-lg`}
            >
                <div className="flex flex-col items-center py-6 space-y-4">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            onClick={() => setOpen(false)}
                            className={linkStyle}
                        >
                            {item.name}
                        </NavLink>
                    ))}

                    {!user ? (
                        <div className="flex gap-4 pt-4">
                            <Link to="/login" onClick={() => setOpen(false)} className="border px-4 py-1.5 rounded-full text-white">
                                Login
                            </Link>
                            <Link to="/signup" onClick={() => setOpen(false)} className="bg-orange-500 px-4 py-1.5 rounded-full text-white">
                                Sign Up
                            </Link>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center pt-4">
                            <img
                                src={user.photoURL || "/images/user.png"}
                                className="w-12 h-12 rounded-full border-2 border-orange-400"
                            />
                            <p className="text-white mt-2">{user.displayName}</p>
                            <button
                                onClick={UserSignOut}
                                className="mt-3 text-red-400 hover:underline"
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
