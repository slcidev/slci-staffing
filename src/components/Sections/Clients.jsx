// BrandSlider.jsx
import React from "react";
import ven from "../../assets/svg/ven.svg";
import vimeo from "../../assets/svg/vimeo.svg";
import equifax from "../../assets/svg/equifax.svg";
import peer from "../../assets/svg/peer.svg";
import COCCHA from "../../assets/img/brand/COCHA.png";
import fvLogo from "../../assets/img/brand/fv-logo.png";
import uber from "../../assets/img/brand/uber.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const brandLogos = [
  { src: ven, alt: "Vendasta Logo" },
  { src: COCCHA, alt: "COCHA Brand Logo" },
  { src: vimeo, alt: "Vimeo Logo" },
  { src: equifax, alt: "Equifax Logo" },
  { src: peer, alt: "PEAR Health Labs Logo" },
  { src: fvLogo, alt: "FV Brand Logo" },
  { src: uber, alt: "Uber Logo" },
];

const Clients = () => {
  return (
    <div className="brand-area py-10 bg-white">
      <div className="container mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={1500}
          spaceBetween={10}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            575: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 6,
            },
          }}
          className="brand-slider-active"
        >
          {brandLogos.map((logo, index) => (
            <SwiperSlide
              key={index}
              className="brand-single-slider flex justify-center items-center"
            >
              <img
                loading="lazy"
                src={logo.src}
                alt={logo.alt}
                className="w-[120px] h-[50px] object-contain  transition duration-300"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Clients;
