import React from "react";
import { motion } from "framer-motion";
import { Mail, Sparkles } from "lucide-react";

const NewsletterSection = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gray-50 dark:bg-gray-800">
      {/* Gradient Glow */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div
          className="
            w-[420px] h-[420px] 
            bg-gradient-to-r from-amber-400/20 via-orange-500/20 to-pink-500/20 
            blur-3xl rounded-full
          "
        ></div>
      </div>

      {/* Container */}
      <div className="relative z-10 w-container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            bg-white/70 dark:bg-gray-900/70 
            backdrop-blur-xl 
            border border-gray-200 dark:border-gray-700 
            rounded-3xl shadow-2xl 
            px-6 sm:px-10 py-14 text-center
          "
        >
          {/* Icon */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="
              mx-auto mb-6 w-16 h-16 rounded-full 
              bg-gradient-to-br from-amber-500 to-orange-600 
              flex items-center justify-center shadow-lg
            "
          >
            <Mail className="text-white" size={28} />
          </motion.div>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Join Our <span className="text-amber-500">Newsletter</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-10">
            Stay updated with top reviews, exclusive deals, and trending food
            insights — straight to your inbox.
          </p>

          {/* Form */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <div className="relative w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="
                  w-full px-5 py-4 rounded-xl 
                  bg-white dark:bg-gray-800 
                  text-gray-800 dark:text-gray-100 
                  placeholder-gray-400 
                  border border-gray-300 dark:border-gray-600 
                  focus:outline-none focus:ring-2 focus:ring-amber-500
                  transition
                "
              />
              <Sparkles
                className="
                  absolute right-4 top-1/2 -translate-y-1/2 
                  text-amber-500
                "
                size={18}
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                px-8 py-4 rounded-xl font-semibold text-white
                bg-gradient-to-r from-amber-500 to-orange-600
                hover:from-amber-600 hover:to-orange-700
                shadow-lg transition
              "
            >
              Subscribe
            </motion.button>
          </div>

          <p className="text-xs text-gray-500 dark:text-gray-400 mt-6">
            No spam. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
