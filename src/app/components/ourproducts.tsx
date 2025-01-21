

// "use client";
// import { useState, useEffect } from 'react';
// import { client } from "@/sanity/lib/client";
// import Image from "next/image";

// // Define the type for the product
// interface Product {
//   title: string;
//   description: string;
//   productImage: { asset: { url: string } };
//   price: number;
//   tags: string[];
//   discountPercentage: number;
//   isNew: boolean;
// }

// const OurProducts = () => {
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const query = `*[_type == "product"] {
//         title,
//         description,
//         productImage {
//           asset->{
//             url
//           }
//         },
//         price,
//         tags,
//         discountPercentage,
//         isNew
//       }`;

//       try {
//         const data = await client.fetch(query);
//         console.log(data); // Log to verify data structure
//         setProducts(data); // Set the fetched product data
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div className="relative w-full max-w-5xl mx-auto p-4 md:p-10">
//       <h1 className="text-center text-4xl md:text-5xl font-bold mb-8">Our Products</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {products.slice(0, 9).map((product, index) => (
//           <div
//             key={index}
//             className="relative group w-full h-96 md:h-[400px] overflow-hidden rounded-md bg-white shadow-md"
//           >
//             {/* Product Image */}
//             <Image
//               src={product.productImage?.asset?.url || "/placeholder.jpg"} // Fallback image
//               alt={product.title}
//               layout="responsive"
//               width={400}
//               height={400}
//               objectFit="cover"
//               className="rounded-t-md"
//             />

//             {/* Sale Tag for Discount */}
//             {product.discountPercentage != null && product.discountPercentage > 0 && (
//               <div className="absolute top-2 left-2 rounded-full bg-red-600 text-white text-xs font-bold px-2 py-1">
//                 Sale
//               </div>
//             )}

//             {/* New Badge */}
//             {product.isNew && (
//               <div className="absolute top-2 left-2 rounded-full bg-blue-600 text-white text-xs font-bold px-2 py-1">
//                 New
//               </div>
//             )}

//             {/* Product Information */}
//             <div className="absolute bottom-0 left-0 w-full bg-gray-100 p-4 rounded-b-md">
//               <h2 className="text-lg font-bold text-black">{product.title}</h2>

//               {/* Tags */}
//               <div className="mt-2">
//                 {product.tags?.map((tag, idx) => (
//                   <span
//                     key={idx}
//                     className="inline-block bg-gray-200 text-gray-800 text-xs font-semibold px-2 py-1 rounded-full mr-2 mb-2"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>

//               <div className="flex justify-between text-black mt-2">
//                 <span className="text-xl font-bold">${product.price}</span>
//                 {product.discountPercentage != null && product.discountPercentage > 0 && (
//                   <span className="line-through text-gray-500">
//                     ${(product.price * (1 + product.discountPercentage / 100)).toFixed(2)}
//                   </span>
//                 )}
//               </div>
//             </div>

//             {/* Hover Overlay */}
//             <div className="absolute inset-0 bg-gray-800 bg-opacity-50 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center">
//               <button className="bg-white text-black px-4 py-2 rounded-md mb-4 shadow hover:shadow-lg">
//                 Add to Cart
//               </button>
//               <div className="flex space-x-4 text-white">
//                 <span className="cursor-pointer hover:text-gray-300">🔗 Share</span>
//                 <span className="cursor-pointer hover:text-gray-300">🔄 Compare</span>
//                 <span className="cursor-pointer hover:text-gray-300">❤️ Like</span>
//               </div>
//             </div>

//             <div className="absolute inset-0 bg-gray-400 opacity-0 group-hover:opacity-70 transition-opacity"></div>
//           </div>
//         ))}
//       </div>

//       {/* Show More Button */}
//       <div className="mt-4 flex justify-center">
//         <button className="text-yellow-600 font-bold mt-10 border border-yellow-600 bg-white py-2 px-6 rounded-lg">
//           Show More
//         </button>
//       </div>
//     </div>
//   );
// };

// export default OurProducts;



"use client";

import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardFooter } from "../components/ui/card";

import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { Heart, Share2, ArrowRightLeft } from "lucide-react";

export default function FeaturedProducts() {
  interface ProductSection {
    title: string;
    description: string;
    isNew: boolean;
    tags: string[];
    price: number;
    productImage: string;
    dicountPercentage: number;
    _id: string;
  }

  const [cards, setCards] = useState<ProductSection[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res: ProductSection[] = await client.fetch(` 
        *[_type=='product'][] {
          'productImage':productImage.asset->url,
          description,
          dicountPercentage,
          tags,
          isNew,
          title,
          price
        }
      `);

      setCards(res.slice(0, 6)); // Limit to 6 items
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4 md:p-6">
      <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {cards.map((item, index) => (
          <Card
            key={index}
            className="group relative overflow-hidden shadow-md"
          >
            <div className="relative aspect-square">
              <Image
                src={item.productImage}
                alt={item.title}
                fill
                className="object-center transition-transform group-hover:scale-105"
              />
            </div>

            {/* Card isNew/Discount Badge */}
            {item.isNew && (
              <div className="absolute left-4 top-4 rounded-full px-3 py-2 text-sm text-white bg-green-500">
                New
              </div>
            )}
            {item.dicountPercentage > 0 && (
              <div className="absolute right-4 top-4 rounded-full px-3 py-1 text-sm text-white bg-red-500">
                -{item.dicountPercentage}%
              </div>
            )}

            {/* Hover Content */}
            <div className="absolute inset-0 bg-black bg-opacity-0 transition-all group-hover:bg-opacity-40 z-10 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
              <Link
                href={`/shop/ProductDetails?id=${index}&productName=${item.title}&productPrice=${item.price}&productImage=${item.productImage}&productDescription=${item.description}&productdicountPercentage=${item.dicountPercentage}&tags=${item.tags}&isNew=${item.isNew}`}
              >
                <Button className="w-[202px] bg-white hover:bg-gray-200 text-black transition-all">
                  Add to Cart
                </Button>
              </Link>
              <div className="flex justify-between w-[202px] py-2">
                <Button variant="no" size="icon" className="text-white">
                  <Share2 className="h-4 w-4" /> Share
                </Button>
                <Button variant="no" size="icon" className="text-white">
                  <ArrowRightLeft className="h-4 w-4" /> Compare
                </Button>
                <Button variant="no" size="icon" className="text-white">
                  <Heart className="h-4 w-4" /> Like
                </Button>
              </div>
            </div>

            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-500">
                {item.description.slice(0, 20)}...
              </p>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-4 p-4">
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold">Rs. {item.price}</span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

