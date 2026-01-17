import React from "react";
import { FaApple, FaGooglePlay, FaWindows } from "react-icons/fa";

export default function DownloadPage() {
  return (
    <div className="relative w-full h-[500px] sm:h-[500px] md:h-[400px] flex flex-col items-center justify-center p-4 sm:p-6">

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500 via-purple-400 to-purple-600"></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-white w-full">
        
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-10 text-center drop-shadow-lg">
          Download Our App
        </h1>

        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full max-w-3xl">

          {/* APP STORE */}
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border-2 border-white/50 hover:border-white hover:bg-white/20 px-6 py-3 rounded-2xl font-semibold text-white transition duration-300 shadow-lg hover:scale-105"
          >
            <FaApple className="w-6 h-6" /> App Store
          </a>

          {/* GOOGLE PLAY */}
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border-2 border-white/50 hover:border-white hover:bg-white/20 px-6 py-3 rounded-2xl font-semibold text-white transition duration-300 shadow-lg hover:scale-105"
          >
            <FaGooglePlay className="w-6 h-6" /> Google Play
          </a>

          {/* WINDOWS */}
          <a
            href="https://www.microsoft.com/store/apps"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border-2 border-white/50 hover:border-white hover:bg-white/20 px-6 py-3 rounded-2xl font-semibold text-white transition duration-300 shadow-lg hover:scale-105"
          >
            <FaWindows className="w-6 h-6" /> Windows
          </a>

        </div>

        {/* Footer Text */}
        <p className="mt-12 text-white/80 text-center text-sm sm:text-base max-w-md">
          Download our app to explore premium real estate listings on your device anytime, anywhere.
        </p>
      </div>
    </div>
  );
}
