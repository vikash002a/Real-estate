import React, { useRef, useEffect, useState } from "react";
import {
  FaHome,
  FaBuilding,
  FaHotel,
  FaCity,
  FaTree,
  FaBriefcase,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const CategorySlider = () => {
  const AUTO_SCROLL_SPEED = 1; // 0.5 = slow, 1 = medium, 2 = fast

  const categories = [
    { name: "Kids House", icon: <FaHome />, count: 12, img: "https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=600&q=60" },
    { name: "Budget House", icon: <FaBuilding />, count: 18, img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=600&q=60" },
    { name: "Luxury House", icon: <FaHotel />, count: 8, img: "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=600&q=60" },
    { name: "Stylish House", icon: <FaCity />, count: 14, img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=60" },
    { name: "Apartments", icon: <FaHome />, count: 22, img: "https://images.unsplash.com/photo-1486304873000-235643847519?auto=format&fit=crop&w=600&q=60" },
    { name: "Farmhouse", icon: <FaTree />, count: 9, img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=60" },
    { name: "Deluxe House", icon: <FaHome />, count: 7, img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=60" },
    { name: "Nature House", icon: <FaTree />, count: 11, img: "https://images.unsplash.com/photo-1505692769274-513d5a9c40b7?auto=format&fit=crop&w=600&q=60" },
  ];

  const sliderRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // 🔄 Auto scroll
  useEffect(() => {
    const slider = sliderRef.current;

    const scrollInterval = setInterval(() => {
      if (!isPaused && slider) {
        slider.scrollLeft += AUTO_SCROLL_SPEED;
        // loop

        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }

      }
    }, 20);

    return () => clearInterval(scrollInterval);
  }, );

  // ◀ Left button
  const slideLeft = () => {
    sliderRef.current.scrollLeft -= 300; // box width + gap
  };

  // ▶ Right button
  const slideRight = () => {
    sliderRef.current.scrollLeft += 300;
  };

  return (
    <div className="w-full py-10 bg-[#0A1A2F] relative flex justify-center">
      <div className="max-w-[1200px] w-full relative">
        <h2 className="text-white text-3xl font-bold text-center mb-6   ">
          Popular Categories
        </h2>

        {/* Left Button */}
        <button
          onClick={slideLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full"
        >
          <FaChevronLeft size={20} />
        </button>

        {/* Right Button */}
        <button
          onClick={slideRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full"
        >
          <FaChevronRight size={20} />
        </button>

        {/* Slider */}
        <div
          ref={sliderRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex gap-5 overflow-x-auto no-scrollbar scroll-smooth px-5"
        >
          {[...categories, ...categories].map((item, i) => (
            <div
              key={i}
              className="min-w-[200px] h-[150px] rounded-xl shadow-lg relative overflow-hidden cursor-pointer hover:scale-105 transition-all flex-shrink-0"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.img})` }}
              />
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="relative h-full flex items-center gap-3 text-white px-3">
                <div className="text-blue-300 text-3xl">{item.icon}</div>
                <div>
                  <p className="font-bold text-lg">{item.name}</p>
                  <p className="text-sm opacity-90">{item.count} available</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <style>{`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </div>
  );
};

export default CategorySlider;
