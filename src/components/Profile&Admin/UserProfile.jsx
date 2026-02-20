import { useContext, useEffect, useState } from "react";
import { FaCalendar, FaMapPin, FaUserTie, FaUserEdit, FaMapMarkerAlt, FaCalendarAlt, FaTimes } from "react-icons/fa";
import { Fade, Zoom, Slide } from "react-awesome-reveal";
import { CgMail } from "react-icons/cg";
import { AuthContext } from "../../Auth/Providers/AuthProvider";
import Swal from "sweetalert2";

const UserProfile = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const { user } = useContext(AuthContext);

    // -------------Fetch user-------------
    const fetchUser = () => {
        if (!user?.email) return;

        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setUserInfo(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchUser();
    }, [user]);

    const handleUpdate = async (e) => {
        e.preventDefault();

        const form = e.target;
        const updatedData = {
            name: form.name.value,
            address: form.address.value,
            dob: form.dob.value,
        };

        try {
            const res = await fetch(
                `http://localhost:5000/users/${user.email}`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(updatedData),
                }
            );

            if (res.ok) {
                Swal.fire("Success!", "Profile updated successfully!", "success");
                setIsOpen(false);
                fetchUser();
            }
        } catch (error) {
            console.error(error);
            Swal.fire("Error!", "Update failed!", "error");
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <span className="loading loading-spinner text-primary"></span>
            </div>
        );
    }

    if (!user) return null;

    return (
        <div className="min-h-screen bg-slate-100">

            {/* ----------------- HERO SECTION---------------- */}
            <div
                className="relative pb-20 w-full bg-cover"
                style={{
                    backgroundImage:
                        "url('/images/phbg.png')",
                }}
            >
                <div className="absolute inset-0 bg-linear-to-b from-black/70 to-black/40"></div>

                <Fade triggerOnce>
                    <div className="relative z-10 pt-20 flex items-center justify-center h-full">
                        <h1 className="text-white text-3xl md:text-6xl  tracking-wide drop-shadow-lg chicleRegular">
                            TourismBD Profile
                        </h1>
                    </div>
                </Fade>


                {/* --------------- PROFILE CARD ------------*/}
                <div className="max-w-6xl mx-auto px-4">
                    <Slide direction="up" triggerOnce>
                        <div className="mt-15 relative bg-white/50 rounded-3xl shadow-2xl p-8 md:p-12">

                            {/* Avatar + Name */}
                            <div className="flex flex-col md:flex-row items-center gap-8">

                                <div className="relative group">
                                    <img
                                        src={
                                            user.photoURL ||
                                            "https://i.ibb.co/MBtjqXQ/no-avatar.gif"
                                        }
                                        alt="User"
                                        className="w-40 h-40 rounded-full border-4 border-white shadow-xl object-cover transition duration-300 group-hover:scale-105"
                                    />
                                    <span className="absolute bottom-3 right-3 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></span>
                                </div>

                                <div className="text-center md:text-left">
                                    <h2 className="text-3xl font-bold text-slate-800">
                                        {userInfo?.name || "User"}
                                    </h2>

                                    <span
                                        className={`inline-block mt-3 px-5 py-1 text-sm rounded-full font-semibold shadow-sm
                                    ${userInfo?.role === "admin" ||
                                                userInfo?.role === "super-admin"
                                                ? "bg-red-100 text-red-600"
                                                : "bg-blue-100 text-blue-600"
                                            }`}
                                    >
                                        {userInfo?.role || "User"}
                                    </span>

                                    <p className="text-slate-500 mt-3">
                                        {user.email}
                                    </p>
                                </div>
                            </div>

                            {/*--------------------- Divider------------------ */}
                            <div className="my-10 border-t"></div>

                            {/*------------------- Info Grid -------------------*/}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-700">

                                <Fade cascade triggerOnce>

                                    <div className="flex items-center gap-4 bg-slate-50 p-5 rounded-2xl hover:shadow-lg transition duration-300">
                                        <CgMail className="text-sky-500" size={24} />
                                        <div>
                                            <p className="text-sm text-slate-500">
                                                Email
                                            </p>
                                            <p className="font-semibold">
                                                {user.email}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 bg-slate-50 p-5 rounded-2xl hover:shadow-lg transition duration-300">
                                        <FaMapPin className="text-sky-500" size={22} />
                                        <div>
                                            <p className="text-sm text-slate-500">
                                                Address
                                            </p>
                                            <p className="font-semibold">
                                                {userInfo?.address ||
                                                    "Not provided"}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 bg-slate-50 p-5 rounded-2xl hover:shadow-lg transition duration-300">
                                        <FaCalendar
                                            className="text-sky-500"
                                            size={22}
                                        />
                                        <div>
                                            <p className="text-sm text-slate-500">
                                                Date of Birth
                                            </p>
                                            <p className="font-semibold">
                                                {userInfo?.dob || "Not provided"}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 bg-slate-50 p-5 rounded-2xl hover:shadow-lg transition duration-300">
                                        <FaUserTie
                                            className="text-sky-500"
                                            size={22}
                                        />
                                        <div>
                                            <p className="text-sm text-slate-500">
                                                Role
                                            </p>
                                            <p className="font-semibold capitalize">
                                                {userInfo?.role || "User"}
                                            </p>
                                        </div>
                                    </div>

                                </Fade>
                            </div>

                            {/* -------------------Edit Button -----------------------*/}
                            <div className="mt-12 text-center md:text-right">
                                <button

                                    onClick={() => setIsOpen(true)}

                                    className="px-8 py-3 bg-linear-to-r from-sky-600 to-indigo-600 hover:from-indigo-600 hover:to-sky-600 text-white font-semibold rounded-xl shadow-lg transition duration-300">
                                    Edit Profile
                                </button>
                            </div>
                        </div>
                    </Slide>
                </div>


            </div>




            {/* -------------- EDIT MODAL--------------------- */}

            {
                isOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">

                        <Zoom triggerOnce>
                            <div className="relative w-xl md:w-3xl bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/30">

                                {/* --------------------- Close Button----------------- */}
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition"
                                >
                                    <FaTimes size={20} />
                                </button>

                                {/* --------------------- Header----------------- */}
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="bg-indigo-100 p-3 rounded-full text-indigo-600">
                                        <FaUserEdit size={22} />
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-800">
                                        Edit Profile
                                    </h2>
                                </div>

                                {/* -----------------Form-------------- */}
                                <form onSubmit={handleUpdate} className="space-y-5">

                                    {/*------------ Name-------------------*/}
                                    <div className="relative">
                                        <FaUserEdit className="absolute top-4 left-3 text-gray-400" />
                                        <input
                                            type="text"
                                            name="name"
                                            defaultValue={userInfo?.name}
                                            placeholder="Full Name"
                                            className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition"
                                        />
                                    </div>

                                    {/* ----------------Addres---------------------- */}
                                    <div className="relative">
                                        <FaMapMarkerAlt className="absolute top-4 left-3 text-gray-400" />
                                        <input
                                            type="text"
                                            name="address"
                                            defaultValue={userInfo?.address}
                                            placeholder="Address"
                                            className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition"
                                        />
                                    </div>

                                    {/* ---------------Date of Birth ---------------*/}
                                    <div className="relative">
                                        <FaCalendarAlt className="absolute top-4 left-3 text-gray-400" />
                                        <input
                                            type="date"
                                            name="dob"
                                            defaultValue={userInfo?.dob}
                                            className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition"
                                        />
                                    </div>

                                    {/*--------------- Buttons---------------- */}
                                    <div className="flex justify-end gap-4 pt-6">

                                        <button
                                            type="button"
                                            onClick={() => setIsOpen(false)}
                                            className="px-5 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium transition"
                                        >
                                            Cancel
                                        </button>

                                        <button
                                            type="submit"
                                            className="px-6 py-2 rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
                                        >
                                            Save Changes
                                        </button>

                                    </div>

                                </form>
                            </div>
                        </Zoom>
                    </div>
                )
            }
        </div >
    );
};

export default UserProfile;
