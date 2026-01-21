import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Firebase content/Auth/AuthContext";
import { FaEye } from "react-icons/fa";
import { LuEyeClosed } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate, useLocation } from "react-router";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [autoEmail, setAutoEmail] = useState("");
  const { signInWithGoogle, signInUser, setLoading, currentUser } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || "/";

  // Auto-fill email if user info is available
  useEffect(() => {
    if (currentUser?.email) {
      setAutoEmail(currentUser.email);
    }
  }, [currentUser]);

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((data) => {
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          icon: "error",
          title: "Something went wrong",
        });
        setLoading(false);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          icon: "error",
          title: "Invalid credentials",
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 dark:bg-gray-800 bg-base-50">
      <Helmet>
        <title>Login || FoodieMart</title>
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: -50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-2xl w-full max-w-md border border-gray-100 dark:border-gray-700"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
          Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
              Email
            </label>
            <input
              name="email"
              type="email"
              value={autoEmail}
              onChange={(e) => setAutoEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
              Password
            </label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-xl text-gray-600 dark:text-gray-300 cursor-pointer"
            >
              {showPassword ? <FaEye /> : <LuEyeClosed />}
            </span>
          </div>

          {/* Login Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold py-2 rounded-xl shadow-lg border-none transition-all duration-300"
          >
            Login Now
          </motion.button>

          {/* OR Divider */}
          <div className="flex items-center w-full gap-2">
            <span className="flex-grow h-px bg-gray-300 dark:bg-gray-600"></span>
            <span className="text-gray-600 dark:text-gray-300 font-semibold text-sm">
              OR
            </span>
            <span className="flex-grow h-px bg-gray-300 dark:bg-gray-600"></span>
          </div>

          {/* Google Login */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={handleGoogleLogin}
            className="flex items-center justify-center gap-2 font-bold w-full border border-gray-300 dark:border-gray-600 py-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <FcGoogle size={25} /> Continue with Google
          </motion.button>

          {/* Register Link */}
          <p className="text-center text-sm text-gray-600 dark:text-gray-300">
            Don't have an account?{" "}
            <Link
              className="text-blue-500 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300"
              to={"/register"}
            >
              Register Now
            </Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
