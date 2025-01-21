"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";

// Define the type for the product
interface Product {
  title: string;
  imageUrl: string;
}

const BrowseRangeComponent = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"] {
        title,
        "imageUrl": productImage.asset->url
      }`;

      try {
        const data = await client.fetch(query);
        setProducts(data.slice(0, 6));; // Set the fetched product data
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="relative w-full max-w-5xl mx-auto p-4 md:p-8">
      <h1 className="text-center text-4xl md:text-5xl font-bold">Browse the Range</h1>
      <p className="text-center text-lg md:text-xl mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. s ac tempor dui sagittis.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
        {products.map((product, index) => (
          <div key={index} className="relative w-full md:w-96 h-96 md:h-144 group">
            <Image
              src={product.imageUrl}
              alt={product.title}
              layout="fill"
              objectFit="cover"
              className="rounded-md transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-[-50px] left-2 text-black p-2">{product.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseRangeComponent;
