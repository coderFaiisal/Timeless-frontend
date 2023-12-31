"use client";

import Image from "next/image";
import banner1 from "../../../public/banner-1.jpg";
import banner2 from "../../../public/banner-2.jpg";
import banner3 from "../../../public/banner-3.jpg";
import banner4 from "../../../public/banner-4.jpg";

const NewArrival = () => {
  const products = [
    {
      image: banner1,
      title: "Neclaces",
      name: "Neclaces",
      price: "67.89",
    },
    {
      image: banner2,
      title: "Plateware",
      name: "Plateware",
      price: "34.89",
    },
    {
      image: banner3,
      title: "Ornaments",
      name: "Ornaments",
      price: "80.22",
    },
    {
      image: banner4,
      title: "Ring",
      name: "Ring",
      price: "53.55",
    },
  ];

  return (
    <div className=" min-h-96 my-6 lg:my-12">
      <div className="text-center pt-8">
        <h1 className="text-3xl font-semibold">New Arrivals</h1>
        <p className="text-sm opacity-60">
          Here is new arrivals to weekly lineup
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-11/12 mx-auto mt-10">
        {products?.map((product) => (
          <div key={product?.title}>
            <div className="">
              <Image
                src={product?.image}
                alt="feature image"
                className="w-full h-60 lg:h-56"
                width={500}
                height={500}
              />
            </div>
            <div className="mt-2 text-center">
              <h1 className="text-sm opacity-60">{product?.title}</h1>
              <h1>{product?.name}</h1>
              <p>$ {product?.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrival;
