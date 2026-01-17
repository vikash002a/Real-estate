import React, { useRef, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaShareAlt } from "react-icons/fa";
import { FaBed, FaCar, FaBath } from "react-icons/fa";
import { Link } from "react-router-dom";

const featuredData = [
  {
    id: 1,
    title: "Premium 3 BHK Apartment",
    price: "$220,000",
    location: "Delhi, India",
    date: "12 Jan 2025",
    tag: "For Sale",
    beds: 3,
    baths: 2,
    parking: 1,
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c",
    url: "#",
  },
  {
    id: 2,
    title: "Luxury Villa With Garden",
    price: "$350,000",
    location: "Mumbai, India",
    date: "03 Feb 2025",
    tag: "Sold",
    beds: 4,
    baths: 3,
    parking: 2,
    image: "https://images.unsplash.com/photo-1600585154188-0d8a7f6f1cae",
    url: "#",
  },
  {
    id: 3,
    title: "Modern Office Space",
    price: "$1500/month",
    location: "Pune, India",
    date: "22 Mar 2025",
    tag: "For Rent",
    beds: 0,
    baths: 2,
    parking: 1,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
    url: "#",
  },
  {
    id: 4,
    title: "2 BHK Family House",
    price: "$140,000",
    location: "Bangalore, India",
    date: "08 Apr 2025",
    tag: "New",
    beds: 2,
    baths: 2,
    parking: 1,
    image: "https://images.unsplash.com/photo-1599427303058-f04cbcf4756f",
    url: "#",
  },
];

const FeaturedProperties = () => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const autoSlide = setInterval(() => {
      scrollToIndex(activeIndex + 1);
    }, 3000);
    return () => clearInterval(autoSlide);
  }, [activeIndex]);

  const scrollToIndex = (index) => {
    const totalItems = featuredData.length;
    const newIndex = index >= totalItems ? 0 : index < 0 ? totalItems - 1 : index;
    setActiveIndex(newIndex);

    const slider = sliderRef.current;
    if (!slider) return;

    const itemWidth = slider.children[0].offsetWidth + 16; // include gap
    const scrollPos = itemWidth * newIndex;
    slider.scrollTo({ left: scrollPos, behavior: "smooth" });
  };

  const scrollLeft = () => scrollToIndex(activeIndex - 1);
  const scrollRight = () => scrollToIndex(activeIndex + 1);

  const shareProperty = (url) => {
    if (navigator.share) navigator.share({ title: "Check Property", url });
    else navigator.clipboard.writeText(url);
  };

  return (
    <section className="max-w-[1300px] mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-white mb-6">
        Featured Properties
      </h2>

      <div className="relative">
        {/* LEFT BUTTON */}
        <button
          onClick={scrollLeft}
          className="absolute left-1 top-1/2 -translate-y-1/2 z-20
          bg-white/30 backdrop-blur-xl border border-white/20 shadow-lg
          p-2 rounded-full hover:scale-110 duration-300"
        >
          <FaChevronLeft className="text-white" size={18} />
        </button>
<div
  ref={sliderRef}
  className="flex gap-4 overflow-x-auto py-4 scroll-smooth scrollbar-none snap-x snap-mandatory"
  style={{ scrollPaddingLeft: "1rem", scrollPaddingRight: "1rem" }}
>
  {featuredData.map((p, idx) => (
    <div
      key={p.id}
      className={`snap-start flex-shrink-0 
        w-full sm:w-[45%] md:w-[30%] lg:w-[23%]
        bg-white/90 backdrop-blur-lg shadow-lg rounded-xl overflow-hidden
        hover:shadow-2xl transition-transform duration-300
        border border-white/30`}
      style={{ backgroundColor: "#07294bff" }}
    >
      <Link to={`/PropertyDetails/${p.id}`}>
        <div className="relative cursor-pointer">
          <img
            src={p.image}
            className="w-full h-40 object-cover hover:scale-110 duration-500"
            alt={p.title}
          />
          <span className="absolute top-2 left-2 bg-blue-600 text-white text-[11px] py-1 px-2 rounded-md shadow-md">
            {p.tag}
          </span>
        </div>
      </Link>

      <div className="p-3">
        <h3 className="text-[14px] font-semibold text-white">{p.title}</h3>
        <p className="text-blue-300 font-bold text-sm mt-1">{p.price}</p>
        <p className="text-gray-200 text-xs">{p.location}</p>

        <div className="flex justify-between mt-3 text-[12px] font-medium text-gray-200">
          <div className="flex items-center gap-1">
            <FaBed className="text-blue-300" />
            {p.beds} Beds
          </div>
          <div className="flex items-center gap-1">
            <FaBath className="text-blue-300" />
            {p.baths} Bath
          </div>
          <div className="flex items-center gap-1">
            <FaCar className="text-blue-300" />
            {p.parking} Car
          </div>
        </div>

        <div
          className="mt-3 bg-blue-500/30 backdrop-blur-lg border border-blue-300/40
          py-1 px-3 rounded-xl shadow-sm flex justify-between items-center"
        >
          <span className="text-[11px] font-semibold text-white">{p.date}</span>
          <button onClick={() => shareProperty(p.url)}>
            <FaShareAlt className="text-white hover:scale-110 duration-300" size={14} />
          </button>
        </div>
      </div>
    </div>
  ))}
</div>

        {/* RIGHT BUTTON */}
        <button
          onClick={scrollRight}
          className="absolute right-1 top-1/2 -translate-y-1/2 z-20
          bg-white/30 backdrop-blur-xl border border-white/20 shadow-lg
          p-2 rounded-full hover:scale-110 duration-300"
        >
          <FaChevronRight className="text-white" size={18} />
        </button>
      </div>
    </section>
  );
};

export default FeaturedProperties;
