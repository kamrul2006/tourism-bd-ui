import { Link } from "react-router-dom";

export default function CallToAction() {
    return (
        <section
            className="relative py-28 bg-cover bg-center"
            style={{
                backgroundImage:
                    "url('/images/cta.webp')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-tr from-black/40 via-black/70 to-black/40"></div>

            {/* Content */}
            <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
                    Ready for your next adventure?
                </h2>
                <p className="text-gray-200 mb-10 text-lg">
                    Discover breathtaking destinations, plan smarter, and travel better.
                </p>

                <Link
                    to="/destinations"
                    className="inline-flex items-center gap-2 bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 rounded font-semibold shadow-xl transition transform hover:scale-110"
                >
                    Start Your Journey
                </Link>
            </div>
        </section>
    );
}
