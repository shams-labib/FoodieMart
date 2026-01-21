import React from "react";
import logo from "../../assets/logo.png";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-[#1E1B2E] dark:bg-[#0D0B14] text-gray-200 pt-16">
      {/* Wave Top Border */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C360,100 1080,0 1440,100 L1440,0 L0,0 Z"
            className="fill-[#FFD166] dark:fill-[#F4C430]"
          />
        </svg>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 flex flex-col lg:flex-row justify-between gap-12 relative z-10">
        {/* Logo & Description */}
        <div className="flex flex-col gap-4 max-w-sm">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="w-12 h-12 rounded-full" />
            <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
              FoodieMart
            </span>
          </div>
          <p className="text-sm text-gray-300 dark:text-gray-400 leading-relaxed">
            Bringing the world of flavors to your doorstep. Discover premium
            ingredients, authentic tastes, and a culinary journey like no other.
          </p>
        </div>

        {/* Navigation Links (Smooth Scroll) */}
        <div className="flex flex-col gap-4">
          <h6 className="text-lg font-semibold">Quick Links</h6>
          <div className="flex flex-col md:flex-row md:gap-6 gap-3">
            <a
              href="#about"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              About Us
            </a>
            <a
              href="#contact"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              Contact
            </a>
            <a
              href="#upcoming"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              Upcoming Food
            </a>
            <a
              href="#more-info"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              More Info
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col gap-4">
          <h6 className="text-lg font-semibold">Follow Us</h6>
          <div className="flex gap-4">
            {/* Twitter */}
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 dark:text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              <FaTwitter size={22} />
            </motion.a>

            {/* Facebook */}
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://www.facebook.com/shamsallabib"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 dark:text-gray-400 hover:text-blue-600 transition-colors duration-300"
            >
              <FaFacebookF size={22} />
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://www.linkedin.com/in/shams-al-labib"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 dark:text-gray-400 hover:text-blue-500 transition-colors duration-300"
            >
              <FaLinkedinIn size={22} />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400 pb-6">
        © {new Date().getFullYear()} FoodieMart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
