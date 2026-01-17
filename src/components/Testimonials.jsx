import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const testimonialsData = [
  {
    id: 1,
    name: "Emily Johnson",
    rating: 5,
    text: "The service was excellent, and I found my dream property faster than I expected. Highly recommended!",
    avatar: "https://i.ibb.co/8zPxyzD/woman1.jpg",
  },
  {
    id: 2,
    name: "Michael Brown",
    rating: 4,
    text: "Great experience! The team was supportive throughout the process and helped me find the perfect home.",
    avatar: "https://i.ibb.co/TkhFn8c/man1.jpg",
  },
  {
    id: 3,
    name: "Sophia Davis",
    rating: 5,
    text: "Amazing platform! I was able to shortlist and compare multiple properties very easily.",
    avatar: "https://i.ibb.co/j6qx6Sk/woman2.jpg",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prev = () => {
    setIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const active = testimonialsData[index];

  return (
    <div
      className="relative w-full bg-cover bg-center text-white mt-12"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-black/60 to-blue-900/80"></div>

      <div className="relative z-10 max-w-3xl mx-auto text-center px-4] py-4">
        <h1 className="text-4xl font-bold mb-6">Testimonials</h1>

        {/* Avatars closer to border */}
        <div className="flex justify-center gap-6 mb-10 mt-1px">
          {testimonialsData.map((p, i) => (
            <img
              key={p.id}
              src={p.avatar}
              className={`h-20 w-20 rounded-full border-4 object-cover transform transition-all duration-500 ${
                i === index
                  ? "scale-125 border-purple-500"
                  : "scale-90 opacity-60 border-white/50"
              }`}
              alt={p.name}
            />
          ))}
        </div>

        <button
          onClick={prev}
          className="absolute left-0 -translate-x-1/2 top-1/2 transform bg-white/15 p-2 rounded-full hover:bg-white/40"
        >
          <FaChevronLeft size={20} />
        </button>

        <button
          onClick={next}
          className="absolute right-0 translate-x-1/2 top-1/2 transform bg-white/20 p-2 rounded-full hover:bg-white/40"
        >
          <FaChevronRight size={20} />
        </button>

        {/* Description */}
        <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-3 mt-3">
          “{active.text}”
        </p>

        {/* Name */}
        <h3 className="text-2xl font-semibold mb-2">{active.name}</h3>

        {/* Stars (less gap) */}
        <div className="flex justify-center mt-1 mb-4 text-yellow-400">
          {Array.from({ length: active.rating }).map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>

        {/* Button adjusted properly */}
        <Link to="/testimonials">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-semibold transition mt-0">
            View all Testimonials
          </button>
        </Link>
      </div>
    </div>
  );
}
