import React, { useContext, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { LuEyeClosed } from "react-icons/lu";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Firebase content/Auth/AuthContext";
import { Helmet } from "react-helmet-async";
import { updateProfile } from "firebase/auth";

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
    <div
      data-aos="fade-right"
      className="min-h-screen flex items-center justify-center p-8 bg-base-100"
    >
      <Helmet>
        <title>Register || FoodieMart</title>
      </Helmet>

      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-md border">
        <h2 className="text-3xl font-bold text-center mb-6">Register</h2>

        <form onSubmit={handleRegister} className="space-y-5">
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            className="input input-bordered w-full"
          />
          <input
            name="photo"
            type="text"
            placeholder="Photo URL"
            className="input input-bordered w-full"
          />

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            className="input input-bordered w-full"
          />

          <div className="relative">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="input input-bordered w-full"
            />
          </div>

          <div className="relative">
            <input
              name="confirmPassword"
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="input input-bordered w-full"
            />

            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-xl cursor-pointer"
            >
              {showPassword ? <FaEye /> : <LuEyeClosed />}
            </span>
          </div>

          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <input
              type="checkbox"
              checked={tc}
              onChange={(e) => setTc(e.target.checked)}
            />
            I agree to the{" "}
            <span className="text-blue-600 underline">Terms & Conditions</span>
          </label>

          <button
            disabled={loading}
            className="btn w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white"
          >
            {loading ? "Processing..." : "Register 🚀"}
          </button>
          {/* Google Login */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="btn btn-outline w-full flex gap-2"
          >
            <FcGoogle size={25} /> Continue with Google
          </button>

          <p className="text-center text-sm">
            Already have an account?{" "}
            <Link className="text-blue-500 font-semibold" to={"/login"}>
              Login Now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
