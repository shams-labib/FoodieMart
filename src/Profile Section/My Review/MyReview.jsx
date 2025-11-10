import React, { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/AxiosSecure/AxiosSecure";
import { AuthContext } from "../../Firebase and Login/Firebase content/Auth/AuthContext";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyReviewPage = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`/my-reviews?email=${user.email}`)
        .then((res) => {
          setUserData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [axiosSecure, user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure you want to delete this review?",
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
      background: "#1e293b", // dark background for alert
      color: "#f8fafc", // light text
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/my-reviews/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your review has been deleted.",
                icon: "success",
                background: "#1e293b",
                color: "#f8fafc",
              });
              setUserData(userData.filter((review) => review._id !== id));
            }
          })
          .catch((err) => console.log(err));
      }
    });
  };

  return (
    <div
      data-aos="fade-up"
      className="min-h-screen bg-base-200 dark:bg-gray-950 p-6 text-gray-900 dark:text-gray-100 transition-colors duration-300 my-[50px] rounded-xl"
    >
      <div>
        <title>My Review || FoodieMart</title>
      </div>
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">My Reviews</h2>

        <div className="overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-800">
          <table className="table w-full border-separate border-spacing-y-3">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr className="text-gray-800 dark:text-gray-100">
                <th className="py-3">Food Image</th>
                <th className="py-3">Food Name</th>
                <th className="py-3">Restaurant Name</th>
                <th className="py-3">Posted Date</th>
                <th className="py-3">Actions</th>
              </tr>
            </thead>

            <tbody>
              {userData.length > 0 ? (
                userData.map((review) => (
                  <tr
                    key={review._id}
                    className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg shadow-sm transition-colors"
                  >
                    <td className="py-3">
                      <img
                        src={review.foodImage}
                        alt={review.foodName}
                        className="w-16 h-16 object-cover rounded-md mx-auto"
                      />
                    </td>
                    <td className="py-3 text-center font-medium">
                      {review.foodName}
                    </td>
                    <td className="py-3 text-center">
                      {review.restaurantName}
                    </td>
                    <td className="py-3 text-center text-sm text-gray-500 dark:text-gray-400">
                      {new Date(review.createdAt).toLocaleDateString("en-GB")}
                    </td>
                    <td className="py-3 text-center space-x-2">
                      <Link
                        to={`/update/${review._id}`}
                        className="btn btn-sm bg-yellow-500 hover:bg-yellow-600 border-none text-white"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(review._id)}
                        className="btn btn-sm bg-red-600 hover:bg-red-700 border-none text-white"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center py-6 text-gray-500 dark:text-gray-400"
                  >
                    No reviews found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyReviewPage;
