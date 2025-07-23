import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import ServiceCard from "../shared/ServiceCard";
import services from "../../data/ServiceData";
import SectionHeading from "../shared/SectionHeading";
import HighlightText from "../shared/HighlightText";

const ServicesSlider = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionHeading
            title={
              <>
                Our <HighlightText text="Services" />
              </>
            }
            subtitle="We offer a comprehensive range of digital services designed to help your business succeed in today's competitive landscape."
            headingLevel="h2"
          />
        </div>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          // slidesPerView={4} // 👈 Show 5 slides at a time
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
              className="!w-auto px-[2.5%] flex justify-center py-10"
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
