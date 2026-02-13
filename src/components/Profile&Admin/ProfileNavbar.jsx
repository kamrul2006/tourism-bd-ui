import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "/Logo/logo.png";

import {
    FaHome,
    FaUser,
    FaPlane,
    FaUsersCog,
    FaStar,
    FaPlusCircle,
    FaBars,
    FaTimes,
} from "react-icons/fa";
import { AuthContext } from "../../Auth/Providers/AuthProvider";

export default function ProfileNavbar() {
    const { user } = useContext(AuthContext);
    const [userData, setUserData] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);

    // Fetch user by email
    useEffect(() => {
        if (user?.email) {
            fetch(
                `https://tourism-bd-server.vercel.app/users/${user.email}`
            )
                .then((res) => res.json())
                .then((data) => setUserData(data))
                .catch((err) => console.error(err));
        }
    }, [user]);

    const role = userData?.role;

    const navLinkStyle =
        "flex items-center gap-2 text-black hover:text-orange-400 transition font-medium relative after:absolute after:w-0 after:h-[2px] after:bg-orange-400 after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"

    const activeStyle = "bg-emerald-600 text-white";
    const normalStyle =
        "text-gray-700  hover:text-emerald-700";

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center h-16">

                    {/* --------Logo---------- */}
                    <Link to="/">
                        <img src={logo} alt="TourismBD" className="w-28 h-7 drop-shadow drop-shadow-amber-50" />
                    </Link>


                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-6">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `${navLinkStyle} ${isActive ? activeStyle : normalStyle
                                }`
                            }
                        >
                            <FaHome /> Home
                        </NavLink>

                        <NavLink
                            to="/profile"
                            className={({ isActive }) =>
                                `${navLinkStyle} ${isActive ? activeStyle : normalStyle
                                }`
                            }
                        >
                            <FaUser /> My Profile
                        </NavLink>

                        <NavLink
                            to="/my-planes"
                            className={({ isActive }) =>
                                `${navLinkStyle} ${isActive ? activeStyle : normalStyle
                                }`
                            }
                        >
                            <FaPlane /> My Planes
                        </NavLink>

                        {/* Admin / Super Admin Links */}
                        {(role === "admin" || role === "super-admin") && (
                            <>
                                <NavLink
                                    to="/manage-users"
                                    className={({ isActive }) =>
                                        `${navLinkStyle} ${isActive ? activeStyle : normalStyle
                                        }`
                                    }
                                >
                                    <FaUsersCog /> Manage Users
                                </NavLink>

                                <NavLink
                                    to="/manage-reviews"
                                    className={({ isActive }) =>
                                        `${navLinkStyle} ${isActive ? activeStyle : normalStyle
                                        }`
                                    }
                                >
                                    <FaStar /> Manage Reviews
                                </NavLink>

                                <NavLink
                                    to="/add-tips"
                                    className={({ isActive }) =>
                                        `${navLinkStyle} ${isActive ? activeStyle : normalStyle
                                        }`
                                    }
                                >
                                    <FaPlusCircle /> Add Tips
                                </NavLink>

                                <NavLink
                                    to="/manage-planes"
                                    className={({ isActive }) =>
                                        `${navLinkStyle} ${isActive ? activeStyle : normalStyle
                                        }`
                                    }
                                >
                                    <FaPlane /> Manage All Planes
                                </NavLink>
                            </>
                        )}

                        <button
                            onClick={UserSignOut}
                            className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100 transition flex items-center gap-2"
                        >
                            <FaTimes /> Logout
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-2xl text-emerald-700"
                        >
                            {menuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {menuOpen && (
                <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-3">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `${navLinkStyle} ${isActive ? activeStyle : normalStyle
                            }`
                        }
                        onClick={() => setMenuOpen(false)}
                    >
                        <FaHome /> Home
                    </NavLink>

                    <NavLink
                        to="/profile"
                        className={({ isActive }) =>
                            `${navLinkStyle} ${isActive ? activeStyle : normalStyle
                            }`
                        }
                        onClick={() => setMenuOpen(false)}
                    >
                        <FaUser /> My Profile
                    </NavLink>

                    <NavLink
                        to="/my-planes"
                        className={({ isActive }) =>
                            `${navLinkStyle} ${isActive ? activeStyle : normalStyle
                            }`
                        }
                        onClick={() => setMenuOpen(false)}
                    >
                        <FaPlane /> My Planes
                    </NavLink>

                    {(role === "admin" || role === "super-admin") && (
                        <>
                            <NavLink
                                to="/manage-users"
                                className={({ isActive }) =>
                                    `${navLinkStyle} ${isActive ? activeStyle : normalStyle
                                    }`
                                }
                                onClick={() => setMenuOpen(false)}
                            >
                                <FaUsersCog /> Manage Users
                            </NavLink>

                            <NavLink
                                to="/manage-reviews"
                                className={({ isActive }) =>
                                    `${navLinkStyle} ${isActive ? activeStyle : normalStyle
                                    }`
                                }
                                onClick={() => setMenuOpen(false)}
                            >
                                <FaStar /> Manage Reviews
                            </NavLink>

                            <NavLink
                                to="/add-tips"
                                className={({ isActive }) =>
                                    `${navLinkStyle} ${isActive ? activeStyle : normalStyle
                                    }`
                                }
                                onClick={() => setMenuOpen(false)}
                            >
                                <FaPlusCircle /> Add Tips
                            </NavLink>

                            <NavLink
                                to="/manage-planes"
                                className={({ isActive }) =>
                                    `${navLinkStyle} ${isActive ? activeStyle : normalStyle
                                    }`
                                }
                                onClick={() => setMenuOpen(false)}
                            >
                                <FaPlane /> Manage All Planes
                            </NavLink>
                        </>
                    )}
                </div>
            )}
        </nav>
    );
}
