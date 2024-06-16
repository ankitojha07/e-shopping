// src/components/Header.js
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaUser,
  FaHeart,
  FaShoppingBag,
} from "react-icons/fa";

const HeaderTop = () => {
  return (
    <div className="w-full border-b">
      <div className="container mx-auto flex justify-between items-center py-2">
        <div className="flex space-x-2">
          <FaFacebookF className="cursor-pointer" />
          <FaTwitter className="cursor-pointer" />
          <FaInstagram className="cursor-pointer" />
          <FaLinkedinIn className="cursor-pointer" />
        </div>
        <div className="text-sm">
          <span className="font-semibold">FREE SHIPPING</span> THIS WEEK ORDER
          OVER - $55
        </div>
        <div className="flex space-x-4">
          <select className="border-none text-sm bg-transparent cursor-pointer">
            <option value="USD">USD $</option>
          </select>
          <select className="border-none text-sm bg-transparent cursor-pointer">
            <option value="English">English</option>
          </select>
        </div>
      </div>
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="text-2xl font-bold">Logo</div>
        <div className="flex-grow mx-4">
          <input
            type="text"
            placeholder="Enter any product name..."
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="flex space-x-4">
          <FaUser className="text-xl cursor-pointer" />
          <div className="relative">
            <FaHeart className="text-xl cursor-pointer" />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
              9
            </span>
          </div>
          <div className="relative">
            <FaShoppingBag className="text-xl cursor-pointer" />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
              0
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
