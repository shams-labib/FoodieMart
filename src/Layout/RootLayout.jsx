// RootLayout.jsx
import React, { useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

const RootLayout = () => {
  useEffect(() => {
    AOS.init({
      duration: 2500,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 text-gray-100">
      <Navbar />

      <div className="container mx-auto min-h-screen">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default RootLayout;
