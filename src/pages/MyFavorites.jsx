import React from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const MyFavorites = () => {
  const favoriteAds = [
    {
      id: 1,
      name: "Modern Kitchen",
      date: "Nov-25-2019 ,",
      time: "8,:18 am",
      category: "Apartments",
      price: "$89",
      status: "Active",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      type: "Sale",
    },
    {
      id: 2,
      name: "Villa",
      date: "Nov-22-2019",
      time: "2:18 am",
      category: "Homes",
      price: "$14,000",
      status: "Closed",
      img: "https://images.unsplash.com/photo-1560448075-bb485b65be14",
      type: "Sale",
    },
    {
      id: 3,
      name: "2BHK Rooms",
      date: "Nov-15-2019  pm",
      time: "1:18 am",
      category: "RealEstate",
      price: "$22,765",
      status: "Sold",
      img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
      type: "Buy",
    },
    {
      id: 4,
      name: "Luxury Rooms",
      date: "Nov-03-2019 ",
      time: "12:18 am",
      category: "Deluxe Houses",
      price: "$35,978",
      status: "Inactive",
      img: "https://images.unsplash.com/photo-1505692794403-34cb0b3b8bd1",
      type: "Sale",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a1124] text-white pt-24 px-4 md:px-0">
      {/* MAIN LAYOUT */}
      <div className="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto">
        {/* SIDEBAR */}
        <Sidebar />

        {/* RIGHT CONTENT */}
        <div className="flex-1 bg-[#111827] p-4 md:p-6 rounded-xl shadow-lg overflow-x-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6">
            My Favorite Ads
          </h2>

          <table className="min-w-[600px] md:min-w-full border-collapse border border-gray-700 rounded-lg">
            <thead className="bg-[#1b2339] text-gray-300 text-sm md:text-base">
              <tr>
                <th className="p-2 md:p-3 border border-gray-600">Item</th>
                <th className="p-2 md:p-3 border border-gray-600">Category</th>
                <th className="p-2 md:p-3 border border-gray-600">Price</th>
                <th className="p-2 md:p-3 border border-gray-600">Ad Status</th>
                <th className="p-2 md:p-3 border border-gray-600">Action</th>
              </tr>
            </thead>

            <tbody>
              {favoriteAds.map((ad) => (
                <tr
                  key={ad.id}
                  className="border-t border-gray-700 hover:bg-[#1a2136] transition"
                >
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

                  <td className="p-2 md:p-3 border border-gray-600 text-sm md:text-base">{ad.category}</td>
                  <td className="p-2 md:p-3 font-semibold border border-gray-600 text-sm md:text-base">{ad.price}</td>

                  <td className="p-2 md:p-3 border border-gray-600 text-sm md:text-base">
                    <span
                      className={`px-2 md:px-3 py-1 rounded text-xs md:text-sm font-semibold ${
                        ad.status === "Active"
                          ? "bg-green-700"
                          : ad.status === "Sold"
                          ? "bg-blue-700"
                          : ad.status === "Closed"
                          ? "bg-red-700"
                          : "bg-purple-700"
                      }`}
                    >
                      {ad.status}
                    </span>
                  </td>

                  <td className="p-2 md:p-3 flex gap-2 md:gap-3 border border-gray-600">
                    <button className="p-1 md:p-2 bg-red-600 hover:bg-red-700 rounded text-xs md:text-base">
                      🗑
                    </button>
                    <button className="p-1 md:p-2 bg-blue-600 hover:bg-blue-700 rounded text-xs md:text-base">
                      🛒
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

export default MyFavorites;
