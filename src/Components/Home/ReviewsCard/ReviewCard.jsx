import React from "react";
import { IoMdStarOutline } from "react-icons/io";
import { Link } from "react-router";

const ReviewCard = ({ review }) => {
  //   console.log(review);
  return (
    <div className="card bg-base-100 shadow-md rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 dark:bg-gray-900 px-7 md:px-0">
      <figure>
        <img
          src={review.foodImage}
          alt={review.foodName}
          className="h-52 w-full object-cover"
        />
      </figure>
      <div className="card-body p-5">
        <h2 className="card-title text-lg font-semibold text-gray-800 dark:text-gray-100">
          {review.foodName}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          <span className="font-medium">{review.restaurantName}</span> —{" "}
          {review.location}
        </p>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-2">
            <img
              src={review.userPhoto}
              alt={review.userName}
              className="w-8 h-8 rounded-full border"
            />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
              {review.userName}
            </span>
          </div>
          <div className="flex items-center text-yellow-500">
            <IoMdStarOutline />

            <span className="ml-1 text-sm font-semibold">{review.rating}</span>
          </div>
        </div>
        <div className="card-actions justify-end mt-4">
          <Link
            to={`/reviews/${review._id}`}
            className="btn btn-sm bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:from-amber-600 hover:to-orange-700 border-none rounded-lg"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
