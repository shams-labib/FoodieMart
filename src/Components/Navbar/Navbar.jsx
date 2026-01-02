import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import userImg from "../../assets/user.png";
import { AuthContext } from "../../Firebase and Login/Firebase content/Auth/AuthContext";
import Loader from "../../Loader/Loader";

const Navbar = () => {
  const { user, signOutUser, loading } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const navLinkStyle = ({ isActive }) =>
    `px-3 py-2 rounded-lg transition ${
      isActive ? "bg-amber-500 text-white" : "hover:bg-base-200"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-md shadow">
      <nav className="navbar max-w-7xl mx-auto px-4">
        {/* LEFT */}
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost">
              ☰
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLink to="/" className={navLinkStyle}>
                Home
              </NavLink>
              <NavLink to="/allreviews" className={navLinkStyle}>
                All Reviews
              </NavLink>

              {user && (
                <>
                  <NavLink to="/dashboard" className={navLinkStyle}>
                    Dashboard
                  </NavLink>
                  <NavLink to="/myReview" className={navLinkStyle}>
                    My Review
                  </NavLink>
                  <NavLink to="/myFavouritePage" className={navLinkStyle}>
                    Favorites
                  </NavLink>
                </>
              )}
            </ul>
          </div>

          <Link to="/" className="flex items-center gap-2">
            <img src={logo} className="w-10 h-10 rounded-full" />
            <span className="text-xl font-bold text-orange-600">
              FoodieMart
            </span>
          </Link>
        </div>

        {/* CENTER */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 font-medium">
            <NavLink to="/" className={navLinkStyle}>
              Home
            </NavLink>
            <NavLink to="/allreviews" className={navLinkStyle}>
              All Reviews
            </NavLink>

            {user && (
              <>
                <NavLink to="/dashboard" className={navLinkStyle}>
                  Dashboard
                </NavLink>
                <NavLink to="/myReview" className={navLinkStyle}>
                  My Review
                </NavLink>
                <NavLink to="/myFavouritePage" className={navLinkStyle}>
                  Favorites
                </NavLink>
              </>
            )}
          </ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end gap-3">
          <input
            type="checkbox"
            className="toggle toggle-sm"
            checked={theme === "dark"}
            onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
          />

          {loading ? (
            <Loader />
          ) : user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <img
                  src={user.photoURL || userImg}
                  className="w-10 rounded-full"
                />
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-44"
              >
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link to="/myReview">My Review</Link>
                </li>
                <li>
                  <button onClick={signOutUser} className="text-red-500">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn bg-orange-500 text-white hover:bg-orange-600"
            >
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
