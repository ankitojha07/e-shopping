import Image from "next/image";
import React from "react";

interface propsType {
  img: string;
  title: string;
  mainTitle: string;
  price: string;
}

const Slides: React.FC<propsType> = ({ img, title, mainTitle, price }) => {
  return (
    <div className="outline-none border-none relative">
      <div className="absolute left-[30px] md:left-[70px] max-w-[250px] sm:max-w-[350px] top-[50%] -translate-y-[50%] space-y-2 lg:space-y-4 bg-[#ffffffa2] sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none">
        <h3 className="text-accent text-xl lg:text-[28px] ">{title}</h3>
        <h2 className="text-blakish text-xl md:text-3xl font-bold ">
          {mainTitle}
        </h2>
        <h3 className="text-[24px] text-gray-500 ">
          Starting at{" "}
          <b className="text-[20px] md:text-[24px] lg:text-[30px] ">${price}</b>
          .00
        </h3>
        <div className="bg-accent text-white text-[14px] md:text-[16px] p-2 px-4 rounded-lg inline-block cursor-pointer hover:bg-blakish ">
          Shop Now
        </div>
      </div>
      <Image
        className="w-full h-[300px] md:h-auto rounded-xl object-cover object-right md:object-left-bottom "
        alt=""
        src={img}
        width={2000}
        height={2000}
      />
    </div>
  );
};

export default Slides;
