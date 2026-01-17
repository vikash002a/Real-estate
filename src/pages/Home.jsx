import React from "react";
import { FaBuilding, FaStore, FaBriefcase, FaHome } from "react-icons/fa";
import CategorySlider from "../components/CategorySlider";
import Footer from "../components/Footer";
import LatestProperties from "../components/LatestProperties";
import FeaturedProperties from "../components/FeaturedProperties";
import CounterPage from "../components/CounterPage";
import PropertyFilter from "../components/PropertyFilter";
import Testimonials from "../components/Testimonials";
import TopListingPlaces from "../components/TopListingPlaces";
import DownloadPage from "../components/DownloadPage";
import RecentPosts from "../components/RecentPosts";

const Home = () => {
  const categories = [
    { name: "Commercial Land", icon: <FaBuilding size={22} />, count: 12 },
    { name: "Showrooms & Shops", icon: <FaStore size={22} />, count: 18 },
    { name: "Office Rooms", icon: <FaBriefcase size={22} />, count: 9 },
    { name: "Residential", icon: <FaHome size={22} />, count: 25 },
  ];

  return (
   <div className="w-full bg-[#0B2C4D] overflow-hidden mt-10 sm:mt-2 md:mt-2">


      {/* Banner */}
      <div
        className="relative w-full bg-cover bg-center min-h-[70vh] flex items-center"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80")`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Banner Text + Search Box */}
        <div className="relative flex flex-col justify-center items-center w-full text-center px-4">

          <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg leading-snug">
            Your Property, Our Priority
          </h1>

          <p className="text-white text-xs sm:text-base md:text-lg mt-2 drop-shadow-lg max-w-md">
            Buy • Sell • Rent • Luxury Estates • Apartments • Farmhouses
          </p>

          {/* Slim Search Bar */}
          <div className="
            mt-5 bg-white/20 backdrop-blur-md border border-white/40 rounded-xl p-3 
            flex flex-col md:flex-row items-center gap-3 
            max-w-[850px] w-full shadow-xl
          ">

            <input
              type="text"
              placeholder="Find my property..."
              className="w-full bg-white/30 text-white placeholder-white/70 p-2 text-sm rounded-md border border-white/20 outline-none"
            />

            <input
              type="text"
              placeholder="Search Location..."
              className="w-full bg-white/30 text-white placeholder-white/70 p-2 text-sm rounded-md border border-white/20 outline-none"
            />

            <input
              type="date"
              className="w-full bg-white/30 text-white p-2 text-sm rounded-md border border-white/20 outline-none"
            />

            <input
              type="date"
              className="w-full bg-white/30 text-white p-2 text-sm rounded-md border border-white/20 outline-none"
            />

            <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-all shadow">
              Search
            </button>

          </div>
        </div>
      </div>

      {/* Category Boxes */}
<div className="w-full px-4 py-6 mt-2 relative z-20">
        <div className="max-w-[1100px] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">

          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-white/25 backdrop-blur-lg border border-white/40 rounded-xl px-4 py-3 
              shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-300 cursor-pointer 
              flex items-center gap-3"
            >
              <div className="text-blue-300 text-xl">{item.icon}</div>

              <div className="flex flex-col leading-tight">
                <h3 className="font-semibold text-sm">{item.name}</h3>
                <p className="text-xs opacity-80">{item.count} Properties</p>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* Sections */}
      <CategorySlider />
      <LatestProperties />
      <FeaturedProperties />
      <CounterPage />
      <PropertyFilter />
      <Testimonials />
      <TopListingPlaces />
      <DownloadPage />
      <RecentPosts />
      <Footer />

    </div>
  );
};

export default Home;
