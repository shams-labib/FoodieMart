// AdminDashboard.jsx
import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
} from "recharts";
import { LucideUser, LucideShoppingCart, LucideMenu } from "lucide-react";

const AdminDashboard = () => {
  // Static summary data
  const [summary] = useState({
    members: 124,
    orders: 78,
    menus: 56,
  });

  // Static chart data
  const [chartData] = useState([
    { month: "Jan", orders: 10, members: 5, menus: 4 },
    { month: "Feb", orders: 15, members: 8, menus: 5 },
    { month: "Mar", orders: 20, members: 12, menus: 6 },
    { month: "Apr", orders: 25, members: 18, menus: 7 },
    { month: "May", orders: 30, members: 22, menus: 8 },
    { month: "Jun", orders: 40, members: 28, menus: 10 },
  ]);

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Admin Dashboard
        </h1>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card
          icon={<LucideUser className="w-10 h-10 text-blue-500" />}
          title="Total Members"
          value={summary.members}
        />
        <Card
          icon={<LucideShoppingCart className="w-10 h-10 text-purple-500" />}
          title="Total Orders"
          value={summary.orders}
        />
        <Card
          icon={<LucideMenu className="w-10 h-10 text-yellow-500" />}
          title="Total Menus"
          value={summary.menus}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <ChartCard title="Orders Trend">
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={chartData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#ccc"
                className="dark:stroke-gray-700"
              />
              <XAxis
                dataKey="month"
                stroke="#333"
                className="dark:stroke-gray-100"
              />
              <YAxis stroke="#333" className="dark:stroke-gray-100" />
              <Tooltip
                contentStyle={{ backgroundColor: "#fff", color: "#333" }}
              />
              <Line
                type="monotone"
                dataKey="orders"
                stroke="#7c3aed"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Members Growth">
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorMembers" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="month"
                stroke="#333"
                className="dark:stroke-gray-100"
              />
              <YAxis stroke="#333" className="dark:stroke-gray-100" />
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#ccc"
                className="dark:stroke-gray-700"
              />
              <Tooltip
                contentStyle={{ backgroundColor: "#fff", color: "#333" }}
              />
              <Area
                type="monotone"
                dataKey="members"
                stroke="#3b82f6"
                fill="url(#colorMembers)"
                fillOpacity={1}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <ChartCard title="Orders vs Members">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#ccc"
              className="dark:stroke-gray-700"
            />
            <XAxis
              dataKey="month"
              stroke="#333"
              className="dark:stroke-gray-100"
            />
            <YAxis stroke="#333" className="dark:stroke-gray-100" />
            <Tooltip
              contentStyle={{ backgroundColor: "#fff", color: "#333" }}
            />
            <Bar dataKey="orders" fill="#7c3aed" />
            <Bar dataKey="members" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  );
};

// ================== Summary Card ==================
const Card = ({ icon, title, value }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition flex items-center space-x-4">
    {icon}
    <div>
      <p className="text-gray-500 dark:text-gray-300">{title}</p>
      <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
        {value}
      </p>
    </div>
  </div>
);

// ================== Chart Card Wrapper ==================
const ChartCard = ({ title, children }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
    <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
      {title}
    </h2>
    {children}
  </div>
);

export default AdminDashboard;
