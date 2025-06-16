// src/components/HeroSection.jsx
import React from 'react';
// import heroImage from '../assets/img.png'; // Commenting out local import to avoid resolution issues

const HeroSection = () => {
  return (
    <section className="relative grid md:grid-cols-2 items-center px-6 py-12 m-4 md:m-8 bg-white shadow-lg rounded-xl overflow-hidden">
      {/* Background shapes as per original design, adapted for new Hero section */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-purple-200 rounded-full opacity-50 -translate-x-1/4 -translate-y-1/4 filter blur-3xl z-0"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-200 rounded-full opacity-40 translate-x-1/4 translate-y-1/4 transform rotate-45 filter blur-3xl z-0"></div>

      {/* Content for the left side (text and buttons) */}
      <div className="z-10 p-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#2B1C50] leading-tight">Restart. Rise. Thrive.</h1>
        <p className="mb-6 max-w-lg text-lg text-gray-700 text-[#2B1C50]">
          India’s largest women-first platform for inclusive career building.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
          {/* Changed buttons to square shape */}
          <button className="px-6 py-2 bg-[#2B1C50] text-white rounded hover:bg-purple-900 transition-colors duration-200 shadow-md transform hover:scale-105">Register Now</button>
          <button className="px-6 py-2 border-text-[#2B1C50]2 border-[#2B1C50]  rounded hover:bg-[#2B1C50] hover:text-white transition-colors duration-200 shadow-md transform hover:scale-105">Join Academy</button>
        </div>
        <ul className="list-disc list-inside mt-4 text-base text-[#2B1C50]] space-y-2">
          <li>Smart AI-based match to route you to the right jobs</li>
          <li>Access remote, DEI-aligned freelance & full-time work</li>
          <li>Industry-relevant programs for skilling</li>
        </ul>
      </div>

      {/* Image for the right side (hidden on small screens, block on medium and up) */}
      <div className="hidden md:flex justify-center items-center z-10 p-4">
        <img
          // Using the provided image URL
          src="https://static.vecteezy.com/system/resources/thumbnails/055/397/684/small_2x/business-woman-with-laptop-png.png"
          alt="Hero Illustration - Woman working on laptop"
          // Adjusted max-width classes for a smaller image size
          className="rounded-3xl shadow-2xl w-full max-w-xs md:max-w-sm lg:max-w-md h-auto border-4 border-white transform hover:scale-105 transition-transform duration-300 ease-in-out"
          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/cccccc/333333?text=Image+Not+Found"; }}
        />
      </div>
    </section>
  );
}

export default HeroSection;
