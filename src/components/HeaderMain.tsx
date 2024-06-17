import React from "react";
import Link from "next/link";
import { FaHeart, FaSearch, FaShoppingBag, FaUser } from "react-icons/fa";

const HeaderMain = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4 space-y-4 md:space-y-0">
      <div className="text-2xl font-bold">E-Shopping</div>
      <div className="w-full md:w-2/3 lg:w-1/2 relative">
        <input
          type="text"
          placeholder="Enter any product name..."
          className="border-gray-200 border p-2 px-4 rounded-lg w-full"
        />
        <FaSearch
          className="absolute right-0 top-0 mr-3 mt-3 text-gray-400 cursor-pointer"
          size={20}
        />
      </div>
      <div className="hidden md:flex space-x-4">
        <Link href="/profile">
          <p className="text-xl cursor-pointer">
            <FaUser />
          </p>
        </Link>
        <Link href="/wishlisht">
          <p className="text-xl cursor-pointer">
            <FaHeart />
          </p>
        </Link>
        <Link href="/cart">
          <p className="relative text-xl cursor-pointer">
            <FaShoppingBag />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
              0
            </span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default HeaderMain;
