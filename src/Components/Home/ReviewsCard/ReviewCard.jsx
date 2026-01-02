/* eslint-disable no-unused-vars */
// ReviewCard.jsx (Improved Design)
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Star, Heart, Flame } from "lucide-react";
import { useNavigate } from "react-router";
import useAxiosSecure from "../../../Hooks/AxiosSecure/AxiosSecure";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Firebase and Login/Firebase content/Auth/AuthContext";

const ReviewCard = ({ review }) => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const ratingValue = Number(review.rating) || 0;

  const handleViewDetails = () => {
    if (!user) {
      return navigate("/login", {
        state: { from: `/viewDetails/${review._id}` },
      });
    }
    navigate(`/viewDetails/${review._id}`);
  };

  const handleFavorite = () => {
    if (!user) {
      return Swal.fire({
        icon: "info",
        title: "Login required",
        text: "Please login to add favorites",
      });
    }

    axiosSecure.post("/my-favourite", {
      ...review,
      userEmail: user.email,
      createdAt: new Date(),
    });

    Swal.fire({
      icon: "success",
      title: "Added to Favorites!",
      timer: 1200,
      showConfirmButton: false,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.04 }}
      transition={{ type: "spring", stiffness: 180 }}
      className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg 
      rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700 
      overflow-hidden hover:shadow-2xl transition-all duration-300"
    >
      {/* Image */}
      <div className="relative">
        <motion.img
          src={review.foodImage}
          alt={review.foodName}
          className="w-full h-52 object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Rating */}
        <div className="absolute top-3 right-3 bg-white dark:bg-gray-900 px-3 py-1 rounded-full flex items-center gap-1 shadow">
          <Star className="text-yellow-400" size={16} />
          <span className="text-sm font-semibold dark:text-white">
            {ratingValue.toFixed(1)}
          </span>
        </div>

        {/* Favorite */}
        <motion.button
          onClick={handleFavorite}
          whileHover={{ scale: 1.25, rotate: 12 }}
          className="absolute top-3 left-3 bg-white/80 dark:bg-gray-900/80 
          p-2 rounded-full text-red-500 shadow"
        >
          <Heart size={18} />
        </motion.button>

        {/* Trending Badge */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-3 left-3 bg-orange-500 text-white 
          px-3 py-1 rounded-full flex items-center gap-1 text-xs shadow"
        >
          <Flame size={14} /> Trending
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col h-[240px]">
        <h3 className="text-lg font-bold dark:text-white truncate">
          {review.foodName}
        </h3>

        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 truncate">
          {review.restaurantName} • {review.location}
        </p>

        {/* User */}
        <div className="flex items-center gap-2 mb-3">
          <img
            src={review.userPhoto}
            alt={review.userName}
            className="w-9 h-9 rounded-full border border-gray-200 dark:border-gray-600"
          />
          <span className="text-sm font-medium dark:text-gray-200">
            {review.userName}
          </span>
        </div>

        <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2 mb-4">
          {review.reviewText}
        </p>

        <button
          onClick={handleViewDetails}
          className="mt-auto btn bg-gradient-to-r  from-amber-600 to-orange-600 
          text-white hover:from-amber-500 hover:to-orange-700 
          border-none rounded-xl font-semibold shadow-lg transition-all duration-300"
        >
          View Details
        </button>
      </div>
    </motion.div>
  );
};

export default ReviewCard;
