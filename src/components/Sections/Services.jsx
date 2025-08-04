import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import ServiceCard from "../shared/ServiceCard";
import { services } from "../../data/ServiceData";
import SectionHeading from "../shared/SectionHeading";
import HighlightText from "../shared/HighlightText";

const ServicesSlider = () => {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-blue-50 to-teal-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionHeading
            title={
              <>
                Our <HighlightText text="Services" />
              </>
            }
            subtitle="End-to-end labour compliance solutions that reduce risk, improve processes, and build long-term operational integrity."
            headingLevel="h2"
          />
        </div>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          // slidesPerView={3} // 👈 Show 5 slides at a time
          // spaceBetween={20}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2.5,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {services.map((service, index) => (
            <SwiperSlide
              key={index}
              className="!w-auto px-[2.5%] flex justify-center "
            >
              <Link
                to={`/services/${service.title
                  .toLowerCase()
                  .replace(/ /g, "-")}`}
              >
                <ServiceCard {...service} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ServicesSlider;
