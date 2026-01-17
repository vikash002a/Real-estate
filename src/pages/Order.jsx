import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const Order = () => {
  const allOrders = [
   
  { id: "EST-2001", category: "Apartment", date: "2025-11-01", price: "$120,000", status: "Pending" },
  { id: "EST-2002", category: "Villa", date: "2025-11-02", price: "$450,000", status: "Completed" },
  { id: "EST-2003", category: "Commercial Shop", date: "2025-11-03", price: "$80,000", status: "Shipped" },
  { id: "EST-2004", category: "Plot", date: "2025-11-04", price: "$55,000", status: "Pending" },
  { id: "EST-2005", category: "Farm House", date: "2025-11-05", price: "$320,000", status: "Cancelled" },
  { id: "EST-2006", category: "Office Space", date: "2025-11-06", price: "$150,000", status: "Completed" },
  { id: "EST-2007", category: "Studio Apartment", date: "2025-11-07", price: "$75,000", status: "Shipped" },
  { id: "EST-2008", category: "Bungalow", date: "2025-11-08", price: "$520,000", status: "Pending" },
  { id: "EST-2009", category: "Warehouse", date: "2025-11-09", price: "$180,000", status: "Completed" },
  { id: "EST-2010", category: "Penthouse", date: "2025-11-10", price: "$670,000", status: "Shipped" },
  ];

  const [currentPage, setCurrentPage] = useState(1);

  // 🔥 SHOW 9 ITEMS PER PAGE
  const itemsPerPage = 9;

  const totalPages = Math.ceil(allOrders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentOrders = allOrders.slice(startIndex, startIndex + itemsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="min-h-screen bg-[#0a1124] text-white pt-24 px-4 md:px-0">
      <div className="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto">

        {/* ---------------- DESKTOP SIDEBAR ---------------- */}
        <div className="hidden md:flex flex-col">
          <Sidebar />
        </div>

        {/* ---------------- MOBILE SIDEBAR (SCROLLABLE) ---------------- */}
        <div className=" md:hidden overflow-x-auto w-full mb-4">
          <div className=" flex-row gap-4 px-2">
            <Sidebar isMobile />
          </div>
        </div>

        {/* ---------------- RIGHT CONTENT ---------------- */}
        <div className="flex-1 space-y-6">

          <div className="bg-[#111827] p-4 md:p-6 rounded-xl shadow-lg overflow-x-auto">
           <h2 className="text-2xl md:text-3xl font-semibold mb-4">Orders list</h2>

  <table className="min-w-[600px] w-full text-left text-sm md:text-base border-collapse">
    <thead>
      <tr className="bg-[#1b2339] text-gray-300">
        <th className="p-2 md:p-3 border-b border-gray-600">Order ID</th>
        <th className="p-2 md:p-3 border-b border-gray-600">Category</th>
        <th className="p-2 md:p-3 border-b border-gray-600">Date</th>
        <th className="p-2 md:p-3 border-b border-gray-600">Price</th>
        <th className="p-2 md:p-3 border-b border-gray-600">Status</th>
      </tr>
    </thead>
    <tbody>
      {currentOrders.map((order, index) => (
        <tr
          key={order.id}
          className={`hover:bg-[#1a2136] transition ${
            index % 2 === 0 ? "bg-[#111827]" : "bg-[#121926]"
          }`}
        >
          <td className="p-2 md:p-3 border-b border-gray-700 font-semibold">{order.id}</td>
          <td className="p-2 md:p-3 border-b border-gray-700">{order.category}</td>
          <td className="p-2 md:p-3 border-b border-gray-700">{order.date}</td>
          <td className="p-2 md:p-3 border-b border-gray-700 font-semibold">{order.price}</td>
          <td className="p-2 md:p-3 border-b border-gray-700">
            <span
              className={`px-2 py-1 rounded text-xs md:text-sm font-semibold ${
                order.status === "Completed"
                  ? "bg-green-700"
                  : order.status === "Pending"
                  ? "bg-yellow-600"
                  : order.status === "Shipped"
                  ? "bg-blue-700"
                  : "bg-red-700"
              }`}
            >
              {order.status}
            </span>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
            

            {/* Pagination */}
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded disabled:opacity-50"
              >
                Prev
              </button>
              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* ---------------- FOOTER ---------------- */}
      <div className="mt-10 px-4 md:px-0">
        <Footer />
      </div>
    </div>
  );
};

export default Order;
