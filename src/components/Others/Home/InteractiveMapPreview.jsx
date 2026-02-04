import { Link } from "react-router-dom";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

export default function InteractiveMapPreview() {
    return (
        <section className="py-14 md:py-20 bg-[#f7f4ef] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Title */}
                <Fade direction="up" triggerOnce>
                    <div className="flex items-center justify-center mb-10 md:mb-14 px-4">
                        <div className=" md:block h-1 w-24 md:w-48 lg:w-80 rounded-full bg-linear-to-l from-gray-400 to-[#f7f4ef]" />
                        <h2 className="mx-1 text-2xl md:text-5xl chicleRegular text-emerald-900 text-center">
                            Explore Bangladesh on Map
                        </h2>
                        <div className=" md:block h-1 w-24 md:w-48 lg:w-80 rounded-full bg-linear-to-r from-gray-400 to-[#f7f4ef]" />
                    </div>
                </Fade>

                {/* Map Card */}
                <Zoom triggerOnce>
                    <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-white">
                        <div className="relative w-full aspect-video sm:aspect-16/10 md:aspect-21/9">
                            <iframe
                                title="Google Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9027152829194!2d90.39196361536608!3d23.75087649471383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b41f91d6e5%3A0xf9de44bfa693c9b1!2sDhaka!5e0!3m2!1sen!2sbd!4v1702561707483"
                                className="absolute inset-0 w-full h-full border-0"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </Zoom>

                {/* Button */}
                <Slide direction="up" delay={200} triggerOnce>
                    <div className="text-center mt-8 md:mt-10">
                        <Link
                            to="/map"
                            className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-900 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold shadow-lg transition transform hover:scale-105"
                        >
                            Explore on Full Map
                        </Link>
                    </div>
                </Slide>

            </div>
        </section>
    );
}
