import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const EditReviewPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Review data path diye পাঠানো হয়েছে state থেকে
  const reviewData = location.state?.review;

  const [foodName, setFoodName] = useState("");
  const [foodImage, setFoodImage] = useState("");
  const [restaurantName, setRestaurantName] = useState("");
  const [locationText, setLocationText] = useState("");
  const [rating, setRating] = useState("");
  const [reviewText, setReviewText] = useState("");

  useEffect(() => {
    if (reviewData) {
      setFoodName(reviewData.foodName || "");
      setFoodImage(reviewData.foodImage || "");
      setRestaurantName(reviewData.restaurantName || "");
      setLocationText(reviewData.location || "");
      setRating(reviewData.rating || "");
      setReviewText(reviewData.reviewText || "");
    }
  }, [reviewData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Axios PUT/PATCH request দিয়ে update করতে হবে
    console.log({
      foodName,
      foodImage,
      restaurantName,
      locationText,
      rating,
      reviewText,
    });
    alert("Form submitted! (Update API integration pending)");
    navigate("/myReview"); // submit করলে My Reviews page এ ফেরত যাবে
  };

  return (
    <div className="min-h-screen bg-base-200 p-6 flex justify-center items-center">
      <div className="card w-full max-w-2xl shadow-xl bg-base-100 p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Edit Review</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Food Name */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Food Name</span>
            </label>
            <input
              type="text"
              value={foodName}
              onChange={(e) => setFoodName(e.target.value)}
              placeholder="Enter food name"
              className="input w-full outline-none"
            />
          </div>

          {/* Food Image */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Food Image URL</span>
            </label>
            <input
              type="text"
              value={foodImage}
              onChange={(e) => setFoodImage(e.target.value)}
              placeholder="Enter image URL"
              className="input w-full outline-none"
            />
          </div>

          {/* Restaurant Name */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Restaurant Name</span>
            </label>
            <input
              type="text"
              value={restaurantName}
              onChange={(e) => setRestaurantName(e.target.value)}
              placeholder="Enter restaurant name"
              className="input w-full outline-none"
            />
          </div>

          {/* Location */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Location</span>
            </label>
            <input
              type="text"
              value={locationText}
              onChange={(e) => setLocationText(e.target.value)}
              placeholder="Enter location"
              className="input w-full outline-none"
            />
          </div>

          {/* Star Rating */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Star Rating</span>
            </label>
            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="select select-bordered w-full max-w-xs outline-none"
            >
              <option value="">Select Rating</option>
              <option value="1">1 ⭐</option>
              <option value="2">2 ⭐⭐</option>
              <option value="3">3 ⭐⭐⭐</option>
              <option value="4">4 ⭐⭐⭐⭐</option>
              <option value="5">5 ⭐⭐⭐⭐⭐</option>
            </select>
          </div>

          {/* Review Text */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Review Text</span>
            </label>
            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              className="textarea textarea-bordered w-full h-32 outline-none"
              placeholder="Write your review here..."
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <button type="submit" className="btn btn-primary w-full">
              Update Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditReviewPage;
