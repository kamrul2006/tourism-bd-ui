import { Fade } from "react-awesome-reveal";
import Marquee from "react-fast-marquee";

export default function Partners() {
    const partners = [
        { id: 1, name: "SkyFly Airlines", logo: "/Logo/Partners/li.png" },
        { id: 2, name: "Bangla Hotels", logo: "/Logo/Partners/lv.png" },
        { id: 3, name: "GoRide Transport", logo: "/Logo/Partners/lii.png" },
        { id: 4, name: "TravelX", logo: "/Logo/Partners/liv.png" },
        { id: 5, name: "SeaWays Ferry", logo: "/Logo/Partners/liii.png" },
    ];

    return (
        <section className="py-20 bg-linear-to-b from-[#f7f4ef] via-emerald-50 to-[#f7f4ef] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Title */}
                <div className="text-center mb-3">


                    {/* Title */}
                    <Fade direction="up" triggerOnce>
                        <div className="flex items-center justify-center mb-3 md:mb-14 md:gap-3 gap-2">
                            <div className=" md:block h-1 w-24 md:w-48 lg:w-80 rounded-full bg-linear-to-l from-gray-400 to-[#f7f4ef]" />
                            <h2 className="chicleRegular text-3xl md:text-5xl text-emerald-900 text-center">
                                Our Trusted Partners
                            </h2>
                            <div className=" md:block h-1 w-24 md:w-48 lg:w-80 rounded-full bg-linear-to-r from-gray-400 to-[#f7f4ef]" />
                        </div>
                    </Fade>


                    <p className="mt-3 text-gray-600">
                        We collaborate with premium hotels, airlines & transport services.
                    </p>
                </div>

                {/* Gradient divider */}
                <div className="w-44 h-0.5 bg-linear-to-r from-orange-400 to-emerald-500 mx-auto mb-12 rounded-full"></div>

                {/* Marquee */}
                <div className="relative">

                    <Marquee
                        speed={45}
                        gradient={false}
                        className="py-6"
                    >
                        {[...partners, ...partners].map((partner, index) => (
                            <div
                                key={index}
                                className="mx-6 my-5 flex items-center justify-center bg-white/80 backdrop-blur-md 
                           border border-emerald-100 rounded-2xl px-10 py-8 
                           shadow-md hover:shadow-emerald-200 hover:shadow-xl 
                           transition-all duration-300 
                           hover:scale-105"
                            >
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="h-14 object-contain grayscale hover:grayscale-0 transition duration-500"
                                />
                            </div>
                        ))}
                    </Marquee>
                </div>

                {/* Bottom text */}
                <p className="text-center text-sm text-gray-500 mt-10">
                    Trusted by leading brands to deliver world-class travel experiences.
                </p>
            </div>
        </section>
    );
}
