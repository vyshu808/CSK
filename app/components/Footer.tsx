import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4 border-t border-gray-700 text-white">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Left: Logo and Company Name */}
        <div className="flex items-center">
          {/* <img src="/logo.svg" alt="Unlisted Shares India Logo" className="h-8 w-auto mr-2" /> */}
          <span className="font-semibold text-lg">Chennai Super Kings (CSK)</span>
        </div>

        {/* Right: Terms & Condition and Privacy Policy */}
        <div className="flex items-center space-x-4">
          <Link href="/terms" className="text-sm hover:text-gray-300 transition-colors duration-200">
            Terms & Condition
          </Link>
          <Link href="/privacy" className="text-sm hover:text-gray-300 transition-colors duration-200">
            Privacy Policy
          </Link>
        </div>
      </div>

      {/* Bottom: Copyright */}
      <div className="container mx-auto px-4 mt-2">
        <p className="text-center text-xs text-gray-400">
          © 2024 Unlisted Shares India. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;