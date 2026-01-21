// FloatingContact.jsx
import { useState, useEffect } from "react";
import { FaWhatsapp, FaPhoneAlt, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

const FloatingContact = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Listen to scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      {/* WhatsApp */}
      <motion.a
        href="https://wa.me/8801784768887"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center cursor-pointer"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaWhatsapp size={24} />
      </motion.a>

      {/* Phone / Contact */}
      <motion.a
        href="tel:+8801784768887"
        className="bg-blue-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center cursor-pointer"
        animate={{ y: [0, -10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
          delay: 0.2,
        }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaPhoneAlt size={24} />
      </motion.a>

      {/* Scroll to Top */}
      {showScroll && (
        <motion.button
          onClick={scrollToTop}
          className="bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-900 p-4 rounded-full shadow-lg flex items-center justify-center cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaArrowUp size={24} />
        </motion.button>
      )}
    </div>
  );
};

export default FloatingContact;
