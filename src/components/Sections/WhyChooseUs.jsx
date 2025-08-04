import React from "react";
import { features } from "../../data/WCU";
import FeatureCard from "../shared/FeatureCard";
import SectionHeading from "../shared/SectionHeading";
import HighlightText from "../shared/HighlightText";
import { FaRocket } from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-white py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <SectionHeading
            title={
              <>
                Why <HighlightText text="Choose" /> <HighlightText text="Us" />
              </>
            }
            subtitle="  Decades of trust, transparent delivery, and transformative results for businesses across India’s evolving legal landscape."
            headingLevel="h2"
          />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 ">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              bgFrom="blue-50"
              bgTo="teal-50"
              borderColor="teal-100"
             
            />
          ))}

       
        </div>
      </div>
    </section>
  );
}
