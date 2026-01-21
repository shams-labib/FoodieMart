import { useContext, useState } from "react";
import { FaLocationDot, FaStar, FaXmark } from "react-icons/fa6";
import { AuthContext } from "../../Firebase and Login/Firebase content/Auth/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";

const View = ({ food }) => {
  const {
    foodName,
    foodImage,
    restaurantName,
    location,
    rating,
    reviewText,
    userEmail,
    userName,
    userPhoto,
    createdAt,
  } = food;

  const { user } = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 md:p-10">
        {/* IMAGE */}
        <div className="relative group">
          <img
            src={foodImage}
            alt={foodName}
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
          />

          <span className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full flex items-center gap-1 shadow">
            <FaStar /> {rating}
          </span>
        </div>

        {/* CONTENT */}
        <div className="mt-6 space-y-5">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {foodName}
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300">
            From: <span className="font-semibold">{restaurantName}</span>
          </p>

          <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <FaLocationDot className="text-red-600" />
            {location}
          </p>

          <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-xl border">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-1">
              <FaStar className="text-yellow-500" /> Customer Review
            </h3>
            <p className="text-gray-700 dark:text-gray-200">“{reviewText}”</p>
          </div>

          {/* REVIEWER */}
          <div className="flex items-center bg-gray-50 dark:bg-gray-800 p-4 rounded-xl gap-4">
            <img
              src={userPhoto}
              alt={userName}
              className="w-14 h-14 rounded-full border-2 border-orange-500 object-cover"
            />
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white">
                {userName}
              </h4>
              <p className="text-sm text-gray-500">{userEmail}</p>
              <p className="text-xs text-gray-400">
                Reviewed on: {new Date(createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* ORDER BUTTON */}
          <button
            onClick={() => setOpenModal(true)}
            className="w-full text-lg py-3 rounded-lg text-white bg-gradient-to-r from-amber-500 to-orange-600 hover:scale-[1.02] transition"
          >
            Order Now
          </button>
        </div>
      </div>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {openModal && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenModal(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur z-40"
            />

            {/* Modal */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center px-4"
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl w-full max-w-lg p-6 relative">
                <button
                  onClick={() => setOpenModal(false)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
                >
                  <FaXmark size={22} />
                </button>

                <h2 className="text-2xl font-bold mb-5 text-center">
                  Confirm Your Order
                </h2>

                {/* FORM */}
                <form className="space-y-4">
                  <input
                    type="text"
                    value={user?.displayName || ""}
                    readOnly
                    className="input input-bordered w-full"
                  />

                  <input
                    type="email"
                    value={user?.email || ""}
                    readOnly
                    className="input input-bordered w-full"
                  />

                  <input
                    type="text"
                    value={foodName}
                    readOnly
                    className="input input-bordered w-full"
                  />

                  <input
                    type="text"
                    value={restaurantName}
                    readOnly
                    className="input input-bordered w-full"
                  />

                  <input
                    type="text"
                    value={location}
                    readOnly
                    className="input input-bordered w-full"
                  />

                  <Link
                    type="submit"
                    className="w-full py-3 rounded-lg text-white bg-gradient-to-r from-amber-500 to-orange-600 hover:scale-[1.02] transition"
                  >
                    Confirm Order
                  </Link>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default View;
