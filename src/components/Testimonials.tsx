import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="pt-16 pb-16">
      <h2 className="font-medium text-2xl pb-4 text-center">Testimonials</h2>
      <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
        <div className="h-96 border border-gray-200 rounded-lg w-full md:w-5/12 lg:w-3/12 flex flex-col gap-2 justify-center items-center p-8">
          <Image
            alt="user-profile"
            src="/user.jpg"
            height={100}
            width={100}
            className="rounded-full"
          />
          <h3 className="text-xl font-bold text-gray-800">Ross J.</h3>
          <p>CEO & Founder Invision</p>
          <FaQuoteLeft className="text-4xl text-accent" />
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            cumque.
          </p>
        </div>
        <div className="relative w-full h-96">
          {/* Background Image */}
          <Image
            src="/banner-1.png"
            alt="Background"
            className="w-full h-full rounded-lg object-cover"
            layout="fill"
          />

          {/* Overlay Card */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white bg-opacity-50 rounded-lg p-8 text-center min-w-[100px] md:min-w-[400px] min-h-[100px] flex flex-col justify-center items-center">
              <div className="bg-accent text-white py-1 px-3 rounded-lg text-sm font-bold mb-2 max-w-[300px]">
                25% DISCOUNT
              </div>
              <h2 className="text-xl font-bold">Summer Collection</h2>
              <p className="text-gray-700">
                Starting @ $20{" "}
                <a href="#" className="text-accent font-semibold">
                  Shop Now
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
