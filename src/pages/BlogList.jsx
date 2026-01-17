import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const blogData = [
 {
    id: 1,
    title: "Luxury 3BHK Apartment in Downtown",
    category: "For Sale",
    date: "Dec 01, 2025",
    comments: 12,
    img: "https://i.ibb.co/vQwkpDM/house1.jpg",
    description: "Modern 3BHK apartment with all amenities and spacious interiors.",
  },
  {
    id: 2,
    title: "Cozy 2BHK Flat Near Park",
    category: "For Rent",
    date: "Nov 28, 2025",
    comments: 8,
    img: "https://i.ibb.co/JqN0M8c/house2.jpg",
    description: "Peaceful location with great community and green surroundings.",
  },
  {
    id: 3,
    title: "Premium Villa with Pool",
    category: "For Sale",
    date: "Nov 25, 2025",
    comments: 20,
    img: "https://i.ibb.co/2N7Q1rb/house3.jpg",
    description: "Luxury villa with private pool and garden in elite area.",
  },
  {
    id: 4,
    title: "Modern Studio Apartment",
    category: "For Rent",
    date: "Nov 20, 2025",
    comments: 5,
    img: "https://i.ibb.co/vQwkpDM/house1.jpg",
    description: "Compact and stylish studio perfect for singles or couples.",
  },
  {
    id: 5,
    title: "Spacious 4BHK Villa",
    category: "For Sale",
    date: "Nov 15, 2025",
    comments: 10,
    img: "https://i.ibb.co/JqN0M8c/house2.jpg",
    description: "Elegant villa with garden and private parking.",
  },
  {
    id: 6,
    title: "Luxury Penthouse Apartment",
    category: "For Sale",
    date: "Nov 10, 2025",
    comments: 18,
    img: "https://i.ibb.co/2N7Q1rb/house3.jpg",
    description: "Top-floor penthouse with city view and modern interiors.",
  },
  
];

const BlogList = () => {
  return (
    <div className="w-full min-h-screen bg-[#121a2f] pt-32  text-white  ">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 px-4">

        {/* ========== LEFT CONTENT ========== */}
        <div className="lg:w-2/3 flex flex-col gap-6">

{blogData.map((blog) => (
  <div
    key={blog.id}
    className="bg-[#0f1629] p-4 rounded-xl border border-gray-700 hover:shadow-lg transition flex flex-col md:flex-row gap-4"
  >
    {/* LEFT IMAGE */}
    <div className="md:w-1/3 w-full h-40 md:h-auto rounded-lg bg-cover bg-center flex-shrink-0"
      style={{ backgroundImage: `url(${blog.img})` }}
    ></div>

    {/* RIGHT CONTENT */}
    <div className="md:w-2/3 flex flex-col justify-between">
      <div>
        <p className="text-sm text-blue-400 font-semibold">{blog.category}</p>
        <h2 className="text-xl font-bold mt-1">{blog.title}</h2>
        <p className="text-gray-400 text-xs mt-1">{blog.date} • {blog.comments} Comments</p>
        <p className="text-gray-300 mt-2 text-sm line-clamp-3">{blog.description}</p>
      </div>

      <Link
        to={`/blog-details/${blog.id}`}
        className="inline-block mt-4 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-sm font-medium self-start"
      >
        Read More
      </Link>
    </div>
  </div>
))}
        </div>

        {/* ========== RIGHT SIDEBAR ========== */}
        <div className="lg:w-1/3 flex flex-col gap-6">

          {/* SEARCH BOX */}
          <div className="bg-[#121a2f] p-6 rounded-xl border border-gray-700">
            <h2 className="text-xl font-bold mb-4">Search Blog</h2>
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-3 bg-[#0f1629] border border-gray-700 rounded-lg text-white outline-none"
            />
            <button className="w-full mt-3 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg">Search</button>
          </div>

          {/* CATEGORIES */}
          <div className="bg-[#121a2f] p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <div className="space-y-3">
              {["Apartments","2BHK Homes","Luxury Villas","For Sale","For Rent"].map((cat, i) => (
                <div key={i} className="flex justify-between items-center bg-[#0f1629] p-3 rounded-lg border border-gray-700 hover:bg-[#161d34] cursor-pointer transition">
                  <span className="text-sm">{cat}</span>
                  <span className="px-2 py-1 bg-gray-800 rounded-full text-xs font-semibold">{Math.floor(Math.random()*50+1)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* LATEST ADS */}
          <div className="bg-[#121a2f] p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-bold mb-4">Latest Ads</h3>
            {blogData.slice(0,3).map((ad) => (
              <div key={ad.id} className="flex gap-3 mb-4 bg-[#0f1629] p-3 rounded-lg items-center border border-gray-700 hover:bg-[#161d34] transition">
                <img src={ad.img} className="w-20 h-16 object-cover rounded-lg" />
                <div className="flex-1">
                  <p className="font-semibold text-sm">{ad.title}</p>
                  <p className="text-gray-400 text-xs mt-1">₹{Math.floor(Math.random()*100)}L–₹{Math.floor(Math.random()*150)}L</p>
                </div>
              </div>
            ))}
          </div>

          {/* POPULAR TAGS */}
          <div className="bg-[#121a2f] p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-bold mb-4">Popular Tags</h3>
            <div className="flex flex-wrap gap-3">
              {["RealEstate","Homes","Luxury","2BHK","3BHK","Villa"].map((tag,i) => (
                <span key={i} className="px-3 py-1 bg-[#0f1629] border border-gray-700 rounded text-sm cursor-pointer hover:bg-gray-800">{tag}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    

{/* Footer fixed at bottom */}
<div className="mt-10">
<Footer />
</div>


</div>
  );
};

export default BlogList;
