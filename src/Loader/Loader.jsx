import React from "react";
import { FaSpinner } from "react-icons/fa";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-gray-600 dark:text-gray-300">
      <FaSpinner className="animate-spin text-4xl text-blue-500 mb-3" />
      <p className="text-lg font-semibold">Loading reviews...</p>
    </div>
  );
};

export default Loader;
