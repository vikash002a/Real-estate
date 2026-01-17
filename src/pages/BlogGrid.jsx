import React from "react";
import { Link } from "react-router-dom";
import { postsData } from "../components/RecentPosts";
import Footer from "../components/Footer";

export default function BlogGrid() {

  return (
    <div className="w-full min-h-screen bg-[#121a2f] pt-32 px-6 text-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6">

        {/* ================== LEFT GRID CONTENT ===================== */}
        <div className="lg:w-2/3 flex flex-col gap-6">

          {/* Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {postsData.map((post) => (
              <div key={post.id} className="bg-white/10 backdrop-blur-lg p-4 rounded-xl border border-white/20 flex flex-col">
                {/* Image */}
                <div
                  className="w-full h-48 rounded-lg bg-cover bg-center mb-3"
                  style={{ backgroundImage: `url(${post.img})` }}
                ></div>

                {/* Category */}
                <p className="text-xs text-blue-400 font-semibold">{post.category || "For Sale"}</p>

                {/* Title */}
                <h3 className="text-lg font-bold mt-1">{post.title}</h3>

                {/* Date & Comments */}
                <p className="text-gray-300 text-sm mt-1">
                  {post.date} • {post.comments} comments
                </p>

                {/* Read More Button */}
                <Link
                  to={`/blog/${post.id}`}
                  className="mt-auto inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm text-white w-fit"
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>

        </div>

        {/* ================== RIGHT SIDEBAR ===================== */}
        <div className="lg:w-1/3 flex flex-col gap-6">

          {/* SEARCH BOX */}
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-xl border border-white/20">
            <h2 className="text-xl font-bold mb-4">Search Blog</h2>
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white outline-none"
            />
            <button className="w-full mt-3 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg">
              Search
            </button>
          </div>

          {/* CATEGORIES */}
          <div className="bg-[#121a2f] p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <div className="space-y-4">
              {[
                { icon: "📑", title: "Apartments", count: 14 },
                { icon: "🛏️", title: "Hostel & 2BHK Flats", count: 63 },
                { icon: "🏢", title: "2BHK Homes", count: 25 },
                { icon: "🏠", title: "RealEstate", count: 74 },
              ].map((cat, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center bg-[#0f1629] p-3 rounded-lg border border-gray-700 hover:bg-[#161d34] transition cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{cat.icon}</span>
                    <p className="text-sm font-medium">{cat.title}</p>
                  </div>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-xs font-semibold">
                    {String(cat.count).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* LATEST ADS */}
          <div className="bg-[#121a2f] p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-bold mb-4">Latest Ads</h3>
            {postsData.slice(0,3).map((ad) => (
              <div
                key={ad.id}
                className="flex gap-3 mb-4 bg-[#0f1629] p-3 rounded-lg items-center border border-gray-700 hover:bg-[#161d34] transition"
              >
                <img src={ad.img} className="w-20 h-16 object-cover rounded-lg" />
                <div className="flex-1">
                  <p className="font-semibold text-sm">{ad.title}</p>
                  <div className="flex items-center text-yellow-400 text-xs">
                    ⭐⭐⭐⭐☆
                  </div>
                  <p className="text-gray-400 text-xs mt-1">{ad.priceRange || "₹50L–1Cr"}</p>
                </div>
              </div>
            ))}
          </div>

          {/* POPULAR TAGS */}
          <div className="bg-[#121a2f] p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-bold mb-4">Popular Tags</h3>
            <div className="flex flex-wrap gap-3">
              {["RealEstate","Homes","3BHK Flats","2BHK Homes","Luxury Rooms","Apartments"].map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-[#0f1629] border border-gray-700 rounded text-sm cursor-pointer hover:bg-gray-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
      <Footer />
    </div>
  );
}
