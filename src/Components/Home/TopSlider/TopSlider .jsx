import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Firebase and Login/Firebase content/Auth/AuthContext";
import { motion, AnimatePresence } from "framer-motion";

const sliderImages = [
  {
    img: "https://i.ibb.co.com/20hH40Y0/360-F-225964798-y-Bf4t-I79fm-IGWws-Zpo1-K5lhs-EQCXy2-Pn.jpg",
    title: "Delicious Food",
    subtitle: "Get your favorite meals delivered fast",
  },
  {
    img: "https://i.ibb.co.com/JRC55p3C/ai-generated-beautuful-fast-food-background-with-copy-space-free-photo.jpg",
    title: "Fast Delivery",
    subtitle: "We reach your door in minutes",
  },
  {
    img: "https://i.ibb.co.com/21V8y5XT/a-fresh-fruits-or-vegetables-with-water-droplets-creating-a-splash-advertising-foodgraphy-photo.jpg",
    title: "Fresh & Hot",
    subtitle: "Your order comes with love ❤️",
  },
];

const TopSlider = () => {
  const { user } = useContext(AuthContext);
  const [selectedSlide, setSelectedSlide] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOrderNow = (slide) => {
    setSelectedSlide(slide);
    setIsOpen(true);
  };

  return (
    <>
      <div className="relative w-full h-[300px] md:h-[480px] overflow-hidden my-[60px] md:rounded-2xl">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          speed={1000}
          className="w-full h-full"
        >
          {sliderImages.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="w-full h-full relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/40 flex flex-col justify-center items-center text-center text-white px-6">
                  {/* Animate each element for smooth entrance */}
                  <motion.h2
                    key={item.title}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 30, opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-5xl font-bold mb-2 drop-shadow-lg"
                  >
                    {item.title}
                  </motion.h2>
                  <motion.p
                    key={item.subtitle}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-xl mb-4 drop-shadow-md"
                  >
                    {item.subtitle}
                  </motion.p>
                  <motion.button
                    key={item.title + "-btn"}
                    onClick={() => handleOrderNow(item)}
                    whileHover={{ scale: 1.05 }}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="bg-gradient-to-r from-amber-500 to-orange-600 px-6 py-3 rounded-xl text-white font-semibold shadow-lg hover:from-amber-600 hover:to-orange-700 transition-all duration-300"
                  >
                    Order Now
                  </motion.button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && selectedSlide && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-11/12 max-w-lg p-6 relative"
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <button
                className="absolute top-3 right-3 text-gray-500 dark:text-gray-300 text-xl font-bold hover:text-red-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>

              <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                {selectedSlide.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {selectedSlide.subtitle}
              </p>

              <form className="space-y-3">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="input input-bordered w-full dark:bg-gray-800 dark:border-gray-700 dark:text-white placeholder-gray-400"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered w-full dark:bg-gray-800 dark:border-gray-700 dark:text-white placeholder-gray-400"
                  defaultValue={user?.email || ""}
                  required
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="input input-bordered w-full dark:bg-gray-800 dark:border-gray-700 dark:text-white placeholder-gray-400"
                  required
                />
                <textarea
                  placeholder="Delivery Address"
                  className="textarea textarea-bordered w-full dark:bg-gray-800 dark:border-gray-700 dark:text-white placeholder-gray-400"
                  rows={2}
                  required
                ></textarea>

                <button
                  type="submit"
                  className="btn w-full mt-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white border-none rounded-lg shadow-md transition-all duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Order Placed!");
                    setIsOpen(false);
                  }}
                >
                  Place Order
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TopSlider;
