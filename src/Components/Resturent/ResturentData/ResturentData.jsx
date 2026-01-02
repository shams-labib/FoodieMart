// ResturentData.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaUtensils, FaPizzaSlice, FaHamburger } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/AxiosSecure/AxiosSecure";
import Loader from "../../../Loader/Loader";
import RestaurantsCard from "./RestaurantsCard";

const ResturentData = () => {
  const axiosSecure = useAxiosSecure();
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const res = await axiosSecure.get("/restaurants-data");
        setRestaurants(res.data);
      } catch (err) {
        console.error("Error fetching restaurants:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, [axiosSecure]);

  if (loading) {
    return <Loader />;
  }

  return (
    <section
      data-aos="fade-up"
      className="py-20 bg-gray-50 dark:bg-gray-800 md:rounded-xl my-[50px]"
    >
      {/* Container */}
      <div className="w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          {/* Animated Icons Above Title */}
          <div className="flex justify-center gap-6 mb-4 text-yellow-500 text-3xl">
            <motion.div
              animate={{ rotate: [0, 10, -10, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <FaUtensils />
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <FaPizzaSlice />
            </motion.div>
            <motion.div
              animate={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <FaHamburger />
            </motion.div>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-gray-900 dark:text-gray-100">
            Welcome to FoodieMart
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed">
            Discover the finest and most flavorful restaurants in your city!
            From sizzling burgers to authentic international dishes, FoodieMart
            brings you top-rated eateries with real-time updates and seamless
            ordering. Let your taste buds explore the ultimate foodie adventure.
          </p>
        </motion.div>

        {/* Restaurant Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {restaurants.map((restaurant, index) => (
            <motion.div
              key={restaurant._id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                type: "spring",
                bounce: 0.3,
                duration: 0.8,
              }}
              className="hover:scale-105 transition-transform duration-300"
            >
              <RestaurantsCard restaurant={restaurant} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResturentData;
