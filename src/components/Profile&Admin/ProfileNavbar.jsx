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
    FaSignOutAlt,
} from "react-icons/fa";
import { Fade, Slide } from "react-awesome-reveal";
import { AuthContext } from "../../Auth/Providers/AuthProvider";

export default function ProfileNavbar() {
    // -------- AUTH CONTEXT --------
    const { user, UserSignOut } = useContext(AuthContext);

    // -------- STATE --------
    const [userData, setUserData] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);

    // -------- FETCH USER ROLE --------
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

    // -------- NAV LINK STYLE --------
    const navLinkStyle =
        "flex items-center gap-2 text-gray-700 hover:text-orange-500 transition duration-300 font-medium relative after:absolute after:w-0 after:h-[2px] after:bg-orange-500 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full";

    const activeStyle = "text-orange-500 after:w-full";

    return (
        <>
            {/* -------- NAVBAR START -------- */}
            <nav className="bg-white shadow-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-between items-center h-16">

                        {/* -------- LOGO SECTION -------- */}
                        <Fade triggerOnce>
                            <Link to="/">
                                <img
                                    src={logo}
                                    alt="TourismBD"
                                    className="w-28 h-7 drop-shadow-md"
                                />
                            </Link>
                        </Fade>

                        {/* -------- DESKTOP MENU -------- */}
                        <div className="hidden md:flex items-center gap-8 text-2xl">

                            {/* -------- COMMON LINKS -------- */}
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `${navLinkStyle} ${isActive ? activeStyle : ""}`
                                }
                            >
                                <FaHome />
                            </NavLink>

                            <NavLink
                                to="/profilePage/profile"
                                className={({ isActive }) =>
                                    `${navLinkStyle} ${isActive ? activeStyle : ""}`
                                }
                            >
                                <FaUser />
                            </NavLink>

                            <NavLink
                                to="/profilePage/my-planes"
                                className={({ isActive }) =>
                                    `${navLinkStyle} ${isActive ? activeStyle : ""}`
                                }
                            >
                                <FaPlane />
                            </NavLink>

                            {/* -------- ADMIN / SUPER ADMIN LINKS -------- */}
                            {(role === "admin" || role === "super-admin") && (
                                <>
                                    <NavLink
                                        to="/profilePage/manage-users"
                                        className={({ isActive }) =>
                                            `${navLinkStyle} ${isActive ? activeStyle : ""}`
                                        }
                                    >
                                        <FaUsersCog />
                                    </NavLink>

                                    <NavLink
                                        to="/profilePage/manage-reviews"
                                        className={({ isActive }) =>
                                            `${navLinkStyle} ${isActive ? activeStyle : ""}`
                                        }
                                    >
                                        <FaStar />
                                    </NavLink>

                                    <NavLink
                                        to="/profilePage/add-tips"
                                        className={({ isActive }) =>
                                            `${navLinkStyle} ${isActive ? activeStyle : ""}`
                                        }
                                    >
                                        <FaPlusCircle />
                                    </NavLink>

                                    <NavLink
                                        to="/profilePage/manage-planes"
                                        className={({ isActive }) =>
                                            `${navLinkStyle} ${isActive ? activeStyle : ""}`
                                        }
                                    >
                                        <FaPlane />
                                    </NavLink>
                                </>
                            )}

                            {/* -------- USER INFO + LOGOUT -------- */}
                            <div className="flex items-center gap-3 ml-4 border-l pl-4">

                                <button
                                    onClick={UserSignOut}
                                    className="text-red-500 text-lg hover:text-red-600 hover:font-semibold transition flex items-center gap-1 ml-2"
                                >
                                    <FaSignOutAlt /> Logout
                                </button>
                            </div>
                        </div>

                        {/* -------- MOBILE MENU BUTTON -------- */}
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

                {/* -------- MOBILE DROPDOWN -------- */}
                {menuOpen && (
                    <Slide direction="down" triggerOnce>
                        <div className="md:hidden bg-white shadow-lg px-6 py-5 space-y-4">

                            {/* -------- MOBILE LINKS -------- */}
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `${navLinkStyle} ${isActive ? activeStyle : ""}`
                                }
                                onClick={() => setMenuOpen(false)}
                            >
                                <FaHome /> Home
                            </NavLink>

                            <NavLink
                                to="/profilePage/profile"
                                className={({ isActive }) =>
                                    `${navLinkStyle} ${isActive ? activeStyle : ""}`
                                }
                                onClick={() => setMenuOpen(false)}
                            >
                                <FaUser /> My Profile
                            </NavLink>

                            <NavLink
                                to="/profilePage/my-planes"
                                className={({ isActive }) =>
                                    `${navLinkStyle} ${isActive ? activeStyle : ""}`
                                }
                                onClick={() => setMenuOpen(false)}
                            >
                                <FaPlane /> My Planes
                            </NavLink>

                            {(role === "admin" || role === "super-admin") && (
                                <>
                                    <NavLink
                                        to="/profilePage/manage-users"
                                        className={({ isActive }) =>
                                            `${navLinkStyle} ${isActive ? activeStyle : ""}`
                                        }
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        <FaUsersCog /> Manage Users
                                    </NavLink>

                                    <NavLink
                                        to="/profilePage/manage-reviews"
                                        className={({ isActive }) =>
                                            `${navLinkStyle} ${isActive ? activeStyle : ""}`
                                        }
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        <FaStar /> Manage Reviews
                                    </NavLink>

                                    <NavLink
                                        to="/profilePage/add-tips"
                                        className={({ isActive }) =>
                                            `${navLinkStyle} ${isActive ? activeStyle : ""}`
                                        }
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        <FaPlusCircle /> Add Tips
                                    </NavLink>

                                    <NavLink
                                        to="/profilePage/manage-planes"
                                        className={({ isActive }) =>
                                            `${navLinkStyle} ${isActive ? activeStyle : ""}`
                                        }
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        <FaPlane /> Manage All Planes
                                    </NavLink>
                                </>
                            )}

                            {/* -------- MOBILE USER SECTION -------- */}
                            <div className="border-t pt-4 flex items-center justify-between">
                                <div>
                                    <p className="font-semibold">{user?.displayName}</p>
                                    <span className="text-xs text-gray-500 capitalize">
                                        {role}
                                    </span>
                                </div>

                                <button
                                    onClick={UserSignOut}
                                    className="text-red-500 hover:text-red-600 flex items-center gap-1"
                                >
                                    <FaSignOutAlt /> Logout
                                </button>
                            </div>
                        </div>
                    </Slide>
                )}
            </nav>
            {/* -------- NAVBAR END -------- */}
        </>
    );
}
