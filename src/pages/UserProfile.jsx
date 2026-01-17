import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaGoogle, FaShareAlt } from "react-icons/fa";
import Footer from "../components/Footer";

export default function UserProfile() {
  return (
    <div className="min-h-screen bg-[#0f1629]">
      
      {/* Top Banner */}
      <div
        className="w-full h-52 md:h-72 flex items-center justify-center bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative text-center">
          <h1 className="text-white text-3xl md:text-4xl font-bold">User Profile</h1>
        </div>
      </div>

      {/* Profile Card */}
      <div className="max-w-4xl mx-auto mt-[-50px] md:mt-[-70px] bg-[#121a2f] rounded-xl shadow-xl border border-gray-800 overflow-hidden">

        {/* Cover Image */}
        <div
          className="w-full h-40 md:h-56 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1508615070457-7baeba4003ab?auto=format&fit=crop&w=1600&q=80')",
          }}
        />

        {/* Profile Section */}
        <div className="text-center px-4 pb-8 mt-[-40px] md:mt-[-50px]">

          {/* Profile Image */}
          <img
            src="https://randomuser.me/api/portraits/men/52.jpg"
            className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-white mx-auto shadow-lg"
            alt="profile"
          />

          {/* Name */}
          <h2 className="text-white text-xl md:text-2xl font-semibold mt-3">
            Robert McLean
          </h2>

          <p className="text-gray-300 text-sm md:text-base">
            Member Since: November 2008
          </p>

          {/* Rating */}
          <div className="text-yellow-400 text-lg md:text-xl mt-2">
            ⭐⭐⭐⭐⭐{" "}
            <span className="text-white text-xs md:text-sm ml-1">
              (3876 Reviews)
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 mt-4">
            <FaFacebookF className="bg-[#1d2e50] text-white w-8 h-8 md:w-10 md:h-10 p-2 rounded-full hover:bg-blue-600 cursor-pointer" />
            <FaTwitter className="bg-[#1d2e50] text-white w-8 h-8 md:w-10 md:h-10 p-2 rounded-full hover:bg-blue-500 cursor-pointer" />
            <FaGoogle className="bg-[#1d2e50] text-white w-8 h-8 md:w-10 md:h-10 p-2 rounded-full hover:bg-red-500 cursor-pointer" />
            <FaShareAlt className="bg-[#1d2e50] text-white w-8 h-8 md:w-10 md:h-10 p-2 rounded-full hover:bg-green-500 cursor-pointer" />
          </div>

          {/* Tabs */}
          <div className="grid grid-cols-2 md:flex md:justify-around mt-8 bg-[#0d1526] py-4 rounded-lg gap-4 md:gap-0">

            <Link to="/profile" className="text-white hover:text-blue-400 font-semibold text-center">
              Profile
            </Link>

            <Link to="/edit-profile" className="text-white hover:text-blue-400 font-semibold text-center">
              Edit Profile
            </Link>

            <Link to="/my-ads" className="text-white hover:text-blue-400 font-semibold text-center">
              My Ads 
              <span className="bg-yellow-600 text-black px-2 py-1 rounded-full text-xs ml-1">20</span>
            </Link>

            <Link to="/featured-ads" className="text-white hover:text-blue-400 font-semibold text-center">
              Featured Ads
              <span className="bg-yellow-600 text-black px-2 py-1 rounded-full text-xs ml-1">08</span>
            </Link>

            <Link to="/published-ads" className="text-white hover:text-blue-400 font-semibold text-center col-span-2 md:col-span-1">
              Published Ads
              <span className="bg-yellow-600 text-black px-2 py-1 rounded-full text-xs ml-1">05</span>
            </Link>

          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}
