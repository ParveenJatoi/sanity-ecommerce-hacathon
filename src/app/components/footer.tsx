import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Furniro Details */}
        <div>
          <h2 className="text-xl font-bold text-black">Furniro</h2>
          <p className="mt-4 text-gray-600">
            123 Furniture Street,<br />
            HomeTown, State, 45678<br />
            Country
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-medium text-gray-500 mb-2">Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/">
                <span className="text-black font-bold hover:underline">Home</span>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <span className="text-black font-bold hover:underline">About</span>
              </Link>
            </li>
            <li>
              <Link href="/shop">
                <span className="text-black font-bold hover:underline">Shop</span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span className="text-black font-bold hover:underline">Contact</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="text-lg font-medium text-gray-500 mb-2">Help</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/payment-options">
                <span className="text-black font-bold hover:underline">Payment Options</span>
              </Link>
            </li>
            <li>
              <Link href="/returns">
                <span className="text-black font-bold hover:underline">Returns</span>
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy">
                <span className="text-black font-bold hover:underline">Privacy Policy</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-lg font-medium text-gray-500 mb-2">Newsletter</h3>
          <div className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full p-2  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className=" text-black px-4 py-2 rounded-md hover:bg-gray-400">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-10 border-t border-gray-300 pt-4 text-center md:text-left">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Furniro. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}