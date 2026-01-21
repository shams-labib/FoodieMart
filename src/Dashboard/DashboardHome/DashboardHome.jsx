import { useContext, useState } from "react";
import { motion } from "framer-motion";
import {
  FaUtensils,
  FaPlusCircle,
  FaShoppingBag,
  FaUser,
} from "react-icons/fa";

import { Link } from "react-router";
import { AuthContext } from "../../Firebase and Login/Firebase content/Auth/AuthContext";

const INITIAL_STATS = [
  { title: "Total Menus", value: 12, icon: <FaUtensils size={26} /> },
  { title: "Active Menus", value: 9, icon: <FaShoppingBag size={26} /> },
  { title: "Pending Orders", value: 5, icon: <FaUser size={26} /> },
  { title: "New Today", value: 2, icon: <FaPlusCircle size={26} /> },
];

const DashboardHome = () => {
  const { user } = useContext(AuthContext);
  const [stats] = useState(INITIAL_STATS);

  return (
    <div className="p-6 md:p-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-base-200">
          Welcome back,{" "}
          <span className="text-primary">{user?.displayName || "User"}</span> 👋
        </h1>
        <p className="mt-2 text-gray-900 dark:text-base-200">
          Manage your menus, track activity, and grow your business.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card bg-base-100 shadow-xl"
          >
            <div className="card-body flex-row items-center gap-4">
              <div className="p-4 rounded-xl bg-primary/10 text-primary">
                {stat.icon}
              </div>
              <div>
                <p className="text-sm text-base-content/60">{stat.title}</p>
                <h2 className="text-2xl font-bold">{stat.value}</h2>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="btn btn-primary w-full py-6 text-lg flex items-center justify-center gap-2"
          >
            <FaPlusCircle /> Add New Menu
          </motion.button>
        </button>

        <Link to="/allreviews">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="btn btn-secondary w-full py-6 text-lg flex items-center justify-center gap-2"
          >
            <FaShoppingBag /> View Orders
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default DashboardHome;
