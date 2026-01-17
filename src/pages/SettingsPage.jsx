import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="min-h-screen bg-[#0a1124] text-white pt-24 px-3 sm:px-4 md:px-6">

      <div className="flex flex-col md:flex-row gap-6 lg:gap-10 max-w-7xl mx-auto">

        {/* LEFT SIDEBAR */}
        <div className="
          w-full 
          md:w-72 
          lg:w-80 
          bg-[#111827] 
          rounded-xl 
          shadow-lg 
          p-4 
          sm:p-5 
          h-max
        ">
          <Sidebar />
        </div>

        {/* RIGHT CONTENT */}
        <div className="
          flex-1 
          bg-[#111827] 
          p-4 
          sm:p-6 
          rounded-xl 
          shadow-lg 
          border 
          border-gray-700
          
        ">

          {/* TOP TABS */}
          <div className="flex gap-2 sm:gap-4 mb-6 flex-wrap">
            {["general", "chat", "advanced"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  px-3 
                  sm:px-5 
                  py-2 
                  rounded 
                  text-sm 
                  sm:text-base 
                  font-semibold 
                  ${activeTab === tab ? "bg-purple-600" : "bg-gray-800 hover:bg-gray-700"}
                `}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* ============= GENERAL TAB ============= */}
          {activeTab === "general" && (
            <div className="space-y-6">

              {/* Currency */}
              <div>
                <label className="font-semibold text-sm sm:text-base">Currency</label>
                <select className="w-full mt-2 p-2 bg-gray-900 rounded border border-gray-700 text-sm sm:text-base">
                  <option>INR</option>
                  <option>USD</option>
                  <option>EUR</option>
                  <option>GBP</option>
                </select>
              </div>

              {/* Language */}
              <div>
                <label className="font-semibold text-sm sm:text-base">Language</label>
                <select className="w-full mt-2 p-2 bg-gray-900 rounded border border-gray-700 text-sm sm:text-base">
                  <option>English</option>
                  <option>Hindi</option>
                  <option>Spanish</option>
                </select>
              </div>

              {/* Phone Visibility */}
              <div>
                <label className="font-semibold text-sm sm:text-base">Phone Number Visibility</label>
                <div className="mt-2 space-y-2 text-sm sm:text-base">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="phone" /> Visible to Everyone
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="phone" /> Visible to Only My Customers
                  </label>
                </div>
              </div>

              {/* Profile Visibility */}
              <div>
                <label className="font-semibold text-sm sm:text-base">Profile Visibility</label>
                <div className="mt-2 space-y-2 text-sm sm:text-base">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="profile" /> Visible to Everyone
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="profile" /> Visible to Only My Customers
                  </label>
                </div>
              </div>

            </div>
          )}

          {/* ============= CHAT TAB ============= */}
          {activeTab === "chat" && (
            <div className="space-y-6">

              {/* Font Size */}
              <div>
                <label className="font-semibold text-sm sm:text-base">Font Size</label>
                <div className="mt-2 flex gap-4 flex-wrap text-sm sm:text-base">
                  {["Small", "Medium", "Large"].map((size) => (
                    <label key={size} className="flex items-center gap-2">
                      <input type="radio" name="fontsize" /> {size}
                    </label>
                  ))}
                </div>
              </div>

              {/* Icons toggles */}
              {[
                "Enable Chat",
                "Enable Email Notification",
                "Backup Chat",
              ].map((toggle) => (
                <div key={toggle} className="flex justify-between items-center text-sm sm:text-base">
                  <label className="font-semibold">{toggle}</label>
                  <label className="relative inline-flex cursor-pointer items-center">
                    <input type="checkbox" className="peer sr-only" />
                    <div className="peer h-5 sm:h-6 w-10 sm:w-11 rounded-full bg-gray-600 
                      after:absolute after:h-4 sm:after:h-5 after:w-4 sm:after:w-5 after:rounded-full 
                      after:bg-white after:transition-all peer-checked:bg-purple-600 
                      peer-checked:after:translate-x-full"></div>
                  </label>
                </div>
              ))}

              {/* Delete Chat */}
              <div>
                <label className="font-semibold text-sm sm:text-base">Delete Chat</label>
                <select className="w-full mt-2 p-2 bg-gray-900 rounded border border-gray-700 text-sm sm:text-base">
                  <option>Delete Read Chat</option>
                  <option>Delete All Chat</option>
                </select>
              </div>

              {/* Auto Advance */}
              <div className="flex justify-between items-center text-sm sm:text-base">
                <label className="font-semibold">Auto Advance</label>
                <label className="relative inline-flex cursor-pointer items-center">
                  <input type="checkbox" className="peer sr-only" />
                  <div className="peer h-5 sm:h-6 w-10 sm:w-11 rounded-full bg-gray-600 
                    after:absolute after:h-4 sm:after:h-5 after:w-4 sm:after:w-5 after:rounded-full 
                    after:bg-white after:transition-all peer-checked:bg-purple-600 
                    peer-checked:after:translate-x-full"></div>
                </label>
              </div>

              {/* Color Theme */}
              <div>
                <label className="font-semibold text-sm sm:text-base">Color Theme</label>
                <select className="w-full mt-2 p-2 bg-gray-900 border border-gray-700 rounded text-sm sm:text-base">
                  <option>Light</option>
                  <option>Dark</option>
                </select>
              </div>
            </div>
          )}

          {/* ============= ADVANCED TAB ============= */}
          {activeTab === "advanced" && (
            <div className="space-y-6">

              {/* Dashboard Theme */}
              <div>
                <label className="font-semibold text-sm sm:text-base">Dashboard Theme</label>
                <select className="w-full mt-2 p-2 bg-gray-900 border border-gray-700 rounded text-sm sm:text-base">
                  <option>Modern</option>
                  <option>Classic</option>
                  <option>Minimal</option>
                </select>
              </div>

              {/* Post Ad */}
              <div>
                <label className="font-semibold text-sm sm:text-base">Post Ad</label>
                <select className="w-full mt-2 p-2 bg-gray-900 border border-gray-700 rounded text-sm sm:text-base">
                  <option>Directly</option>
                  <option>By Admin Confirmation</option>
                </select>
              </div>

              {/* Comments */}
              <div>
                <label className="font-semibold text-sm sm:text-base">Comments</label>
                <select className="w-full mt-2 p-2 bg-gray-900 border border-gray-700 rounded text-sm sm:text-base">
                  <option>Directly</option>
                  <option>By Admin Confirmation</option>
                </select>
              </div>

              {/* Toggle Buttons */}
              {[
                "System Notifications",
                "Mail Notifications",
                "Auto Watch Comments",
              ].map((toggle) => (
                <div key={toggle} className="flex justify-between items-center text-sm sm:text-base">
                  <label className="font-semibold">{toggle}</label>
                  <label className="relative inline-flex cursor-pointer items-center">
                    <input type="checkbox" className="peer sr-only" />
                    <div className="peer h-5 sm:h-6 w-10 sm:w-11 rounded-full bg-gray-600 
                      after:absolute after:h-4 sm:after:h-5 after:w-4 sm:after:w-5 after:rounded-full 
                      after:bg-white after:transition-all peer-checked:bg-purple-600 
                      peer-checked:after:translate-x-full"></div>
                  </label>
                </div>
              ))}

            </div>
          )}

          {/* SAVE BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8">
            <button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded text-sm sm:text-base">
              Save Changes
            </button>
            <button className="px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded text-sm sm:text-base">
              Cancel
            </button>
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default SettingsPage;
