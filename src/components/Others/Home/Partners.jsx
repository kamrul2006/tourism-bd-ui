export default function Partners() {
    const partners = [
        { id: 1, name: "SkyFly Airlines", logo: "https://dummyimage.com/200x100/1e293b/ffffff&text=SkyFly" },
        { id: 2, name: "Bangla Hotels", logo: "https://dummyimage.com/200x100/065f46/ffffff&text=Bangla+Hotels" },
        { id: 3, name: "GoRide Transport", logo: "https://dummyimage.com/200x100/f97316/ffffff&text=GoRide" },
        { id: 4, name: "TravelX", logo: "https://dummyimage.com/200x100/2563eb/ffffff&text=TravelX" },
        { id: 5, name: "SeaWays Ferry", logo: "https://dummyimage.com/200x100/0f766e/ffffff&text=SeaWays" },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Title */}
                <div className="flex items-center justify-center mb-12">
                    <div className="h-0.5 w-24 bg-gray-300"></div>
                    <h2 className="mx-4 text-3xl md:text-4xl font-bold text-emerald-900">
                        🤝 Our Trusted Partners
                    </h2>
                    <div className="h-0.5 w-24 bg-gray-300"></div>
                </div>

                {/* Subtitle */}
                <p className="text-center text-gray-600 mb-14">
                    Working with the best hotels, transport services, and airlines to give you a smooth journey.
                </p>

                {/* Logos */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
                    {partners.map((partner) => (
                        <div
                            key={partner.id}
                            className="flex items-center justify-center bg-gray-50 rounded-xl shadow-sm hover:shadow-lg transition p-6 grayscale hover:grayscale-0"
                        >
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="max-h-16 object-contain transition duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
