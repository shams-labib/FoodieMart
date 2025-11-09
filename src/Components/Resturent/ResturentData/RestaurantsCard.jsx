import React from "react";
import { IoMdStarOutline } from "react-icons/io";

const RestaurantsCard = ({ restaurant }) => {
  return (
    <div className="card bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 dark:bg-gray-700">
      <img
        src={restaurant.image}
        alt={restaurant.name}
        className="h-48 w-full object-cover"
      />
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          {restaurant.name}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {restaurant.location}
        </p>
        <div className="flex items-center gap-2 mt-2 text-yellow-500">
          <IoMdStarOutline size={16} fill="currentColor" />
          <span className="font-semibold">{restaurant.rating}</span>
        </div>
        <div className="mt-4">
          <button
            href={restaurant.url}
            className="btn btn-sm w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white border-none hover:from-amber-600 hover:to-orange-700 rounded-lg"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantsCard;
