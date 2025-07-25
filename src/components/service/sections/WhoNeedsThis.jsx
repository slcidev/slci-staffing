import React from "react";
import SectionHeading from "../../shared/SectionHeading";
import HighlightText from "../../shared/HighlightText";

export default function WhoNeedsThis({ description, points = [] }) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeading 
        title={
          <>
          Who <HighlightText text="Needs This?"/>
          </>
        }
        headingLevel="h2"
        />
        <p className="text-slate-600 max-w-2xl mx-auto mb-10">{description}</p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
          {points.map((point, index) => (
            <li key={index} className="bg-slate-50 p-5 rounded shadow-sm border">
              <span className="text-slate-700">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
