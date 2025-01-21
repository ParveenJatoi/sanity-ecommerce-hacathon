"use client"
import React from "react";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center py-64"
      style={{ backgroundImage: "url('/heropic1.jpg')" }}
    >
      <div className="container mx-auto px-4 md:px-12 h-full flex items-center justify-end relative">
        {/* Text Content */}
        <div className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[50%] bg-[#fff3e3] p-4 sm:p-6 md:p-12 rounded-lg shadow-lg">
          <div className="text-left">
            <p className="text-xs sm:text-sm md:text-base mb-2 text-black">New Arrival</p>
            <h1 className="text-xl sm:text-2xl md:text-5xl font-bold leading-tight mb-2 text-yellow-600">
              Discover Our New Collection
            </h1>
            <h1 className="text-xl sm:text-2xl md:text-5xl font-bold leading-tight mb-4 text-yellow-600">
              of Stylish Furniture
            </h1>
            <p className="text-xs sm:text-sm md:text-lg text-black mb-6">
              Explore a wide range of furniture pieces that blend style and comfort. Discover what makes our collection unique.
            </p>
            <button  className="bg-yellow-600 text-white py-1 px-4 sm:py-2 sm:px-6 rounded-sm hover:bg-gray-400 transition-all duration-300">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;