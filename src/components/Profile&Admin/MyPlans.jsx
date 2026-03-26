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
                    backgroundImage: "url('/images/phbg.png')",
                }}
            >
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-6">
                    <h1 className="text-white text-4xl md:text-6xl font-bold chicleRegular">
                        My Plans
                    </h1>
                </div>
            </div>

            {/* ---------------- CONTENT ---------------- */}
            <div className="max-w-7xl mx-auto px-6 -mt-20">

                <div className="bg-white/90 backdrop-blur-xl shadow-2xl rounded-3xl p-6 md:p-10">

                    {plans.length === 0 ? (
                        <div className="text-center text-gray-500 text-lg">

                            <img src="../../../public/Icons/abcd.gif" alt="pln" className="mx-auto w-1/2" />

                            <p className="text-2xl md:text-4xl mb-5 text-center text-emerald-900 chicleRegular">
                                No travel plans created yet.
                            </p>

                        </div>
                    ) : (
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

                            {plans.map((plan) => (
                                <Fade key={plan._id} triggerOnce>

                                    {/* ---------------- PLAN CARD ---------------- */}

                                    <div
                                        className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105">

                                        {/*-------- Image ------*/}
                                        <img
                                            src={`https://ypfbd.org/wp-content/uploads/2022/10/bangladesh_tourism.jpg`}
                                            alt={plan.destination}

                                            className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                                        />

                                        {/* -----Gradient Overlay------ */}
                                        <div className="absolute inset-0 bg-linear-to-t from-black to-black/10"></div>

                                        {/* --------card constant----------- */}
                                        <div className="absolute inset-0 flex flex-col items-start justify-end px-2 mb-6 text-center z-10 transition-all duration-300 group-hover:-translate-y-3">

                                            {/* ------- Name--------- */}
                                            <h3 className="text-white text-3xl drop-shadow flex items-center gap-1 chicleRegular">
                                                <FaMapMarkerAlt className="text-orange-600" />
                                                {plan.destination}
                                            </h3>

                                            <div className="w-20 h-0.5 bg-orange-500 my-2 transition-all duration-300 group-hover:w-48 "></div>

                                            {/*------ Dates------ */}
                                            <p className="text-white font-bold flex items-center gap-2 mb-1 ">
                                                <FaCalendarAlt className="text-orange-600" />
                                                {plan.startDate} → {plan.endDate}
                                            </p>

                                            {/* Budget */}
                                            <p className="text-white font-bold flex items-center gap-2 mb-1">
                                                <FaMoneyBill className="text-orange-500" />
                                                Budget: {plan.budgetRange}
                                            </p>

                                            {/* Preferences */}
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {plan.preferences.map((pref, index) => (
                                                    <span
                                                        key={index}
                                                        className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full"
                                                    >
                                                        {pref}
                                                    </span>
                                                ))}
                                            </div>


                                            {/* Buttons */}
                                            <button
                                                onClick={() => deletePlan(plan._id)}
                                                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-1 px-6 rounded-xl shadow-lg transition duration-300">
                                                Cancel The Trip
                                            </button>

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
