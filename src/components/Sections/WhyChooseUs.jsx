import React from "react";
import { features } from "../../data/WCU";
import SectionHeading from "../shared/SectionHeading";
import HighlightText from "../shared/HighlightText";

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
            subtitle="   Discover what makes Shakti Legal Compliance your trusted partner for compliance management in India."
            headingLevel="h2"
          />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-5 p-6 bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="p-3 rounded-full bg-gradient-to-br from-emerald-100 to-teal-100">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#2B2B2B] mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#6B6B6B]">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
