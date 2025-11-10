import React, { useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";

// AOS import
import AOS from "aos";
import "aos/dist/aos.css";

const RootLayout = () => {
  useEffect(() => {
    AOS.init({
      duration: 2500, // animation duration in ms
      once: true, // animation happens only once while scrolling
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
