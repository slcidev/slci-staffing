
import React from 'react'
import { useParams } from "react-router-dom";
import {ServiceDetails} from "../data/ServiceData";
import ServiceHero from "../components/service/sections/ServiceHero";
import WhoNeedsThis from "../components/service/sections/WhoNeedsThis";
import OurComprehensiveServices from "../components/service/sections/OurComprehensiveServices";
import WhyNeeded from "../components/service/sections/WhyNeeded";
// import FaqSection from "../components/service/sections/FaqSection";


const ServicePage = () => {
  const { slug } = useParams();
  const service = ServiceDetails[slug];

  if (!service) return <div>Service Not Found</div>;

  return (
    <main>
      <ServiceHero {...service.hero} />
      <WhoNeedsThis {...service.whoNeedsThis} />
      <OurComprehensiveServices {...service.ourServices}/>
      <WhyNeeded {...service.whyNeeded} />
      {/*
      <OurServices services={service.ourServices} />
      <WhyNeeded points={service.whyNeeded.points} />
      <FaqSection faqs={service.faq} /> */}
    </main>
  );
}

export default ServicePage










