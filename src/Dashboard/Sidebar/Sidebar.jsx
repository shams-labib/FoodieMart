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

  const menuItems = [
    { name: "Overview", path: "/dashboard" },
    ...(role === "admin"
      ? [
          { title: "Your Dashboard" },
          { name: "Home", path: "/" },
          { name: "Profile", path: "profile" },
          { name: "My Order", path: "my-order" },
          { name: "Analytics", path: "admin" },
          { name: "Payment History", path: "payment-history" },
          { name: "Add Review", path: "add-review" },
        ]
      : []),
  ];

  return (
    <aside className="bg-white dark:bg-gray-900 w-64 md:w-64 h-screen shadow-md fixed md:static z-50 transform md:translate-x-0 transition-transform duration-300 ease-in-out">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">
          Dashboard
        </h1>
      </div>
      <ul className="flex flex-col p-4 space-y-2">
        {menuItems.map((item, index) =>
          item.title ? (
            <li
              key={index}
              className="text-gray-500 dark:text-gray-400 uppercase text-xs mt-4 mb-1"
            >
              {item.title}
            </li>
          ) : (
            <li key={index}>
              <NavLink
                to={item.path}
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-lg transition-colors duration-200 
                  ${
                    isActive
                      ? "bg-blue-500 text-white"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          )
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;
