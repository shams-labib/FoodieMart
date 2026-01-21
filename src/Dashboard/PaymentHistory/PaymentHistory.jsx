import { motion } from "framer-motion";

/* ---------- STATIC PAYMENT DATA ---------- */
const payments = [
  {
    id: "TXN-458921",
    amount: 850,
    userName: "Sakib Ahmed",
    email: "sakib@gmail.com",
    date: "2025-01-02",
    status: "Success",
  },
  {
    id: "TXN-458922",
    amount: 420,
    userName: "Rahim Uddin",
    email: "rahim@gmail.com",
    date: "2025-01-03",
    status: "Success",
  },
  {
    id: "TXN-458923",
    amount: 1200,
    userName: "Karim Khan",
    email: "karim@gmail.com",
    date: "2025-01-04",
    status: "Success",
  },
];

const PaymentHistory = () => {
  return (
    <div className="p-4 sm:p-6 min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-4xl font-bold mb-10"
      >
        Payment <span className="text-emerald-500">History</span>
      </motion.h1>

      {/* MOBILE VIEW */}
      <div className="space-y-4 md:hidden">
        {payments.map((pay, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl bg-white dark:bg-gray-800 p-4 shadow border border-gray-200 dark:border-gray-700"
          >
            <p className="text-sm text-gray-500">Transaction ID</p>
            <p className="font-mono font-semibold">{pay.id}</p>

            <div className="flex justify-between mt-2">
              <span className="font-medium">৳ {pay.amount}</span>
              <span className="text-xs px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300">
                {pay.status}
              </span>
            </div>

            <p className="mt-2 text-sm">{pay.userName}</p>
            <p className="text-xs text-gray-500">{pay.email}</p>

            <p className="text-xs text-gray-400 mt-1">
              {new Date(pay.date).toLocaleDateString()}
            </p>
          </motion.div>
        ))}
      </div>

      {/* DESKTOP TABLE */}
      <div className="hidden md:block overflow-x-auto rounded-xl shadow border border-gray-200 dark:border-gray-700">
        <table className="min-w-full bg-white dark:bg-gray-800">
          <thead className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
            <tr>
              <th className="px-4 py-3 text-left text-sm">#</th>
              <th className="px-4 py-3 text-left text-sm">Transaction ID</th>
              <th className="px-4 py-3 text-left text-sm">Amount</th>
              <th className="px-4 py-3 text-left text-sm">User</th>
              <th className="px-4 py-3 text-left text-sm">Email</th>
              <th className="px-4 py-3 text-left text-sm">Date</th>
              <th className="px-4 py-3 text-left text-sm">Status</th>
            </tr>
          </thead>

          <tbody>
            {payments.map((pay, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3 font-mono">{pay.id}</td>
                <td className="px-4 py-3 font-semibold">৳ {pay.amount}</td>
                <td className="px-4 py-3">{pay.userName}</td>
                <td className="px-4 py-3">{pay.email}</td>
                <td className="px-4 py-3">
                  {new Date(pay.date).toLocaleDateString()}
                </td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 text-xs rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300">
                    {pay.status}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
