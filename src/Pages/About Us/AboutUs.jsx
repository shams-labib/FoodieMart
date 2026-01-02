// AboutUsAnimated.jsx
import React from "react";
import { FaRocket, FaStar, FaTools, FaFire, FaDatabase } from "react-icons/fa";
import { LucideTruck, LucideCoffee } from "lucide-react";
import { motion } from "framer-motion";

const cardVariants = {
  offscreen: { y: 40, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.25, duration: 0.8 },
  },
};

const iconVariants = {
  animate: {
    y: [0, -6, 0],
    transition: { repeat: Infinity, duration: 2.5 },
  },
};

const AboutUs = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            About FoodieMart
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            A modern food delivery platform focused on real-time data, smooth
            experience, and user-friendly design.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.div
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
          >
            <motion.div
              variants={iconVariants}
              animate="animate"
              className="text-yellow-500 text-3xl mb-4 flex justify-center"
            >
              <FaRocket />
            </motion.div>
            <h3 className="text-xl font-semibold mb-2 text-center text-gray-800 dark:text-gray-100">
              About This Project
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
              FoodieMart lets users discover restaurants, explore dishes, and
              order food with real-time updates.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
          >
            <motion.div
              variants={iconVariants}
              animate="animate"
              className="text-green-500 text-3xl mb-4 flex justify-center"
            >
              <FaStar />
            </motion.div>
            <h3 className="text-xl font-semibold mb-2 text-center text-gray-800 dark:text-gray-100">
              Key Features
            </h3>
            <ul className="text-gray-600 dark:text-gray-300 text-sm list-disc list-inside space-y-1">
              <li>
                Dynamic data from MongoDB{" "}
                <FaDatabase className="inline text-gray-400 ml-1" />
              </li>
              <li>Full CRUD system</li>
              <li>Firebase Authentication</li>
              <li>Responsive UI & Theme support</li>
              <li>
                Swiper & animations{" "}
                <FaFire className="inline text-orange-400 ml-1 animate-pulse" />
              </li>
            </ul>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
          >
            <motion.div
              variants={iconVariants}
              animate="animate"
              className="text-blue-500 text-3xl mb-4 flex justify-center"
            >
              <FaTools />
            </motion.div>
            <h3 className="text-xl font-semibold mb-2 text-center text-gray-800 dark:text-gray-100">
              Tech Stack
            </h3>
            <ul className="text-gray-600 dark:text-gray-300 text-sm list-disc list-inside space-y-1">
              <li>
                React (Vite){" "}
                <LucideCoffee className="inline text-yellow-400 ml-1" />
              </li>
              <li>TailwindCSS & DaisyUI</li>
              <li>Framer Motion</li>
              <li>React Icons & Lucide</li>
              <li>
                Firebase Auth{" "}
                <LucideTruck className="inline text-green-500 ml-1" />
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
