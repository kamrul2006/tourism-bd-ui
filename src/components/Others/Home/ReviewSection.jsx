import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Auth/Providers/AuthProvider";
import { FaStar, FaQuoteLeft, FaUserCircle } from "react-icons/fa";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";

const ReviewSection = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [reviews, setReviews] = useState([]);
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(true);

    //------------------ Fetch reviews----------------
    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then(res => res.json())
            .then(data => {
                setReviews(data.slice().reverse());
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    const fetchReviews = () => {
        setLoading(true);
        fetch("http://localhost:5000/reviews")
            .then(res => res.json())
            .then(data => {
                setReviews(data.slice().reverse());
                setLoading(false);
            })
            .catch(() => setLoading(false));
    };

    useEffect(() => {
        fetchReviews();
    }, []);

    // ----------------Submit review---------------
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!user) {
            Swal.fire({
                title: "Login Required",
                text: "Please login to submit a review.",
                icon: "info",
                showCancelButton: true,
                confirmButtonText: "Login Now",
                cancelButtonText: "Cancel",
                confirmButtonColor: "#166534",
            }).then(result => {
                if (result.isConfirmed) navigate("/login");
            });
            return;
        }

        if (rating === 0 || !message.trim()) {
            Swal.fire({
                icon: "error",
                title: "Incomplete Review",
                text: "Please select a rating and write a review.",
            });
            return;
        }

        const newReview = {
            name: user.displayName || "Anonymous Traveler",
            email: user.email,
            photoURL: user.photoURL || null,
            rating,
            message,
            date: new Date(),
        };

        await fetch("http://localhost:5000/reviews", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newReview),
        });

        fetchReviews();
        setRating(0);
        setMessage("");

        Swal.fire({
            icon: "success",
            title: "Review Submitted!",
            text: "Your review is now live.",
            timer: 1800,
            showConfirmButton: false,
        });
    };

    return (
        <section
            className="relative py-10 bg-cover bg-center overflow-hidden"

        >

            <div
                className="absolute inset-0 bg-cover bg-center scale-105 animate-[slowZoom_20s_linear_infinite]"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee')",
                }}
            />


            {/*---------- Overlay----------- */}
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative max-w-7xl mx-auto px-4 text-white">
                {/*--------- Header-------- */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl md:text-6xl mb-3 chicleRegular">What Travelers Say</h2>

                    <p className="text-gray-200 max-w-2xl mx-auto">
                        Real stories from travelers who explored Bangladesh with us
                    </p>
                </div>

                {/*----------Reviews ----------*/}
                {loading ? (
                    <p className="text-center">Loading reviews...</p>
                ) : (

                    <Marquee
                        speed={100}
                        gradient={false}
                        pauseOnHover={true}
                        className="py-1"
                    >
                        <div className="flex items-center justify-center gap-4 mb-8 mx-2">
                            {reviews.map((review, index) => (
                                <div
                                    key={index}
                                    className="bg-white/90 text-gray-800 backdrop-blur-lg rounded-2xl p-6 shadow-xl"
                                >
                                    <FaQuoteLeft className="text-green-700 text-2xl mb-3" />

                                    <p className="mb-4 italic">“{review.message}”</p>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            {review.photoURL ? (
                                                <img
                                                    src={review.photoURL}
                                                    alt=""
                                                    className="w-10 h-10 rounded-full object-cover"
                                                />
                                            ) : (
                                                <FaUserCircle className="text-3xl text-green-700" />
                                            )}
                                            <span className="font-semibold">{review.name}</span>
                                        </div>

                                        <div className="flex text-yellow-400">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <FaStar key={i} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Marquee>
                )}

                {/* --------------Submit Review------------ */}
                <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl text-gray-800">
                    <h3 className="text-3xl chicleRegular text-center text-green-800 mb-6">
                        Share Your Experience
                    </h3>

                    {/*--------- Star Rating-------------- */}
                    <div className="flex justify-center mb-5">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <FaStar
                                key={star}
                                className={`cursor-pointer text-3xl transition ${(hover || rating) >= star
                                    ? "text-yellow-400"
                                    : "text-gray-300"
                                    }`}
                                onClick={() => setRating(star)}
                                onMouseEnter={() => setHover(star)}
                                onMouseLeave={() => setHover(0)}
                            />
                        ))}
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <textarea
                            rows="4"
                            placeholder="Write your review..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-600 outline-none"
                        />

                        <button
                            type="submit"
                            className="w-full bg-green-700 text-white py-3 rounded-xl font-semibold hover:bg-green-800 transition"
                        >
                            Submit Review
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ReviewSection;
