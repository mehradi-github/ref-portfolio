import React, { FC } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/scss";

const SkillSlider: FC = () => {
  return (
    <div className="w-full h-auto py-10 container mx-auto">
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        className=""
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: 2 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1040: { slidesPerView: 4 },
          1200: { slidesPerView: 5 },
          1600: { slidesPerView: 5 },
          1920: { slidesPerView: 5 },
        }}
        modules={[Autoplay]}
      >
        {[
          { name: "aws-2.svg", alt: "aws", width: 75, height: 75 },
          { name: "aws-2.svg", alt: "aws", width: 75, height: 75 },
          { name: "aws-2.svg", alt: "aws", width: 75, height: 75 },
          { name: "aws-2.svg", alt: "aws", width: 75, height: 75 },
          { name: "aws-2.svg", alt: "aws", width: 75, height: 75 },
          { name: "aws-2.svg", alt: "aws", width: 75, height: 75 },
          { name: "aws-2.svg", alt: "aws", width: 75, height: 75 },
          { name: "aws-2.svg", alt: "aws", width: 75, height: 75 },
          { name: "aws-2.svg", alt: "aws", width: 75, height: 75 },
          { name: "aws-2.svg", alt: "aws", width: 75, height: 75 },
          { name: "aws-2.svg", alt: "aws", width: 75, height: 75 },
          { name: "aws-2.svg", alt: "aws", width: 75, height: 75 },
          { name: "aws-2.svg", alt: "aws", width: 75, height: 75 },
          { name: "aws-2.svg", alt: "aws", width: 75, height: 75 },
          { name: "aws-2.svg", alt: "aws", width: 75, height: 75 },
          { name: "aws-2.svg", alt: "aws", width: 75, height: 75 },
          { name: "aws-2.svg", alt: "aws", width: 75, height: 75 },
          { name: "aws-2.svg", alt: "aws", width: 75, height: 75 },
        ].map((value, index) => (
          <SwiperSlide key={index}>
            <Image
              width={value.width}
              height={value.height}
              src={`/assets/images/${value.name}`}
              alt={value.alt}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default SkillSlider;
