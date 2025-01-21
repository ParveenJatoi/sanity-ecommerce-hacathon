"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


const BlogPage = () => {
  const [categoriesOpen, setCategoriesOpen] = useState(true);

  return (
    <div className="flex flex-col lg:flex-row w-full px-4 lg:px-8 py-6 gap-6">
      {/* Blog Section */}
      <div className="lg:w-3/4 w-full flex flex-col gap-6">
        {["/coffee (1).jpg", "/handpen (1).jpg","/laptop (2).jpg"].map((src, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg shadow-lg overflow-hidden"
          >
            {/* Blog Image */}
            <Image
              src={src} // Replace with your blog image paths
              alt={`Blog Image ${src}`}
              className=" sm:h-56 object-cover"
              width={1200}
              height={1800}
            />

            {/* Blog Info */}
            <div className="p-4">
              {/* Blog Header */}
              <div className="flex items-center justify-between mb-4">
                {/* Admin */}
                <div className="flex items-center gap-2">
                  <i className="fas fa-user-circle text-gray-500"></i>
                  <span className="text-sm font-medium">Admin</span>
                </div>
                {/* Date */}
                <div className="flex items-center gap-2">
                  <i className="fas fa-calendar-alt text-gray-500"></i>
                  <span className="text-sm font-medium">March 15, 2024</span>
                </div>
              </div>

              {/* Blog Text */}
              <h2 className="text-lg font-semibold mb-2">
                Stylish Furniture for Modern Living
              </h2>
              <p className="text-sm text-gray-700 mb-4">
                Discover the perfect blend of functionality and elegance with
                our collection of modern furniture. Refresh your living space
                today.
                Discover the perfect blend of functionality and elegance with
                our collection of modern furniture. Refresh your living space
                today.
                Discover the perfect blend of functionality and elegance with
                our collection of modern furniture. Refresh your living space
                today.
                Discover the perfect blend of functionality and elegance with
                our collection of modern furniture. Refresh your living space
                today.
                Discover the perfect blend of functionality and elegance with
                our collection of modern furniture. Refresh your living space
                today.
                Discover the perfect blend of functionality and elegance with
                our collection of modern furniture. Refresh your living space
                today.
                Discover the perfect blend of functionality and elegance with
                our collection of modern furniture. Refresh your living space
                today.
                Discover the perfect blend of functionality and elegance with
                our collection of modern furniture. Refresh your living space
                today.
        

              </p>

              {/* Read More Button */}
              {/* <button className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                Read More
              </button> */}
              <span className="mt-4 text-black text-sm underline cursor-pointer hover:text-gray-700">
  Read More
</span>
            </div>
          </div>
        ))}
      </div>

      {/* Sidebar Section */}
      <div className="lg:w-1/4 w-full flex flex-col gap-8">
        {/* Search Bar */}
     
        <div className="p-4 border border-gray-300 rounded-lg shadow-sm flex items-center">
  <input
    type="text"
    placeholder="Search..."
    className="flex-grow bg-transparent outline-none text-sm"
  />
  <FontAwesomeIcon icon={faSearch} className="text-gray-500 text-base" />
</div>


        {/* Categories */}
        <div className="p-4 border border-gray-300 rounded-lg shadow-sm">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setCategoriesOpen(!categoriesOpen)}
          >
            <h3 className="text-lg font-semibold">Categories</h3>
            <i
              className={`fas ${
                categoriesOpen ? "fa-chevron-up" : "fa-chevron-down"
              }`}
            ></i>
          </div>
          {categoriesOpen && (
            <ul className="mt-4 space-y-2">
              {[
                "Crafts",
                "Design",
                "Handmade",
                "Interior",
                "Wood",
              ].map((category, index) => (
                <li
                  key={index}
                  className="text-sm text-gray-700 hover:text-blue-600 cursor-pointer flex items-center gap-2"
                >
                  <i className="fas fa-circle text-xs text-gray-500"></i>
                  {category}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Recent Posts */}
        <div className="p-4 border border-gray-300 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
          {["/coffee (1).jpg","/handpen (1).jpg","/laptop (2).jpg"].map((src, index) => (
            <div
              key={index}
              className="flex items-center gap-4 mb-4 hover:bg-gray-100 p-2 rounded"
            >
              <Image
                src={src} // Replace with your blog image paths
                alt={`Recent Post ${src}`}
                className="w-16 h-16 object-cover rounded"
                width={64}
                height={64}
              />
              <span className="text-sm font-medium">
                Stylish Furniture {src}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;