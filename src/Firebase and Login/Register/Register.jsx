import React, { useContext, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { LuEyeClosed } from "react-icons/lu";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Firebase content/Auth/AuthContext";
import { Helmet } from "react-helmet-async";
import { updateProfile } from "firebase/auth";
import { motion } from "framer-motion";

const Register = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [tc, setTc] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(true);

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (!name || !email || !password) {
      Swal.fire({ icon: "error", title: "Please fill out all fields ❗" });
      setLoading(false);
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Password!",
        text: "Must contain uppercase, lowercase & minimum 6 characters.",
      });
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Passwords do not match ❌",
      });
      setLoading(false);
      return;
    }

    if (!tc) {
      Swal.fire({
        icon: "error",
        title: "Agree to the Terms & Conditions ⚠️",
      });
      setLoading(false);
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;

        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        });

        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          icon: "error",
          title: "Failed to Register ⚠️",
          text: err.message,
        });
      })
      .finally(() => setLoading(false));
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(() => navigate("/"))
      .catch((err) => {
        console.error(err);
        Swal.fire({
          icon: "error",
          title: "Failed to login ⚠️",
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-base-50 dark:bg-gray-800 transition-colors duration-500">
      <Helmet>
        <title>Register || FoodieMart</title>
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: -50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-md bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 transition-colors duration-500"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
          Register
        </h2>

        <form onSubmit={handleRegister} className="space-y-5">
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-colors duration-300"
          />
          <input
            name="photo"
            type="text"
            placeholder="Photo URL"
            className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-colors duration-300"
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-colors duration-300"
          />

          {/* Password */}
          <div className="relative">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-colors duration-300"
            />
          </div>

          <div className="relative">
            <input
              name="confirmPassword"
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-colors duration-300"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-xl text-gray-600 dark:text-gray-300 cursor-pointer"
            >
              {showPassword ? <FaEye /> : <LuEyeClosed />}
            </span>
          </div>

          <label className="flex items-center gap-2 text-sm cursor-pointer text-gray-700 dark:text-gray-200">
            <input
              type="checkbox"
              checked={tc}
              onChange={(e) => setTc(e.target.checked)}
            />
            I agree to the{" "}
            <span className="text-blue-500 dark:text-blue-400 underline">
              Terms & Conditions
            </span>
          </label>

          <motion.button
            disabled={loading}
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold py-2 rounded-xl shadow-lg border-none transition-all duration-300"
          >
            {loading ? "Processing..." : "Register 🚀"}
          </motion.button>

          {/* OR Divider */}
          <div className="flex items-center w-full gap-2">
            <span className="flex-grow h-px bg-gray-300 dark:bg-gray-600 transition-colors duration-300"></span>
            <span className="text-gray-600 dark:text-gray-300 font-semibold text-sm">
              OR
            </span>
            <span className="flex-grow h-px bg-gray-300 dark:bg-gray-600 transition-colors duration-300"></span>
          </div>

          {/* Google Login */}
          <motion.button
            type="button"
            onClick={handleGoogleLogin}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 w-full font-bold border border-gray-300 dark:border-gray-600 py-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
          >
            <FcGoogle size={25} /> Continue with Google
          </motion.button>

          <p className="text-center text-sm text-gray-600 dark:text-gray-300">
            Already have an account?{" "}
            <Link
              className="text-blue-500 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
              to={"/login"}
            >
              Login Now
            </Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default Register;
