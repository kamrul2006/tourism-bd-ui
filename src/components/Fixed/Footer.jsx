import { Link } from "react-router-dom";
import { FaGlobe, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "/Logo/logo.png"; // your TourismBD logo

export default function Footer() {
    return (
        <footer className="bg-emerald-950 text-gray-100">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Brand */}
                <div className="flex flex-col items-start">
                    <img src={logo} alt="TourismBD Logo" className="w-40  drop-shadow drop-shadow-emerald-50 mb-4" />
                    <p className="text-gray-200">
                        Explore Bangladesh in style. Discover hidden gems, plan trips, and travel smart!
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link to="/" className="hover:text-orange-400 transition">Home</Link>
                        </li>
                        <li>
                            <Link to="/destinations" className="hover:text-orange-400 transition">Destinations</Link>
                        </li>
                        <li>
                            <Link to="/budget" className="hover:text-orange-400 transition">Budget Planner</Link>
                        </li>
                        <li>
                            <Link to="/transport" className="hover:text-orange-400 transition">Transport</Link>
                        </li>
                        <li>
                            <Link to="/tips" className="hover:text-orange-400 transition">Travel Tips</Link>
                        </li>
                    </ul>
                </div>

                {/* Popular Places */}
                <div>
                    <h3 className="text-lg font-bold mb-4 text-white">Popular Places</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link to="/destinations/coxs-bazar" className="hover:text-orange-400 transition">Cox’s Bazar</Link>
                        </li>
                        <li>
                            <Link to="/destinations/sajek" className="hover:text-orange-400 transition">Sajek Valley</Link>
                        </li>
                        <li>
                            <Link to="/destinations/sundarbans" className="hover:text-orange-400 transition">Sundarbans</Link>
                        </li>
                        <li>
                            <Link to="/destinations/saint-martin" className="hover:text-orange-400 transition">Saint Martin</Link>
                        </li>
                        <li>
                            <Link to="/destinations/srimangal" className="hover:text-orange-400 transition">Srimangal</Link>
                        </li>
                    </ul>
                </div>

                {/* Contact & Social */}
                <div>
                    <h3 className="text-lg font-bold mb-4 text-white">Contact & Follow</h3>
                    <ul className="space-y-2 text-sm">
                        <li>📍 Dhaka, Bangladesh</li>
                        <li>📧 info@tourismbd.com</li>
                        <li>📞 +880 1XXX-XXXXXX</li>
                    </ul>

                    <div className="flex gap-4 mt-4 text-xl">
                        <a href="https://tourismbd.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">
                            <FaGlobe />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">
                            <FaFacebookF />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">
                            <FaInstagram />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">
                            <FaTwitter />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-emerald-700 text-center py-4 text-sm text-gray-300">
                © {new Date().getFullYear()} TourismBD. Made with ❤️ for travelers.
            </div>
        </footer>
    );
}
