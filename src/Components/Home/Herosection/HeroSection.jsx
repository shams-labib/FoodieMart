import { FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      data-aos="fade-up"
      className="
        bg-gray-50 dark:bg-gray-800
        py-24 my-[60px] rounded-2xl
        transition-colors
      "
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6 max-w-xl"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            <span className="text-red-600">Fast, Fresh</span>
            <br />
            <span className="text-red-600">& Right</span>{" "}
            <span className="text-gray-900 dark:text-gray-100">
              To Your Door
            </span>
          </h1>

          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-md">
            Discover top-rated restaurants near you and get your favorite meals
            delivered hot & fast.
          </p>

          {/* SEARCH BAR */}
          <div className="flex w-full max-w-md items-center bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden border dark:border-gray-700">
            <div className="px-4 text-gray-400">
              <FaMapMarkerAlt />
            </div>

            <input
              type="text"
              className="
                w-full px-2 py-3 outline-none 
                bg-transparent text-gray-700 dark:text-gray-200
                placeholder-gray-400
              "
              placeholder="Enter your delivery location"
            />

            <button
              className="
                px-6 py-3 whitespace-nowrap
                bg-gradient-to-r from-amber-500 to-orange-600
                text-white font-semibold
                hover:from-amber-600 hover:to-orange-700
                transition-all duration-300
              "
            >
              Find Food
            </button>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <motion.img
            src="https://i.ibb.co.com/twt2tWcr/image.png"
            alt="Food delivery app"
            className="w-[420px] md:w-[500px] drop-shadow-2xl"
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
