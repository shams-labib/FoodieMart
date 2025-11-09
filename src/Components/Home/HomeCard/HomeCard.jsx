import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/AxiosSecure/AxiosSecure";
import ReviewCard from "../ReviewsCard/ReviewCard";
import { Link } from "react-router";
import { FaExclamationTriangle } from "react-icons/fa";
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
        setReviewsData(res.data);
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setError("Failed to load reviews. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [axiosSecure]);
  const sliceData = reviewsdata.slice(0, 6);

  if (loading) {
    return <Loader></Loader>;
  }
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <FaExclamationTriangle className="text-red-500 text-4xl mb-2" />
        <p className="text-red-500 font-semibold text-lg">{error}</p>
      </div>
    );
  }

  if (sliceData.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 dark:text-gray-300 text-lg font-medium">
          No reviews found yet !
        </p>
      </div>
    );
  }

  return (
    <div>
      {" "}
      <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100  my-[40px]">
        Top Rated Reviews
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {sliceData.map((review) => (
          <ReviewCard key={review._id} review={review}></ReviewCard>
        ))}
      </div>
      <div className="text-center my-[40px]">
        <Link
          to="/allreveiws"
          className="btn bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:from-amber-600 hover:to-orange-700 border-none rounded-lg"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default HomeCard;
