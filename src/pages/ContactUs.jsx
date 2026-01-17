import React from "react";
import { FaPhoneAlt, FaClock, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#0A2540]">
   <div className="relative w-full h-[30vh]">
  {/* Background Image */}
  <img
    src="https://images.unsplash.com/photo-1593642634367-d91a135587b5?auto=format&fit=crop&w=1400&q=80"
    alt="Contact Banner"
    className="w-full h-full object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Text on top */}
 
  {/* Centered Text */}
  <div className="absolute inset-0 flex items-center justify-center pt-20">
    <h1 className="text-4xl md:text-5xl font-bold text-white">
      Contact Us
    </h1>
  </div>

</div>

      {/* Info Boxes */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 gap-8">
      {/* Call Us */}
<div className="border border-white/20 rounded-2xl p-6 text-center backdrop-blur-md">
  <FaPhoneAlt className="text-blue-400 text-4xl mb-4 mx-auto" />
  <h3 className="text-xl font-semibold mb-2 text-white">Call Us</h3>
  <p className="text-white/80">+91 98765 43210</p>
  <p className="text-white/60 mt-1">Mon - Sat</p>
</div>

{/* Working Hours */}
<div className="border border-white/20 rounded-2xl p-6 text-center backdrop-blur-md">
  <FaClock className="text-yellow-400 text-4xl mb-4 mx-auto" />
  <h3 className="text-xl font-semibold mb-2 text-white">Working Hours</h3>
  <p className="text-white/80">Monday - Saturday</p>
  <p className="text-white/60 mt-1">09:00 AM - 06:00 PM</p>
</div>

{/* Location */}
<div className="border border-white/20 rounded-2xl p-6 text-center backdrop-blur-md">
  <FaMapMarkerAlt className="text-red-400 text-4xl mb-4 mx-auto" />
  <h3 className="text-xl font-semibold mb-2 text-white">Location</h3>
  <p className="text-white/80">123 Real Estate St.</p>
  <p className="text-white/60 mt-1">New Delhi, India</p>
</div>

{/* Email Us */}
<div className="border border-white/20 rounded-2xl p-6 text-center backdrop-blur-md">
  <FaEnvelope className="text-purple-400 text-4xl mb-4 mx-auto" />
  <h3 className="text-xl font-semibold mb-2 text-white">Email Us</h3>
  <p className="text-white/80">contact@realestatepro.com</p>
  <p className="text-white/60 mt-1">We reply within 24 hours</p>
</div>
      </div>
{/* CONTACT FORM + MAP SECTION */}
<div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-20">

  {/* Left Side - Map */}
  <div className="w-full h-[500px] rounded-2xl overflow-hidden border border-white/20">
    <iframe
      title="Real Estate Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.123456789!2d77.209021!3d28.613895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd123456789%3A0xabcdef123456789!2sReal%20Estate%20Office!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
      width="100%"
      height="100%"
      className="border-0"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>

  {/* Right Side - Contact Form */}
  <div className="bg-[#0A2540] p-8 rounded-2xl border border-white/20 shadow-lg">
    <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
    <form className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Your Name"
        className="p-3 rounded-lg bg-white/10 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="email"
        placeholder="Email Address"
        className="p-3 rounded-lg bg-white/10 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-blue-400"
      />
      <textarea
        rows="5"
        placeholder="Your Message"
        className="p-3 rounded-lg bg-white/10 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-blue-400 resize-none"
      ></textarea>
      <button
        type="submit"
        className="bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold px-5 py-3 rounded-xl hover:opacity-90 active:scale-95 transition-all duration-200"
      >
        Send Message
      </button>
    </form>
  </div>
</div>
 <Footer />
    </div>
  );
};

export default ContactUs;
