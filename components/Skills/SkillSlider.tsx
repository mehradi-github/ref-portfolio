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
          { name: "reactjs-icon", alt: "reactjs", width: 75, height: 75 },
          { name: "redux", alt: "redux", width: 75, height: 75 },
          {
            name: "typescriptlang-icon",
            alt: "typescriptlang",
            width: 65,
            height: 65,
          },
          { name: "tailwindcss", alt: "tailwindcss", width: 75, height: 75 },
          { name: "mongodb-icon-1", alt: "mongodb", width: 75, height: 75 },
          { name: "sass-1", alt: "sass", width: 75, height: 75 },
          { name: "w3_html5-icon", alt: "html5", width: 60, height: 60 },
          { name: "w3_css-official", alt: "css3", width: 65, height: 65 },
          { name: "nodejs-1", alt: "nodejs", width: 100, height: 100 },
          { name: "logo-javascript", alt: "javascript", width: 50, height: 50 },
          { name: "graphql-logo-2", alt: "graphql", width: 55, height: 55 },
          { name: "postgresql", alt: "postgresql", width: 58, height: 58 },
          { name: "kubernetes-icon", alt: "kubernetes", width: 60, height: 60 },
          { name: "docker-icon", alt: "docker", width: 80, height: 80 },
          { name: "aws-2", alt: "aws", width: 75, height: 75 },
          { name: "scrum-1", alt: "scrum", width: 70, height: 70 },
        ].map((value, index) => (
          <SwiperSlide key={index}>
            <Image
              width={value.width}
              height={value.height}
              src={`/assets/images/${value.name}.svg`}
              alt={value.alt}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default SkillSlider;
