import React from "react";
import Link from "next/link";
import {
  FiHome,
  FiShoppingCart,
  FiHeart,
  FiSearch,
  FiUser,
} from "react-icons/fi";

const MobileNavBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200">
      <div className="flex justify-around items-center h-16">
        <NavItem icon={<FiHome />} path="/" />
        <NavItem icon={<FiShoppingCart />} path="/cart" />
        <NavItem icon={<FiHeart />} path="/wishlist" />
        {/* <NavItem icon={<FiSearch />} path="/search" /> */}
        <NavItem icon={<FiUser />} path="/profile" />
      </div>
    </div>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  path: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon, path }) => {
  return (
    <Link href={path}>
      <p className="flex flex-col items-center justify-center text-gray-700 hover:text-accent transition duration-300">
        {icon}
      </p>
    </Link>
  );
};

export default MobileNavBar;
