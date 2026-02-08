import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import jsPDF from "jspdf";
import { autoTable } from 'jspdf-autotable'
import Swal from "sweetalert2";
import { AuthContext } from "../../Auth/Providers/AuthProvider";
import logo from "/Logo/logo.png"; // Make sure this is valid



export default function TravelPlanner() {
    const { user } = useContext(AuthContext);

    const [destinations, setDestinations] = useState([]);
    const [selectedDestination, setSelectedDestination] = useState(null);
    const [preferences, setPreferences] = useState([]);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    // Fetch destinations
    useEffect(() => {
        fetch("/data/destinations.json")
            .then((res) => res.json())
            .then((data) => setDestinations(data));
    }, []);

    const preferencesList = [
        "Adventure",
        "Relaxation",
        "Culture",
        "Nature",
        "Budget-Friendly",
    ];

    const togglePreference = (pref) => {
        setPreferences((prev) =>
            prev.includes(pref)
                ? prev.filter((p) => p !== pref)
                : [...prev, pref]
        );
    };

    const baseBudget = 120;
    const budget = baseBudget + preferences.length * 40 + (selectedDestination ? 60 : 0);


    const navigate = useNavigate();

    // ---------- SAVE PLAN & PDF ----------
    const handleSaveAndExport = async () => {
        if (!selectedDestination || !startDate || !endDate) {
            return setError("Please select destination and dates.");
        }

        if (!user?.email) {
            // SweetAlert modal with Login button
            return Swal.fire({
                icon: "info",
                title: "Login Required",
                text: "You must be logged in to save your plan.",
                showCancelButton: true,
                confirmButtonText: "Login",
                cancelButtonText: "Cancel",
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login"); // redirect to login
                }
            });
        }

        setError("");
        setLoading(true);

        const invoiceNumber = `INV-${Math.floor(Math.random() * 1000000)}`;

        const planData = {
            invoiceNumber,
            status: "Confirmed",
            userEmail: user.email,
            destination: selectedDestination.name,
            startDate,
            endDate,
            preferences,
            budgetRange: `$${budget} - $${budget + 150}`,
            createdAt: new Date(),
        };

        try {
            const res = await fetch("http://localhost:5000/plans", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(planData),
            });
            if (!res.ok) throw new Error("Failed to save plan");

            // ---------- Generate PDF ----------
            const doc = new jsPDF("p", "mm", "a4");

            // HEADER
            doc.setFillColor(16, 185, 129);
            doc.rect(0, 0, 210, 35, "F");

            // Add logo image
            const img = new Image();
            img.src = logo;
            img.onload = () => {
                doc.addImage(img, "PNG", 20, 5, 45, 16);


                doc.setFontSize(12);
                doc.setFont("helvetica", "normal");
                doc.text(`Invoice: ${planData.invoiceNumber}`, 150, 22);
                doc.text(`Status: ${planData.status}`, 150, 28);

                // BODY
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(14);
                doc.setFont("helvetica", "bold");
                doc.text("Travel Plan Summary", 20, 50);

                doc.setDrawColor(16, 185, 129);
                doc.line(20, 52, 190, 52);

                const startY = 60;
                const lineGap = 8;
                doc.setFont("helvetica", "normal");
                doc.setFontSize(11);

                doc.text("Destination:", 20, startY);
                doc.text(planData.destination, 70, startY);

                doc.text("Dates:", 20, startY + lineGap);
                doc.text(`${planData.startDate} ---  to  --- ${planData.endDate}`, 70, startY + lineGap);

                doc.text("Preferences:", 20, startY + lineGap * 2);
                doc.text(planData.preferences.length ? planData.preferences.join(", ") : "None", 70, startY + lineGap * 2);

                doc.text("User Email:", 20, startY + lineGap * 3);
                doc.text(planData.userEmail, 70, startY + lineGap * 3);

                doc.text("Budget Range:", 20, startY + lineGap * 4);
                doc.text(planData.budgetRange, 70, startY + lineGap * 4);

                // Daily Itinerary Table
                const tableY = startY + lineGap * 6;
                doc.setFont("helvetica", "bold");
                doc.text("Daily Itinerary", 20, tableY - 5);

                doc.setFont("helvetica", "normal");
                const tableCols = ["Day", "Activity"];
                const tableRows = planData.preferences.map((p, index) => [`Day ${index + 1}`, `Enjoy ${p}`]);

                // Footer
                doc.setFontSize(9);
                doc.setTextColor(100, 100, 100);
                const pageHeight = doc.internal.pageSize.height;
                doc.text("Generated by TourismBD | Explore Bangladesh", 20, pageHeight - 10);
                doc.text(`Date: ${new Date().toLocaleDateString()}`, 150, pageHeight - 10);

                // Save PDF
                doc.save(`TourismBD_Plan_${planData.invoiceNumber}.pdf`);

                Swal.fire({
                    icon: "success",
                    title: "Plan Saved & PDF Exported!",
                    text: "Your travel plan has been saved and exported as PDF.",
                    confirmButtonText: "Awesome!",
                });
            };
        } catch (err) {
            Swal.fire({
                icon: "error",
                title: "Oops!",
                text: "Failed to save plan. Try again later.",
            });
        } finally {
            setLoading(false);
        }
    };



    return (
        <>
            {/* HERO */}
            <section
                className="pt-32 pb-24 bg-cover bg-center relative"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee')" }}
            >
                <div className="absolute inset-0 bg-black/70"></div>

                <Fade triggerOnce>
                    <div className="relative z-10 max-w-4xl mx-auto text-center px-6 text-white">
                        <h1 className="text-4xl md:text-6xl chicleRegular mb-4">
                            Travel Planner
                        </h1>
                        <p className="text-lg text-gray-200 mb-8">
                            Plan your perfect trip to Bangladesh
                        </p>
                        <Link to="/">
                            <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-xl font-semibold shadow-lg transition hover:scale-105">
                                Back to Home
                            </button>
                        </Link>
                    </div>
                </Fade>
            </section>

            {/* MAIN */}
            <section className="py-20 bg-[#f7f4ef]">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">

                    {/* LEFT */}
                    <div className="lg:col-span-2 space-y-20">

                        {/* DESTINATIONS */}
                        <div>
                            <Fade>
                                <h2 className="text-2xl font-bold mb-6">1. Choose Destination</h2>
                            </Fade>

                            <Slide cascade damping={0.1}>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    {destinations.map((dest) => (
                                        <div
                                            key={dest.id}
                                            onClick={() => setSelectedDestination(dest)}
                                            className={`cursor-pointer rounded-3xl overflow-hidden shadow-lg border-4 transition hover:scale-[1.02]
                        ${selectedDestination?.id === dest.id ? "border-emerald-600 scale-[1.02]" : "border-transparent"}`}
                                        >
                                            <img src={dest.image} alt={dest.name} className="h-48 w-full object-cover" />
                                            <div className="p-4 bg-white flex justify-between">
                                                <h3 className="font-semibold">{dest.name}</h3>
                                                <span className="text-emerald-600 text-sm">Select</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Slide>
                        </div>

                        {/* DATES */}
                        <div>
                            <Fade>
                                <h2 className="text-2xl font-bold mb-6">2. Select Dates</h2>
                            </Fade>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="px-4 py-3 rounded-xl border focus:ring-2 focus:ring-emerald-500" />
                                <input type="date" min={startDate} value={endDate} onChange={(e) => setEndDate(e.target.value)} className="px-4 py-3 rounded-xl border focus:ring-2 focus:ring-emerald-500" />
                            </div>
                        </div>

                        {/* PREFERENCES */}
                        <div>
                            <Fade>
                                <h2 className="text-2xl font-bold mb-6">3. Set Preferences</h2>
                            </Fade>

                            <Slide cascade damping={0.08}>
                                <div className="flex flex-wrap gap-4">
                                    {preferencesList.map((pref) => (
                                        <button
                                            key={pref}
                                            onClick={() => togglePreference(pref)}
                                            className={`px-6 py-2 rounded-full font-medium transition ${preferences.includes(pref) ? "bg-emerald-600 text-white" : "bg-white hover:bg-emerald-100"}`}
                                        >
                                            {pref}
                                        </button>
                                    ))}
                                </div>
                            </Slide>
                        </div>
                    </div>

                    {/* SUMMARY */}
                    <Zoom triggerOnce>
                        <aside className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 h-fit sticky top-28">
                            <h3 className="text-xl font-bold mb-6">Trip Summary</h3>

                            <div className="space-y-4 text-sm">
                                <p><strong>Destination:</strong> {selectedDestination?.name || "Not selected"}</p>
                                <p><strong>Dates:</strong> {startDate && endDate ? `${startDate} → ${endDate}` : "Not selected"}</p>
                                <p><strong>Preferences:</strong> {preferences.length ? preferences.join(", ") : "None"}</p>
                                <p><strong>Estimated Budget:</strong> <span className="text-emerald-600 font-semibold">${budget} – ${budget + 150}</span></p>
                            </div>

                            {error && <p className="mt-4 text-red-500 text-sm">{error}</p>}

                            <button
                                onClick={handleSaveAndExport}
                                disabled={loading}
                                className="mt-6 w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-semibold transition hover:scale-105 disabled:opacity-50"
                            >
                                {loading ? "Saving..." : "Save & Export PDF"}
                            </button>
                        </aside>
                    </Zoom>

                </div>
            </section>
        </>
    );
}
