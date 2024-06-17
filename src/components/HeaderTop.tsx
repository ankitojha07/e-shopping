// src/components/Header.js
import React from "react";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const HeaderTop = () => {
  return (
    <div className="w-full border-b">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center py-2">
        <div className="hidden md:flex space-x-2 mb-2 sm:mb-0">
          <a href="https://x.com/ankitojha_07" target="_blank">
            <FaTwitter className="cursor-pointer" />
          </a>
          <a href="https://www.instagram.com/ankitojha_07/" target="_blank">
            <FaInstagram className="cursor-pointer" />
          </a>
          <a href="https://www.linkedin.com/in/ankit0jha/" target="_blank">
            <FaLinkedinIn className="cursor-pointer" />
          </a>
        </div>
        <div className="hidden md:flex text-sm text-center">
          <span className="font-semibold">FREE SHIPPING</span> THIS WEEK ORDER
          OVER - $55
        </div>
        <div className="hidden md:flex space-x-4 mt-2 sm:mt-0">
          <select className="border-none text-sm bg-transparent cursor-pointer">
            <option value="USD">USD $</option>
          </select>
          <select className="border-none text-sm bg-transparent cursor-pointer">
            <option value="English">English</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
