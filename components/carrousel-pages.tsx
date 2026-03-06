"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function CarouselPages() {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        //spaceBetween={0}
        slidesPerView={4}
        //navigation
        //pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="rounded-2xl shadow-lg"
      >
        <SwiperSlide>
          <img src="/images/dubai.jpg" className="w-full h-50 object-cover" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/images/img04.jpg" className="w-full h-50 object-cover" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/images/img05.jpg" className="w-full h-50 object-cover" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/images/img08.jpg" className="w-full h-50 object-cover" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/images/img09.jpg" className="w-full h-50 object-cover" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
