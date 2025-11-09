import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import userImg from "../../assets/user.png";
import { AuthContext } from "../../Firebase and Login/Firebase content/Auth/AuthContext";
import Loader from "../../Loader/Loader";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [open, setOpen] = useState(false);
  const { user, signOutUser, loading } = useContext(AuthContext);

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (e) => {
    const checked = e.target.checked;
    setTheme(checked ? "dark" : "light");
  };

  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `pb-1 transition-all duration-300 ${
            isActive
              ? "border-b-2 border-blue-500 text-blue-500"
              : "hover:border-b-2 hover:border-blue-300"
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/allreveiws"
        className={({ isActive }) =>
          `pb-1 transition-all duration-300 ${
            isActive
              ? "border-b-2 border-blue-500 text-blue-500"
              : "hover:border-b-2 hover:border-blue-300"
          }`
        }
      >
        All Reviews
      </NavLink>
      <NavLink
        to="/myReview"
        className={({ isActive }) =>
          `pb-1 transition-all duration-300 ${
            isActive
              ? "border-b-2 border-blue-500 text-blue-500"
              : "hover:border-b-2 hover:border-blue-300"
          }`
        }
      >
        My Review
      </NavLink>
    </>
  );

  return (
    <div className="sticky top-0 z-50 backdrop-blur-md bg-white/60 shadow-sm transition-all duration-300">
      <div className="navbar md:w-10/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 p-2 shadow w-40"
            >
              {links}
            </ul>
          </div>

          <Link to={"/"} className="flex items-center justify-center lg:gap-2">
            <img className="w-10 h-10 rounded-full" src={logo} alt="" />
            <span className="lg:text-2xl text-sm font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
              FoodieMart
            </span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-7 text-[14px] font-semibold">
            {links}
          </ul>
        </div>

        <div className="navbar-end flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2">
            <input
              type="checkbox"
              onChange={handleTheme}
              checked={theme === "dark"}
              className="toggle toggle-sm"
            />
            <span className="text-sm">
              {theme === "dark" ? "Dark" : "Light"}
            </span>
          </div>

          {loading ? (
            <Loader></Loader>
          ) : user ? (
            <>
              <div className="relative">
                <button
                  onClick={() => setOpen(!open)}
                  className="btn btn-ghost p-0 rounded-full"
                >
                  <img
                    src={user.photoURL || userImg}
                    alt="User"
                    className="w-10 h-10 rounded-full"
                  />
                </button>

                {open && (
                  <ul className="absolute right-0 mt-2 w-40 bg-base-100 shadow-lg rounded-lg menu">
                    <li>
                      <Link to="/account" onClick={() => setOpen(false)}>
                        Add Review
                      </Link>
                    </li>
                    <li>
                      <Link to="/account" onClick={() => setOpen(false)}>
                        My Review
                      </Link>
                    </li>
                    <li>
                      <Link to="/account" onClick={() => setOpen(false)}>
                        My Favorites
                      </Link>
                    </li>
                    <li>
                      <button onClick={signOutUser}>Sign Out</button>
                    </li>
                  </ul>
                )}
              </div>
            </>
          ) : (
            <Link
              to={"/login"}
              className="btn bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:from-amber-600 hover:to-orange-700 border-none rounded-lg
              transition-all duration-500 ease-in-out shadow-md hover:shadow-lg border-0"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
