// RestaurantsCard.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaMotorcycle, FaFire } from "react-icons/fa";
import { LucideCoffee } from "lucide-react";

const RestaurantsCard = ({ restaurant }) => {
  const { name, cuisine, image, rating, deliveryTime } = restaurant;

  return (
    <motion.div
      className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", bounce: 0.3, duration: 0.8 }}
    >
      {/* Restaurant Image */}
      <div className="relative w-full h-56 overflow-hidden rounded-t-2xl">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex space-x-2">
          <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow">
            <FaMotorcycle className="animate-bounce" /> Fast Delivery
          </span>
          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow">
            <FaFire className="animate-pulse" /> Top Rated
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title + Icon */}
        <motion.div
          className="flex items-center justify-between mb-2"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            {name}
          </h3>
          <LucideCoffee className="w-6 h-6 text-yellow-500 animate-spin" />
        </motion.div>

        {/* Cuisine */}
        <p className="text-gray-600 dark:text-gray-300 mb-3">{cuisine}</p>

        {/* Rating + Delivery Time */}
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-400" />
            <span>{rating.toFixed(1)}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaMotorcycle className="text-green-500" />
            <span>{deliveryTime} mins</span>
          </div>
        </div>

        {/* Tagline */}
        <p className="mt-3 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          Discover mouth-watering flavors and unforgettable experiences at{" "}
          {name} – where taste meets speed!
        </p>
      </div>
    </motion.div>
  );
};

export default RestaurantsCard;
