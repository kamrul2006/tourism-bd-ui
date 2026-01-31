import { Link } from "react-router-dom";


export default function BudgetHero() {
    return (
        <section className="relative h-[90vh] w-full overflow-hidden">

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/images/BudgetBG.jpg')",
                }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/45"></div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
                <div className="max-w-4xl text-white">

                    <h1 className="text-4xl md:text-6xl mb-6 leading-tight drop-shadow-lg chicleRegular">
                        Budget Travel in Bangladesh
                    </h1>

                    <p className="text-base md:text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
                        Discover the best tips for enjoying Bangladesh on a budget without
                        missing out on unforgettable experiences.
                    </p>

                    <Link to={'/destinations'}>
                        <button className="bg-orange-500 hover:bg-orange-600 transition px-8 py-3 rounded-md text-white font-semibold text-lg shadow-lg hover:scale-105">
                            See Destinations
                        </button>
                    </Link>
                </div>
            </div>

        </section>
    );
}
