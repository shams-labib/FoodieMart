import React from "react";
import { Helmet } from "react-helmet-async";
import { FaStar, FaTrashAlt, FaMapMarkerAlt } from "react-icons/fa";

const MyFavorites = ({ item, handleDelete }) => {
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
      className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300"
    >
      <div>
        <Helmet>
          <title>My Favorite || FoodieMart</title>
        </Helmet>
      </div>
      <figure>
        <img
          src={foodImage}
          alt={foodName}
          className="h-48 w-full object-cover"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title text-lg font-semibold">
          {foodName}
          <div className="badge badge-secondary">{rating}★</div>
        </h2>

        <p className="text-sm text-gray-600 dark:text-gray-300">
          <span className="font-semibold">🍽️ {restaurantName}</span>
        </p>

        <p className="flex items-center text-sm text-gray-500 dark:text-gray-400 gap-1">
          <FaMapMarkerAlt className="text-error" /> {location}
        </p>

        {reviewText && <p className="text-sm italic mt-2">"{reviewText}"</p>}

        <div className="card-actions justify-end mt-4">
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-error btn-sm text-white flex items-center gap-2"
          >
            <FaTrashAlt /> Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyFavorites;
