// SupportPage.jsx
import React from "react";
import { FaQuestionCircle, FaEnvelope, FaComments } from "react-icons/fa";
import { motion } from "framer-motion";

const supportCategories = [
  {
    id: 1,
    icon: <FaQuestionCircle size={28} className="text-orange-500" />,
    title: "FAQs",
    description: "Find answers to the most common questions quickly.",
    link: "/faq",
  },
  {
    id: 2,
    icon: <FaEnvelope size={28} className="text-green-500" />,
    title: "Email Support",
    description: "Send us a message and our team will respond promptly.",
    link: "/contact",
  },
  {
    id: 3,
    icon: <FaComments size={28} className="text-blue-500" />,
    title: "Live Chat",
    description: "Chat directly with our support agents in real-time.",
    link: "/live-chat",
  },
];

const cardAnim = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const SupportPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <motion.section
        className="py-16 text-center px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Need Help? We’re Here!
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Browse our support options or contact our team directly.
        </p>

        {/* Search Box */}
        <div className="max-w-xl mx-auto flex items-center border rounded-lg overflow-hidden shadow-sm dark:border-gray-700">
          <input
            type="text"
            placeholder="Search help articles..."
            className="flex-1 px-4 py-2 outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          />
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 transition-colors">
            Search
          </button>
        </div>
      </motion.section>

      {/* Support Categories */}
      <motion.section
        className="py-16 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {supportCategories.map((cat) => (
            <motion.div
              key={cat.id}
              className="flex flex-col items-start p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-2xl transition-all duration-300 group"
              variants={cardAnim}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="mb-4">{cat.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {cat.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {cat.description}
              </p>
              <a
                href={cat.link}
                className="text-orange-500 hover:underline font-semibold"
              >
                Learn More →
              </a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Form (Flex Layout) */}
      <motion.section
        className="py-16 px-4 bg-gray-100 dark:bg-gray-800 transition-colors duration-300"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center">
          {/* Left info */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Contact Support
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Have a question or need help? Fill out the form and our support
              team will get back to you promptly.
            </p>
          </div>

          {/* Form */}
          <div className="flex-1 bg-white dark:bg-gray-900 rounded-xl shadow p-6 md:p-8">
            <form className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="flex-1 px-4 py-2 border rounded-md dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="flex-1 px-4 py-2 border rounded-md dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 outline-none"
                />
              </div>
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-2 border rounded-md dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 outline-none"
              ></textarea>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-semibold transition-all transform hover:scale-105">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default SupportPage;
