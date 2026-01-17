import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <header className="bg-gradient-to-r from-[#0A2540] to-[#1A3858] text-white fixed top-0 w-full z-50 shadow-xl">
      {/* ------- TOP BAR ------- */}
      <div className="hidden md:flex justify-between items-center text-sm px-6 py-2 bg-[#092036]">
        <div className="flex items-center gap-6">
         {/* Language */}
<select className="bg-transparent text-white/80 outline-none cursor-pointer
  hover:bg-purple-600/40 focus:bg-purple-600/40
  hover:text-white focus:text-white transition">
  <option className="text-black">English</option>
  <option className="text-black">Hindi</option>
</select>

{/* Currency */}
<select className="bg-transparent text-white/80 outline-none cursor-pointer
  hover:bg-purple-600/40 focus:bg-dark
  hover:text-white focus:text-white transition">
  <option className="text-black">INR (₹)</option>
  <option className="text-black">USD ($)</option>
</select>

        </div>

        <div className="flex items-center gap-6 relative">
          <Link to="/login" className="hover:text-blue-400">
            Login
          </Link>
          <Link to="/register" className="hover:text-blue-400">
            Register
          </Link>

          {/* Dashboard Dropdown */}
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setOpenDropdown("dashboard")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <span className="hover:text-blue-400 font-semibold">
              Dashboard ▼
            </span>

            {openDropdown === "dashboard" && (
              <div className="absolute right-0 bg-[#121a2f]  text-white mt-2 rounded-lg shadow-lg w-48 py-2 z-50">
                {/* ✅ FIXED MY PROFILE LINK */}
                <Link
                  to="/my-profile"
                  className="block px-4 py-2 hover:bg-purple-700"
                >
                  My Profile
                </Link>y

                <Link
                  to="/my-profile"
                  className="block px-4 py-2 hover:bg-purple-700"
                >
                  Ads
                </Link>

                <Link
                  to="/my-profile"
                  className="block px-4 py-2 hover:bg-purple-700"
                >
                  Notifications
                </Link>

                <Link
                  to="/my-profile"
                  className="block px-4 py-2 hover:bg-purple-700"
                >
                  Account Settings
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 hover:bg-purple-700"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ---------- MAIN NAVBAR ---------- */}
      <div className="max-w-[1400px] mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-400 tracking-wide">
          🏠 RealEstatePro
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-[14px] font-normal">
          <Link to="/" className="hover:text-blue-400 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-400 transition">
            About Us
          </Link>

        

          {/* Blogs */}
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setOpenDropdown("blogs")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <span className="hover:text-blue-200 transition">Blogs ▼</span>
            {openDropdown === "blogs" && (
              <div className="absolute left-0 bg-[#121a2f]  text-white mt-2 rounded-lg shadow-lg w-48 py-2">
                <Link
                  to="/blog-grid"
                  className="block px-4 py-2 hover:bg-purple-700"
                >
                  BlogGrid
                </Link>
                <Link
                  to="/Blog-List"
                  className="block px-4 py-2 hover:bg-purple-700"
                >
                  Blog list
                </Link>
                <Link
                  to="/BlogDetails/1"
                  className="block px-4 py-2 hover:bg-purple-700"
                >
                  Blog Details
                </Link>
              </div>
            )}
          </div>

          {/* Categories */}
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setOpenDropdown("categories")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <span className="hover:text-blue-400 transition">Categories ▼</span>
            {openDropdown === "categories" && (
<div className="absolute left-0 bg-[#121a2f] text-white mt-2 rounded-lg shadow-lg w-56 py-2 
     hover:bg-purple-600 transition">
              <Link to={`/properties/1`} className="...">Real Estate</Link>


              </div>
            )}
          </div>

          <Link to="/contact" className="hover:text-blue-400 transition">
            Contact Us
          </Link>
        </nav>

        <Link
          to="/post-property"
          className="hidden md:block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition shadow"
        >
          + Post Property
        </Link>

        <button
          className="md:hidden text-3xl"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* ---------- MOBILE MENU ---------- */}
      {mobileMenu && (
        <div className="md:hidden bg-[#0A2540] px-6 py-5 space-y-4 text-[15px]">
          <Link to="/" className="block">
            Home
          </Link>
          <Link to="/about" className="block">
            About Us
          </Link>

        

          <details>
            <summary className="cursor-pointer py-2">Blogs</summary>
            <div className="ml-4 space-y-2 mt-1">
               <Link
                  to="/blog-grid"
                  className="block px-4 py-2 hover:bg-purple-700"
                >
                  BlogGrid
                </Link>
                <Link
                  to="/Blog-List"
                  className="block px-4 py-2 hover:bg-purple-700"
                >
                  Blog list
                </Link>
                <Link
                  to="/BlogDetails/1"
                  className="block px-4 py-2 hover:bg-purple-700"
                >
                  Blog Details
                </Link>
            </div>
          </details>

          <details>
            <summary className="cursor-pointer py-2">Categories</summary>
            <div className="ml-4 space-y-2 mt-1">
                             <Link to={`/properties/1`} className="...">Real Estate</Link>

            </div>

          </details>

    {/* Contact Us link for mobile */}
    <Link to="/contact" className="block text-white/90 hover:text-blue-400 transition">
      Contact Us
    </Link>
          {/* Login / Register */}
          <div className="pt-3 space-y-2 border-t border-white/10">
            <Link to="/login" className="block text-white/90">
              Login
            </Link>
            <Link to="/register" className="block text-white/90">
              Register
            </Link>

            {/* M{/* Mobile Dashboard */}
<div className="mt-2">
  <button
    onClick={() =>
      setOpenDropdown(openDropdown === "dashboard" ? null : "dashboard")
    }
    className="w-full flex justify-between items-center py-2 text-white/90 cursor-pointer focus:outline-none"
  >
    Dashboard
    <span className={`transition-transform ${openDropdown === "dashboard" ? "rotate-180" : ""}`}>
      ▼
    </span>
  </button>

  {/* Dropdown Menu */}
  <div
    className={`ml-4 mt-1 space-y-2 overflow-hidden transition-all duration-300 ${
      openDropdown === "dashboard" ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
    }`}
  >
    <Link
                  to="/my-profile"
                  className="block px-4 py-2 hover:bg-purple-700"
                >
                  My Profile
                </Link>

    <Link
                  to="/my-profile"
                  className="block px-4 py-2 hover:bg-purple-700"
                >
                  Ads
                </Link>
 <Link
                  to="/my-profile"
                  className="block px-4 py-2 hover:bg-purple-700"
                >
                  Notifiaction
                </Link>
    <Link
                  to="/my-profile"
                  className="block px-4 py-2 hover:bg-purple-700"
                >
                  Account Settings
                </Link>

    <button
      onClick={() => {
        handleLogout();
        setMobileMenu(false);
      }}
      className="w-full text-left px-4 py-2 text-red-400 hover:bg-red-600 hover:text-white rounded transition"
    >
      Logout
    </button>
  </div>
</div>
 </div>
          <Link
            to="/post-property"
            className="block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition shadow mt-4"
          >
            + Post Property
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
