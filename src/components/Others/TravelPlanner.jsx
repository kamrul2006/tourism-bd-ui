import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import jsPDF from "jspdf";
import { AuthContext } from "../../Auth/Providers/AuthProvider";

export default function TravelPlanner() {
    // ---------- AUTH ----------
    const { usert } = useContext(AuthContext);

    // ---------- STATE ----------
    const [destinations, setDestinations] = useState([]);
    const [selectedDestination, setSelectedDestination] = useState(null);
    const [preferences, setPreferences] = useState([]);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    // ---------- FETCH DESTINATIONS ----------
    useEffect(() => {
        fetch("/data/destinations.json")
            .then((res) => res.json())
            .then((data) => setDestinations(data));
    }, []);

    // ---------- CONSTANTS ----------
    const preferencesList = [
        "Adventure",
        "Relaxation",
        "Culture",
        "Nature",
        "Budget-Friendly",
    ];

    // ---------- TOGGLE PREF ----------
    const togglePreference = (pref) => {
        setPreferences((prev) =>
            prev.includes(pref)
                ? prev.filter((p) => p !== pref)
                : [...prev, pref]
        );
    };

    // ---------- BUDGET ----------
    const baseBudget = 120;
    const budget =
        baseBudget +
        preferences.length * 40 +
        (selectedDestination ? 60 : 0);

    // ---------- SAVE PLAN ----------
    const handleGeneratePlan = async () => {
        if (!selectedDestination || !startDate || !endDate) {
            return setError("Please select destination and dates.");
        }

        setError("");
        setLoading(true);

        const planData = {
            userEmail: usert?.email || null,
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

            if (!res.ok) throw new Error("Failed");

            alert("✅ Travel plan saved successfully!");
        } catch (err) {
            setError("❌ Failed to save plan.");
        } finally {
            setLoading(false);
        }
    };

    // ---------- EXPORT PDF ----------
    const handleExportPDF = () => {
        if (!selectedDestination) {
            return alert("Generate a plan first.");
        }

        const doc = new jsPDF("p", "mm", "a4");

        // ---------- COLORS ----------
        const primaryColor = [16, 185, 129]; // emerald
        const grayColor = [100, 100, 100];

        // ---------- HEADER ----------
        doc.setFillColor(...primaryColor);
        doc.rect(0, 0, 210, 35, "F");

        doc.setTextColor(255, 255, 255);
        doc.setFontSize(22);
        doc.setFont("helvetica", "bold");
        doc.text("TourismBD", 20, 22);

        doc.setFontSize(11);
        doc.setFont("helvetica", "normal");
        doc.text("Travel Plan Invoice", 150, 22);

        // ---------- BODY ----------
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(16);
        doc.setFont("helvetica", "bold");
        doc.text("Travel Plan Summary", 20, 55);

        doc.setDrawColor(...primaryColor);
        doc.line(20, 58, 190, 58);

        // ---------- DETAILS ----------
        doc.setFontSize(11);
        doc.setFont("helvetica", "normal");

        const startY = 70;
        const lineGap = 10;

        doc.text("Destination:", 20, startY);
        doc.text(selectedDestination.name, 80, startY);

        doc.text("Travel Dates:", 20, startY + lineGap);

        doc.text(`${startDate}    ------ to ------     ${endDate}`, 80, startY + lineGap);

        doc.text("Preferences:", 20, startY + lineGap * 2);
        doc.text(preferences.length ? preferences.join(", ") : "None", 80, startY + lineGap * 2);

        if (usert?.email) {
            doc.text("User Email:", 20, startY + lineGap * 3);
            doc.text(usert.email, 80, startY + lineGap * 3);
        }

        // ---------- BUDGET BOX ----------
        doc.setFillColor(245, 247, 250);
        doc.rect(20, startY + lineGap * 4.2, 170, 25, "F");

        doc.setFont("helvetica", "bold");
        doc.text("Estimated Budget", 25, startY + lineGap * 5.5);

        doc.setFont("helvetica", "normal");
        doc.text(
            `$${budget}  –  $${budget + 150}`,
            25,
            startY + lineGap * 6.8
        );

        // ---------- FOOTER ----------
        doc.setFontSize(9);
        doc.setTextColor(...grayColor);

        doc.line(20, 270, 190, 270);

        doc.text(
            "Generated by TourismBD | Explore Bangladesh Smartly",
            20,
            278
        );

        doc.text(
            `Generated on: ${new Date().toLocaleDateString()}`,
            150,
            278
        );

        // ---------- SAVE ----------
        doc.save("tourismbd-travel-plan.pdf");
    };


    return (
        <>
            {/* ================= HERO ================= */}
            <section
                className="pt-32 pb-24 bg-cover bg-center relative"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee')",
                }}
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

            {/* ================= MAIN ================= */}
            <section className="py-20 bg-[#f7f4ef]">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">

                    {/* ================= LEFT ================= */}
                    <div className="lg:col-span-2 space-y-20">

                        {/* DESTINATION */}
                        <div>
                            <Fade>
                                <h2 className="text-2xl font-bold mb-6">
                                    1. Choose Destination
                                </h2>
                            </Fade>

                            <Slide cascade damping={0.1}>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    {destinations.map((dest) => (
                                        <div
                                            key={dest.id}
                                            onClick={() => setSelectedDestination(dest)}
                                            className={`cursor-pointer rounded-2xl overflow-hidden shadow-lg border-4 transition
                                            ${selectedDestination?.id === dest.id
                                                    ? "border-emerald-600 scale-[1.02]"
                                                    : "border-transparent hover:scale-[1.02]"
                                                }`}
                                        >
                                            <img
                                                src={dest.image}
                                                alt={dest.name}
                                                className="h-48 w-full object-cover"
                                            />
                                            <div className="p-4 bg-white flex justify-between">
                                                <h3 className="font-semibold">
                                                    {dest.name}
                                                </h3>
                                                <span className="text-emerald-600 text-sm">
                                                    Select
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Slide>
                        </div>

                        {/* DATES */}
                        <div>
                            <Fade>
                                <h2 className="text-2xl font-bold mb-6">
                                    2. Select Dates
                                </h2>
                            </Fade>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <input
                                    type="date"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                    className="px-4 py-3 rounded-xl border focus:ring-2 focus:ring-emerald-500"
                                />
                                <input
                                    type="date"
                                    min={startDate}
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                    className="px-4 py-3 rounded-xl border focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                        </div>

                        {/* PREFERENCES */}
                        <div>
                            <Fade>
                                <h2 className="text-2xl font-bold mb-6">
                                    3. Set Preferences
                                </h2>
                            </Fade>

                            <Slide cascade damping={0.08}>
                                <div className="flex flex-wrap gap-4">
                                    {preferencesList.map((pref) => (
                                        <button
                                            key={pref}
                                            onClick={() => togglePreference(pref)}
                                            className={`px-6 py-2 rounded-full font-medium transition
                                            ${preferences.includes(pref)
                                                    ? "bg-emerald-600 text-white"
                                                    : "bg-white hover:bg-emerald-100"
                                                }`}
                                        >
                                            {pref}
                                        </button>
                                    ))}
                                </div>
                            </Slide>
                        </div>
                    </div>

                    {/* ================= SUMMARY ================= */}
                    <Zoom triggerOnce>
                        <aside className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-8 h-fit sticky top-28">
                            <h3 className="text-xl font-bold mb-6">
                                Trip Summary
                            </h3>

                            <div className="space-y-4 text-sm">
                                <p>
                                    <strong>Destination:</strong>{" "}
                                    {selectedDestination?.name || "Not selected"}
                                </p>
                                <p>
                                    <strong>Dates:</strong>{" "}
                                    {startDate && endDate
                                        ? `${startDate} → ${endDate}`
                                        : "Not selected"}
                                </p>
                                <p>
                                    <strong>Preferences:</strong>{" "}
                                    {preferences.length
                                        ? preferences.join(", ")
                                        : "None"}
                                </p>
                                <p>
                                    <strong>Estimated Budget:</strong>{" "}
                                    <span className="text-emerald-600 font-semibold">
                                        ${budget} – ${budget + 150}
                                    </span>
                                </p>
                            </div>

                            {error && (
                                <p className="mt-4 text-red-500 text-sm">
                                    {error}
                                </p>
                            )}

                            <button
                                onClick={handleGeneratePlan}
                                disabled={loading}
                                className="mt-6 w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-semibold transition hover:scale-105 disabled:opacity-50"
                            >
                                {loading ? "Saving..." : "Save Travel Plan"}
                            </button>

                            <button
                                onClick={handleExportPDF}
                                className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition hover:scale-105"
                            >
                                Export as PDF
                            </button>
                        </aside>
                    </Zoom>
                </div>
            </section>
        </>
    );
}
