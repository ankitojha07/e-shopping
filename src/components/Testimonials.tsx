import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div>
      <div className="pt-16 pb-16 grid-cols-2">
        <h2 className="font-medium text-2xl pb-4 text-center">Testimonials</h2>
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="border border-gray-200 rounded-lg w-3/12 flex flex-col gap-2 justify-center items-center p-8">
            <Image
              alt="user-profile"
              src="/user.jpg"
              height={100}
              width={100}
              className="rounded-full"
            />
            <h3 className="text-xl font-bold text-gray-800">Ross J.</h3>
            <p>CEO & Founder Invision</p>
            <FaQuoteLeft className="text-4xl  text-accent" />
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              cumque.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg w-9/12 flex flex-col gap-2 justify-center items-center p-8">
            <Image
              alt="user-profile"
              src="/banner-1.png"
              height={600}
              width={250}
              className="rounded-full"
            />
            <h3 className="text-xl font-bold text-gray-800">Ross J.</h3>
            <p>CEO & Founder Invision</p>
            <FaQuoteLeft className="text-4xl  text-accent" />
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              cumque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
