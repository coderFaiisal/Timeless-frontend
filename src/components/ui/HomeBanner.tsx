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
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper w-full h-screen"
    >
      <SwiperSlide>
        <Image src={banner1} alt="banner image" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={banner2} alt="banner image" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={banner3} alt="banner image" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={banner4} alt="banner image" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={banner5} alt="banner image" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={banner6} alt="banner image" />
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeBanner;
