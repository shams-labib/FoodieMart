import { motion } from "framer-motion";
import { FaClock } from "react-icons/fa";

const staticOrders = [
  {
    id: 1,
    menuName: "Cheese Burger",
    price: 8.99,
    status: "pending",
    createdAt: "2025-01-02T10:30:00",
  },
  {
    id: 2,
    menuName: "Pepperoni Pizza",
    price: 12.5,
    status: "pending",
    createdAt: "2025-01-03T14:15:00",
  },
  {
    id: 3,
    menuName: "Chicken Wrap",
    price: 6.75,
    status: "pending",
    createdAt: "2025-01-04T18:45:00",
  },
];

const MyOrders = () => {
  return (
    <div className="min-h-screen px-4 sm:px-6 py-10 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-4xl font-bold mb-12"
      >
        My <span className="text-orange-500">Orders</span>
      </motion.h1>

      {/* EMPTY STATE */}
      {staticOrders.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 bg-white dark:bg-gray-800 rounded-xl shadow border border-gray-200 dark:border-gray-700">
          <FaClock className="text-5xl text-orange-400 mb-4" />
          <p className="text-lg text-gray-500 dark:text-gray-300">
            No orders found
          </p>
        </div>
      ) : (
        <>
          {/* 📱 MOBILE VIEW */}
          <div className="space-y-4 md:hidden">
            {staticOrders.map((order, index) => (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow border border-gray-200 dark:border-gray-700"
              >
                <div className="p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-lg">{order.menuName}</h3>
                    <span className="px-3 py-1 text-xs rounded-full bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300">
                      Pending
                    </span>
                  </div>

                  <p className="text-sm">
                    <strong>Price:</strong> ${order.price}
                  </p>

                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(order.createdAt).toLocaleString()}
                  </p>

                  {/* STATIC PAY BUTTON */}
                  <button
                    type="button"
                    className="w-full mt-2 py-2 rounded-lg text-white font-medium
                    bg-gradient-to-r from-amber-500 to-orange-600
                    hover:from-amber-600 hover:to-orange-700 transition"
                  >
                    Pay
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 🖥 DESKTOP VIEW */}
          <div className="hidden md:block overflow-x-auto rounded-xl shadow border border-gray-200 dark:border-gray-700">
            <table className="w-full bg-white dark:bg-gray-800 text-left">
              <thead className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
                <tr>
                  <th className="p-3">#</th>
                  <th className="p-3">Food Name</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Order Time</th>
                  <th className="p-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {staticOrders.map((order, index) => (
                  <motion.tr
                    key={order.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <td className="p-3">{index + 1}</td>
                    <td className="p-3">{order.menuName}</td>
                    <td className="p-3">${order.price}</td>
                    <td className="p-3">
                      <span className="px-3 py-1 text-xs rounded-full bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300">
                        Pending
                      </span>
                    </td>
                    <td className="p-3">
                      {new Date(order.createdAt).toLocaleString()}
                    </td>
                    <td className="p-3 text-center">
                      {/* STATIC PAY BUTTON */}
                      <button
                        type="button"
                        className="px-4 py-1.5 rounded-md text-white text-sm font-medium
                        bg-gradient-to-r from-amber-500 to-orange-600
                        hover:from-amber-600 hover:to-orange-700 transition"
                      >
                        Pay
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default MyOrders;
