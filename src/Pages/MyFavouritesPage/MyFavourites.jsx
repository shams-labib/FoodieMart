// MyFavorites.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import { FaStar, FaTrashAlt, FaMapMarkerAlt, FaEye } from "react-icons/fa";

const MyFavorites = ({ item, handleDelete, handleViewDetails }) => {
  const {
    _id,
    foodName,
    foodImage,
    restaurantName,
    location,
    rating,
    reviewText,
  } = item;

  return (
    <div
      data-aos="fade-up"
      className="card bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
    >
      <Helmet>
        <title>My Favorite || FoodieMart</title>
      </Helmet>

      {/* Image */}
      <figure className="relative">
        <img
          src={foodImage}
          alt={foodName}
          className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {/* Rating badge */}
        <div className="absolute top-2 right-2 bg-yellow-400 text-black font-semibold px-2 py-1 rounded-lg flex items-center gap-1 shadow-md">
          <FaStar /> {rating}
        </div>
      </figure>

      {/* Card body */}
      <div className="card-body p-4 flex flex-col justify-between h-full">
        <div>
          <h2 className="text-lg font-bold mb-1 text-gray-900 dark:text-gray-100">
            {foodName}
          </h2>

          <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
            <span className="font-semibold">🍽️ {restaurantName}</span>
          </p>

          <p className="flex items-center text-sm text-gray-500 dark:text-gray-400 gap-1">
            <FaMapMarkerAlt className="text-red-500" /> {location}
          </p>

          {reviewText && (
            <p className="text-sm italic mt-2 text-gray-700 dark:text-gray-200">
              "{reviewText}"
            </p>
          )}
        </div>

        {/* Actions */}
        <div className="card-actions justify-between mt-4 flex flex-wrap gap-2">
          <button
            onClick={() => handleViewDetails(_id)}
            className="btn btn-sm bg-blue-500 hover:bg-blue-600 text-white flex items-center gap-2 transition-colors"
          >
            <FaEye /> View Details
          </button>

          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-sm bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white flex items-center gap-2 transition-all"
          >
            <FaTrashAlt /> Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyFavorites;
