"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carousel() {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="rounded-2xl shadow-lg"
      >
        <SwiperSlide>
          <img
            src="/images/img01.jpg"
            className="w-full h-150 object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/images/img02.jpg"
            className="w-full h-150 object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/images/img04.jpg"
            className="w-full h-150 object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
