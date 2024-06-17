import React from "react";
import ProductCard from "./ProductCard";

const productData = [
  {
    img: "/shoes-1.jpg",
    title: "Shoes",
    desc: "Trending Nike shoes",
    rating: 1,
    price: "69.00",
  },
  {
    img: "/shirt-1.jpg",
    title: "Shoes",
    desc: "Trending Nike shoes",
    rating: 2,
    price: "56.00",
  },
  {
    img: "/shirt-2.jpg",
    title: "Shoes",
    desc: "Trending Nike shoes",
    rating: 4,
    price: "87.00",
  },
  {
    img: "/shirt-3.jpg",
    title: "Shoes",
    desc: "Trending Nike shoes",
    rating: 5,
    price: "56.00",
  },
  {
    img: "/watch-1.jpg",
    title: "Shoes",
    desc: "Trending Nike shoes",
    rating: 3,
    price: "516.00",
  },
  {
    img: "/watch-2.jpg",
    title: "Shoes",
    desc: "Trending Nike shoes",
    rating: 2,
    price: "99.00",
  },
];

const NewProducts = () => {
  return (
    <div>
      <div className="pt-16">
        <h2 className="font-medium text-2xl pb-4">New Products</h2>

        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {productData.map((item, index) => (
            <ProductCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
