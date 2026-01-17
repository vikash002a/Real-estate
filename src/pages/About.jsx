import React from "react";
import {
  FaUserPlus,
  FaRegIdBadge,
  FaUpload,
  FaDollarSign,
} from "react-icons/fa";
import CounterPage from "../components/CounterPage"; // Counter section
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-[#0A2540] text-white    ">
      {/* Page Content */}

      <section className="max-w-5xl mx-auto px-6 py-7"></section>
      {/* Top Banner */}
      <div className="relative w-full h-[30vh] md:h-[30vh]">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          alt="About Banner"
          className="w-full h-full object-cover"
        />

        {/* Purple Overlay */}
        <div className="absolute inset-0 bg-purple-700/50 mix-blend-multiply"></div>

        {/* Text on Banner */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-4xl font-bold">
            About Us
          </h1>
        </div>
      </div>

      {/* WHY REALLIST SECTION */}
      <div className="max-w-6xl mx-auto px-6 py-14 text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why RealList?</h2>

        <p className="text-gray-300 text-lg leading-relaxed ">
          RealList is a next-generation real-estate platform built to make
          property transactions simple, transparent, and trustworthy. We bring
          verified listings, professional agents, and advanced tools together in
          one powerful ecosystem. Whether you’re buying, selling, or renting,
          our smart search features, secure listing process, and modern user
          experience help you achieve the best results faster than ever.
        </p>
      </div>

      {/* HOW IT WORKS */}
      <div className="  bg-[#102F54] py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          How It Works?
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
          {/* Step 1 - Registration */}
          <div className="shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition border border-white/20">
            <FaUserPlus className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Registration</h3>
            <p className="text-white-600 text-sm">
              Create your account in minutes and join RealList.
            </p>
          </div>

          {/* Step 2 - Create Profile */}
          <div className="shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition border border-white/20">
            <FaRegIdBadge className="text-purple-600 text-4xl mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Create Account</h3>
            <p className="text-white-600 text-sm">
              Complete your profile to get personalized recommendations.
            </p>
          </div>

          {/* Step 3 - Add Post */}
          <div className="shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition border border-white/20">
            <FaUpload className="text-green-600 text-4xl mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Add Property Post</h3>
            <p className="text-white-600 text-sm">
              Upload images & details of your property easily.
            </p>
          </div>

          {/* Step 4 - Earn Money */}
          <div className="shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition border border-white/20">
            <FaDollarSign className="text-yellow-500 text-4xl mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Get Earnings</h3>
            <p className="text-white-600 text-sm">
              Sell or rent your property and start earning.
            </p>
          </div>
        </div>
      </div>
      {/* Post Ad Banner */}
      <div className="relative w-full h-[45vh] md:h-[40vh] ">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1920&q=80
"
          alt="Post Ad Banner"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
{/* Content */}
<div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
  <h2 className="text-[0.875rem] sm:text-2xl md:text-4xl font-bold text-white">
    Are you ready to post your property ad?
  </h2>

  <p className="text-[0.875rem] sm:text-base text-white/80 max-w-2xl mt-4">
    Grow your reach and connect with thousands of buyers and renters
    instantly. List your property on RealList for free and start getting
    responses today.
  </p>

  <button className="mt-6 text-[0.875rem] sm:text-sm bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg shadow-xl transition">
    Post Free Property Ad
  </button>
</div>
</div>
      {/* WHY CHOOSE US SECTION */}
      <div className="bg-[#0A2540] text-white py-20 px-6">
        {/* Heading Center */}
        <h2 className="text-4xl font-bold text-center mb-4">Why Choose Us?</h2>
        <p className="text-white/70 text-center max-w-2xl mx-auto mb-12">
          We provide complete real-estate support from buying, selling,
          investment, loan guidance to property maintenance. Trusted services
          for a smooth and secure experience.
        </p>

        {/* 6 Grid Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Box 1 */}
          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center shadow-lg">
            <div className="text-4xl mb-3">🏦</div>
            <h3 className="text-xl font-semibold mb-1">Bank Loan Facility</h3>
            <p className="text-white/60 text-sm">
              Hassle-free bank loan assistance for property buyers.
            </p>
          </div>

          {/* Box 2 */}
          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center shadow-lg">
            <div className="text-4xl mb-3">📝</div>
            <h3 className="text-xl font-semibold mb-1">Spot Registration</h3>
            <p className="text-white/60 text-sm">
              Fast and secure property registration services.
            </p>
          </div>

          {/* Box 3 */}
          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center shadow-lg">
            <div className="text-4xl mb-3">📊</div>
            <h3 className="text-xl font-semibold mb-1">
              Investment Consultancy
            </h3>
            <p className="text-white/60 text-sm">
              Expert advice for profitable property investments.
            </p>
          </div>

          {/* Box 4 */}
          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center shadow-lg">
            <div className="text-4xl mb-3">🏗️</div>
            <h3 className="text-xl font-semibold mb-1">Construction Service</h3>
            <p className="text-white/60 text-sm">
              High-quality construction solutions for all needs.
            </p>
          </div>

          {/* Box 5 */}
          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center shadow-lg">
            <div className="text-4xl mb-3">🤝</div>
            <h3 className="text-xl font-semibold mb-1">Personalized Support</h3>
            <p className="text-white/60 text-sm">
              Dedicated assistance tailored to your requirements.
            </p>
          </div>

          {/* Box 6 */}
          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center shadow-lg">
            <div className="text-4xl mb-3">🛠️</div>
            <h3 className="text-xl font-semibold mb-1">Property Maintenance</h3>
            <p className="text-white/60 text-sm">
              Complete maintenance support for your properties.
            </p>
          </div>
        </div>
      </div>

      {/* Counter Section */}
      <CounterPage />

      {/* TEAM SECTION */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Our Team</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              name: "Amit Sharma",
              role: "CEO & Founder",
              img: "https://randomuser.me/api/portraits/men/11.jpg",
              description:
                "Amit leads our company with a vision for innovation and excellence in real estate services.",
              rating: 5,
            },
            {
              name: "Pooja Verma",
              role: "Marketing Head",
              img: "https://randomuser.me/api/portraits/women/47.jpg",
              description:
                "Pooja ensures our brand reaches the right audience and builds lasting customer relationships.",
              rating: 5,
            },
            {
              name: "Rahul Gupta",
              role: "Lead Developer",
              img: "https://randomuser.me/api/portraits/men/32.jpg",
              description:
                "Rahul develops cutting-edge tools and platforms to make property management seamless.",
              rating: 5,
            },
          ].map((team, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/10"
            >
              <img
                src={team.img}
                alt={team.name}
                className="w-24 h-24 rounded-full mx-auto border-4 border-blue-400 shadow-lg mb-4"
              />
              <h3 className="text-xl font-semibold">{team.name}</h3>
              <p className="text-white/60 mb-2">{team.role}</p>
              <p className="text-white/70 text-sm mb-3">{team.description}</p>

              {/* 5 Star Rating */}
              <div className="flex justify-center gap-1">
                {Array(5)
                  .fill(0)
                  .map((_, idx) => (
                    <svg
                      key={idx}
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.973a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.384 2.455a1 1 0 00-.364 1.118l1.287 3.973c.3.921-.755 1.688-1.54 1.118l-3.384-2.455a1 1 0 00-1.176 0l-3.384 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.973a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.973z" />
                    </svg>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
