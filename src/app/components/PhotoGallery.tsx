// import React from "react";
// import Image from "next/image";

// const ImageGallery = () => {
//   return (
//     <div className="bg-[#fcf8f3] py-12 px-4">
//       {/* Headings */}
//       <div className="text-center mb-8">
//         <h1 className="text-[40px] font-bold text-black leading-[48px] font-poppins">
//           Stunning Image Gallery
//         </h1>
//         <h2 className="text-[24px] text-gray-600 font-medium leading-[32px] font-poppins">
//           A collection of inspiring visuals
//         </h2>
//       </div>

//       {/* Image Grid */}
//       <div className="grid grid-cols-12 gap-4">
//         {/* First Row: 4 Images */}
//         <div className="col-span-3">
//           <Image
//             src="/cornertable.png"
//             alt="Image 1"
//             width={250}
//             height={350}
//             className="w-full h-auto object-cover rounded-lg shadow-lg"
//           />
//         </div>
//         <div className="col-span-3">
//           <Image
//             src="/laptoptable.png"
//             alt="Image 2"
//             width={350}
//             height={250}
//             className="w-full h-auto object-cover rounded-lg shadow-lg"
//           />
//         </div>
//         <div className="col-span-3">
//           <Image
//             src="/dining1.png"
//             alt="Image 4"
//             width={270}
//             height={360}
//             className="w-full h-auto object-cover rounded-lg shadow-lg"
//           />
//         </div>
        
       
//         <div className="col-span-3">
//           <Image
//             src="/bed1.png"
//             alt="Image 4"
//             width={270}
//             height={360}
//             className="w-full h-auto object-cover rounded-lg shadow-lg"
//           />
//         </div>
//         <div className="col-span-3">
//           <Image
//             src="/chair.png"
//             alt="Image 5"
//             width={350}
//             height={380}
//             className="w-full h-auto object-cover rounded-lg shadow-lg"
//           />
//         </div>

//         {/* Second Row: Remaining Images */}
//         <div className="col-span-4">
//           <Image
//             src="/roundtables.png"
//             alt="Image 6"
//             width={360}
//             height={300}
//             className="w-full h-auto object-cover rounded-lg shadow-lg"
//           />
//         </div>
//         <div className="col-span-4">
//           <Image
//             src="/wall2.png"
//             alt="Image 6"
//             width={330}
//             height={240}
//             className="w-full h-auto object-cover rounded-lg shadow-lg"
//           />
//         </div>
//         <div className="col-span-2">
//           <Image
//             src="/stove.png"
//             alt="Image 7"
//             width={180}
//             height={240}
//             className="w-full h-auto object-cover rounded-lg shadow-lg"
//           />
//         </div>
//         <div className="col-span-2">
//           <Image
//             src="/vase1.png"
//             alt="Image 8"
//             width={250}
//             height={200}
//             className="w-full h-auto object-cover rounded-lg shadow-lg"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImageGallery;



import React from "react";
import Image from "next/image";

const ImageGallery = () => {
  return (
    <div className="bg-[#fcf8f3] py-12 px-4">
      {/* Headings */}
      <div className="text-center mb-8">
        <h2 className="text-[16px] text-gray-500 font-medium leading-[24px] font-poppins">
          A collection of inspiring visuals
        </h2>
        <h1 className="text-[40px] font-bold text-black leading-[48px] font-poppins">
          Stunning Image Gallery
        </h1>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-5 gap-4">
        {/* First Row: 5 Images */}
        <div>
          <Image
            src="/laptoptable (1).png"
            alt="Image 1"
            width={250}
            height={350}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        <div>
          <Image
            src="/room1.png"
            alt="Image 2"
            width={350}
            height={250}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        <div>
          <Image
            src="/room2.png"
            alt="Image 3"
            width={270}
            height={360}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        <div>
          <Image
            src="/heropic1.jpg"
            alt="Image 4"
            width={270}
            height={360}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        <div>
          <Image
            src="/laptop (2).jpg"
            alt="Image 5"
            width={350}
            height={380}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Second Row: 5 Images */}
        <div>
          <Image
            src="/laptop (2).jpg"
            alt="Image 6"
            width={360}
            height={300}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        <div>
          <Image
            src="/room1.png"
            alt="Image 7"
            width={330}
            height={240}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        <div>
          <Image
            src="/room3.png"
            alt="Image 8"
            width={180}
            height={240}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        <div>
          <Image
            src="/room2.png"
            alt="Image 9"
            width={250}
            height={200}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        <div>
          <Image
            src="/heropic1.jpg"
            alt="Image 10"
            width={250}
            height={300}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;



