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
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/my-reviews/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your review has been deleted.", "success");
              // remove the deleted review from UI
              setUserData(userData.filter((review) => review._id !== id));
            }
          })
          .catch((err) => console.log(err));
      }
    });
  };

  return (
    <div className="min-h-screen bg-base-200 p-6">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">My Reviews</h2>

        <div className="overflow-x-auto bg-white p-4 rounded-lg shadow">
          <table className="table w-full border-separate border-spacing-y-3">
            <thead className="bg-gray-100">
              <tr>
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
                    className="bg-gray-50 hover:bg-gray-100 rounded-lg shadow-sm"
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
                    <td className="py-3 text-center text-sm text-gray-500">
                      {new Date(review.createdAt).toLocaleDateString("en-GB")}
                    </td>
                    <td className="py-3 text-center space-x-2">
                      <Link to={"/update"} className="btn btn-sm btn-warning">
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(review._id)}
                        className="btn btn-sm btn-error"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-6 text-gray-500">
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
