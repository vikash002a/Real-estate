import React, { useState } from "react";
import Sidebar from "../components/Sidebar"; // Import Sidebar Component
import Footer from "../components/Footer";

const MyProfile = () => {
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "India",
    about: "",
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("editProfile");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  return (
    <div className="min-h-screen bg-[#0a1124]">
      {/* HEADER */}
      <div className="w-full h-56 relative rounded-xl overflow-hidden shadow mb-6">
        <img
          src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format"
          alt="Dashboard Header"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B64BD]/70 to-[#3FA1E6]/70 flex items-center justify-center">
          <h1 className="text-white text-3xl font-bold text-center">My Dashboard</h1>
        </div>
      </div>

    
      {/* MAIN LAYOUT */}
      <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto px-4">
        {/* ---------------- SIDEBAR ---------------- */}
        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        {/* ---------------- RIGHT FORM SECTION ---------------- */}
        <div className="flex-1 bg-[#111827] p-6 md:p-8 rounded-xl shadow-lg text-white">
          <h2 className="text-xl md:text-2xl font-semibold mb-6">Edit Profile</h2>

          {/* FORM INPUTS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <Input label="First Name" placeholder="John" value={profile.firstName} name="firstName" onChange={handleChange} />
            <Input label="Last Name" placeholder="Doe" value={profile.lastName} name="lastName" onChange={handleChange} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <Input label="Email" placeholder="john@example.com" value={profile.email} name="email" onChange={handleChange} />
            <Input label="Phone Number" placeholder="1234567890" value={profile.phone} name="phone" onChange={handleChange} />
          </div>

          <Input label="Address" placeholder="Home Address" value={profile.address} name="address" onChange={handleChange} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
            <Input label="City" placeholder="City" value={profile.city} name="city" onChange={handleChange} />
            <Input label="Postal Code" placeholder="ZIP Code" value={profile.postalCode} name="postalCode" onChange={handleChange} />
            <Select label="Country" options={["India", "USA", "UK"]} value={profile.country} name="country" onChange={handleChange} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <Input label="Facebook" placeholder="https://facebook.com/" />
            <Input label="Google" placeholder="https://google.com/" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <Input label="Twitter" placeholder="https://twitter.com/" />
            <Input label="Pinterest" placeholder="https://pinterest.com/" />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">About Me</label>
            <textarea
              rows="4"
              className="w-full bg-gray-900 border border-gray-600 rounded-md p-3 resize-none"
              placeholder="Enter about your description"
              value={profile.about}
              name="about"
              onChange={handleChange}
            ></textarea>
          </div>

          <button className="w-full md:w-auto px-6 py-3 text-white rounded-lg bg-gradient-to-r from-[#0B64BD] to-[#3FA1E6]">
            Save Changes
          </button>
        </div>
      </div>

      {/* FOOTER */}
      <div className="mt-10 px-4 md:px-0">
        <Footer />
      </div>
    </div>
  );
};

// REUSABLE INPUT Component
const Input = ({ label, placeholder, value, name, onChange }) => (
  <div>
    <label className="block mb-1 font-medium">{label}</label>
    <input
      className="w-full bg-gray-900 border border-gray-600 rounded-md p-3"
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
    />
  </div>
);

// REUSABLE SELECT Component
const Select = ({ label, options, value, name, onChange }) => (
  <div>
    <label className="block mb-1 font-medium">{label}</label>
    <select
      className="w-full bg-gray-900 border border-gray-600 rounded-md p-3"
      value={value}
      name={name}
      onChange={onChange}
    >
      {options.map((opt) => (
        <option key={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

export default MyProfile;
