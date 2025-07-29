import React from "react";
import SectionHeading from "../../shared/SectionHeading";
import HighlightText from "../../shared/HighlightText";
import { ArrowRight } from "lucide-react";

export default function WhoNeedsThis({ description }) {
  return (
    <section className=" pt-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeading
          title={
            <>
              Who <HighlightText text="Needs This?" />
            </>
          }
          headingLevel="h2"
        />
        <p className="te  xt-slate-700 max-w-7xl mx-auto mb-10 text-lg   ">{description}</p>

      </div>
    </section>
  );
}
