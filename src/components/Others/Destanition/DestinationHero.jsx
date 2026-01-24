export default function DestinationHero() {
    return (
        <section
            className="relative h-[90vh] w-full flex items-center justify-center"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1920&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/70"></div>

            {/* Content */}
            <div className="relative z-10 text-center max-w-4xl px-6">
                <h1 className="text-4xl md:text-6xl text-white leading-tight mb-6 chicleRegular">
                    Explore the Top Destinations of Bangladesh
                </h1>

                <p className="text-gray-200 text-lg md:text-xl mb-8">
                    Discover stunning places and plan your next adventure to the paradise
                    of Bangladesh.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition">
                        Start Exploring
                    </button>

                    <button className="bg-white/20 backdrop-blur-md border border-white/40 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition">
                        View Popular Places
                    </button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-8 h-14 border-2 border-white rounded-full flex items-start justify-center p-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
            </div>
        </section>
    );
}
