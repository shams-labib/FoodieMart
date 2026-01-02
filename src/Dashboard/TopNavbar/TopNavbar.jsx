import { FaBars, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router";

const TopNavbar = () => {
  return (
    <div className="navbar bg-base-100 shadow px-4">
      {/* Mobile menu button */}
      <div className="flex-none lg:hidden">
        <label htmlFor="dashboard-drawer" className="btn btn-ghost btn-square">
          <FaBars />
        </label>
      </div>

      <div className="flex-1">
        <Link to={"/"} className="text-lg md:text-xl font-bold">
          Dashboard
        </Link>
      </div>

      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost">
            <FaUserCircle size={22} />
          </label>

          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Dashboard Home</a>
            </li>
            <li className="text-error">
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
