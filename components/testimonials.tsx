"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  return (
    <div className="w-full max-w-4xl mx-auto py-16">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
      >
        <SwiperSlide>
          <div className="p-8 rounded-2xl shadow-md text-center bg-black/10">
            <p className="text-lg italic">
              "A viagem superou todas as expectativas!"
            </p>
            <span className="block mt-4 font-semibold">— Maria Silva</span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="p-8 rounded-2xl shadow-md text-center  bg-black/10">
            <p className="text-lg italic">
              "Experiência única e transformadora."
            </p>
            <span className="block mt-4 font-semibold">— João Santos</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-8 rounded-2xl shadow-md text-center bg-black/10">
            <p className="text-lg italic">
              "Recomendo para todos que amam aventura!"
            </p>
            <span className="block mt-4 font-semibold">— Ana Costa</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-8 rounded-2xl shadow-md text-center bg-black/10">
            <p className="text-lg italic">
              "A África é um destino que todos deveriam conhecer."
            </p>
            <span className="block mt-4 font-semibold">— Carlos Pereira</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
