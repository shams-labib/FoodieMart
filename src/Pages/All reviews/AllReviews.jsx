import React, { useEffect, useMemo, useState } from "react";
import useAxiosSecure from "../../Hooks/AxiosSecure/AxiosSecure";
import ReviewCard from "../../Components/Home/ReviewsCard/ReviewCard";
import { FaExclamationTriangle } from "react-icons/fa";
import Loader from "../../Loader/Loader";
import { Helmet } from "react-helmet-async";

const ITEMS_PER_PAGE = 6;

const AllReviews = () => {
  const axiosSecure = useAxiosSecure();

  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // search
  const [query, setQuery] = useState("");

  // filters
  const [category, setCategory] = useState("all");
  const [rating, setRating] = useState("all");

  // sorting
  const [sortBy, setSortBy] = useState("latest");

  // pagination
  const [currentPage, setCurrentPage] = useState(1);

  /* ================= FETCH DATA ================= */
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axiosSecure.get("/review-products");
        setAllData(res.data);
      } catch (err) {
        setError("Failed to load reviews. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, [axiosSecure]);

  /* ================= SEARCH + FILTER + SORT ================= */
  const filteredData = useMemo(() => {
    let data = [...allData];

    // 🔍 Search
    if (query.trim()) {
      data = data.filter((item) =>
        `${item.foodName} ${item.restaurant} ${item.location}`
          .toLowerCase()
          .includes(query.toLowerCase())
      );
    }

    // 🎯 Category
    if (category !== "all") {
      data = data.filter((item) => item.category === category);
    }

    // ⭐ Rating
    if (rating !== "all") {
      data = data.filter((item) => Number(item.rating) >= Number(rating));
    }

    // 🔃 Sorting
    if (sortBy === "rating") {
      data.sort((a, b) => b.rating - a.rating);
    }
    if (sortBy === "price") {
      data.sort((a, b) => a.price - b.price);
    }
    if (sortBy === "latest") {
      data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    return data;
  }, [allData, query, category, rating, sortBy]);

  /* ================= PAGINATION ================= */
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  /* ================= STATES ================= */
  if (loading) {
    return (
      <div className="my-[40vh]">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <FaExclamationTriangle className="text-red-500 text-4xl mb-2" />
        <p className="text-red-500 font-semibold text-lg">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Helmet>
        <title>All Reviews | FoodieMart</title>
      </Helmet>

      {/* PAGE TITLE */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800 dark:text-gray-100">
        Explore All Reviews
      </h1>

      {/* FILTER BAR */}
      <div className="mb-10 p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <input
            type="text"
            placeholder="Search food, restaurant or location..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="rounded-lg px-4 py-2.5 border border-gray-300 dark:border-gray-600
            bg-white dark:bg-gray-900
            text-gray-800 dark:text-gray-100
            placeholder-gray-400
            focus:ring-2 focus:ring-orange-500 focus:outline-none"
          />

          {/* Category */}
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setCurrentPage(1);
            }}
            className="rounded-lg px-4 py-2.5 border border-gray-300 dark:border-gray-600
            bg-white dark:bg-gray-900
            text-gray-800 dark:text-gray-100
            focus:ring-2 focus:ring-orange-500 focus:outline-none"
          >
            <option value="all">All Categories</option>
            <option value="Burger">Burger</option>
            <option value="Pizza">Pizza</option>
            <option value="Fast Food">Fast Food</option>
          </select>

          {/* Rating */}
          <select
            value={rating}
            onChange={(e) => {
              setRating(e.target.value);
              setCurrentPage(1);
            }}
            className="rounded-lg px-4 py-2.5 border border-gray-300 dark:border-gray-600
            bg-white dark:bg-gray-900
            text-gray-800 dark:text-gray-100
            focus:ring-2 focus:ring-orange-500 focus:outline-none"
          >
            <option value="all">All Ratings</option>
            <option value="4">4★ & above</option>
            <option value="3">3★ & above</option>
          </select>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-lg px-4 py-2.5 border border-gray-300 dark:border-gray-600
            bg-white dark:bg-gray-900
            text-gray-800 dark:text-gray-100
            focus:ring-2 focus:ring-orange-500 focus:outline-none"
          >
            <option value="latest">Latest</option>
            <option value="rating">Top Rated</option>
            <option value="price">Price (Low → High)</option>
          </select>
        </div>
      </div>

      {/* REVIEW GRID */}
      {paginatedData.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-300 mt-20">
          No reviews found!
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedData.map((review) => (
            <div
              key={review._id}
              className="transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      )}

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-12 gap-2 flex-wrap">
          {[...Array(totalPages).keys()].map((num) => (
            <button
              key={num}
              onClick={() => setCurrentPage(num + 1)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200
                ${
                  currentPage === num + 1
                    ? "bg-orange-500 text-white shadow-md scale-105"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-orange-100 dark:hover:bg-gray-600"
                }`}
            >
              {num + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllReviews;
