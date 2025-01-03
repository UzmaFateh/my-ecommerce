

import React from "react";
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const NavHeader: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white py-2 hidden md:block">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
        {/* Left Side: Phone and Email */}
        <div className="flex items-center gap-4">
          <div className="flex items-center text-sm">
            <FaPhoneAlt className="mr-2" />
            <span>+123 456 7890</span>
          </div>
          <div className="flex items-center text-sm">
            <FaEnvelope className="mr-2" />
            <span>michelle.rivera@example.com</span>
          </div>
        </div>

        {/* Center: Follow Us Message */}
        <div className="text-center w-full sm:w-auto text-sm mt-2 sm:mt-0">
          <p>Follow us and get a chance to win 80% off</p>
        </div>

        {/* Right Side: Social Media Icons */}
        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold">Follow Us :</span>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-500 transition"
          >
            <FaYoutube />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavHeader;

