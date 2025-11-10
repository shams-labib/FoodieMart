import React, { useContext } from "react";
import { IoMdStarOutline } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router";
import useAxiosSecure from "../../../Hooks/AxiosSecure/AxiosSecure";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Firebase and Login/Firebase content/Auth/AuthContext";

const ReviewCard = ({ review }) => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleFavorite = (review) => {
    if (!user) {
      Swal.fire({
        icon: "info",
        title: "Login required",
        text: "Please login to add favorites.",
      });
      return navigate("/login", {
        state: { from: `/viewDetails/${review._id}` },
      });
    }

    const newData = {
      foodName: review.foodName,
      foodImage: review.foodImage,
      restaurantName: review.restaurantName,
      location: review.location,
      rating: review.rating,
      reviewText: review.reviewText,
      userEmail: review.userEmail,
      userName: review.userName,
      userPhoto: review.userPhoto,
      createdAt: new Date(),
    };

    axiosSecure
      .post("/my-favourite", newData)
      .then(() => {
        Swal.fire({
          title: "Congratulations!",
          text: "Your favorites data has been added to the My Favorites page!",
          icon: "success",
        });
      })
      .catch((err) => {
        console.error("Error submitting review:", err);
      });
  };

  const handleViewDetails = () => {
    if (!user) {
      // Redirect to login and save the intended page in state
      return navigate("/login", {
        state: { from: `/viewDetails/${review._id}` },
      });
    }

    // Logged in → navigate to details page
    navigate(`/viewDetails/${review._id}`);
  };

  return (
    <div
      data-aos="fade-up"
      className="card bg-base-100 shadow-md rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 dark:bg-gray-900 px-7 md:px-0"
    >
      <figure className="relative">
        <img
          src={review.foodImage}
          alt={review.foodName}
          className="h-52 w-full object-cover"
        />

        <button
          onClick={() => handleFavorite(review)}
          className="absolute cursor-pointer top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow hover:scale-110 transition-transform"
        >
          <FaHeart className="text-red-600 text-lg" />
        </button>
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
              src={review?.userPhoto || ""}
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
          <button
            onClick={handleViewDetails}
            className="btn btn-sm bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:from-amber-600 hover:to-orange-700 border-none rounded-lg"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
