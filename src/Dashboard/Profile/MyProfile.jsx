import React, { useContext, useState } from "react"; // <-- just one import
import {
  Mail,
  Phone,
  MapPin,
  Edit,
  ShieldCheck,
  Briefcase,
  Save,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { AuthContext } from "../../Firebase and Login/Firebase content/Auth/AuthContext";

const cardAnim = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const MyProfile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    displayName: user?.displayName || "",
    phoneNumber: user?.phoneNumber || "",
    location: user?.location || "",
  });
  const [loading, setLoading] = useState(false);

  if (!user) return <p>Loading...</p>; // Loader placeholder

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      // Call API to update profile
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/users/${user.uid}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) throw new Error("Failed to update profile");

      const updatedUser = await res.json();
      setUser(updatedUser);
      setEditing(false);
      alert("Profile updated successfully!");
    } catch (err) {
      console.error(err);
      alert("Error updating profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full space-y-10">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        variants={cardAnim}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
      >
        {/* LEFT PROFILE CARD */}
        <div className="rounded-3xl bg-base-100 dark:bg-gray-900 shadow-xl overflow-hidden">
          <div className="flex flex-col items-center p-6 bg-gradient-to-br from-orange-500 to-red-500 text-white">
            <div className="avatar">
              <div className="w-24 h-24 rounded-full ring ring-white ring-offset-4 ring-offset-orange-500 shadow-lg hover:scale-105 transition-transform">
                <img
                  src={user.photoURL || "https://i.ibb.co/7QpKsCX/user.png"}
                  className="h-full w-full object-cover"
                  alt="profile"
                />
              </div>
            </div>

            {!editing ? (
              <>
                <h2 className="mt-4 text-xl font-bold">
                  {user.displayName || "User"}
                </h2>
                <p className="text-sm opacity-90 flex items-center gap-1 mt-1">
                  <Briefcase className="w-4 h-4" /> {user.role || "Food Lover"}
                </p>
              </>
            ) : (
              <input
                type="text"
                name="displayName"
                value={formData.displayName}
                onChange={handleChange}
                className="mt-4 text-center text-xl font-bold px-3 py-2 rounded-lg text-black dark:text-white w-full bg-white dark:bg-gray-700"
                placeholder="Enter name"
              />
            )}

            <span className="mt-3 badge badge-success gap-1 rounded-full px-3 py-1 shadow">
              <ShieldCheck className="w-3 h-3" /> Active User
            </span>
          </div>

          <div className="p-5 flex flex-col gap-3">
            {!editing ? (
              <button
                onClick={() => setEditing(true)}
                className="btn btn-primary btn-sm w-full flex gap-2 hover:scale-105 transition-transform"
              >
                <Edit className="w-4 h-4" /> Edit Profile
              </button>
            ) : (
              <div className="flex gap-2">
                <button
                  onClick={handleSave}
                  disabled={loading}
                  className="btn btn-success btn-sm flex-1 flex gap-2 justify-center items-center"
                >
                  <Save className="w-4 h-4" /> {loading ? "Saving..." : "Save"}
                </button>
                <button
                  onClick={() => setEditing(false)}
                  className="btn btn-error btn-sm flex-1 flex gap-2 justify-center items-center"
                >
                  <X className="w-4 h-4" /> Cancel
                </button>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT INFO CARD */}
        <div className="lg:col-span-2 rounded-3xl shadow-xl p-6 backdrop-blur-md bg-white/40 dark:bg-gray-900/50">
          <h3 className="text-2xl font-semibold mb-6 dark:text-white">
            Profile Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InfoCard
              icon={<Mail className="w-5 h-5 text-orange-500" />}
              label="Email"
              value={user.email}
              link={`mailto:${user.email}`}
            />
            <InfoCard
              icon={<Phone className="w-5 h-5 text-green-500" />}
              label="Phone"
              value={formData.phoneNumber || "+880170000000"}
              editable={editing}
              name="phoneNumber"
              onChange={handleChange}
            />
            <InfoCard
              icon={<MapPin className="w-5 h-5 text-blue-500" />}
              label="Location"
              value={formData.location || "Dhaka, Bangladesh"}
              editable={editing}
              name="location"
              onChange={handleChange}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const InfoCard = ({ icon, label, value, link, editable, name, onChange }) => {
  return (
    <div className="flex items-center gap-4 p-4 rounded-2xl bg-base-200 dark:bg-gray-800">
      {icon}
      <div className="flex-1">
        <p className="text-xs opacity-70 dark:text-gray-300">{label}</p>
        {editable ? (
          <input
            type="text"
            name={name}
            value={value}
            onChange={onChange}
            className="w-full px-3 py-2 rounded-lg text-black dark:text-white bg-white dark:bg-gray-700"
          />
        ) : link ? (
          <a
            href={link}
            className="text-sm font-medium dark:text-white hover:text-orange-500 transition-colors"
          >
            {value}
          </a>
        ) : (
          <p className="text-sm font-medium dark:text-white">{value}</p>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
