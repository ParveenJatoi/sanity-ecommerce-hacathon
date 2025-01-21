"use client";
import React from "react";
import Image from "next/image";

const HeroBlog = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center opacity-50"
      style={{ backgroundImage: "url('heropic2.jpg')" }}
    >
      <div className="flex items-center justify-end h-full w-full px-8 md:px-16 lg:px-24">
        {/* Text Content */}
        <div className="relative mr-96 text-black text-center">
          {/* Logo Image Over the H1 */}
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 md:-top-20">
            <Image
              src="/logo.png" // Replace with the path to your logo
              alt="Logo"
              width={80} // Default width for small screens
              height={80} // Default height for small screens
              className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain"
            />
          </div>
          {/* Blog Title */}
          <h1 className="text-[36px] md:text-[48px] font-bold relative">
            Blog
          </h1>
          {/* Subtitle */}
          <p className="mt-2 text-[16px] md:text-[20px] font-medium">
            Home &gt; Blog
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroBlog;