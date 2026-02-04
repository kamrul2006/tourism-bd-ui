import logo from "/Logo/fav.png";

export default function Loader() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md">
            <div className="flex flex-col items-center gap-6">

                {/* Spinner */}
                <div className="relative w-48 h-48 flex items-center justify-center">

                    {/* Rotating dots */}
                    <div className="absolute inset-0 animate-spin-slow">
                        {[...Array(12)].map((_, i) => (
                            <span
                                key={i}
                                className="absolute w-3 h-3 bg-orange-400 rounded-full"
                                style={{
                                    top: "50%",
                                    left: "50%",
                                    transform: `
                    rotate(${i * 30}deg)
                    translate(70px)
                  `,
                                    opacity: (i + 1) / 12,
                                }}
                            />
                        ))}
                    </div>

                    {/* Center Logo */}
                    <div className="w-28 h-28 flex flex-col gap-1 items-center justify-center ">
                        <img
                            src={logo}
                            alt="TourismBD"
                            className="w-16 h-16 drop-shadow drop-shadow-amber-50"
                        />
                        <h1 className="chicleRegular text-2xl text-white ">TourismBD</h1>
                    </div>
                </div>

                {/* Text */}
                <p className="text-white text-lg font-semibold tracking-wide">
                    Loading...
                </p>
            </div>
        </div>
    );
}
