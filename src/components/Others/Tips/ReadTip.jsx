import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Fade, Slide } from "react-awesome-reveal";
import { MdArrowBack, MdSearchOff } from "react-icons/md";
import Loader from "../../Fixed/Loader";

export default function ReadTip() {
    const { id } = useParams();
    const [tip, setTip] = useState(null);
    const [relatedTips, setRelatedTips] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTip = async () => {
            try {
                const res = await fetch(`http://localhost:5000/blogs/${id}`);
                const data = await res.json();
                setTip(data);

                // fetch related tips
                const all = await fetch(`http://localhost:5000/blogs`).then(r => r.json());
                const related = all.filter(
                    (t) => t.category === data.category && t._id !== data._id
                );
                setRelatedTips(related.slice(0, 4));
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchTip();
    }, [id]);

    if (loading) {
        return <div ><Loader /></div>;
    }

    if (!tip) {
        return (
            <div className="flex flex-col items-center justify-center py-20 text-center text-gray-600">

                <MdSearchOff className="text-6xl mb-4 animate-bounce" />
                <h3 className="text-2xl md:text-3xl font-semibold mb-2">Tips not found.</h3>
                <p className="text-gray-500">There must be a problem while loading... <br /> Please try again after some time.</p>
            </div>
        )

    }

    return (
        <>
            {/* ---------------- SEO META TAGS ---------------- */}
            <Helmet>
                <title>{tip.title} | Tourism Bangladesh</title>
                <meta name="description" content={tip.shortDesc} />
                <meta name="keywords" content={`${tip.category}, Bangladesh travel tips`} />
                <meta property="og:title" content={tip.title} />
                <meta property="og:description" content={tip.shortDesc} />
                <meta property="og:image" content={tip.image} />
            </Helmet>

            {/* ---------------- HERO ---------------- */}
            <section
                className="relative h-[70vh] bg-cover bg-center flex items-end p-5 px-0 md:p-10 md:px-10"
                style={{ backgroundImage: `url(${tip.image})` }}
            >
                <div className="absolute inset-0 bg-black/70" />
                <Fade direction="down" triggerOnce>
                    <div className="relative z-10  px-6 max-w-3xl text-white">
                        <span className="inline-block bg-emerald-600 px-4 py-1 rounded-full text-sm mb-4">
                            {tip.badge}
                        </span>

                        <h1 className="text-4xl md:text-6xl chicleRegular mb-4 border-y-2 border-orange-600 py-4 pr-3">
                            {tip.title}
                        </h1>

                        <p className="text-gray-200">{tip.date}</p>
                    </div>
                </Fade>
            </section>

            {/* ---------------- CONTENT ---------------- */}
            <section className="bg-[#f7f4ef] py-10">
                <div className="max-w-4xl mx-auto px-6">

                    <Fade triggerOnce>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            {tip.description}
                        </p>
                    </Fade>

                    <Link
                        to="/tips"
                        className="inline-flex items-center gap-2 mt-10 text-emerald-700 font-semibold hover:underline"
                    >
                        <MdArrowBack /> Back to Tips
                    </Link>
                </div>
            </section>

            {/* ---------------- RELATED TIPS ---------------- */}
            {relatedTips.length > 0 && (
                <section className="bg-[#f7f4ef] pb-20">
                    <div className="max-w-7xl mx-auto px-6">

                        {/* Title with line */}
                        <Fade direction="up"  >
                            <div className="flex flex-col md:flex-row items-center justify-center mb-5">
                                <Slide>
                                    <div className=" md:block h-1 w-24 md:w-48 lg:w-80 rounded-full bg-linear-to-l from-gray-400 to-[#f7f4ef]" />
                                </Slide>
                                <h2 className="mx-2 text-3xl md:text-5xl chicleRegular text-emerald-900 text-center my-3 md:my-0">
                                    Related Tips
                                </h2>
                                <Slide direction="right">
                                    <div className=" md:block h-1 w-24 md:w-48 lg:w-80 rounded-full bg-linear-to-r from-gray-400 to-[#f7f4ef]" />
                                </Slide>
                            </div>
                        </Fade>


                        <Slide cascade damping={0.1} triggerOnce>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                                {relatedTips.map((item) => (
                                    <Link
                                        key={item.id}
                                        to={`/tips/${item._id}`}
                                        className="group relative rounded-2xl overflow-hidden shadow-lg h-72"
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-black via-black/80 to-transparent" />
                                        <div className="absolute bottom-0 p-4 text-white">
                                            <h3 className="text-lg font-bold border-b-2 border-orange-500 w-fit pb-1">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm text-gray-200 mt-1 line-clamp-2">
                                                {item.shortDesc}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </Slide>
                    </div>
                </section>
            )}
        </>
    );
}
