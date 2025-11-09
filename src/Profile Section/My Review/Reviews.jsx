import React from "react";

const Reviews = ({ data }) => {
  const { foodImage, foodName, restaurantName, createdAt } = data;
  return (
    <div className="overflow-x-auto">
      <table className="table w-full bg-white shadow rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th>Food Image</th>
            <th>Food Name</th>
            <th>Restaurant Name</th>
            <th>Posted Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- Example row --> */}
          <tr className="hover:bg-gray-50">
            <td>
              <img
                src={foodImage}
                alt="Food"
                className="w-16 h-16 object-cover rounded"
              />
            </td>
            <td>{foodName}</td>
            <td>{restaurantName}</td>
            <td>{createdAt}</td>
            <td className="space-x-2">
              <button className="btn btn-sm btn-warning">Edit</button>
              <button className="btn btn-sm btn-error">Delete</button>
            </td>
          </tr>

          {/* <!-- Add more rows dynamically --> */}
        </tbody>
      </table>
    </div>
  );
};

export default Reviews;
