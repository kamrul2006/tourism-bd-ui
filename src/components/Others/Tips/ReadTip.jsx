import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Fade, Slide } from "react-awesome-reveal";
import { MdArrowBack } from "react-icons/md";

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
                    (t) => t.category === data.category && t.id !== data.id
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
        return <div className="py-20 text-center text-gray-500">Loading...</div>;
    }

    if (!tip) {
        return <div className="py-20 text-center text-red-500">Tip not found</div>;
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

                        <Fade triggerOnce>
                            <h2 className="text-3xl md:text-5xl chicleRegular text-center mb-12 text-emerald-900">
                                Related Tips
                            </h2>
                        </Fade>

                        <Slide cascade damping={0.1} triggerOnce>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
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
                                        <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent" />
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
