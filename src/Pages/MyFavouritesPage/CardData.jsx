import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/AxiosSecure/AxiosSecure";
import Swal from "sweetalert2";
import MyFavorites from "./MyFavourites";

const CardData = () => {
  const axiosSecure = useAxiosSecure();
  const [data, setData] = useState([]);

  useEffect(() => {
    axiosSecure.get("/my-favourite").then((res) => {
      setData(res.data);
    });
  }, [axiosSecure]);

  const handleDelete = (id) => {
    axiosSecure.delete(`/my-favourite/${id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        Swal.fire({
          title: "Deleted!",
          text: "Item removed from your favorites.",
          icon: "success",
        });
        const remaining = data.filter((item) => item._id !== id);
        setData(remaining);
      }
    });
  };

  return (
    <div className="min-h-screen bg-base-200 py-10 px-6 md:my-[60px] md:rounded-xl">
      <h1 className="text-3xl font-bold text-center mb-10 text-primary">
        🍴 My Favorite Reviews
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item) => (
          <MyFavorites key={item._id} item={item} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default CardData;
