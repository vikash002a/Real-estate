import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { postsData } from "../components/RecentPosts";
import { FaHeart, FaThumbsUp, FaStar } from "react-icons/fa";
import Footer from "../components/Footer";

/* ================== Rating Bar Component ================== */
const RatingBar = ({ star, value, color }) => {
  return (
    <div className="mb-3">
      <div className="flex justify-between text-sm text-gray-300 mb-1">
        <span>{star} Star</span>
        <span>{value}</span>
      </div>

      <div className="w-full h-3 bg-[#0b1120] rounded-full overflow-hidden">
        <div
          className={`h-3 ${color}`}
          style={{ width: `${Math.min(value / 100, 100)}%` }}
        ></div>
      </div>
    </div>
  );
};

export default function BlogDetails() {
  const { id } = useParams();
  const post = postsData.find((p) => p.id === parseInt(id));

  /* ================== Pre Added Comments ================== */
  const [comments, setComments] = useState([
    {
      user: "John Doe",
      comment: "Amazing post! Thanks for sharing.",
      date: "Nov 30, 2025",
    },
    {
      user: "Sarah Wilson",
      comment: "Beautiful house and great description.",
      date: "Nov 29, 2025",
    },
  ]);

  /* ================== Comment Form States ================== */
  const [commentForm, setCommentForm] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const handleCommentChange = (e) => {
    setCommentForm({ ...commentForm, [e.target.name]: e.target.value });
  };

  const handlePostComment = (e) => {
    e.preventDefault();

    if (!commentForm.name || !commentForm.email || !commentForm.comment) return;

    setComments([
      ...comments,
      {
        user: commentForm.name,
        comment: commentForm.comment,
        date: new Date().toLocaleDateString(),
      },
    ]);

    setCommentForm({ name: "", email: "", comment: "" });
  };

  /* ================== Latest Ads Data ================== */
  const latestAds = [
    {
      id: 1,
      title: "Luxury 3BHK Apartment",
      img: "https://i.ibb.co/vQwkpDM/house1.jpg",
      priceRange: "₹45–60 Lakh",
    },
    {
      id: 2,
      title: "Modern 2BHK Flats",
      img: "https://i.ibb.co/JqN0M8c/house2.jpg",
      priceRange: "₹25–40 Lakh",
    },
    {
      id: 3,
      title: "Premium Villa Sale",
      img: "https://i.ibb.co/2N7Q1rb/house3.jpg",
      priceRange: "₹90L–1.2Cr",
    },
  ];

  if (!post) {
    return (
      <div className="text-center py-20 text-xl font-semibold text-red-500">
        ⚠️ Post not found
      </div>
    );
  }

  return (
  <div className="w-full min-h-screen bg-[#121a2f] pt-32 rounded-xl border border-gray-700 text-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6">

        {/* ================= LEFT CONTENT ===================== */}
        <div className="lg:w-2/3 bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-xl border border-white/20">

        
          <div
            className="w-full h-72 rounded-xl bg-cover bg-center shadow-lg"
            style={{ backgroundImage: `url(${post.img})` }}
          ></div>

          <h1 className="text-3xl font-bold mt-5">{post.title}</h1>

          <div className="flex items-center gap-3 mt-4">
            <img
              src={post.profileImg}
              className="w-14 h-14 rounded-full border-2 border-white object-cover"
            />
            <div>
              <p className="text-lg font-semibold">{post.profile}</p>
              <p className="text-sm text-white/70">
                {post.date} • {post.comments} comments
              </p>
            </div>
          </div>

          <p className="mt-6 text-white/90 text-lg">{post.description}</p>

          <div className="flex gap-4 mt-8">
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
              <FaHeart className="text-red-400" /> {post.likes}
            </div>

            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
              <FaThumbsUp className="text-blue-400" /> {post.thumbs}
            </div>
          </div>

          {/* ================== RATING SECTION ================== */}
          <div className="bg-[#121a2f] p-6 rounded-xl border border-gray-700 mt-8">
            <RatingBar star={5} value={9232} color="bg-green-500" />
            <RatingBar star={4} value={8125} color="bg-teal-400" />
            <RatingBar star={3} value={6263} color="bg-gray-600" />
            <RatingBar star={2} value={3463} color="bg-purple-500" />
            <RatingBar star={1} value={1456} color="bg-orange-500" />

            {/* Reviews */}
            {[
              {
                name: "Amit Sharma",
                img: "https://i.ibb.co/3mT9xzw/user1.png",
                rating: 4.5,
                text: "Property is really amazing! Finishing quality is top notch.",
              },
              {
                name: "Sophia Patel",
                img: "https://i.ibb.co/YcN2yVY/user2.png",
                rating: 4.2,
                text: "Very peaceful location. Interiors are modern.",
              },
              {
                name: "Michael Lee",
                img: "https://i.ibb.co/4J7H7yK/user3.png",
                rating: 4.8,
                text: "Excellent property, highly recommended!",
              },
              {
                name: "Elena Garcia",
                img: "https://i.ibb.co/9c5h8bL/user4.png",
                rating: 4.0,
                text: "Good amenities but parking could be improved.",
              },
            ].map((rev, i) => (
              <div key={i} className="mt-6">
                <div className="flex gap-4">
                  <img src={rev.img} className="w-14 h-14 rounded-full" />
                  <div>
                    <h4 className="text-lg font-bold flex items-center gap-2">
                      {rev.name} <FaStar className="text-yellow-400" /> {rev.rating}
                    </h4>
                    <p className="text-gray-400 text-sm">Jan 2025 • Global</p>
                  </div>
                </div>
                <p className="mt-3 text-gray-300">{rev.text}</p>
              </div>
            ))}
          </div>

          {/* ================== LEAVE A REPLY ================== */}
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
                <button type="submit" className="px-6 py-3 bg-blue-600 rounded-lg text-white">
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

        {/* ================== RIGHT SIDEBAR ===================== */}
        <div className="lg:w-1/3 flex flex-col gap-6">

          {/* SEARCH BOX */}
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-xl border border-white/20">
            <h2 className="text-xl font-bold mb-4">Search Blog</h2>

            <input
              type="text"
              placeholder="Search..."
              className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white outline-none"
            />

            <button className="w-full mt-3 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg">
              Search
            </button>
          </div>

  {/* =============== CATEGORIES SECTION (NEW ADDED) =============== */}
  <div className="bg-[#121a2f] p-6 rounded-xl border border-gray-700">
    <h3 className="text-xl font-bold mb-4">Categories</h3>

    <div className="space-y-4">

      {[
        { icon: "📑", title: "Apartments", count: 14 },
        { icon: "🛏️", title: "Hostel & 2BHK Flats", count: 63 },
        { icon: "🏢", title: "2BHK Homes", count: 25 },
        { icon: "🏠", title: "RealEstate", count: 74 },
        { icon: "🏘️", title: "Apartments", count: 18 },
        { icon: "🏡", title: "Duplex Houses", count: 32 },
        { icon: "🏙️", title: "Flats", count: 8 },
      ].map((cat, idx) => (
        <div
          key={idx}
          className="flex justify-between items-center bg-[#0f1629] p-3 rounded-lg border border-gray-700 hover:bg-[#161d34] transition cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <span className="text-xl">{cat.icon}</span>
            <p className="text-sm font-medium">{cat.title}</p>
          </div>

          <span className="px-3 py-1 bg-gray-800 rounded-full text-xs font-semibold">
            {String(cat.count).padStart(2, "0")}
          </span>
        </div>
      ))}

    </div>
  </div>

          {/* LATEST ADS */}
          <div className="bg-[#121a2f] p-6 rounded-xl border border-gray-700">
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

          {/* POPULAR TAGS */}
          <div className="bg-[#121a2f] p-6 rounded-xl border border-gray-700">
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

        </div>

      </div>
 <div className="mt-10">
 <Footer />
 </div>
 
 
 </div>
  );
}
