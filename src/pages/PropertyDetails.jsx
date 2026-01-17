import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  FaBed,
  FaBath,
  FaCar,
  FaShieldAlt,
  FaSwimmingPool,
  FaTree,
  FaStar,
  FaShareAlt,
  FaClock,
  FaMapMarkerAlt,
  FaPhone,
  FaComments,
  FaEye,
  FaLeaf,
  FaArrowRight,
} from "react-icons/fa";
import Footer from "../components/Footer";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// -------- SAMPLE DATA -------- //
const properties = [
  {
    id: 1,
    title: "Luxury 2 BHK Apartment",
    price: "$120,000",
    location: "Delhi, India",
    description:
      "Luxury Home For Sale odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias...",
    beds: 2,
    baths: 2,
    parking: 2,
    garden: true,
    swimming: true,
    security: "24/7",
    images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4",
    ],
    seller: {
      name: "Amit Sharma",
      avatar: "https://i.ibb.co/3mT9xzw/user1.png",
      date: "12 Jan 2025",
    },
  },
];
const latestAds = [
  {
    id: 1,
    title: "2BHK Flat",
    img: "https://images.unsplash.com/photo-1600587771525-78b9dba3b914",
    priceRange: "$12 - $21",
  },
  {
    id: 2,
    title: "3BHK Flat",
    img: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154",
    priceRange: "$35 - $72",
  },
];

// sample list for Latest Properties (you can replace with real data later)
const latestProperties = [
  {
    id: 11,
    title: "Trending New Model Houses",
    img: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4",
    price: "$17",
  },
  {
    id: 12,
    title: "Best New Model Houses",
    img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    price: "$17",
  },
  {
    id: 13,
    title: "Trending New Model Houses",
    img: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154",
    price: "$17",
  },
];

export default function PropertiesDetails() {
  const { id } = useParams();
  const property = properties.find((p) => p.id === parseInt(id));
  const [openModal, setOpenModal] = useState(false);

  // state for comment form (optional, useful for later submission)
  const [commentForm, setCommentForm] = useState({
    name: "",
    email: "",
    comment: "",
  });

  if (!property) return <div className="text-white p-5">Property not found!</div>;

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const handleCommentChange = (e) => {
    const { name, value } = e.target;
    setCommentForm((s) => ({ ...s, [name]: value }));
  };

  const handlePostComment = (e) => {
    e.preventDefault();
    // अभी बस console में दिखा रहा हूँ — आप API call यहाँ कर सकते हैं
    console.log("Posted comment:", commentForm);
    // clear form
    setCommentForm({ name: "", email: "", comment: "" });
    alert("Comment posted (demo).");
  };

  return (
    <div className="min-h-screen bg-[#0f1629] text-white">
      {/* ---------- HERO BANNER ---------- */}
      <div
        className="h-72 md:h-96 bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${property.images[0]})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative flex items-center justify-center h-full">
          <h1 className="text-4xl md:text-5xl font-bold">{property.title}</h1>
        </div>
      </div>

      {/* ---------- MAIN LAYOUT ---------- */}
      <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {/* ---------------- LEFT SIDE ---------------- */}
        <div className="md:col-span-2 space-y-6">
          {/* Gallery */}
          <div className="bg-[#121a2f] p-4 rounded-xl border border-gray-700">
            <Slider {...sliderSettings}>
              {property.images.map((img, i) => (
                <img key={i} src={img} className="w-full h-80 rounded-xl object-cover" />
              ))}
            </Slider>
          </div>

          {/* Title + Info */}
          <div className="bg-[#121a2f] p-5 rounded-xl border border-gray-700">
            <h2 className="text-2xl font-bold">{property.title}</h2>

            <div className="flex flex-wrap gap-6 text-gray-300 mt-3">
              <span className="flex items-center gap-2"><FaMapMarkerAlt /> {property.location}</span>
              <span className="flex items-center gap-2"><FaClock /> 5 hours ago</span>
              <span className="flex items-center gap-2"><FaEye /> 876 views</span>
              <span className="flex items-center gap-2 text-yellow-400"><FaStar /> 4.8 Rating</span>
            </div>

            <p className="text-2xl font-bold text-blue-400 mt-3">{property.price}</p>
          </div>

          {/* Description */}
          <div className="bg-[#121a2f] p-5 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold mb-3">Description</h3>
            <p className="text-gray-300 leading-relaxed">{property.description}</p>
          </div>

          {/* Specifications (same layout as screenshot) */}
          <div className="bg-[#121a2f] p-5 rounded-xl border border-gray-700 grid grid-cols-2 md:grid-cols-3 gap-6">
            <Spec icon={<FaBed />} label="Bedrooms" value={property.beds} />
            <Spec icon={<FaBath />} label="Bathrooms" value={property.baths} />
            <Spec icon={<FaCar />} label="Parking" value={`${property.parking} Car`} />
            <Spec icon={<FaShieldAlt />} label="Security" value={property.security} />
            <Spec icon={<FaSwimmingPool />} label="Swimming Pool" value="Yes" />
            <Spec icon={<FaTree />} label="Garden" value="Available" />
          </div>

          {/* Rating Bar Example */}
          <div className="bg-[#121a2f] p-6 rounded-xl border border-gray-700">
{/** Rating Bars **/}
<RatingBar star={5} value={9232} color="bg-green-500" />
<RatingBar star={4} value={8125} color="bg-teal-400" />
<RatingBar star={3} value={6263} color="bg-gray-600" />
<RatingBar star={2} value={3463} color="bg-purple-500" />
<RatingBar star={1} value={1456} color="bg-orange-500" />

{/* ----------- REVIEW 1 ----------- */}
<div className="mt-6 flex gap-4">
  <img
    src="https://i.ibb.co/3mT9xzw/user1.png"
    className="w-14 h-14 rounded-full"
  />
  <div>
    <h4 className="text-lg font-bold flex items-center gap-2">
      Amit Sharma
      <FaStar className="text-yellow-400" />
      4.5
    </h4>
    <p className="text-gray-400 text-sm">Dec 21st • India</p>
  </div>
</div>

<p className="mt-3 text-gray-300">
  Property is really amazing! Finishing quality is top notch and the view is superb.
</p>

{/* ----------- REVIEW 2 ----------- */}
<div className="mt-6 flex gap-4">
  <img
    src="https://i.ibb.co/YcN2yVY/user2.png"
    className="w-14 h-14 rounded-full"
  />
  <div>
    <h4 className="text-lg font-bold flex items-center gap-2">
      Sophia Patel
      <FaStar className="text-yellow-400" />
      4.2
    </h4>
    <p className="text-gray-400 text-sm">Jan 3rd • Canada</p>
  </div>
</div>

<p className="mt-3 text-gray-300">
  Very peaceful location. Interiors are modern and well-maintained.
</p>

{/* ----------- REVIEW 3 ----------- */}
<div className="mt-6 flex gap-4">
  <img
    src="https://i.ibb.co/4J7H7yK/user3.png"
    className="w-14 h-14 rounded-full"
  />
  <div>
    <h4 className="text-lg font-bold flex items-center gap-2">
      Michael Lee
      <FaStar className="text-yellow-400" />
      4.8
    </h4>
    <p className="text-gray-400 text-sm">Jan 12th • Singapore</p>
  </div>
</div>

<p className="mt-3 text-gray-300">
  Excellent property, highly recommended! Perfect for small families.
</p>

{/* ----------- REVIEW 4 ----------- */}
<div className="mt-6 flex gap-4 mb-6">
  <img
    src="https://i.ibb.co/9c5h8bL/user4.png"
    className="w-14 h-14 rounded-full"
  />
  <div>
    <h4 className="text-lg font-bold flex items-center gap-2">
      Elena Garcia
      <FaStar className="text-yellow-400" />
      4.0
    </h4>
    <p className="text-gray-400 text-sm">Jan 18th • Spain</p>
  </div>
</div>

<p className="mt-3 text-gray-300 mb-4">
  Good amenities but parking area could be improved. Overall worth the price.
</p>

{/* ----------- REVIEW 2 (NEW ONE ADDED) ----------- */}
<div className="mt-6 flex gap-4">
  <img
    src="https://i.ibb.co/3mT9xzw/user1.png"
    className="w-14 h-14 rounded-full"
  />
  <div>
    <h4 className="text-lg font-bold flex items-center gap-2">
      Sophia Patel
      <FaStar className="text-yellow-400" />
      4.2
    </h4>
    <p className="text-gray-400 text-sm">Jan 3rd • India</p>
  </div>

</div>

<p className="mt-3 text-gray-300 mb-4">
  Excellent property! The location is great and amenities are really impressive.
</p>
</div>
          {/* ---------- COMMENT SECTION (Leave a reply) ---------- */}
          <div className="bg-[#121a2f] p-6 rounded-xl border border-gray-700 mt-6">
            <h3 className="text-xl font-bold mb-4">Leave a reply</h3>

            <form className="space-y-4" onSubmit={handlePostComment}>
              <input
                name="name"
                value={commentForm.name}
                onChange={handleCommentChange}
                type="text"
                placeholder="Your Name"
                className="w-full bg-[#0f1629] text-white p-3 rounded-lg border border-gray-700"
                required
              />

              <input
                name="email"
                value={commentForm.email}
                onChange={handleCommentChange}
                type="email"
                placeholder="Email Address"
                className="w-full bg-[#0f1629] text-white p-3 rounded-lg border border-gray-700"
                required
              />

              <textarea
                name="comment"
                value={commentForm.comment}
                onChange={handleCommentChange}
                placeholder="Comment"
                rows="4"
                className="w-full bg-[#0f1629] text-white p-3 rounded-lg border border-gray-700"
                required
              />

              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 rounded-lg text-white"
                >
                  Post Comment
                </button>
                <button
                  type="button"
                  onClick={() => setCommentForm({ name: "", email: "", comment: "" })}
                  className="px-4 py-2 bg-gray-700 rounded-lg text-white"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>

         
              
            

        </div>

        {/* ---------------- RIGHT SIDEBAR ---------------- */}
        <div className="space-y-6">
          {/* Seller Card */}
          <div className="bg-[#121a2f] p-6 rounded-xl border border-gray-700 text-center">
            <img
              src={property.seller.avatar}
              className="w-24 h-24 rounded-full mx-auto border-2 border-blue-400"
            />
            <h3 className="mt-3 text-xl font-bold">{property.seller.name}</h3>
            <p className="text-gray-400">Real Estate Agent</p>
            <p className="text-gray-500 text-sm mt-1">Posted: {property.seller.date}</p>
          </div>

          {/* Buttons */}
          <div className="bg-[#121a2f] p-6 rounded-xl space-y-4 border border-gray-700">
            <button
              className="w-full py-3 bg-blue-600 rounded flex items-center justify-center gap-2"
              onClick={() => setOpenModal(true)}
            >
              <FaComments /> Chat
            </button>

            <button
              className="w-full py-3 bg-green-600 rounded flex items-center justify-center gap-2"
              onClick={() => setOpenModal(true)}
            >
              <FaPhone /> Contact
            </button>

            <button
              className="w-full py-3 bg-gray-700 rounded flex items-center justify-center gap-2"
              onClick={() => setOpenModal(true)}
            >
              <FaShareAlt /> Share
            </button>
          </div>
        {/* ---------- LATEST ADS (TOP SIDEBAR SECTION) ---------- */}
<div className="bg-[#121a2f] p-6 rounded-xl border border-gray-700 mb-6">
  <h3 className="text-xl font-bold mb-4">Latest Ads</h3>

  {latestAds.map((ad) => (
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
        <p className="text-gray-400 text-xs mt-1">{ad.priceRange}</p>
      </div>
    </div>
  ))}
</div>
{/* ---------- MAP LOCATION (Oops Error UI) ---------- */}
<div className="bg-[#121a2f] p-6 rounded-xl border border-gray-700 mt-6">
  <h3 className="text-xl font-bold mb-4">Map Location</h3>

  <div className="w-full h-64 bg-[#0f1629] flex flex-col items-center justify-center text-center rounded border border-gray-700">
    <div className="text-5xl text-gray-500 mb-2">!</div>
    <p className="text-white text-lg font-semibold">Oops! Something went wrong.</p>
    <p className="text-gray-400 text-sm mt-1">
      This page didn't load Google Maps correctly.<br />
      See the console for technical details.
    </p>
  </div>
</div>{/* ---------- SEARCH ADS ---------- */}
<div className="bg-[#121a2f] p-6 rounded-xl border border-gray-700">
  <h3 className="text-xl font-bold mb-4">Search Ads</h3>

  <input
    type="text"
    placeholder="What are you looking for?"
    className="w-full bg-[#0f1629] text-white p-3 rounded-lg border border-gray-700 mb-3"
  />

  <select className="w-full bg-[#0f1629] text-white p-3 rounded-lg border border-gray-700 mb-4">
    <option>Homes</option>
    <option>Apartments</option>
    <option>Flats</option>
    <option>Luxury Rooms</option>
  </select>

  <button className="px-6 py-3 bg-black text-white rounded-lg">
    Search
  </button>
</div>

{/* ---------- POPULAR TAGS ---------- */}
<div className="bg-[#121a2f] p-6 rounded-xl border border-gray-700 mt-6">
  <h3 className="text-xl font-bold mb-4">Popular Tags</h3>

  <div className="flex flex-wrap gap-3">
    {[
      "RealEstate",
      "Homes",
      "3BHK Flats",
      "2BHK Homes",
      "Luxury Rooms",
      "Apartments",
      "Luxury House For Sale",
    ].map((tag, idx) => (
      <span
        key={idx}
        className="px-3 py-1 bg-[#0f1629] border border-gray-700 rounded text-sm cursor-pointer hover:bg-gray-800"
      >
        {tag}
      </span>
    ))}
  </div>
</div>

          {/* ---------- LATEST PROPERTIES (sidebar like screenshot) ---------- */}
          <div className="bg-[#121a2f] p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-bold mb-4">Latest Properties</h3>

            {latestProperties.map((lp) => (
              <div key={lp.id} className="flex gap-3 mb-4 bg-[#0f1629] p-3 rounded-lg items-center">
                <img src={lp.img} className="w-20 h-16 object-cover rounded" />
                <div className="flex-1">
                  <p className="font-semibold">{lp.title}</p>
                  <p className="text-gray-400 text-sm">View Details</p>
                </div>
                <p className="text-blue-400 font-bold">{lp.price}</p>
              </div>
            ))}

            <div className="text-center mt-2">
              <button className="text-sm px-4 py-2 bg-gray-800 rounded inline-flex items-center gap-2">
                See All <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ------------ POPUP MODAL ------------ */}
      {openModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
          <div className="bg-white text-black p-6 rounded-lg shadow-xl w-80">
            <h2 className="text-xl font-bold">Coming Soon</h2>
            <p className="mt-2">Feature will be added in the next update!</p>
            <button
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
              onClick={() => setOpenModal(false)}
            >
              Close
            </button>
          </div>
  
        </div>

      )}
<Footer />
    </div>
  );
}

// ---------- SMALL REUSABLE COMPONENTS ---------- //

function Spec({ icon, label, value }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="text-blue-400 text-2xl mb-1">{icon}</div>
      <p className="font-semibold">{label}</p>
      <p className="text-gray-400 text-sm">{value}</p>
    </div>
  );
}

function RatingBar({ star, value, color }) {
  return (
    <div className="flex items-center gap-3 text-sm">
      <span className="w-6">{star} ⭐</span>
      <div className="flex-1 bg-gray-700 h-3 rounded">
        <div className={`${color} h-3 rounded`} style={{ width: `${(value / 9232) * 100}%` }}></div>
      </div>
      <span>{value}</span>
    </div>
  );
}
