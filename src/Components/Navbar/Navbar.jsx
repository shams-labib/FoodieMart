import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import userImg from "../../assets/user.png";
import { AuthContext } from "../../Firebase and Login/Firebase content/Auth/AuthContext";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const navLinkStyle = ({ isActive }) =>
    `block px-4 py-2 rounded-md transition-colors text-sm font-medium ${
      isActive
        ? "bg-amber-500 text-white"
        : "hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-200"
    }`;

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/allreviews" },
    ...(user
      ? [
          { name: "My Review", path: "/myReview" },
          { name: "Favorites", path: "/myFavouritePage" },
          { name: "Dashboard", path: "/dashboard" },
        ]
      : []),
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md transition-colors duration-300">
      <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 relative">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-9 h-9 rounded-full" />
          <span className="text-lg font-bold text-orange-600 dark:text-yellow-400">
            FoodieMart
          </span>
        </Link>

        {/* Large Screen Menu */}
        <ul className="hidden lg:flex items-center gap-3">
          {menuItems.map((item, idx) => (
            <motion.li
              key={item.name}
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              layout
            >
              <NavLink to={item.path} className={navLinkStyle}>
                {item.name}
              </NavLink>
            </motion.li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Unique Theme Toggle */}
          <motion.button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="relative w-14 h-7 flex items-center rounded-full p-1 transition-colors duration-500 shadow-inner"
            style={{
              backgroundColor: theme === "light" ? "#fbbf24" : "#374151",
            }}
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="absolute w-5 h-5 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 dark:text-gray-800"
              style={{
                left: theme === "light" ? 2 : 26,
              }}
            >
              {theme === "light" ? <FaSun size={12} /> : <FaMoon size={12} />}
            </motion.div>
          </motion.button>

          {/* User Avatar / Login */}
          {user ? (
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar flex items-center"
              >
                <img
                  src={user.photoURL || userImg}
                  alt="user"
                  className="w-9 h-9 rounded-full"
                />
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 dark:bg-gray-800 rounded-box w-44"
              >
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link to="/myReview">My Review</Link>
                </li>
                <li>
                  <button
                    onClick={signOutUser}
                    className="text-red-500 hover:bg-red-100 dark:hover:bg-red-700 w-full text-left"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn bg-orange-500 text-white hover:bg-orange-600 text-sm"
            >
              Login
            </Link>
          )}

          {/* Mobile Drawer Button */}
          <button
            className="lg:hidden text-gray-800 dark:text-gray-200 text-2xl"
            onClick={() => setDrawerOpen(true)}
          >
            <FaBars />
          </button>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {drawerOpen && (
            <>
              {/* Overlay */}
              <motion.div
                className="fixed inset-0 bg-black/50 z-40"
                onClick={() => setDrawerOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />

              {/* Drawer Panel */}
              <motion.div
                className="fixed top-0 left-0 h-full w-64 z-50 bg-white dark:bg-gray-900 shadow-lg flex flex-col"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-lg font-bold text-orange-600 dark:text-yellow-400">
                    Menu
                  </span>
                  <button
                    className="text-gray-800 dark:text-gray-200 text-2xl"
                    onClick={() => setDrawerOpen(false)}
                  >
                    <FaTimes />
                  </button>
                </div>
                <ul className="flex flex-col gap-3 p-4 mt-2">
                  {menuItems.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.path}
                      className={navLinkStyle}
                      onClick={() => setDrawerOpen(false)}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </ul>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
