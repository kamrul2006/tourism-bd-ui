import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { FaCalendarAlt, FaMapMarkerAlt, FaMoneyBill } from "react-icons/fa";
import { AuthContext } from "../../Auth/Providers/AuthProvider";

export default function MyPlans() {
    const { user } = useContext(AuthContext);
    const [plans, setPlans] = useState([]);

    // ---------------- Fetch Plans ----------------
    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/plans?email=${user.email}`)
                .then((res) => res.json())
                .then((data) => setPlans(data));
        }
    }, [user]);

    return (
        <section className="min-h-screen bg-[#f5f7fa] pb-20">

            {/* ---------------- HERO ---------------- */}
            <div
                className="relative h-70 md:h-85 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/images/profile-hero.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-6">
                    <h1 className="text-white text-4xl md:text-5xl font-bold">
                        My Plans
                    </h1>
                </div>
            </div>

            {/* ---------------- CONTENT ---------------- */}
            <div className="max-w-7xl mx-auto px-6 -mt-20">

                <div className="bg-white/90 backdrop-blur-xl shadow-2xl rounded-3xl p-6 md:p-10">

                    {plans.length === 0 ? (
                        <p className="text-center text-gray-500 text-lg">
                            No travel plans created yet.
                        </p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                            {plans.map((plan) => (
                                <Fade key={plan._id} triggerOnce>

                                    {/* ---------------- PLAN CARD ---------------- */}
                                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden">

                                        {/* Destination Image */}
                                        <img
                                            src={`https://source.unsplash.com/600x400/?${plan.destination}`}
                                            alt={plan.destination}
                                            className="h-48 w-full object-cover"
                                        />

                                        {/* Content */}
                                        <div className="p-5">

                                            {/* Destination */}
                                            <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                                                <FaMapMarkerAlt className="text-emerald-600" />
                                                {plan.destination}
                                            </h3>

                                            {/* Dates */}
                                            <p className="text-gray-500 flex items-center gap-2 mb-2">
                                                <FaCalendarAlt />
                                                {plan.startDate} → {plan.endDate}
                                            </p>

                                            {/* Budget */}
                                            <p className="text-gray-600 flex items-center gap-2 mb-3">
                                                <FaMoneyBill className="text-orange-500" />
                                                Budget: {plan.budgetRange}
                                            </p>

                                            {/* Preferences */}
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {plan.preferences.map((pref, index) => (
                                                    <span
                                                        key={index}
                                                        className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full"
                                                    >
                                                        {pref}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Buttons */}
                                            <div className="flex justify-between">

                                                <Link
                                                    to={`/plans/${plan._id}`}
                                                    className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm"
                                                >
                                                    Details
                                                </Link>

                                                <button
                                                    onClick={() => deletePlan(plan._id)}
                                                    className="text-red-500 hover:text-red-700 text-sm"
                                                >
                                                    Delete
                                                </button>

                                            </div>
                                        </div>
                                    </div>

                                </Fade>
                            ))}

                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

// ---------------- Delete Function ----------------

function deletePlan(id) {
    fetch(`http://localhost:5000/plans/${id}`, {
        method: "DELETE",
    }).then(() => {
        window.location.reload();
    });
}
