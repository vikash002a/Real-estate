import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link

export default function PropertyFilter() {
  const properties = [
    // Apartments
    {
      id: 1,
      type: "apartment",
      title: "Modern 2 BHK Apartment",
      price: "$120,000",
      location: "Delhi, India",
      image:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 2,
      type: "apartment",
      title: "Luxury City Apartment",
      price: "$180,000",
      location: "Mumbai, India",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 3,
      type: "apartment",
      title: "Family Apartment",
      price: "$95,000",
      location: "Bangalore, India",
      image:
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
    },
    // Villas
    {
      id: 4,
      type: "villa",
      title: "Premium Luxury Villa",
      price: "$350,000",
      location: "Goa, India",
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4df0d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 5,
      type: "villa",
      title: "Beachside Villa",
      price: "$420,000",
      location: "Kerala, India",
      image:
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 6,
      type: "villa",
      title: "Garden Villa",
      price: "$280,000",
      location: "Hyderabad, India",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    },
    // 2BHK Homes
    {
      id: 7,
      type: "2bhk",
      title: "Compact 2 BHK Home",
      price: "$80,000",
      location: "Pune, India",
      image:
        "https://images.unsplash.com/photo-1600585154206-0c59f23c2117?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 8,
      type: "2bhk",
      title: "Affordable 2 BHK",
      price: "$70,000",
      location: "Jaipur, India",
      image:
        "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 9,
      type: "2bhk",
      title: "Modern 2 BHK Apartment",
      price: "$92,000",
      location: "Lucknow, India",
      image:
        "https://images.unsplash.com/photo-1600585153851-29be9ce5f43b?auto=format&fit=crop&w=1200&q=80",
    },
    // Deluxe Houses
    {
      id: 10,
      type: "deluxe",
      title: "Deluxe Premium House",
      price: "$450,000",
      location: "Delhi, India",
      image:
        "https://images.unsplash.com/photo-1600585154771-19a6b4026e60?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 11,
      type: "deluxe",
      title: "Luxury Deluxe Home",
      price: "$520,000",
      location: "Mumbai, India",
      image:
        "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 12,
      type: "deluxe",
      title: "Royal Deluxe House",
      price: "$600,000",
      location: "Hyderabad, India",
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const categories = [
    { label: "All", value: "all" },
    { label: "2 BHK Homes", value: "2bhk" },
    { label: "Villas", value: "villa" },
    { label: "Apartments", value: "apartment" },
    { label: "Deluxe Houses", value: "deluxe" },
  ];

  const [filter, setFilter] = useState("all");

  const filteredData =
    filter === "all" ? properties : properties.filter((p) => p.type === filter);

  return (
    <div className="p-4 max-w-[1200px] mx-auto">
      {/* ⭐ Heading */}
      <h2 className="text-center text-3xl font-bold text-white mt-10 mb-6">
        BEST PROPERTY COLLECTION
      </h2>

      {/* Filter Buttons */}
      <div className="flex justify-center flex-wrap gap-3 mb-6">
        {categories.map((c) => (
          <button
            key={c.value}
            onClick={() => setFilter(c.value)}
            className={`
    px-3 py-1.5 rounded-full border font-semibold text-sm duration-300
    ${
      filter === c.value
        ? "bg-blue-700 text-white border-blue-700"
        : "bg-blue-500 text-white border-blue-600"
    }
    hover:bg-blue-800 active:bg-black
  `}
          >
            {c.label}
          </button>
        ))}
      </div>

     {/* Property Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map((p) => (
          <Link
            key={p.id}
            to={`/PropertyDetails/${p.id}`}
            className="bg-[#07294bff] rounded-xl shadow-md overflow-hidden hover:shadow-xl duration-300 border border-white/50 block"
          >
            {/* Image */}
            <img
              src={p.image}
              className="w-full h-48 object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
              alt={p.title}
            />

            {/* Bottom Section */}
            <div className="p-4 text-white">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="font-bold mt-1">{p.price}</p>
              <p className="text-sm">{p.location}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
