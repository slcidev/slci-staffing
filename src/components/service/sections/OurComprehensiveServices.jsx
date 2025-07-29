import React from "react";
import SectionHeading from "../../shared/SectionHeading";
import HighlightText from "../../shared/HighlightText";
import Card from "../../shared/card";
import { ArrowRight } from "lucide-react";

export default function OurComprehensiveServices({ description, points = [], buttonLabel }) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeading
          title={
            <>
              Our Comprehensive <HighlightText text="Services?" />
            </>
          }
          headingLevel="h2"
        />
      <p className="te  xt-slate-700 max-w-7xl mx-auto mb-10 text-lg   ">{description}</p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 text-left max-w-7xl mx-auto">
          {points.map((point, index) => (
            <Card
              key={index}
              icon={point.icon}
              title={point.title}
              description={point.description}
              iconSize={point.iconSize}
              ariaLabel={point.ariaLabel}
            />
          ))}
        </ul>

        {buttonLabel && (
          <div className="mt-10">
            <button className=" cursor-pointer hover:shadow-2xl  px-8 py-3 text-white font-semibold rounded-4xl bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 transition duration-300 shadow-xl">
              <span className="flex gap-3">
              {buttonLabel} <ArrowRight/>
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

