// HomeCard.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useAxiosSecure from "../../../Hooks/AxiosSecure/AxiosSecure";
import ReviewCard from "../ReviewsCard/ReviewCard";
import { Link } from "react-router";
import { FaExclamationTriangle } from "react-icons/fa";
import { Star } from "lucide-react";
import Loader from "../../../Loader/Loader";

const HomeCard = () => {
  const axiosSecure = useAxiosSecure();
  const [reviewsdata, setReviewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axiosSecure.get("/review-products");
        setReviewsData(res.data.slice(10, 18)); // ✅ ONLY 8 DATA
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setError("Failed to load reviews. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [axiosSecure]);

  if (loading) {
    return (
      <div className="my-[40vh] flex justify-center">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <FaExclamationTriangle className="text-red-500 text-4xl mb-2" />
        <p className="text-red-500 font-semibold text-lg">{error}</p>
      </div>
    );
  }

  if (reviewsdata.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 dark:text-gray-300 text-lg font-medium">
          No reviews found yet!
        </p>
      </div>
    );
  }

  return (
    <section className="px-4 md:px-8 lg:px-16 py-20 bg-gray-50 dark:bg-gray-800">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto mb-14 relative"
      >
        {/* Floating Icon */}
        <motion.div
          className="absolute -top-8 left-1/2 -translate-x-1/2 text-yellow-400"
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Star size={28} />
        </motion.div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 dark:text-gray-100">
          Top Rated Reviews
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-base md:text-lg">
          Discover what food lovers are saying about the most delicious dishes
          and restaurants around you.
        </p>
      </motion.div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7">
        {reviewsdata.map((review, index) => (
          <motion.div
            key={review._id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.08,
              type: "spring",
              stiffness: 120,
            }}
          >
            <ReviewCard review={review} />
          </motion.div>
        ))}
      </div>

      {/* Show All Button */}
      <div className="text-center mt-16">
        <Link
          to="/allreveiws"
          className="btn px-8 bg-gradient-to-r from-amber-500 to-orange-600 
          text-white hover:from-amber-600 hover:to-orange-700 
          border-none rounded-xl font-semibold shadow-lg transition-all duration-300"
        >
          Show All Reviews
        </Link>
      </div>
    </section>
  );
};

export default HomeCard;
