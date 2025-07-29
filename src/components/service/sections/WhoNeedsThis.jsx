import React from "react";
import SectionHeading from "../../shared/SectionHeading";
import HighlightText from "../../shared/HighlightText";
import Card from "../../shared/card";

export default function WhoNeedsThis({ description, points = [] }) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeading
          title={
            <>
              Who <HighlightText text="Needs This?" />
            </>
          }
          headingLevel="h2"
        />
        <p className="text-slate-600 max-w-2xl mx-auto mb-10">{description}</p>

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
      </div>
    </section>
  );
}
