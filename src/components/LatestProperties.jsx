import React, { useRef, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const properties = [
  {
    id: 1,
    title: "Luxury 2 BHK Apartment",
    price: "$120,000",
    location: "Delhi, India",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    seller: { name: "Amit Sharma", avatar: "https://i.ibb.co/3mT9xzw/user1.png" },
  },
  {
    id: 2,
    title: "Family House",
    price: "$180,000",
    location: "Mumbai, India",
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154",
    seller: { name: "Shruti Patel", avatar: "https://i.ibb.co/7rnSKkj/user3.png" },
  },
  {
    id: 3,
    title: "Premium Villa",
    price: "$250,000",
    location: "Bangalore, India",
    image: "https://images.unsplash.com/photo-1600585154206-573f47f6a04f",
    seller: { name: "Rahul Verma", avatar: "https://i.ibb.co/5sY4T8f/user4.png" },
  },
  {
    id: 4,
    title: "Modern PG Room",
    price: "$450/month",
    location: "Pune, India",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
    seller: { name: "Sneha Gupta", avatar: "https://i.ibb.co/3mT9xzw/user1.png" },
  },
];

const LatestProperties = () => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      scrollToIndex(activeIndex + 1);
    }, 3500);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const scrollToIndex = (index) => {
    const totalItems = properties.length;
    const newIndex = index >= totalItems ? 0 : index;
    setActiveIndex(newIndex);

    const slider = sliderRef.current;
    if (!slider) return;

    const card = slider.children[0];
    const cardWidth = card.offsetWidth + 16; // 16px gap
    slider.scrollTo({ left: newIndex * cardWidth, behavior: "smooth" });
  };

  const scrollLeft = () => {
    scrollToIndex(activeIndex - 1 < 0 ? properties.length - 1 : activeIndex - 1);
  };

  const scrollRight = () => {
    scrollToIndex(activeIndex + 1 >= properties.length ? 0 : activeIndex + 1);
  };

  return (
    <section className="max-w-[1300px] mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-white mb-6">Latest Properties</h2>

      <div className="relative">
        {/* Left Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20
            bg-white/30 backdrop-blur-xl border border-white/20 shadow-lg
            p-2 rounded-full hover:scale-110 duration-300 flex"
        >
          <FaChevronLeft className="text-white" size={18} />
        </button>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-none"
        >
          {properties.map((p) => (
            <div
              key={p.id}
              className="snap-start flex-shrink-0 w-full sm:w-[45%] md:w-[30%] lg:w-[23%] rounded-xl overflow-hidden
              hover:shadow-xl transition-transform duration-300 border border-white/30"
              style={{ backgroundColor: "#07294bff" }}
            >
              <Link to={`/PropertyDetails/${p.id}`}>
                <div className="h-40 sm:h-44 md:h-48 overflow-hidden relative cursor-pointer">
                  <img
                    src={p.image}
                    className="w-full h-full object-cover hover:scale-110 duration-500"
                    alt={p.title}
                  />
                </div>
              </Link>

              <div className="p-3 bg-blue-500/10 backdrop-blur-lg rounded-b-xl border-t border-blue-200/10">
                <h3 className="text-[14px] sm:text-[15px] font-semibold text-white">{p.title}</h3>
                <p className="text-blue-300 font-bold text-sm mt-1">{p.price}</p>
                <p className="text-gray-200 text-xs">{p.location}</p>

                <div
                  className="flex items-center gap-2 mt-3 bg-blue-500/20 backdrop-blur-md 
                    py-1.5 px-3 rounded-xl border border-blue-300/30 shadow-sm"
                >
                  <img
                    src={p.seller.avatar}
                    className="h-7 w-7 rounded-full border border-blue-300"
                    alt=""
                  />
                  <span className="text-[12px] sm:text-[13px] font-semibold text-white">
                    {p.seller.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={scrollRight}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20
            bg-white/30 backdrop-blur-xl border border-white/20 shadow-lg
            p-2 rounded-full hover:scale-110 duration-300 flex"
        >
          <FaChevronRight className="text-white" size={18} />
        </button>
      </div>

      <style>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default LatestProperties;
