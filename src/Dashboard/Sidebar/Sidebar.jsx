import { NavLink } from "react-router";

const Sidebar = () => {
  const role = "admin"; // later dynamic

  // function to close drawer on link click (mobile only)
  const handleLinkClick = () => {
    const drawer = document.getElementById("dashboard-drawer");
    if (drawer && drawer.checked) {
      drawer.checked = false;
    }
  };

  return (
    <aside className="w-64 min-h-full bg-base-100 shadow">
      <ul className="menu p-4">
        <li className="menu-title">Dashboard</li>
        <li>
          <NavLink to="/dashboard" onClick={handleLinkClick}>
            Overview
          </NavLink>
        </li>

        {role === "user" && (
          <>
            <li className="menu-title">User Menu</li>
            <li>
              <NavLink onClick={handleLinkClick}>My Orders</NavLink>
            </li>
            <li>
              <NavLink onClick={handleLinkClick}>Wishlist</NavLink>
            </li>
          </>
        )}

        {role === "admin" && (
          <>
            <li className="menu-title">Admin Menu</li>
            <li>
              <NavLink onClick={handleLinkClick}>Manage Users</NavLink>
            </li>
            <li>
              <NavLink onClick={handleLinkClick}>Manage Orders</NavLink>
            </li>
            <li>
              <NavLink onClick={handleLinkClick}>Analytics</NavLink>
            </li>
          </>
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;
