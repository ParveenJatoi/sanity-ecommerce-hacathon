import React from 'react';

const HeaderStrip = () => {
  return (
    <div className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-medium py-2">
      <div className="overflow-hidden">
        <div className="flex gap-8 animate-marquee whitespace-nowrap">
          🎉 Exciting offers! Get up to <span className="font-bold">50% OFF</span> on select items. 🚀
          | Free Shipping on orders over <span className="font-bold">$99</span>. 📦
          | Shop Now for Exclusive Deals! 🛒
        </div>
      </div>
    </div>
  );
};

export default HeaderStrip;

