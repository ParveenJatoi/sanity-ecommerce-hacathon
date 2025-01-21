// import React from 'react';
// import Image from 'next/image';

// const Rooms = () => {
//   return (
//     <div className="relative w-[1440px] h-[670px] bg-[#fcf8f3] flex items-center justify-between">
//       {/* Left Section */}
//       <div className="ml-[100px]">
//         {/* Heading */}
//         <div className="space-y-2">
//           <h1 className="text-[40px] font-bold leading-[48px] text-left text-black font-poppins">
//             50+ Beautiful Rooms
//           </h1>
//           <h2 className="text-[40px] font-bold leading-[48px] text-left text-black font-poppins">
//             Inspiration
//           </h2>
//         </div>
//         {/* Paragraph */}
//         <p className="mt-[30px] text-[16px] font-medium leading-[24px] text-left text-black font-poppins w-[368px]">
//           Our designer already made a lot of beautiful prototypes of rooms that inspire you.
//         </p>
//       </div>

//       {/* Right Section */}
//       <div className="relative">
//         {/* Slider */}
//         <div className="relative w-[404px] h-[582px] overflow-hidden">
//           <Image
//             src="/wall.png"
//             alt="Room Image"
//             width={450}
//             height={550}
//             className="w-full h-full object-cover"
//           />
//           {/* Text Box */}
//           <div className="absolute bottom-[20px] left-[20px] bg-white px-4 py-2 shadow-lg">
//             <p className="text-[16px] text-black font-medium">01 --- Bed Room</p>
//             <p className="text-[28px] font-semibold leading-[33.6px] text-black">
//               Inner Peace
//             </p>
//           </div>
//           {/* Next Arrow */}
//           <button className="absolute bottom-[20px] right-[20px] w-[40px] h-[40px] bg-yellow-500 flex items-center justify-center rounded-full shadow-lg">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-6 h-6 text-white"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M9 5l7 7-7 7"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Rooms;

// "use client"
// import React, { useState } from 'react';
// import Image from 'next/image';

// const Rooms = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Placeholder images for the slider
//   const slides = [
//     { id: 1, src: '/wall.png', title: '01 --- Bed Room', subtitle: 'Inner Peace' },
//     { id: 2, src: '/dining1.png', title: '02 --- Living Room', subtitle: 'Comfort ' },
//     { id: 3, src: '/sidetable.png', title: '03 --- Kitchen', subtitle: 'Culinary Bliss' },
//   ];

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   return (
//     <div className="relative w-[1440px] h-[670px] bg-[#fcf8f3] flex items-center justify-between">
//       {/* Left Section */}
//       <div className="ml-[100px]">
//         {/* Heading */}
//         <div className="space-y-2">
//           <h1 className="text-[40px] font-bold leading-[48px] text-left text-black font-poppins">
//             50+ Beautiful Rooms
//           </h1>
//           <h2 className="text-[40px] font-bold leading-[48px] text-left text-black font-poppins">
//             Inspiration
//           </h2>
//         </div>
//         {/* Paragraph */}
//         <p className="mt-[30px] text-[16px] font-medium leading-[24px] text-left text-black font-poppins w-[368px]">
//           Our designer already made a lot of beautiful prototypes of rooms that inspire you.
//         </p>
//         {/* Explore More Button */}
//         <button className="mt-6 px-6 py-2 bg-yellow-500 text-white text-[16px] font-medium rounded shadow-lg hover:bg-yellow-600">
//           Explore More
//         </button>
//       </div>

//       {/* Right Section */}
//       <div className="relative">
//         {/* Slider */}
//         <div className="relative mt-8 w-[650px] h-[650px] overflow-hidden">
//           <Image
//             src={slides[currentSlide].src}
//             alt="Room Image"
//             width={450}
//             height={550}
//             className="w-full h-full object-cover"
//           />
//           {/* Text Box */}
//           <div className="absolute ml-20 w-[200px] h-[120px] bottom-[20px] left-[20px] bg-white px-4 py-2 shadow-lg">
//             <p className="text-[20px] text-black font-medium">{slides[currentSlide].title}</p>
//             <p className="text-[28px] font-semibold leading-[33.6px] text-black">
//               {slides[currentSlide].subtitle}
//             </p>
//           </div>
//           {/* Next Arrow */}
//           <button
//             onClick={nextSlide}
//             className="absolute mr-60 bottom-[20px] right-[20px] w-[80px] h-[80px] bg-yellow-500 flex items-center justify-center shadow-lg"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-6 h-6 text-white"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M9 5l7 7-7 7"
//               />
//             </svg>
//           </button>
//         </div>
//         {/* Previous Arrow */}
//         <button
//           onClick={prevSlide}
//           className="absolute ml-0 bottom-[20px] left-[20px] w-[80px] h-[80px] bg-yellow-500 flex items-center justify-center shadow-lg"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="w-6 h-6 text-white rotate-180"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M9 5l7 7-7 7"
//             />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Rooms;
"use client";
import React, { useState } from "react";
import Image from "next/image";

const Rooms = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Placeholder images for the slider
  const slides = [
    { id: 1, src: "/room1.png", title: "01 --- Bed Room", subtitle: "Inner Peace" },
    { id: 2, src: "/room2.png", title: "02 --- Living Room", subtitle: "Comfort " },
    { id: 3, src: "/room3.png", title: "03 --- Kitchen", subtitle: "Culinary Bliss" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[670px] bg-[#fcf8f3] flex items-center justify-between px-4">
      {/* Left Section */}
      <div className="md:ml-[100px] w-full md:w-auto text-center md:text-left">
        {/* Heading */}
        <div className="space-y-2">
          <h1 className="text-[32px] md:text-[40px] font-bold leading-[48px] text-black font-poppins">
            50+ Beautiful Rooms
          </h1>
          <h2 className="text-[32px] md:text-[40px] font-bold leading-[48px] text-black font-poppins">
            Inspiration
          </h2>
        </div>
        {/* Paragraph */}
        <p className="mt-[30px] text-[14px] md:text-[16px] font-medium leading-[24px] text-black font-poppins w-full md:w-[368px] mx-auto">
          Our designer already made a lot of beautiful prototypes of rooms that inspire you.
        </p>
        {/* Explore More Button */}
        <button className="mt-6 px-6 py-2 bg-yellow-500 text-white text-[16px] font-medium rounded shadow-lg hover:bg-yellow-600">
          Explore More
        </button>
      </div>

      {/* Right Section */}
      <div className="relative w-full md:w-[650px] mx-auto">
        {/* Slider */}
        <div className="relative mt-8 w-full h-[400px] md:h-[650px] overflow-hidden">
          <Image
            src={slides[currentSlide].src}
            alt="Room Image"
            width={450}
            height={550}
            className="w-full h-full object-cover"
          />
          {/* Text Box */}
          <div className="absolute bottom-[20px] left-[20px] w-[200px] md:w-[240px] h-[120px] bg-white px-4 py-2 shadow-lg">
            <p className="text-[16px] md:text-[20px] text-black font-medium">{slides[currentSlide].title}</p>
            <p className="text-[20px] md:text-[28px] font-semibold leading-[33.6px] text-black">
              {slides[currentSlide].subtitle}
            </p>
          </div>
        </div>

        {/* Arrow buttons container */}
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4">
          {/* Previous Arrow */}
          <button
            onClick={prevSlide}
            className="w-[60px] md:w-[80px] h-[60px] md:h-[80px] bg-yellow-500 flex items-center justify-center shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Next Arrow */}
          <button
            onClick={nextSlide}
            className="w-[60px] md:w-[80px] h-[60px] md:h-[80px] bg-yellow-500 flex items-center justify-center shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rooms;