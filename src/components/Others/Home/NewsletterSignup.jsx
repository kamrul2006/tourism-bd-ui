export default function NewsletterSignup() {
    return (
        <section className="py-16 bg-[#f7f4ef]">
            <div className="max-w-5xl mx-auto px-6">
                <div className="bg-white rounded-3xl shadow-xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* Text */}
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-emerald-900">
                            📩 Get travel tips & discounts
                        </h2>
                        <p className="text-gray-600 mt-2 text-sm">
                            Subscribe to receive exclusive deals, destination guides, and travel inspiration.
                        </p>
                    </div>

                    {/* Form */}
                    <form className="flex w-full md:w-auto">
                        <input
                            type="email"
                            required
                            placeholder="Enter your email"
                            className="w-full md:w-64 px-4 py-3 rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                        />
                        <button
                            type="submit"
                            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-r-full font-semibold shadow-lg transition transform hover:scale-105"
                        >
                            Subscribe
                        </button>
                    </form>

                </div>
            </div>
        </section>
    );
}
