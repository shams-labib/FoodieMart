// Services.jsx
import React from "react";
import { FaRocket, FaClock, FaShieldAlt, FaHeadset } from "react-icons/fa";
import { LucideMapPin, LucideShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

const serviceData = [
  {
    icon: <FaRocket className="text-yellow-500 w-10 h-10" />,
    title: "Fastest Delivery",
    desc: "Get your favorite meals delivered in record time with real-time tracking.",
  },
  {
    icon: <FaShieldAlt className="text-green-500 w-10 h-10" />,
    title: "Quality Food",
    desc: "We ensure fresh and hygienic meals from top-rated restaurants only.",
  },
  {
    icon: <FaClock className="text-blue-500 w-10 h-10" />,
    title: "24/7 Service",
    desc: "Order anytime, anywhere with round-the-clock support.",
  },
  {
    icon: <FaHeadset className="text-purple-500 w-10 h-10" />,
    title: "Customer Support",
    desc: "Our support team is always ready to assist you with your orders.",
  },
  {
    icon: <LucideMapPin className="text-red-500 w-10 h-10" />,
    title: "Real-time Tracking",
    desc: "Track your order live from restaurant to doorstep.",
  },
  {
    icon: <LucideShoppingCart className="text-pink-500 w-10 h-10" />,
    title: "Easy Ordering",
    desc: "Simple and smooth order process directly from your mobile or desktop.",
  },
];

const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.3, duration: 0.8 },
  },
};

const iconVariants = {
  animate: {
    rotate: [0, 10, -10, 10, 0],
    transition: { repeat: Infinity, duration: 2 },
  },
};

const Services = () => {
  return (
    <section
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors"
      id="services"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            Our Services
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            We offer top-notch services to make your food ordering experience
            fast, smooth, and delightful.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {serviceData.map((service, index) => (
            <motion.div
              key={index}
              className="
                bg-white dark:bg-gray-900 
                p-6 rounded-2xl 
                border border-gray-200 dark:border-gray-700
                shadow-lg dark:shadow-gray-900/40
                hover:shadow-xl transition-all duration-300 
                text-center
              "
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
            >
              <motion.div
                className="mb-4 flex justify-center"
                variants={iconVariants}
                animate="animate"
              >
                {service.icon}
              </motion.div>

              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                {service.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
