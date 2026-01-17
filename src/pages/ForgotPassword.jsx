import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find((u) => u.email === email);

    if (!user) {
      Swal.fire(
        "Email Not Found!",
        "Please enter a registered email.",
        "error"
      );
      return;
    }

    Swal.fire(
      "Reset Link Sent!",
      "A password reset link has been sent to your email (demo).",
      "success"
    );

    navigate("/reset-password", { state: { email } });
  };

  return (
<div className="min-h-screen flex flex-col justify-between 
  bg-gradient-to-br from-[#1A2F4D] to-[#1A2F4D] 
  pt-28 pb-10">
     
      <div className="flex justify-center items-center h-full px-4 pt-28 pb-10">
        <div className="bg-white\ shadow-lg p-8 rounded-xl w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-2 text-white">
            Forgot Password
          </h2>

          <form onSubmit={handleReset} className="space-y-4">
            <input
              type="email"
              placeholder="Enter your registered email"
              className="w-full px-4 py-2 border rounded-lg"
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Send Reset Link
            </button>
          </form>

          <p
            onClick={() => navigate("/login")}
            className="text-center text-sm mt-4 text-blue-600 cursor-pointer hover:underline"
          >
            Back to Login
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ForgotPassword;
