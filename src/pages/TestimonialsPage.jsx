// TestimonialsPage.js
import React, { useState } from "react";
import Footer from "../components/Footer";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Real Estate Agent",
    rating: 5,
    description:
      "Rahul helped me find my dream house very smoothly. Highly recommended!",
    profile: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Anita Verma",
    role: "Real Estate Agent",
    rating: 4,
    description: "Good service, but communication could be improved.",
    profile: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "Real Estate Agent",
    rating: 5,
    description:
      "Very professional and knowledgeable. Loved the experience!",
    profile: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    id: 4,
    name: "Priya Kapoor",
    role: "Real Estate Agent",
    rating: 3,
    description: "The service was okay, but could be faster in response.",
    profile: "https://randomuser.me/api/portraits/women/55.jpg",
  },
  {
    id: 5,
    name: "Amit Joshi",
    role: "Real Estate Agent",
    rating: 5,
    description:
      "Amazing experience! Extremely satisfied with the support provided.",
    profile: "https://randomuser.me/api/portraits/men/21.jpg",
  },
  {
    id: 6,
    name: "Manish Raj",
    role: "Real Estate Agent",
    rating: 4,
    description: "Good experience overall.",
    profile: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 7,
    name: "Reena Paul",
    role: "Real Estate Agent",
    rating: 5,
    description: "Highly supportive and friendly.",
    profile: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 8,
    name: "Sagar Patil",
    role: "Real Estate Agent",
    rating: 3,
    description: "Average service.",
    profile: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    id: 9,
    name: "Kiran Mehta",
    role: "Real Estate Agent",
    rating: 4,
    description: "Very cooperative and helpful.",
    profile: "https://randomuser.me/api/portraits/women/70.jpg",
  },
  {
    id: 10,
    name: "Rohit Verma",
    role: "Real Estate Agent",
    rating: 5,
    description: "Fantastic work!",
    profile: "https://randomuser.me/api/portraits/men/80.jpg",
  },
  {
    id: 11,
    name: "Swati Jain",
    role: "Real Estate Agent",
    rating: 5,
    description: "Best agent I’ve worked with.",
    profile: "https://randomuser.me/api/portraits/women/85.jpg",
  },
];

// ⭐ Stars Component
const Stars = ({ rating }) => (
  <div className="flex text-yellow-400 text-xl mb-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i}>{i < rating ? "★" : "☆"}</span>
    ))}
  </div>
);

// 🎴 Testimonial Card
const TestimonialCard = ({ testimonial }) => {
  const { name, role, rating, description, profile } = testimonial;

  return (
    <div className="bg-[#0D1B2A] text-white rounded-xl p-6 flex items-start gap-6 shadow-xl border border-blue-900/30">
      <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg">
        <img src={profile} alt={name} className="w-full h-full object-cover" />
      </div>

      <div className="flex-1">
        <Stars rating={rating} />
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-blue-300 mb-2">{role}</p>

        <p className="text-gray-300 leading-relaxed text-lg">
          <span className="text-blue-400 text-3xl">❝ </span>
          {description}
        </p>
      </div>
    </div>
  );
};

export default function TestimonialsPage() {
  const [startIndex, setStartIndex] = useState(0);
  const ITEMS_PER_PAGE = 10;

  const visibleItems = testimonials.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const hasNext = startIndex + ITEMS_PER_PAGE < testimonials.length;
  const hasPrev = startIndex > 0;

  const goNext = () => {
    if (hasNext) setStartIndex(startIndex + ITEMS_PER_PAGE);
  };

  const goPrev = () => {
    if (hasPrev) setStartIndex(startIndex - ITEMS_PER_PAGE);
  };

  return (
    <div className="min-h-screen bg-[#0A1128] py-10">
      {/* Header */}
      <div
        className="w-full h-60 flex items-center justify-center bg-cover bg-center mb-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <h1 className="text-white text-4xl font-bold  px-6 py-3 rounded-xl ">
          Testimonial Details
        </h1>
      </div>

      {/* Testimonials List (10 items) */}
      <div className="max-w-5xl mx-auto space-y-8 px-4 mb-20">
        {visibleItems.map((item) => (
          <TestimonialCard key={item.id} testimonial={item} />
        ))}

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-6 mt-8">
          <button
            disabled={!hasPrev}
            onClick={goPrev}
            className={`px-6 py-2 rounded-lg text-white transition shadow-md ${
              hasPrev
                ? "bg-blue-700 hover:bg-blue-800"
                : "bg-gray-600 cursor-not-allowed"
            }`}
          >
            ◀ Prev
          </button>

          <button
            disabled={!hasNext}
            onClick={goNext}
            className={`px-6 py-2 rounded-lg text-white transition shadow-md ${
              hasNext
                ? "bg-blue-700 hover:bg-blue-800"
                : "bg-gray-600 cursor-not-allowed"
            }`}
          >
            Next ▶
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
