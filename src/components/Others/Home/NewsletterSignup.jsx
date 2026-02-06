import newsletterBg from "/images/NewsletterSignup.png";
import { Fade, Slide } from "react-awesome-reveal";

export default function NewsletterSignup() {
    return (
        <div className="bg-[#f7f4ef] py-10">
            <section
                className="relative py-24 bg-cover bg-center rounded-bl-[80px] rounded-tr-[80px] mx-4 overflow-hidden">

                <div
                    className="absolute inset-0 bg-cover bg-center scale-105 animate-[slowZoom_20s_linear_infinite]"
                    style={{ backgroundImage: `url(${newsletterBg})` }}

                />


                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-r from-emerald-900/80 via-emerald-800/70 to-black/60 rounded-bl-[80px] rounded-tr-[80px]"></div>

                <div className="relative max-w-6xl mx-auto px-6">
                    <Fade cascade direction="up" damping={0.2} triggerOnce>
                        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">

                            {/* Left Content */}
                            <div className="text-white text-center md:text-left">
                                <h2 className="text-3xl md:text-4xl mb-2 chicleRegular">
                                    Get Travel Tips & Discounts
                                </h2>
                                <p className="text-emerald-200 max-w-md mx-auto md:mx-0">
                                    Join our travel family and receive exclusive deals, hidden gems,
                                    and expert guides straight to your inbox.
                                </p>
                            </div>

                            {/* Form */}
                            <Slide direction="up" triggerOnce>
                                <form className="flex w-full md:w-auto bg-white rounded-full overflow-hidden shadow-xl">
                                    <input
                                        type="email"
                                        required
                                        placeholder="Enter your email address"
                                        className="w-full md:w-72 px-5 py-4 text-gray-700 focus:outline-none"
                                    />
                                    <button
                                        type="submit"
                                        className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 font-semibold transition-all duration-300 hover:scale-105"
                                    >
                                        Subscribe
                                    </button>
                                </form>
                            </Slide>

                        </div>
                    </Fade>
                </div>
            </section>
        </div >
    );
}
