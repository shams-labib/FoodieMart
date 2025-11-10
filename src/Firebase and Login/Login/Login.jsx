import React, { useContext, useState } from "react";
import { AuthContext } from "../Firebase content/Auth/AuthContext";
import { FaEye } from "react-icons/fa";
import { LuEyeClosed } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate, useLocation } from "react-router";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signInWithGoogle, signInUser, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  // Location state থেকে আগের intended path নাও
  const from = location.state?.from || "/";

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((data) => {
        console.log("Google login success:", data);
        navigate(from, { replace: true }); // redirect to intended page
      })
      .catch((err) => {
        console.log("Google login error:", err);
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
      .then((data) => {
        console.log(data);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Something went wrong",
        });
      });
  };

  return (
    <div
      data-aos="fade-left"
      className="min-h-screen flex items-center justify-center p-8 bg-base-100"
    >
      <div>
        <Helmet>
          <title>Login || FoodieMart</title>
        </Helmet>
      </div>
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100 dark:border-gray-700">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
          Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-300"
              required
            />
          </div>

          <div className="relative">
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
              Password
            </label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-300"
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-xl text-gray-600 dark:text-gray-300 cursor-pointer"
            >
              {showPassword ? <FaEye /> : <LuEyeClosed />}
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:from-amber-600 hover:to-orange-700 border-none rounded-md py-2 font-semibold hover:scale-105 transition-transform duration-300 shadow-md cursor-pointer"
          >
            Login Now
          </button>

          <div className="flex items-center w-full gap-2">
            <span className="flex-grow h-px bg-gray-300 dark:bg-gray-600"></span>
            <span className="text-gray-600 dark:text-gray-300 font-semibold text-sm">
              OR
            </span>
            <span className="flex-grow h-px bg-gray-300 dark:bg-gray-600"></span>
          </div>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="flex items-center justify-center gap-2 font-bold w-full border border-gray-300 dark:border-gray-600 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            <FcGoogle size={25} /> Continue with Google
          </button>

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
      </div>
    </div>
  );
};

export default Login;
