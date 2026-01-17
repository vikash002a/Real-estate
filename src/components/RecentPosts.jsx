import React, { useRef, useState } from "react";
import {
  FaHeart,
  FaThumbsUp,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

// ✅ EXPORT THE DATA SO YOU CAN IMPORT IN BlogDetails.jsx
export const postsData = [
  {
    id: 1,
    title: "Modern Apartment in Germany",
    img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
    profile: "Emily Johnson",
    profileImg: "https://i.ibb.co/8zPxyzD/woman1.jpg",
    date: "Nov 25, 2025",
    comments: 12,
    likes: 0,
    thumbs: 0,
    description: "Spacious apartment with modern amenities in central Germany.",
  },
  {
    id: 2,
    title: "Luxury Villa in London",
    img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&w=800&q=80",
    profile: "Michael Brown",
    profileImg: "https://i.ibb.co/TkhFn8c/man1.jpg",
    date: "Nov 24, 2025",
    comments: 8,
    likes: 0,
    thumbs: 0,
    description: "A beautiful villa with garden and private pool in London.",
  },
  {
    id: 3,
    title: "Beach House in Australia",
    img: "https://images.unsplash.com/photo-1506976785307-8732e854ad89?auto=format&w=800&q=80",
    profile: "Sophia Davis",
    profileImg: "https://i.ibb.co/j6qx6Sk/woman2.jpg",
    date: "Nov 23, 2025",
    comments: 5,
    likes: 0,
    thumbs: 0,
    description: "Cozy beach house with stunning sea views in Australia.",
  },
  {
    id: 4,
    title: "Penthouse in Chicago",
    img: "https://images.unsplash.com/photo-1484249170766-998fa6efe3c0?auto=format&w=800&q=80",
    profile: "David Lee",
    profileImg: "https://i.ibb.co/2tTnKkJ/man2.jpg",
    date: "Nov 22, 2025",
    comments: 10,
    likes: 0,
    thumbs: 0,
    description: "Luxurious penthouse in downtown Chicago with city view.",
  },
];

export default function RecentPosts() {
  const [posts, setPosts] = useState(postsData);
  const swiperRef = useRef(null);

  const handleLike = (id) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleThumb = (id) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id ? { ...post, thumbs: post.thumbs + 1 } : post
      )
    );
  };

  const scrollLeft = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const scrollRight = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  return (
    <div className="w-full bg-gradient-to-r from-blue-900 to-purple-700 py-10 px-4 relative">
      <h2 className="text-3xl font-bold mb-8 text-center text-white">
        Recent Posts
      </h2>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {posts.map((post) => (
          <SwiperSlide key={post.id}>
            <div className="relative flex flex-col rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition border border-white/20">
            <Link to={`/BlogDetails/${post.id}`}>

  <div
    className="h-48 bg-cover bg-center relative cursor-pointer"
    style={{ backgroundImage: `url(${post.img})` }}
  >
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/40"></div>

    {/* Text Overlay */}
    <div className="absolute inset-0 p-4 flex flex-col justify-end text-white z-10">
      <h3 className="text-lg font-bold mb-1">{post.title}</h3>
    </div>
  </div>
</Link>
              {/* Profile + Date Section */}
              <div className="bg-blue-700/20 backdrop-blur-md p-3 border-t border-white/20 rounded-b-2xl">
                {/* Profile Row */}
                <div className="flex items-center gap-3">
                  {/* Profile Image */}
                  <img
                    src={post.profileImg}
                    alt={post.profile}
                    className="w-10 h-10 rounded-full border-2 border-white/40 object-cover"
                  />

                  {/* Name + Date */}
                  <div className="leading-tight">
                    <p className="text-sm font-semibold text-white">
                      {post.profile}
                    </p>

                    <p className="text-xs text-white/70">
                      {post.date} • {post.comments} comments
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-white mt-2">{post.description}</p>

                {/* LIKE + THUMB — bottom section */}
                <div className="flex gap-2 mt-3">
                  <button
                    onClick={() => handleLike(post.id)}
                    className="flex items-center gap-1 bg-white/20 px-3 py-1.5 rounded-lg 
                 hover:bg-white/30 transition text-sm text-white"
                  >
                    <FaHeart className="text-red-400 w-4 h-4" /> {post.likes}
                  </button>

                  <button
                    onClick={() => handleThumb(post.id)}
                    className="flex items-center gap-1 bg-white/20 px-3 py-1.5 rounded-lg 
                 hover:bg-white/30 transition text-sm text-white"
                  >
                    <FaThumbsUp className="text-blue-400 w-4 h-4" />{" "}
                    {post.thumbs}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Left Button */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20
          bg-white/30 backdrop-blur-xl border border-white/20 shadow-lg
          p-2 rounded-full hover:scale-110 duration-300 flex"
      >
        <FaChevronLeft className="text-white" size={18} />
      </button>

      {/* Custom Right Button */}
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20
          bg-white/30 backdrop-blur-xl border border-white/20 shadow-lg
          p-2 rounded-full hover:scale-110 duration-300 flex"
      >
        <FaChevronRight className="text-white" size={18} />
      </button>
    </div>
  );
}
