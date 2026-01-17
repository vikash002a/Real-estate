import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Calendar, Eye } from "lucide-react";

const Payment = () => {
  const [activeMethod, setActiveMethod] = useState("creditCard");

  const paymentDetails = [
    {
      id: 1,
      invoiceId: "INV-1001",
      category: "Subscription",
      purchaseDate: "2025-11-01",
      price: "$99",
      dueDate: "2025-11-10",
    },
    {
      id: 2,
      invoiceId: "INV-1002",
      category: "Product",
      purchaseDate: "2025-11-05",
      price: "$250",
      dueDate: "2025-11-15",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a1124] text-white pt-24 px-4 md:px-0">
      
      {/* ---------------- MOBILE SIDEBAR (HORIZONTAL SCROLL) ---------------- */}
      <div className="md:hidden overflow-x-auto  mb-4">
        <div className=" gap-4 px-2">
          <Sidebar isMobile />
        </div>
      </div>

      {/* ---------------- DESKTOP LAYOUT ---------------- */}
      <div className="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto">

        {/* DESKTOP SIDEBAR */}
        <div className="hidden md:block w-64">
          <Sidebar />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 space-y-6">

          {/* ---------------- PAYMENT METHOD SECTION ---------------- */}
          <div className="bg-[#111827] p-4 md:p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Payment</h2>

            {/* METHOD BUTTONS */}
            <div className="flex gap-2 flex-wrap mb-4 overflow-x-auto">
              <button
                onClick={() => setActiveMethod("creditCard")}
                className={`px-4 py-2 rounded-lg border flex-shrink-0 transition ${
                  activeMethod === "creditCard"
                    ? "bg-blue-600 border-blue-400"
                    : "border-gray-600 hover:bg-gray-700"
                }`}
              >
                Credit Card
              </button>
              <button
                onClick={() => setActiveMethod("paypal")}
                className={`px-4 py-2 rounded-lg border flex-shrink-0 transition ${
                  activeMethod === "paypal"
                    ? "bg-blue-600 border-blue-400"
                    : "border-gray-600 hover:bg-gray-700"
                }`}
              >
                PayPal
              </button>
              <button
                onClick={() => setActiveMethod("bankTransfer")}
                className={`px-4 py-2 rounded-lg border flex-shrink-0 transition ${
                  activeMethod === "bankTransfer"
                    ? "bg-blue-600 border-blue-400"
                    : "border-gray-600 hover:bg-gray-700"
                }`}
              >
                Bank Transfer
              </button>
            </div>

            {/* PAYMENT FORM */}
            {activeMethod === "creditCard" && (
              <div className="bg-[#1b2339] p-4 md:p-6 rounded-lg shadow-md space-y-4">
                <div>
                  <label className="block mb-1 font-medium">Card Holder Name</label>
                  <input type="text" placeholder="John Doe" className="w-full p-2 rounded-md bg-gray-900 border border-gray-600" />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Card Number</label>
                  <input type="text" placeholder="1234 5678 9012 3456" className="w-full p-2 rounded-md bg-gray-900 border border-gray-600" />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Expiration Date</label>
                  <input type="text" placeholder="MM/YY" className="w-full p-2 rounded-md bg-gray-900 border border-gray-600" />
                </div>
                <button className="w-full md:w-auto px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg mt-2">
                  Submit
                </button>
              </div>
            )}

            {activeMethod === "paypal" && (
              <div className="bg-[#1b2339] p-4 md:p-6 rounded-lg shadow-md space-y-4">
                <p className="text-gray-300 mb-2">
                  Login to your PayPal account to complete payment securely.
                </p>
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded">Login to PayPal</button>
                <p className="text-gray-400 mt-2 text-sm">
                  Note: PayPal transactions are secure and protected.
                </p>
              </div>
            )}

            {activeMethod === "bankTransfer" && (
              <div className="bg-[#1b2339] p-4 md:p-6 rounded-lg shadow-md space-y-4">
                <div>
                  <label className="block mb-1 font-medium">Bank Name</label>
                  <input type="text" placeholder="Bank of React" className="w-full p-2 rounded-md bg-gray-900 border border-gray-600" />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Account Number</label>
                  <input type="text" placeholder="1234567890" className="w-full p-2 rounded-md bg-gray-900 border border-gray-600" />
                </div>
                <div>
                  <label className="block mb-1 font-medium">IBAN</label>
                  <input type="text" placeholder="DE89 3704 0044 0532 0130 00" className="w-full p-2 rounded-md bg-gray-900 border border-gray-600" />
                </div>
              </div>
            )}
          </div>

          {/* ---------------- PAYMENT DETAILS SECTION ---------------- */}
          <div className="bg-[#111827] p-4 md:p-6 rounded-xl shadow-lg overflow-x-auto">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Payment Details</h2>

            <table className="min-w-[600px] w-full text-left text-sm md:text-base">
              <thead>
                <tr className="border-b border-gray-700 text-gray-300">
                  <th className="p-2 md:p-3">Invoice ID</th>
                  <th className="p-2 md:p-3">Category</th>
                  <th className="p-2 md:p-3">Purchase Date</th>
                  <th className="p-2 md:p-3">Price</th>
                  <th className="p-2 md:p-3">Due Date</th>
                  <th className="p-2 md:p-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {paymentDetails.map((payment) => (
                  <tr key={payment.id} className="border-t border-gray-700 hover:bg-[#1a2136] transition">
                    <td className="p-2 md:p-3">{payment.invoiceId}</td>
                    <td className="p-2 md:p-3">{payment.category}</td>
                    <td className="p-2 md:p-3">{payment.purchaseDate}</td>
                    <td className="p-2 md:p-3 font-semibold">{payment.price}</td>
                    <td className="p-2 md:p-3">{payment.dueDate}</td>
                    <td className="p-2 md:p-3 flex gap-2">
                      <button className="p-1 bg-gray-700 hover:bg-gray-600 rounded"><Calendar size={16} /></button>
                      <button className="p-1 bg-gray-700 hover:bg-gray-600 rounded"><Eye size={16} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>

        </div>
      </div>

      {/* FOOTER */}
      <div className="mt-10 px-4 md:px-0">
        <Footer />
      </div>
    </div>
  );
};

export default Payment;
