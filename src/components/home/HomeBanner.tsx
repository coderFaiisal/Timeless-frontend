"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import banner1 from "../../../public/banner-1.jpg";
import banner2 from "../../../public/banner-2.jpg";
import banner3 from "../../../public/banner-3.jpg";
import banner4 from "../../../public/banner-4.jpg";
import banner5 from "../../../public/banner-5.jpg";
import banner6 from "../../../public/banner-6.jpg";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Button } from "@material-tailwind/react";

const HomeBanner = () => {
  const items = [
    {
      link: banner1,
      name: "image1",
      title: "A NEW LOVE",
      description:
        "The iconic Love bracelet, now in a brushed finish. Lock in your love, forever",
    },
    {
      link: banner2,
      name: "image2",
      title: "STACKING STORIES",
      description:
        "Every stack has a story. Rewrite the rules of stacking with style statements that express your personality.",
    },
    {
      link: banner3,
      name: "image3",
      title: "STACKING STORIES",
      description:
        "Every stack has a story. Rewrite the rules of stacking with style statements that express your personality.",
    },
    {
      link: banner4,
      name: "image4",
      title: "STACKING STORIES",
      description:
        "Every stack has a story. Rewrite the rules of stacking with style statements that express your personality.",
    },
    {
      link: banner5,
      name: "image5",
      title: "A NEW LOVE",
      description:
        "The iconic Love bracelet, now in a brushed finish. Lock in your love, forever",
    },
    {
      link: banner6,
      name: "image6",
      title: "A NEW LOVE",
      description:
        "The iconic Love bracelet, now in a brushed finish. Lock in your love, forever",
    },
  ];

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper w-full h-80 lg:h-screen"
    >
      {items?.map((item) => (
        <SwiperSlide key={item?.name}>
          <Image
            src={item?.link}
            alt={item?.name}
            className="w-full h-80 md:h-96 lg:h-screen "
            style={{}}
            width={500}
            height={500}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70"></div>
          <div className="absolute top-10 lg:top-44 left-5 lg:left-20 text-white">
            <p className="w-1/2 m-4 text-3xl">{item?.title}</p>
            <p className="w-1/2 m-4 h-12 overflow-auto scrollbar-hide">
              {item?.description}
            </p>
            <p className="py-1 px-2 m-4 text-center  bg-black text-white w-24">
              Buy Now
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeBanner;
