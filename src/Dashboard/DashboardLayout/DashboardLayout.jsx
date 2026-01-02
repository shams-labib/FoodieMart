import { Outlet } from "react-router";
import Sidebar from "../Sidebar/Sidebar";
import TopNavbar from "../TopNavbar/TopNavbar";

const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open min-h-screen bg-base-200">
      {/* Toggle checkbox */}
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      {/* Main Content */}
      <div className="drawer-content flex flex-col">
        <TopNavbar />

        <main className="flex-1 p-4 md:p-6">
          <Outlet />
        </main>
      </div>

      {/* Sidebar */}
      <div className="drawer-side z-40">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

        <Sidebar />
      </div>
    </div>
  );
};

export default DashboardLayout;
