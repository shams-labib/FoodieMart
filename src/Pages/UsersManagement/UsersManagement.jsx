import { useState } from "react";
import { User } from "lucide-react";
import { motion } from "framer-motion";

/* ---------- STATIC USERS DATA ---------- */
const staticUsers = [
  {
    _id: "1",
    name: "Sakib Ahmed",
    role: "admin",
    email: "sakib@gmail.com",
    phone: "01700000001",
    createdAt: "2024-10-12",
    totalOrders: 15,
    photoURL: "",
  },
  {
    _id: "2",
    name: "Rahim Uddin",
    role: "user",
    email: "rahim@gmail.com",
    phone: "01700000002",
    createdAt: "2024-11-01",
    totalOrders: 6,
    photoURL: "",
  },
  {
    _id: "3",
    name: "Karim Khan",
    role: "food Seller",
    email: "karim@gmail.com",
    phone: "",
    createdAt: "2024-12-05",
    totalOrders: 22,
    photoURL: "",
  },
];

const UsersManagement = () => {
  const [users, setUsers] = useState(staticUsers);

  /* ---------- STATIC ROLE CHANGE (UI ONLY) ---------- */
  const handleRoleChange = (id, newRole) => {
    setUsers((prev) =>
      prev.map((user) => (user._id === id ? { ...user, role: newRole } : user))
    );
  };

  return (
    <div className="p-4 sm:p-6 min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-4xl font-bold mb-10"
      >
        User <span className="text-orange-500">Management</span>
      </motion.h1>

      {/* TABLE */}
      <div className="overflow-x-auto rounded-xl shadow border border-gray-200 dark:border-gray-700">
        <table className="min-w-full bg-white dark:bg-gray-800">
          <thead className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
            <tr>
              <th className="px-3 py-2 text-left text-sm">#</th>
              <th className="px-3 py-2 text-left text-sm">Name</th>
              <th className="px-3 py-2 text-left text-sm">Role</th>
              <th className="hidden md:table-cell px-3 py-2 text-sm">Email</th>
              <th className="hidden lg:table-cell px-3 py-2 text-sm">Phone</th>
              <th className="hidden lg:table-cell px-3 py-2 text-sm">Joined</th>
              <th className="hidden xl:table-cell px-3 py-2 text-sm">Orders</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr
                key={user._id}
                className="border-t border-gray-200 dark:border-gray-700
                hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >
                <td className="px-3 py-2">{index + 1}</td>

                {/* NAME */}
                <td className="px-3 py-2">
                  <div className="flex items-center gap-2 max-w-48">
                    {user.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt={user.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    ) : (
                      <User className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    )}
                    <span className="truncate font-medium">{user.name}</span>
                  </div>
                </td>

                {/* ROLE */}
                <td className="px-3 py-2">
                  <select
                    value={user.role}
                    onChange={(e) => handleRoleChange(user._id, e.target.value)}
                    className="
                      w-full max-w-[150px]
                      px-2 py-1 text-sm rounded-md
                      bg-white dark:bg-gray-700
                      text-gray-900 dark:text-gray-100
                      border border-gray-300 dark:border-gray-600
                      focus:outline-none focus:ring-2 focus:ring-orange-500
                    "
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                    <option value="food Seller">Food Seller</option>
                  </select>
                </td>

                {/* EMAIL */}
                <td className="hidden md:table-cell px-3 py-2 truncate max-w-xs">
                  {user.email}
                </td>

                {/* PHONE */}
                <td className="hidden lg:table-cell px-3 py-2">
                  {user.phone || "-"}
                </td>

                {/* JOINED */}
                <td className="hidden lg:table-cell px-3 py-2">
                  {new Date(user.createdAt).toLocaleDateString()}
                </td>

                {/* ORDERS */}
                <td className="hidden xl:table-cell px-3 py-2">
                  {user.totalOrders}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersManagement;
