import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Edit, Trash2, Eye, Heart } from "lucide-react";

const MyAds = () => {
  const [activeFilter, setActiveFilter] = useState("ALL ADS");

  const filters = ["ALL ADS", "PUBLISHED", "FEATURED", "SOLD", "ACTIVE", "EXPIRED"];

  const ads = [
    {
      id: 1,
      name: "Luxury Villa",
      date: "Nov-10-2019",
      time: "9:18 am",
      category: "Homes",
      price: "$12,500",
      status: "Active",
      img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      type: "Sale",
    },
    {
      id: 2,
      name: "Modern Apartment",
      date: "Nov-05-2019",
      time: "6:55 pm",
      category: "Apartment",
      price: "$8,200",
      status: "Sold",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      type: "Rent",
    },
  ];

  const filteredAds = ads.filter((ad) => {
    if (activeFilter === "ALL ADS") return true;
    return ad.status.toUpperCase() === activeFilter;
  });

  return (
    <div className="min-h-screen bg-[#0a1124] text-white pt-24 px-4 md:px-0">
      {/* MAIN LAYOUT */}
      <div className="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto">

        {/* SIDEBAR */}
        <Sidebar />

        {/* RIGHT CONTENT */}
        <div className="flex-1 bg-[#111827] p-4 md:p-6 rounded-xl shadow-lg overflow-x-auto">

          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6">
            My Ads
          </h2>

          {/* FILTER BUTTONS */}
          <div className="flex gap-2 flex-wrap mb-6">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-3 py-1.5 text-xs md:text-sm rounded-lg border transition 
                ${activeFilter === f
                    ? "bg-blue-600 border-blue-400"
                    : "border-gray-600 hover:bg-gray-700"}`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* TABLE */}
          <table className="min-w-[600px] md:min-w-full border-collapse border border-gray-700 rounded-lg">
            <thead className="bg-[#1b2339] text-gray-300 text-sm md:text-base">
              <tr>
                <th className="p-2 md:p-3 border border-gray-600">Mark</th>
                <th className="p-2 md:p-3 border border-gray-600">Item</th>
                <th className="p-2 md:p-3 border border-gray-600">Category</th>
                <th className="p-2 md:p-3 border border-gray-600">Price</th>
                <th className="p-2 md:p-3 border border-gray-600">Ad Status</th>
                <th className="p-2 md:p-3 border border-gray-600">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredAds.map((ad) => (
                <tr
                  key={ad.id}
                  className="border-t border-gray-700 hover:bg-[#1a2136] transition"
                >
                  <td className="p-2 md:p-3 border border-gray-600 text-center">
                    <input type="checkbox" className="w-4 h-4" />
                  </td>

                  <td className="p-2 md:p-3 flex items-center gap-2 md:gap-3 border border-gray-600">
                    <img
                      src={ad.img}
                      className="w-12 h-12 md:w-16 md:h-16 rounded-lg object-cover"
                      alt={ad.name}
                    />
                    <div>
                      <p className="font-semibold text-sm md:text-base">{ad.name}</p>
                      <p className="text-xs md:text-sm text-gray-400">{ad.date}</p>
                      <p className="text-xs md:text-sm text-gray-400">{ad.time}</p>
                      <p className="text-xs md:text-sm text-gray-400">🏷 {ad.type}</p>
                    </div>
                  </td>

                  <td className="p-2 md:p-3 border border-gray-600 text-sm md:text-base">
                    {ad.category}
                  </td>

                  <td className="p-2 md:p-3 font-semibold border border-gray-600 text-sm md:text-base">
                    {ad.price}
                  </td>

                  <td className="p-2 md:p-3 border border-gray-600 text-sm md:text-base">
                    <span
                      className={`px-2 md:px-3 py-1 rounded text-xs md:text-sm font-semibold ${
                        ad.status === "Active"
                          ? "bg-green-700"
                          : ad.status === "Sold"
                          ? "bg-blue-700"
                          : "bg-red-700"
                      }`}
                    >
                      {ad.status}
                    </span>
                  </td>

                  <td className="p-2 md:p-3 flex gap-2 md:gap-3 border border-gray-600">
                    <button className="p-1 md:p-2 bg-blue-600 hover:bg-blue-700 rounded text-xs md:text-base">
                      <Edit size={16} />
                    </button>
                    <button className="p-1 md:p-2 bg-red-600 hover:bg-red-700 rounded text-xs md:text-base">
                      <Trash2 size={16} />
                    </button>
                    <button className="p-1 md:p-2 bg-pink-600 hover:bg-pink-700 rounded text-xs md:text-base">
                      <Heart size={16} />
                    </button>
                    <button className="p-1 md:p-2 bg-green-600 hover:bg-green-700 rounded text-xs md:text-base">
                      <Eye size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>

      {/* FOOTER */}
      <div className="mt-10 px-4 md:px-0">
        <Footer />
      </div>
    </div>
  );
};

export default MyAds;
