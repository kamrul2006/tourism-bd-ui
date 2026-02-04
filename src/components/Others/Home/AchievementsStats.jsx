import { useEffect, useState } from "react";
import {
  FaUsers,
  FaMapMarkedAlt,
  FaSuitcaseRolling,
  FaStar,
} from "react-icons/fa";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

const stats = [
  { id: 1, title: "Happy Travelers", value: 12500, icon: <FaUsers /> },
  { id: 2, title: "Destinations Covered", value: 120, icon: <FaMapMarkedAlt /> },
  { id: 3, title: "Trips Planned", value: 5400, icon: <FaSuitcaseRolling /> },
  { id: 4, title: "5-Star Reviews", value: 4800, icon: <FaStar /> },
];

export default function AchievementsStats() {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (!startCount) return;

    stats.forEach((stat, index) => {
      let current = 0;
      const increment = Math.ceil(stat.value / 100);

      const interval = setInterval(() => {
        current += increment;
        setCounts((prev) => {
          const updated = [...prev];
          updated[index] =
            current < stat.value ? current : stat.value;
          return updated;
        });

        if (current >= stat.value) clearInterval(interval);
      }, 20);
    });
  }, [startCount]);

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <Fade direction="up" triggerOnce>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Our Achievements
            </h2>
            <p className="text-emerald-200 mt-3 text-sm sm:text-base">
              Numbers that reflect our journey
            </p>
          </div>
        </Fade>

        {/* Stats */}
        <Slide
          direction="up"
          cascade
          damping={0.15}
          triggerOnce
          onVisibilityChange={(visible) => visible && setStartCount(true)}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 ">
            {stats.map((stat, index) => (
              <Zoom key={stat.id} triggerOnce>
                <div
                  className="group relative bg-emerald-800/70 backdrop-blur-lg
                  rounded-2xl p-6 sm:p-8 shadow-xl text-center
                  transition-transform duration-300
                  hover:scale-105 hover:shadow-2xl"
                >
                  {/* Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-orange-400/10 to-transparent opacity-0 group-hover:opacity-100 transition" />

                  {/* Icon */}
                  <div className="relative z-10 text-orange-400 text-3xl sm:text-4xl mb-4 flex justify-center">
                    {stat.icon}
                  </div>

                  {/* Count */}
                  <h3 className="relative z-10 text-2xl sm:text-3xl font-bold">
                    {counts[index].toLocaleString()}+
                  </h3>

                  {/* Label */}
                  <p className="relative z-10 text-emerald-200 mt-2 text-xs sm:text-sm tracking-wide">
                    {stat.title}
                  </p>
                </div>
              </Zoom>
            ))}
          </div>
        </Slide>

      </div>
    </section>
  );
}
