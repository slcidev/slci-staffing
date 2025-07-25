import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "../../../components/shared/SectionHeading";
import HighlightText from "../../../components/shared/HighlightText";
import CtaButton from "../../../components/shared/CtaButton";

// 👇 Helper function to highlight words in title
function renderHighlightedText(text, highlights = []) {
  if (!highlights.length || typeof text !== "string") return text;

  const pattern = new RegExp(`(${highlights.join("|")})`, "gi");
  const parts = text.split(pattern);

  return parts.map((part, index) =>
    highlights.some((h) => h.toLowerCase() === part.toLowerCase()) ? (
      <HighlightText key={index} text={part} />
    ) : (
      <React.Fragment key={index}>{part}</React.Fragment>
    )
  );
}

export default function ServiceHero({
  title,
  subtitle,
  image,
  highlight = [],
}) {
  return (
    <section
      id="home"
      className="relative flex items-center overflow-hidden bg-white"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-blue-50 to-emerald-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/10 via-blue-600/10 to-emerald-600/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-15">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-8">
            <SectionHeading
              title={renderHighlightedText(title, highlight)}
              subtitle={subtitle}
              headingLevel="h1"
            />

            <div className="flex justify-center sm:justify-start gap-4">
              <CtaButton variant="primary" icon={<ArrowRight size={20} />}>
                Get Started
              </CtaButton>
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full  space-y-8 ">
            {" "}
            {/* height control yahan karo */}
            <motion.img
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              loading="lazy"
              src={image}
              alt="Service Illustration"
              className="w-full rounded "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
