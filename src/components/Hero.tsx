"use client";

import React from "react";
import Slides from "./Slides";

import Slider from "react-slick";

const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    slideToShow: 1,
    slideToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  const slideShow = [
    {
      id: 0,
      img: "/banner-1.jpg",
      title: "Trending Items",
      mainTitle: "Women's Latest Fashion Sale",
      price: "12",
    },
    {
      id: 1,
      img: "/banner-2.jpg",
      title: "Trending Items",
      mainTitle: "Women's Latest Fashion Sale",
      price: "12",
    },
    {
      id: 2,
      img: "/banner-3.jpg",
      title: "Trending Items",
      mainTitle: "Women's Latest Fashion Sale",
      price: "12",
    },
    {
      id: 3,
      img: "/banner-4.jpg",
      title: "Trending Items",
      mainTitle: "Women's Latest Fashion Sale",
      price: "12",
    },
  ];
  return (
    <div>
      <div className="pt-6 lg:pt-0">
        <Slider {...settings}>
          {slideShow.map((i) => (
            <Slides
              key={i.id}
              img={i.img}
              title={i.title}
              mainTitle={i.mainTitle}
              price={i.price}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
