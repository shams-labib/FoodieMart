// TopNavbar.jsx
import { useContext } from "react";
import { FaBars, FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../Firebase and Login/Firebase content/Auth/AuthContext";

const TopNavbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out from your account!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, logout!",
    });

    if (result.isConfirmed) {
      try {
        await signOutUser();
        Swal.fire("Logged Out!", "You have been signed out.", "success");
        navigate("/");
      } catch (err) {
        Swal.fire("Error!", "Failed to logout. Try again.", "error");
      }
    }
  };

  return (
    <header className="w-full bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
      <div className="flex items-center justify-between px-4 md:px-6 h-16">
        {/* Mobile Menu Button */}
        <div className="flex-none lg:hidden">
          <label
            htmlFor="dashboard-drawer"
            className="btn btn-ghost btn-square hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          >
            <FaBars size={20} />
          </label>
        </div>

        {/* Logo / Title */}
        <div className="flex-1">
          <Link
            to="/"
            className="text-lg md:text-xl font-bold text-gray-900 dark:text-white hover:text-primary dark:hover:text-yellow-400 transition-colors"
          >
            Dashboard
          </Link>
        </div>

        {/* User Dropdown */}
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors rounded-full"
            >
              <FaUserCircle size={22} />
              <span className="hidden md:inline text-gray-800 dark:text-gray-200 font-medium">
                {user?.displayName || "User"}
              </span>
            </label>

            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow-lg bg-white dark:bg-gray-800 rounded-box w-52 border border-gray-200 dark:border-gray-700"
            >
              <li>
                <Link
                  to="/dashboard/profile"
                  className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  Dashboard Home
                </Link>
              </li>
              <li>
                <button
                  onClick={handleSignOut}
                  className="text-error hover:bg-red-100 dark:hover:bg-red-700 w-full text-left transition-colors"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;
