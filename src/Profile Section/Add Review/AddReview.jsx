import React, { useContext } from "react";
import { AuthContext } from "../../Firebase and Login/Firebase content/Auth/AuthContext";
import useAxiosSecure from "../../Hooks/AxiosSecure/AxiosSecure";
import Swal from "sweetalert2";

const AddReview = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const handleForm = (e) => {
    e.preventDefault();

    const foodName = e.target.foodname.value;
    const foodImage = e.target.foodimage.value;
    const restaurantName = e.target.restaurantName.value;
    const location = e.target.location.value;
    const rating = parseFloat(e.target.rating.value);
    const reviewText = e.target.textarea.value;
    const userEmail = user?.email || "anonymous@example.com";
    const userName = user?.displayName || "Anonymous";
    const userPhoto = user?.photoURL || "";
    const createdAt = new Date();

    const newData = {
      foodName,
      foodImage,
      restaurantName,
      location,
      rating,
      reviewText,
      userEmail,
      userName,
      userPhoto,
      createdAt,
    };

    console.log(newData);

    axiosSecure
      .post("/review-products", newData)
      .then(() => {
        Swal.fire({
          title: "Good job!",
          text: "Your reviews has been added to our website bro!",
          icon: "success",
        });
        e.target.reset();
      })
      .catch((err) => {
        console.error("Error submitting review:", err);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-6">
      <div className="card w-full max-w-2xl shadow-xl bg-base-100">
        <div className="card-body">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Add Food Review
          </h2>

          <form onSubmit={handleForm} className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text font-semibold">Food Name</span>
              </label>
              <input
                type="text"
                name="foodname"
                placeholder="Enter food name"
                className="input w-full outline-none"
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text font-semibold">Food Image URL</span>
              </label>
              <input
                type="text"
                name="foodimage"
                placeholder="Enter image URL"
                className="input w-full outline-none"
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text font-semibold">
                  Restaurant Name
                </span>
              </label>
              <input
                type="text"
                name="restaurantName"
                placeholder="Enter restaurant name"
                className="input w-full outline-none"
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text font-semibold">Location</span>
              </label>
              <input
                type="text"
                name="location"
                placeholder="Enter location"
                className="input w-full outline-none"
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text font-semibold">Star Rating</span>
              </label>
              <input
                type="number"
                step="0.1"
                min="0"
                max="5"
                name="rating"
                placeholder="Enter rating (0-5)"
                className="input w-full outline-none"
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text font-semibold">Review Text</span>
              </label>
              <textarea
                name="textarea"
                placeholder="Write your review here..."
                className="textarea textarea-bordered w-full h-32 outline-none"
                required
              />
            </div>

            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="btn btn-primary w-full bg-gradient-to-r from-amber-500 to-orange-600  hover:from-amber-600 hover:to-orange-700 border-none"
              >
                Submit Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
