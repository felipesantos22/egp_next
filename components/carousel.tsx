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
          <img src="/images/img04.jpg" className="w-full h-150 object-cover" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h2 className="text-5xl md:text-4xl font-bold md:whitespace-nowrap">
              Guias em português, espanhol e inglês.
            </h2>
            <p>Servico com total segurança e conforto.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src="/images/img07.jpg" className="w-full h-150 object-cover" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h2 className="text-5xl md:text-4xl font-bold md:whitespace-nowrap">
              Ofercemos o melhor do Egito, Turquia e Dubai para você.
            </h2>
            <p>Acompanhamos desde a chegada até o retorno ao país de origem.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
