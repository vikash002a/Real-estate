import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  );

  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { label: "✏️ Edit Profile", path: "/edit-profile" },
    { label: "⭐ My Favorites", path: "/my-favorites" },
    { label: "📢 My Ads", path: "/my-ads" },
    { label: "💳 Payments", path: "/Payments" },
    { label: "📦 Orders", path: "/orders" },
    { label: "🔒 Safety Tips", path: "/safety-tips" },
    { label: "⚙️ Settings", path: "/settings" },
  ];

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageURL = URL.createObjectURL(file);
    setProfileImage(imageURL);
  };

  const handleLinkClick = () => {
    setTimeout(() => setIsOpen(false), 200);
  };

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate("/login");
  };

  return (
    <>
      {/* Mobile Top Bar */}
<div className="md:hidden relative z-40 flex justify-between items-center px-4 py-3 bg-[#111827] text-white border-b border-gray-700">
         <h2 className="font-bold text-lg">Menu</h2>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-700 px-4 py-2 rounded-lg text-white"
        >
          {isOpen ? "Close" : "Open"}
        </button>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`fixed md:static top-0 left-0 w-64 bg-[#111827] text-white p-6 
          border-r border-gray-700 shadow-xl rounded-r-xl
          z-50 md:z-auto transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
          overflow-y-auto md:overflow-visible`}
        style={{ maxHeight: "130vh" }}
      >
        {/* Profile Section */}
        <div className="text-center mb-10">

          <div className="relative w-24 h-24 mx-auto">
            <img
              src={profileImage}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-white/30 object-cover"
            />

            {/* Hover change button */}
            <label
              htmlFor="profileUpload"
              className="absolute inset-0 flex items-center justify-center 
              bg-black/60 rounded-full opacity-0 hover:opacity-100 
              cursor-pointer transition"
            >
              <span className="text-white text-xs font-semibold">Change</span>
            </label>

            <input
              id="profileUpload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </div>

          <h2 className="text-xl font-semibold mt-3">
            <Link to="/UserProfile" className="hover:underline">
              John Doe
            </Link>
          </h2>

          <p className="text-white/70 text-sm">john.doe@example.com</p>
        </div>

        {/* Menu Links */}
        <div className="space-y-2">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={handleLinkClick}
              className={`block px-4 py-2 rounded-lg font-medium transition
                ${
                  location.pathname === item.path
                    ? "bg-white/20"
                    : "hover:bg-white/10"
                }`}
            >
              {item.label}
            </Link>
          ))}

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 mt-2 rounded-lg text-red-400 bg-red-600/20 hover:bg-red-600/30"
          >
            🚪 Logout
          </button>
        </div>

        {/* Search Box */}
        <div className="mt-8 bg-[#0E1626] p-5 rounded-xl border border-gray-700 shadow-lg">
          <input
            type="text"
            placeholder="Type your location..."
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:ring focus:ring-blue-500"
          />

          <label className="block font-semibold mt-4">All Categories</label>
          <select className="w-full p-3 border rounded-lg mt-2 bg-gray-800 text-white">
            <option>Select Category</option>
            <option>Apartments</option>
            <option>Villas</option>
            <option>Office</option>
          </select>

          <button className="w-full mt-4 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-700 to-blue-400">
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
