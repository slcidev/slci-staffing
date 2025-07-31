import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ServiceDetails } from "../data/ServiceData";
import ServiceHero from "../components/service/sections/ServiceHero";
import WhoNeedsThis from "../components/service/sections/WhoNeedsThis";
import OurComprehensiveServices from "../components/service/sections/OurComprehensiveServices";
import WhyNeeded from "../components/service/sections/WhyNeeded";

// import { submitToGoogleSheet } from "../utils/googleSheet";
import PopupFormModal from "../components/shared/PopupFormModal";
import { popupFormConfig } from "../data/FormConfig";

const ServicePage = () => {
  const { slug } = useParams();
  const service = ServiceDetails[slug];

  const [isOpen, setIsOpen] = useState(false);
  const [pageContext, setPageContext] = useState("");

  if (!service) return <div>Service Not Found</div>;

  // ✅ Trigger popup from any child component
  const openPopupFormWithContext = (context) => {
    setPageContext(context || service.hero?.title || "Unknown Service");
    setIsOpen(true);
  };

  return (
    <main>
      <ServiceHero {...service.hero} onCtaClick={openPopupFormWithContext} />
      <WhoNeedsThis {...service.whoNeedsThis} />
      <OurComprehensiveServices {...service.ourServices} onCtaClick={openPopupFormWithContext} />
      <WhyNeeded {...service.whyNeeded} />

      {/* ✅ Popup form modal at bottom */}
      <PopupFormModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        pageContext={pageContext}
        formConfig={popupFormConfig.fields}
        submitLabel={popupFormConfig.submitButtonText}
        onSubmitHandler={(data) => {
          console.log("Form submitted!", data);
        }}
        /*  onSubmitHandler={(data) =>
          submitToGoogleSheet({ ...data, Page: pageContext })
        } */
      />
    </main>
  );
};

export default ServicePage;

/* 
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
   
    </main>
  );
}

export default ServicePage




 */
