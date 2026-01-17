import React, { useState } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      Swal.fire({
        icon: "warning",
        title: "User Not Found",
        text: "Please register before login.",
      });
      return;
    }

    if (storedUser.email === email && storedUser.password === password) {
      Swal.fire({
        icon: "success",
        title: "Login Successful!",
        timer: 1500,
        showConfirmButton: false,
      });

      navigate("/dashboard");
    } else {
      Swal.fire({
        icon: "error",
        title: "Invalid Credentials",
        text: "Wrong email or password!",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0A2540] to-[#1A3858]">

      {/* TOP GAP BELOW HEADER */}
      <div className="mt-[110px] flex-grow flex items-center justify-center px-4">

        {/* Login Card */}
        <div className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl shadow-2xl w-full max-w-md border border-white/20">

          <h2 className="text-4xl font-extrabold text-center text-white mb-10">
            Login
          </h2>

          <form onSubmit={handleLogin} className="space-y-7">

            {/* Email */}
            <div>
              <label className="text-white font-medium">Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-2 p-3.5 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-white font-medium">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-2 p-3.5 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your password"
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3.5 rounded-lg font-semibold text-lg transition shadow-lg"
            >
              Login
            </button>

            {/* Forgot Password */}
            <div className="text-center mt-1">
              <Link
                to="/forgot-password"
                className="text-blue-400 hover:text-blue-300 text-sm"
              >
                Forgot Password?
              </Link>
            </div>
          </form>

          {/* Register Redirect */}
          <p className="text-center text-white mt-6 text-sm">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-blue-400 font-semibold hover:text-blue-300"
            >
              Register Now
            </Link>
          </p>

        </div>
      </div>

      {/* Footer Gap */}
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Login;
