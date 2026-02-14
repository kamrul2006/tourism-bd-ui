import { useContext, useEffect, useState } from "react";
import { FaCalendar, FaMapPin, FaUserTie } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { Fade, Slide } from "react-awesome-reveal";
import { AuthContext } from "../../Auth/Providers/AuthProvider";
import Swal from "sweetalert2";

const UserProfile = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const { user } = useContext(AuthContext);

    // Fetch user
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

            {/* 🔥 HERO SECTION */}
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


                {/* 👤 PROFILE CARD */}
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

                            {/* Divider */}
                            <div className="my-10 border-t"></div>

                            {/* Info Grid */}
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

                            {/* Edit Button */}
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




            {/* 🔥 EDIT MODAL */}
            {
                isOpen && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                        <Fade triggerOnce>
                            <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl">

                                <h2 className="text-2xl font-bold mb-6">
                                    Edit Profile
                                </h2>

                                <form onSubmit={handleUpdate} className="space-y-4">

                                    <input
                                        type="text"
                                        name="name"
                                        defaultValue={userInfo?.name}
                                        placeholder="Name"
                                        className="w-full border p-3 rounded-lg"
                                    />

                                    <input
                                        type="text"
                                        name="address"
                                        defaultValue={userInfo?.address}
                                        placeholder="Address"
                                        className="w-full border p-3 rounded-lg"
                                    />

                                    <input
                                        type="date"
                                        name="dob"
                                        defaultValue={userInfo?.dob}
                                        className="w-full border p-3 rounded-lg"
                                    />

                                    <div className="flex justify-end gap-3 pt-4">
                                        <button
                                            type="button"
                                            onClick={() => setIsOpen(false)}
                                            className="px-4 py-2 bg-gray-400 text-white rounded-lg"
                                        >
                                            Cancel
                                        </button>

                                        <button
                                            type="submit"
                                            className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
                                        >
                                            Save Changes
                                        </button>
                                    </div>

                                </form>
                            </div>
                        </Fade>
                    </div>
                )
            }
        </div >
    );
};

export default UserProfile;
