"use client";

import Image from "next/image";
import React from "react";
import { clientLogo } from "@/data/client";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const ClientLogo = () => {
  return (
    <>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={4}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        className="py-10"
      >
        {clientLogo.map((client, index) => (
          <SwiperSlide key={index} className="py-10">
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
