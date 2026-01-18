import { useEffect, useState } from "react";
import { FaUsers, FaMapMarkedAlt, FaSuitcaseRolling, FaStar } from "react-icons/fa";

const stats = [
  {
    id: 1,
    title: "Happy Travelers",
    value: 12500,
    icon: <FaUsers />,
  },
  {
    id: 2,
    title: "Destinations Covered",
    value: 120,
    icon: <FaMapMarkedAlt />,
  },
  {
    id: 3,
    title: "Trips Planned",
    value: 5400,
    icon: <FaSuitcaseRolling />,
  },
  {
    id: 4,
    title: "5-Star Reviews",
    value: 4800,
    icon: <FaStar />,
  },
];

export default function AchievementsStats() {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      const step = Math.ceil(stat.value / 100);

      return setInterval(() => {
        setCounts((prev) => {
          const updated = [...prev];
          if (updated[index] < stat.value) {
            updated[index] += step;
          } else {
            updated[index] = stat.value;
          }
          return updated;
        });
      }, 30);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="py-20 bg-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our Achievements
          </h2>
          <p className="text-emerald-200 mt-2">
            Numbers that reflect our journey
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="bg-emerald-800/70 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:scale-105 transition"
            >
              <div className="text-orange-400 text-4xl mb-4 flex justify-center">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold">
                {counts[index].toLocaleString()}+
              </h3>
              <p className="text-emerald-200 mt-2 text-sm tracking-wide">
                {stat.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
