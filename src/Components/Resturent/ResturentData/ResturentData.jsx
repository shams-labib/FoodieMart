import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/AxiosSecure/AxiosSecure";
import Loader from "../../../Loader/Loader";
import RestaurantsCard from "./RestaurantsCard";

const ResturentData = () => {
  const axiosSecure = useAxiosSecure();
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const res = await axiosSecure.get("/restaurants-data");
        setRestaurants(res.data);
      } catch (err) {
        console.error("Error fetching restaurants:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, [axiosSecure]);

  if (loading) {
    return <Loader />;
  }

  return (
    <section
      data-aos="fade-up"
      className="py-16 px-6 bg-gradient-to-b from-yellow-100 to-orange-100 dark:from-gray-900 dark:to-gray-800 md:rounded-xl my-[50px]"
    >
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900 dark:text-gray-100">
        Welcome to FoodieMart 🍔
      </h1>
      <p className="max-w-4xl mx-auto text-center text-gray-700 dark:text-gray-300 mb-12">
        FoodieMart is your ultimate destination for discovering the most
        delicious and top-rated restaurants in your city. We bring together a
        curated collection of eateries offering a wide variety of cuisines, from
        mouth-watering burgers to authentic international dishes. Our goal is to
        make it easy for food lovers to explore, compare, and enjoy the best
        dining experiences. Whether you’re craving a quick snack or a luxurious
        meal, FoodieMart ensures that every bite is memorable, and every
        restaurant meets the highest standards of taste, quality, and service.
        Enjoy your foodie journey!
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {restaurants.map((restaurant) => (
          <RestaurantsCard key={restaurant._id} restaurant={restaurant} />
        ))}
      </div>
    </section>
  );
};

export default ResturentData;
