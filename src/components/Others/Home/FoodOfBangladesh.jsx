import { Link } from "react-router-dom";

const foods = [
    {
        id: 1,
        name: "Biriyani",
        img: "https://upload.wikimedia.org/wikipedia/commons/5/5a/%22Hyderabadi_Dum_Biryani%22.jpg",
    },
    {
        id: 2,
        name: "Pitha",
        img: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Pitha_for_Wedding-_Pakan%2C_Patishapta%2C_Bharandash.jpg",
    },
    {
        id: 3,
        name: "Hilsha",
        img: "https://images.squarespace-cdn.com/content/v1/5ea5f3913b0ccf06d0ec2563/1650301006652-KFG6IO35HPST5N22G8UN/3.jpg",
    },
    {
        id: 4,
        name: "Street Food",
        img: "https://i.pinimg.com/564x/9b/65/b6/9b65b6f4473393641df89633af47a183.jpg",
    },
];

export default function FoodOfBangladesh() {
    return (
        <section className="py-20 bg-[#f7f4ef]">
            <div className="max-w-7xl mx-auto px-6">

                {/* Title with line */}
                <div className="flex items-center justify-center mb-5">

                    <div className="h-1 rounded-full w-80 bg-linear-to-l from-gray-400 to-[#f7f4ef]"></div>
                    <h2 className="mx-4 text-3xl md:text-5xl chicleRegular text-emerald-900">
                        Food of Bangladesh
                    </h2>
                    <div className="h-1 w-80 rounded-full bg-linear-to-r from-gray-400 to-[#f7f4ef]"></div>

                </div>

                {/* Subtitle */}
                <p className="text-center text-emerald-900 mb-8 font-bold italic font-serif">
                    Travel + Food = A Powerful Experience. Taste the soul of Bangladesh.
                </p>

                {/* Food Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {foods.map((food) => (
                        <div
                            key={food.id}
                            className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer"
                        >
                            {/* Image */}
                            <img
                                src={food.img}
                                alt={food.name}
                                className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/90 to-black/10"></div>

                            {/* Food Name */}
                            <div className="absolute inset-0 flex flex-col items-center justify-end mb-6 text-center z-10 transition-all duration-300 group-hover:-translate-y-6">
                                <h3 className="text-white text-2xl font-semibold drop-shadow">
                                    {food.name}
                                </h3>
                                <div className="w-12 h-0.5 bg-orange-400 my-2 group-hover:mb-6"></div>
                                <p className="text-gray-200 text-sm tracking-wide group-hover:hidden">
                                    Taste the Tradition
                                </p>
                            </div>

                            {/* Hover Button */}
                            <div className="absolute inset-0 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition duration-300 z-10">
                                <Link
                                    to="/food"
                                    className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded font-semibold shadow-md transition transform hover:scale-105"
                                >
                                    Explore Food
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
