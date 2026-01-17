import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    if (existingUsers.some((u) => u.email === form.email)) {
      Swal.fire("Already Registered", "Please Login!", "warning");
      return;
    }

    existingUsers.push(form);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    Swal.fire("Registration Successful!", "You can now login.", "success");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0A2540] to-[#1A3858]">

      {/* Top gap for header */}
      <div className="mt-[110px] flex-grow flex items-center justify-center px-4">

        {/* Register Card */}
        <div className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl shadow-2xl w-full max-w-md border border-white/20">

          <h2 className="text-4xl font-extrabold text-center text-white mb-10">
            Create an Account
          </h2>

          <form onSubmit={handleRegister} className="space-y-7">

            {/* Full Name */}
            <div>
              <label className="text-white font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full mt-2 p-3.5 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-white font-medium">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-2 p-3.5 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-white font-medium">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full mt-2 p-3.5 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
              />
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3.5 rounded-lg font-semibold text-lg transition shadow-lg"
            >
              Register
            </button>
          </form>

          {/* Login Redirect */}
          <p className="text-center text-white mt-6 text-sm">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-blue-400 font-semibold cursor-pointer hover:text-blue-300"
            >
              Login
            </span>
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Register;
