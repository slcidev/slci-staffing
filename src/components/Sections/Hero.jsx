import React from "react";
import { ArrowRight, Play } from "lucide-react";
import SectionHeading from "../shared/SectionHeading";
import CtaButton from "../shared/CtaButton";
import HighlightText from "../shared/HighlightText";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center  overflow-hidden bg-white"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-blue-50 to-emerald-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/10 via-blue-600/10 to-emerald-600/10" />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-15">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <SectionHeading
              title={
                <>
                  Transforming Ideas Into <HighlightText text="Digital " />
                  <HighlightText text="Reality" />
                </>
              }
              subtitle="We craft innovative solutions that drive growth and success for businesses worldwide. Experience the power of cutting-edge technology with our expert team."
              headingLevel="h1"
            />

            <div className="flex justify-center sm:justify-start gap-4">
              <CtaButton variant="primary" icon={<ArrowRight size={20} />}>
                Get Started
              </CtaButton>

              <CtaButton
                variant="secondary"
                icon={<Play size={20} />}
                
              >
                Watch Demo
              </CtaButton>
            </div>
          </div>

          {/* Visual Feature Box */}
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-white to-teal-50 rounded-3xl p-8 shadow-2xl border border-teal-100">
              <ul className="space-y-6">
                {[
                  {
                    title: "Innovation",
                    desc: "Cutting-edge solutions",
                    color: "from-teal-500 to-blue-500",
                  },
                  {
                    title: "Excellence",
                    desc: "Quality-driven approach",
                    color: "from-blue-500 to-emerald-500",
                  },
                  {
                    title: "Growth",
                    desc: "Sustainable success",
                    color: "from-emerald-500 to-teal-500",
                  },
                ].map(({ title, desc, color }, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        duration: 0.6,
                        delay: i * 0.2,
                        ease: "easeOut",
                      }}
                      className={`w-12 h-12 bg-gradient-to-r ${color} rounded-full flex items-center justify-center`}
                    >
                      <div className="w-6 h-6 bg-white rounded-full"></div>
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{title}</h3>
                      <p className="text-slate-600 text-sm">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Decorative Gradient Blobs */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-teal-400/20 to-blue-400/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
