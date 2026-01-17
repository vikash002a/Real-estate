import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaCreditCard,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900  text-white pt-14 pb-8 px-6">
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* ABOUT SECTION */}
        <div>
          <h2 className="text-xl font-semibold mb-4">About Us</h2>
          <p className="text-white/80 leading-6">
            We provide premium real estate listings, property deals, and easy
            solutions to help you find your dream home anywhere in the world.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-xl">
            <FaFacebook className="hover:text-blue-300 cursor-pointer" />
            <FaInstagram className="hover:text-pink-300 cursor-pointer" />
            <FaTwitter className="hover:text-blue-300 cursor-pointer" />
            <FaYoutube className="hover:text-red-300 cursor-pointer" />
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-white/80">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Properties</li>
            <li className="hover:text-white cursor-pointer">Recent Posts</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
            <li className="hover:text-white cursor-pointer">About</li>
          </ul>
        </div>

        {/* CONTACT SECTION */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact</h2>
          <p className="text-white/80">📍 London, UK</p>
          <p className="text-white/80 mt-2">📞 +44 1234 567890</p>
          <p className="text-white/80 mt-2">📧 support@example.com</p>
        </div>

        {/* SUBSCRIPTION BOX */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Subscribe</h2>
          <p className="text-white/80 mb-3">
            Stay updated with our latest property listings and offers.
          </p>

          <div
            className="flex items-center bg-white/10 backdrop-blur-lg 
                  border border-white/20 rounded-xl px-3 py-2"
          >
            <input
              type="text"
              placeholder="Enter Email"
              className="flex-1 bg-transparent text-white placeholder-white/60 
                 outline-none text-sm 
                 focus:bg-transparent focus:ring-0 focus:outline-none"
            />

            <button
              className="ml-2 bg-gradient-to-r from-blue-400 to-purple-500
                 text-white font-semibold px-3 py-1.5 rounded-lg
                 hover:opacity-90 active:scale-95 transition-all duration-200"
            >
              Subscribe
            </button>
          </div>

          {/* PAYMENT ICONS */}
          <div className="max-w-7xl mx-auto flex justify-center gap-6 mt-10 text-3xl text-white/80">
            <FaCcVisa />
            <FaCcMastercard />
            <FaCcPaypal />
            <FaCreditCard />
          </div>
        </div>
      </div>
      {/* COPYRIGHT */}
      <p className="text-center text-white/60 mt-6 pt-4 border-t border-white/20">
        © 2025 Real Estate. All Rights Reserved.
      </p>
    </footer>
  );
}
