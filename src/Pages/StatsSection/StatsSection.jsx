import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Truck, Star, Clock, Coffee, Users } from "lucide-react";

const statsData = [
  {
    label: "Orders Completed",
    value: 5000,
    icon: <Truck className="w-12 h-12 text-orange-500" />,
  },
  {
    label: "Happy Reviews",
    value: 1200,
    icon: <Star className="w-12 h-12 text-yellow-400" />,
  },
  {
    label: "Daily Orders",
    value: 320,
    icon: <Clock className="w-12 h-12 text-green-400" />,
  },
  {
    label: "Food Items",
    value: 85,
    icon: <Coffee className="w-12 h-12 text-red-400" />,
  },
  {
    label: "Our Customers",
    value: 2500,
    icon: <Users className="w-12 h-12 text-blue-400" />,
  },
];

const StatsSection = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  // Count-up animation when section is in view
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("stats-section");
      if (!section) return;
      const top = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (top < windowHeight - 100) {
        statsData.forEach((stat, index) => {
          let start = 0;
          const end = stat.value;
          const duration = 2000;
          const increment = Math.ceil(end / (duration / 50));

          const counter = setInterval(() => {
            start += increment;
            if (start >= end) {
              start = end;
              clearInterval(counter);
            }
            setCounts((prev) => {
              const newCounts = [...prev];
              newCounts[index] = start;
              return newCounts;
            });
          }, 50);
        });
        window.removeEventListener("scroll", handleScroll);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="stats-section"
      className="py-24 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Our Achievements
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {statsData.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center border border-gray-200 dark:border-gray-700 hover:shadow-orange-500/40 transition-all duration-500"
            >
              <motion.div
                className="mb-4"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
              >
                {stat.icon}
              </motion.div>
              <div className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-400 mb-2">
                {counts[idx]}+
              </div>
              <div className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
