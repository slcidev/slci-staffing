// components/TestimonialSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SectionHeading from "../shared/SectionHeading";
import HighlightText from "../shared/HighlightText";
import TestimonialCard from "../shared/TestimonialCard";

import { testimonial } from "../../data/TestimonialData";



const Testimonials = () => {
  return (
       <section id="services" className="py-20 bg-gradient-to-br from-slate-50 to-teal-50">
    <div className="max-w-7xl mx-auto py-12 px-4 ">
      <SectionHeading
        title={
          <>
            What Our <HighlightText text="Clients" />{" "}
            <HighlightText text="Say" />
          </>
        }
        subtitle=""
        headingLevel="h2"
      />
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{ delay: 5000 }}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonial.map((item, idx) => (
            <SwiperSlide key={idx}>
              <TestimonialCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
   
    </div>
    </section>
  );
};

export default Testimonials;
