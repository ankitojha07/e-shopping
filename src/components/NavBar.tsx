import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="hidden lg:block">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blakish">
          <Link href="#" className="navbar___link relative">
            HOME
          </Link>
          <Link href="#" className="navbar___link relative">
            CATEGORIES
          </Link>
          <Link href="#" className="navbar___link relative">
            MEN&#39;S
          </Link>
          <Link href="#" className="navbar___link relative">
            WOMEN&#39;S
          </Link>
          <Link href="#" className="navbar___link relative">
            PERFUME
          </Link>
          <Link href="#" className="navbar___link relative">
            BLOGS
          </Link>
          <Link href="#" className="navbar___link relative">
            HOT OFFERS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
