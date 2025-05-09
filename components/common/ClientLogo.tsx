"use client";

import Image from "next/image";
import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { clientLogo } from "@/data/client";

const ClientLogo = () => {
  return (
    <>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={40}
        slidesPerView={4}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          1024: {
            slidesPerView: 4,  // Exibe 4 logos por vez
            spaceBetween: 40,  // Espaço de 50px entre os slides
          },
          // Para tablets
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // Para telas pequenas (smartphones)
          480: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          0: {
            slidesPerView: 1
          }
        }}
      >
        {clientLogo.map((client, index) => (
          <SwiperSlide key={index} className="py-10 drop-shadow-xl shadow-black/10 dark:shadow-white/10">
            <div className="min-w-[260px] h-[140px] bg-background rounded-2xl p-4 flex-center card-shadow">
              <Image
                src={client.src}
                width={160}
                height={140}
                alt={client.alt}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ClientLogo;
