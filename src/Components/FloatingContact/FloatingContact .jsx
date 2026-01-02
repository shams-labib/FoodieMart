import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const FloatingContact = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      {/* WhatsApp */}
      <motion.a
        href="https://wa.me/8801784768887"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center cursor-pointer"
        animate={{ y: [0, -10, 0] }} // Up-down motion
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
        animate={{ y: [0, -10, 0] }} // Up-down motion
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
    </div>
  );
};

export default FloatingContact;
