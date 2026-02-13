import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { FaUserShield, FaUserMinus } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import Loader from "../Fixed/Loader";

const ManageUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    // ------------------- Fetch All Users---------------
    useEffect(() => {
        fetch("http://localhost:5000/users")
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching users:", err);
                setLoading(false);
            });
    }, []);

    // --------------------- Make Admin----------------
    const makeAdmin = async (id) => {
        const confirm = await Swal.fire({
            title: "Are you sure?",
            text: "This user will be promoted to Admin.",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#16a34a",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make Admin",
            cancelButtonText: "Cancel",
        });

        if (!confirm.isConfirmed) return;

        try {
            const res = await fetch(`http://localhost:5000/Users/admin/${id}`, {
                method: "PATCH",
            });

            if (res.ok) {
                setUsers(users.map((u) =>
                    u._id === id ? { ...u, role: "admin" } : u
                ));

                Swal.fire(
                    "Success!",
                    "User has been promoted to Admin.",
                    "success"
                );
            } else {
                Swal.fire(
                    "Error!",
                    "Failed to make this user Admin.",
                    "error"
                );
            }
        } catch (error) {
            console.error(error);
            Swal.fire(
                "Server Error!",
                "Please try again later.",
                "error"
            );
        }
    };

    // ----------------- Remove Admin------------
    const removeAdmin = async (id) => {
        const confirm = await Swal.fire({
            title: "Are you sure?",
            text: "Admin privileges will be removed from this user.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#dc2626",
            cancelButtonColor: "#6b7280",
            confirmButtonText: "Yes, Remove",
            cancelButtonText: "Cancel",
        });

        if (!confirm.isConfirmed) return;

        try {
            const res = await fetch(`http://localhost:5000/Users/remove-admin/${id}`, {
                method: "PATCH",
            });

            if (res.ok) {
                setUsers(users.map((u) =>
                    u._id === id ? { ...u, role: "user" } : u
                ));

                Swal.fire(
                    "Removed!",
                    "Admin role has been removed.",
                    "success"
                );
            } else {
                Swal.fire(
                    "Error!",
                    "Failed to remove Admin role.",
                    "error"
                );
            }
        } catch (error) {
            console.error(error);
            Swal.fire(
                "Server Error!",
                "Please try again later.",
                "error"
            );
        }
    };

    // ----------------- Loading State---------
    if (loading) {
        return <Loader />;
    }

    // -------------------- Render UI-----------
    return (
        <div className="max-w-7xl mx-auto py-12 px-4 md:pt-24 text-gray-800">
            <Fade triggerOnce>
                <h1 className="text-4xl font-bold text-emerald-900 mb-2 text-center">
                    TourismBdD Admin Panel
                </h1>
                <p className="text-center text-gray-500 mb-8">
                    Manage user roles and permissions securely
                </p>
            </Fade>

            <div className="overflow-x-auto bg-white shadow-xl rounded-2xl border border-gray-100">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-linear-to-r from-emerald-600 to-emerald-600 text-white">
                        <tr>
                            <th className="px-6 py-4 text-left text-sm font-semibold">
                                Name
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold">
                                Email
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold">
                                Role
                            </th>
                            <th className="px-6 py-4 text-center text-sm font-semibold">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100">
                        {users.map((u) => (
                            <tr
                                key={u._id}
                                className="hover:bg-gray-50 transition duration-200"
                            >
                                <td className="px-6 py-4 font-medium">
                                    {u.name}
                                </td>

                                <td className="px-6 py-4 text-gray-600">
                                    {u.email}
                                </td>

                                <td className="px-6 py-4">
                                    {u.role === "super-admin" ? (
                                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-emerald-700">
                                            Super Admin
                                        </span>
                                    ) : u.role === "admin" ? (
                                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                                            Admin
                                        </span>
                                    ) : (
                                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600">
                                            User
                                        </span>
                                    )}
                                </td>

                                <td className="px-6 py-4 text-center">
                                    {u.role === "Superadmin" ? (
                                        <span className="text-gray-400 text-sm">
                                            No Actions Available
                                        </span>
                                    ) : u.role === "admin" ? (
                                        <button
                                            onClick={() => removeAdmin(u._id)}
                                            className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg shadow-md transition duration-200"
                                            title="Remove Admin"
                                        >
                                            <FaUserMinus />
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => makeAdmin(u._id)}
                                            className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg shadow-md transition duration-200"
                                            title="Make Admin"
                                        >
                                            <FaUserShield />
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;
