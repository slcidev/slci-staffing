import React, { useRef, useState } from 'react';
import SectionHeading from "../shared/SectionHeading";
import HighlightText from "../shared/HighlightText";
import FeatureGrid from "../shared/FeatureGrid";
import {Pagination,  EffectCoverflow,} from "swiper/modules"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
/* import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../../styles.css'; */

const Services = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text sm:px-6 lg:px-8">
        <div className="flex justify-center align-center  mb-16">
          <SectionHeading
            title={
              <>
                Our <HighlightText text="Services " />
              </>
            }
            subtitle="We offer a comprehensive range of digital services designed to help your business succeed in today's competitive landscape."
            headingLevel="h2"
          />
        </div>
        <div>
    
        </div>
      </div>
    </section>
  );
};

export default Services;
