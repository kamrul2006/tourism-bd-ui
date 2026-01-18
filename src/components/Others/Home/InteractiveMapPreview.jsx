import { Link } from "react-router-dom";

export default function InteractiveMapPreview() {


    return (
        <section className="py-20 bg-[#f7f4ef]">
            <div className="max-w-7xl mx-auto px-6">

                {/* Title */}
                <div className="flex items-center justify-center mb-12">
                    <div className="h-1 rounded-full w-80 bg-linear-to-l from-gray-400 to-[#f7f4ef]"></div>
                    <h2 className="mx-4 text-3xl md:text-5xl chicleRegular text-emerald-900">
                        Explore Bangladesh on Map
                    </h2>
                    <div className="h-1 w-80 rounded-full bg-linear-to-r from-gray-400 to-[#f7f4ef]"></div>
                </div>

                {/* Google Map Card */}
                <div className="rounded-3xl overflow-hidden shadow-2xl">


                    <div >
                        <div className="text-center rounded-2xl overflow-hidden shadow-md">
                            <iframe
                                title="Google Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9027152829194!2d90.39196361536608!3d23.75087649471383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b41f91d6e5%3A0xf9de44bfa693c9b1!2sDhaka!5e0!3m2!1sen!2sbd!4v1702561707483"
                                width="100%"
                                height="350"
                                className="rounded-2xl border-0"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>




                </div>

                {/* Button */}
                <div className="text-center mt-10">
                    <Link
                        to="/map"
                        className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-900 text-white px-8 py-3 rounded font-semibold shadow-lg transition transform hover:scale-105"
                    >
                        Explore on Full Map
                    </Link>
                </div>

            </div>
        </section>
    );
}
