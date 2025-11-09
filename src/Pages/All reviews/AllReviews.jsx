import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/AxiosSecure/AxiosSecure";
import ReviewCard from "../../Components/Home/ReviewsCard/ReviewCard";
import { FaSpinner, FaExclamationTriangle } from "react-icons/fa";
import Loader from "../../Loader/Loader";

const AllReviews = () => {
  const axiosSecure = useAxiosSecure();
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axiosSecure.get("/review-products");
        setAllData(res.data);
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

  if (allData.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 dark:text-gray-300 text-lg font-medium">
          No reviews found yet !
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-10">
        All Reviews Section
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allData.map((review) => (
          <div
            key={review._id}
            className="transition-transform hover:-translate-y-2 hover:shadow-lg duration-300"
          >
            <ReviewCard review={review} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
