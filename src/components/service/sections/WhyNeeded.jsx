import React from "react";
import SectionHeading from "../../shared/SectionHeading";
import HighlightText from "../../shared/HighlightText";
import { FaCheckCircle } from "react-icons/fa";
// import illustration from "../../assets/payroll-compliance.svg"; // replace with your actual image path
export default function WhyNeeded({ pointNeeded = [], illustrationAlt = "Payroll Compliance Illustration",}) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left: Text Content */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="https://picsum.photos/id/5/500/300"
            alt={illustrationAlt}
            className="max-w-md w-full h-auto"
          />
        </div>

        {/* Right: Illustration */}
        <div className="w-full lg:w-1/2">
          <SectionHeading
            headingLevel="h2"
            title={
              <>
                Why You <HighlightText text="Need This Service" />
              </>
            }
          />
          <ul className="mt-6 space-y-4">
            {pointNeeded.map((p, index) => (
              <li key={index} className="flex items-start text-slate-700">
                <FaCheckCircle className="text-teal-500 mt-1 mr-3" size={20} />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
