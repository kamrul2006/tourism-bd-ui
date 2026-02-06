import { Link } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaArrowRight } from "react-icons/fa";
import { MdTravelExplore } from "react-icons/md";
import logo from "/Logo/logo.png";

export default function Footer() {
    return (
        <footer className="bg-emerald-950 text-gray-100 relative overflow-hidden pt-12">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Brand */}
                <Fade direction="up" triggerOnce>
                    <div className="flex flex-col items-start">
                        <img
                            src={logo}
                            alt="TourismBD Logo"
                            className="w-40 drop-shadow-2xl mb-4"
                        />
                        <p className="text-gray-300 text-sm sm:text-base">
                            Explore Bangladesh in style. Discover hidden gems, plan trips, and travel smart!
                        </p>
                    </div>
                </Fade>

                {/* Quick Links */}
                <Slide direction="up" cascade damping={0.1} triggerOnce>
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
                            <MdTravelExplore /> Quick Links
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="hover:text-orange-400 transition flex items-center gap-2">
                                    <FaArrowRight /> Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/destinations" className="hover:text-orange-400 transition flex items-center gap-2">
                                    <FaArrowRight /> Destinations
                                </Link>
                            </li>
                            <li>
                                <Link to="/budget" className="hover:text-orange-400 transition flex items-center gap-2">
                                    <FaArrowRight /> Budget Planner
                                </Link>
                            </li>
                            <li>
                                <Link to="/transport" className="hover:text-orange-400 transition flex items-center gap-2">
                                    <FaArrowRight /> Transport
                                </Link>
                            </li>
                            <li>
                                <Link to="/tips" className="hover:text-orange-400 transition flex items-center gap-2">
                                    <FaArrowRight /> Travel Tips
                                </Link>
                            </li>
                        </ul>
                    </div>
                </Slide>

                {/* Popular Places */}
                <Slide direction="up" cascade damping={0.15} triggerOnce>
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
                            <MdTravelExplore /> Popular Places
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/destinations/coxs-bazar" className="hover:text-orange-400 transition flex items-center gap-2">
                                    <FaArrowRight /> Cox’s Bazar
                                </Link>
                            </li>
                            <li>
                                <Link to="/destinations/sajek" className="hover:text-orange-400 transition flex items-center gap-2">
                                    <FaArrowRight /> Sajek Valley
                                </Link>
                            </li>
                            <li>
                                <Link to="/destinations/sundarbans" className="hover:text-orange-400 transition flex items-center gap-2">
                                    <FaArrowRight /> Sundarbans
                                </Link>
                            </li>
                            <li>
                                <Link to="/destinations/saint-martin" className="hover:text-orange-400 transition flex items-center gap-2">
                                    <FaArrowRight /> Saint Martin
                                </Link>
                            </li>
                            <li>
                                <Link to="/destinations/srimangal" className="hover:text-orange-400 transition flex items-center gap-2">
                                    <FaArrowRight /> Srimangal
                                </Link>
                            </li>
                        </ul>
                    </div>
                </Slide>

                {/* Contact */}
                <Fade direction="up" triggerOnce>
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
                            <FaMapMarkerAlt /> Contact
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li className="flex items-center gap-2"><FaMapMarkerAlt /> Dhaka, Bangladesh</li>
                            <li className="flex items-center gap-2"><FaEnvelope /> info@tourismbd.com</li>
                            <li className="flex items-center gap-2"><FaPhone /> +880 1XXX-XXXXXX</li>
                        </ul>
                    </div>
                </Fade>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-emerald-700 mt-8 py-4 text-sm text-gray-300 relative">
                <div className="text-left pl-3 md:pl-6 ">
                    © {new Date().getFullYear()} TourismBD Ltd.
                </div>
                {/* Developer Info Bottom-Right */}
                <div className="absolute bottom-4 right-2 md:right-6 text-right text-xs md:text-base">
                    <a
                        href="https://kiapurba.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-400 hover:text-orange-500 font-semibold transition hover:underline font-mono flex flex-col md:flex-row items-center justify-center md:gap-2"
                    >
                        <span className="text-white/30 text-xs md:text-base font-light "> Developed by : </span>
                        Kamrul Islam Apurba.
                    </a>
                </div>
            </div>
        </footer>
    );
}
