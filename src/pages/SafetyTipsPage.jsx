import React from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const SafetyTipsPage = () => {
  const tips = [
    {
      id: 1,
      title: "Watch out for email scams",
      points: [
        "usantium doloremque laudantium",
        "Luxury Home For Sale odio dignissimos qui blanditiis praesentium voluptatem delenti atque",
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled",
        "usantium doloremque laudantium",
      ],
    },
    {
      id: 2,
      title: "Pay with a credit card",
      points: [
        "usantium doloremque laudantium",
        "Always choose secure payment methods",
        "Better fraud protection compared to cash or debit card",
      ],
    },
    {
      id: 3,
      title: "Check your statements",
      points: [
        "Regularly review your bank statements",
        "Detect unauthorized activity early",
      ],
    },
    {
      id: 4,
      title: "Report the company",
      points: [
        "Report suspicious companies immediately",
        "Helps protect other users from scams",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a1124] text-white flex flex-col items-center pt-32 px-4 md:px-0">

      {/* MAIN LAYOUT */}
      <div className="flex flex-col md:flex-row gap-10 max-w-7xl w-full justify-center">

        {/* ---------- LEFT SIDEBAR ---------- */}
        <div className="w-full md:w-80 bg-[#111827] rounded-xl shadow-lg p-5 h-max">
          <Sidebar />
        </div>

        {/* ---------- RIGHT CONTENT ---------- */}
        <div className="flex-1 space-y-8 w-full">
          {tips.map((item) => (
            <div
              key={item.id}
              className="bg-[#111827] rounded-xl border border-gray-700 shadow-lg"
            >
              {/* HEADER */}
              <div className="flex justify-between items-center p-5 border-b border-gray-700">
                <h2 className="text-xl md:text-2xl font-semibold">
                  {item.id}. {item.title}
                </h2>

                <button className="px-4 py-1.5 bg-purple-600 hover:bg-purple-700 rounded text-sm font-medium flex items-center gap-1">
                  ✎ Edit
                </button>
              </div>

              {/* CONTENT */}
              <div className="p-5 space-y-5">

                {/* Bullet List */}
                <ul className="space-y-2">
                  {item.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-300">
                      <span className="text-green-400 text-xl">▸</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* View More Button */}
                <button className="px-5 py-2 bg-black rounded text-white hover:bg-gray-900">
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div className="mt-20 px-4 md:px-0 w-full ">
        <Footer />
      </div>

    </div>
  );
};

export default SafetyTipsPage;
