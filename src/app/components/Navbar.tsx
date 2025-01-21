

// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import { FiSearch, FiHeart, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
// import Link from "next/link";

// const Header = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <header className="bg-white shadow-md">
//       <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-12">
//         {/* Logo Section */}
//         <div className="flex items-center font-bold space-x-2">
//           <Image
//             src="/logo.png"
//             alt="Furniro Logo"
//             width={70}
//             height={44}
//             className="object-contain"
//           />
//           <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800">
//             Furniro
//           </h1>
//         </div>

//         {/* Navbar Links (Desktop) */}
//         <div className="hidden md:flex space-x-10 text-gray-600 text-lg font-medium">
//           <Link href="/" className="hover:text-yellow-500 transition-all duration-300">
//             Home
//           </Link>
//           <Link href="{`/products/${product._id}`}" className="hover:text-yellow-500 transition-all duration-300">
//             Shop
//           </Link>
//           <Link href="/blog" className="hover:text-yellow-500 transition-all duration-300">
//             Blog
//           </Link>
//           <Link href="/contact" className="hover:text-yellow-500 transition-all duration-300">
//             Contact
//           </Link>
//         </div>

//         {/* Icons Section */}
//         <div className="flex items-center space-x-8 text-gray-600">
//           {/* Search Icon */}
//           <button className="hover:text-yellow-500 transition-all duration-300" aria-label="Search">
//             <FiSearch size={22} />
//           </button>
//           </div>

//           {/* Wishlist Icon */}
//           <button className="hover:text-yellow-500 transition-all duration-300" aria-label="Wishlist">
//             <FiHeart size={22} />
//           </button>

//           {/* Cart Icon */}
//           <button
//             className="hover:text-yellow-500 transition-all duration-300 relative"
//             aria-label="Cart"
//           >
//             <FiShoppingCart size={22} />
//             {/* Cart Badge */}
//             <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
//               3
//             </span>
//           </button>

//           {/* Mobile Menu Toggle */}
//           <button
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             className="md:hidden hover:text-yellow-500 transition-all duration-300"
//             aria-label="Mobile Menu"
//           >
//             {mobileMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
//           </button>
//         </div>
      

//       {/* Mobile Navigation */}
//       {mobileMenuOpen && (
//         <nav className="flex flex-col items-center space-y-4 text-gray-600 md:hidden mt-4">
//           <Link href="/" className="hover:text-yellow-500 transition-all duration-300">
//             Home
//           </Link>
//           <Link href="/shop" className="hover:text-yellow-500 transition-all duration-300">
//             Shop
//           </Link>
//           <Link href="/blog" className="hover:text-yellow-500 transition-all duration-300">
//             Blog
//           </Link>
//           <Link href="/contact" className="hover:text-yellow-500 transition-all duration-300">
//             Contact
//           </Link>
//         </nav>
//       )}
//     </header>
//   );
// };

// export default Header;

'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, Heart, ShoppingCart, UserCircle } from 'lucide-react';
import { useAtom } from 'jotai';
import { searchName } from '@/globalState/globalState';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [value, setValue] = useAtom(searchName);

  return (
    <nav className="relative w-full bg-white z-50 shadow-md">
      {/* Main Container */}
      <div className="max-w-[1286px] mx-auto px-4 sm:px-8 flex items-center justify-between h-[70px]">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0">
            <Image 
              src="/logo.png" 
              alt="Logo" 
              height={50} 
              width={70} 
              className="object-contain"
            />
          </div>
          <h1 className="font-bold font-montserrat text-[25px] sm:text-[30px] text-black">
            Furniro
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link 
            href="/" 
            className="text-base font-medium font-poppins text-black hover:text-black/70 transition-colors hover:underline"
          >
            Home
          </Link>
          <Link 
            href="/shop" 
            className="text-base font-medium font-poppins text-black hover:text-black/70 transition-colors hover:underline"
          >
            Shop
          </Link>
          <Link 
            href="/blog" 
            className="text-base font-medium font-poppins text-black hover:text-black/70 transition-colors hover:underline"
          >
            Blog
          </Link>
          <Link 
            href="/contact" 
            className="text-base font-medium font-poppins text-black hover:text-black/70 transition-colors hover:underline"
          >
            Contact
          </Link>
        </div>

        {/* Icons Section */}
        <div className="hidden sm:flex items-center gap-6 sm:pr-10 md:pr-20">
          <input 
            type="search" 
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search..." 
            aria-label="Search" 
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button 
            aria-label="Search" 
            className="p-2 hover:bg-black/5 rounded-full transition-colors"
          >
            <Search className="w-6 h-6" />
          </button>
          <Link href="/wishlist">
            <button 
              aria-label="Wishlist" 
              className="p-2 hover:bg-black/5 rounded-full transition-colors"
            >
              <Heart className="w-6 h-6" />
            </button>
          </Link>
          <Link href="/cart">
            <button 
              aria-label="Shopping Cart" 
              className="p-2 hover:bg-black/5 rounded-full transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden flex items-center">
          <button
            aria-label="Menu"
            className="p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="block w-6 h-1 bg-black mb-1" />
            <span className="block w-6 h-1 bg-black mb-1" />
            <span className="block w-6 h-1 bg-black" />
          </button>
        </div>
      </div>

      {/* Sliding Mobile Menu */}
      <div
        className={`absolute top-0 left-0 w-full bg-white shadow-lg z-10 transform transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center gap-4 py-4 bg-gray-100">
          <Link 
            href="/" 
            className="text-base font-medium font-poppins text-black hover:text-black/70 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/shop" 
            className="text-base font-medium font-poppins text-black hover:text-black/70 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Shop
          </Link>
          <Link 
            href="/blog" 
            className="text-base font-medium font-poppins text-black hover:text-black/70 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </Link>
          <Link 
            href="/contact" 
            className="text-base font-medium font-poppins text-black hover:text-black/70 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          {/* Mobile Icons */}
          <div className="flex gap-6 mt-4">
            <button 
              aria-label="Search" 
              className="p-2 hover:bg-black/5 rounded-full transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              <Search className="w-6 h-6" />
            </button>
            <button 
              aria-label="Wishlist" 
              className="p-2 hover:bg-black/5 rounded-full transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              <Heart className="w-6 h-6" />
            </button>
            <Link href="/cart">
              <button 
                aria-label="Shopping Cart" 
                className="p-2 hover:bg-black/5 rounded-full transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                <ShoppingCart className="w-6 h-6" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
