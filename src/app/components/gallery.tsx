// pages/gallery.tsx
"use client"
import { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client'; // Adjust the import path if necessary

// Interface for Product
interface Product {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  tags?: string[];
  dicountPercentage?: number;
  isNew?: boolean;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"] {
        _id,
        title,

        "imageUrl": productImage.asset->url,
        price,
        tags,
        dicountPercentage,
        isNew
      }`;
      const data = await client.fetch(query);
      setProducts(data);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="p-8">Loading products...</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg shadow-md p-4 hover:shadow-lg transition"
          >
            {product.imageUrl && (
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
            )}
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="text-gray-600">{product.description}</p>
            <div className="mt-4">
              <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
              {product.dicountPercentage && (
                <p className="text-sm text-red-500">
                  {product.dicountPercentage}% off
                </p>
              )}
            </div>
            {product.isNew && (
              <span className="inline-block mt-2 px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
                New
              </span>
            )}
            {product.tags && (
              <div className="mt-4 flex flex-wrap gap-2">
                {product.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block px-2 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
