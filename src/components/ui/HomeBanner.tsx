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

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HomeBanner = () => {
  const images = [
    {
      link: banner1,
      name: "image1",
    },
    {
      link: banner2,
      name: "image2",
    },
    {
      link: banner3,
      name: "image3",
    },
    {
      link: banner4,
      name: "image4",
    },
    {
      link: banner5,
      name: "image5",
    },
    {
      link: banner6,
      name: "image6",
    },
  ];

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper w-full h-80 lg:h-screen"
    >
      {images?.map((image) => (
        <SwiperSlide key={image?.name}>
          <Image
            src={image?.link}
            alt={image?.name}
            className="w-full h-80 md:h-96 lg:h-screen"
            width={500}
            height={500}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeBanner;
