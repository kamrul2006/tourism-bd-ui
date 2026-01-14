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

    // Transparent only on home page + top of hero
    const isHome = location.pathname === "/";
    const navbarBg =
        isHome && !scrolled
            ? "bg-transparent"
            : "bg-emerald-900/95 backdrop-blur-md shadow-lg";

    const linkStyle =
        "text-white hover:text-orange-400 transition font-medium";

    const activeStyle =
        "text-orange-400";

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navbarBg}`}
        >
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <img src={logo} alt="TourismBD Logo" className="w-30 drop-shadow drop-shadow-amber-50" />
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `${linkStyle} ${isActive ? activeStyle : ""}`
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/destinations"
                            className={({ isActive }) =>
                                `${linkStyle} ${isActive ? activeStyle : ""}`
                            }
                        >
                            Destinations
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/budget"
                            className={({ isActive }) =>
                                `${linkStyle} ${isActive ? activeStyle : ""}`
                            }
                        >
                            Budget
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/transport"
                            className={({ isActive }) =>
                                `${linkStyle} ${isActive ? activeStyle : ""}`
                            }
                        >
                            Transport
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/tips"
                            className={({ isActive }) =>
                                `${linkStyle} ${isActive ? activeStyle : ""}`
                            }
                        >
                            Tips
                        </NavLink>
                    </li>
                </ul>

                {/* Mobile Menu Icon */}
                <div
                    className="md:hidden text-white text-xl cursor-pointer"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-emerald-900 text-center py-6 space-y-4">
                    <NavLink onClick={() => setOpen(false)} className={linkStyle} to="/">Home</NavLink>
                    <NavLink onClick={() => setOpen(false)} className={linkStyle} to="/destinations">Destinations</NavLink>
                    <NavLink onClick={() => setOpen(false)} className={linkStyle} to="/budget">Budget</NavLink>
                    <NavLink onClick={() => setOpen(false)} className={linkStyle} to="/transport">Transport</NavLink>
                    <NavLink onClick={() => setOpen(false)} className={linkStyle} to="/tips">Tips</NavLink>
                </div>
            )}
        </nav>
    );
}
