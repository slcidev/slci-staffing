import React from "react";
// import { Users, Target, Award, Zap } from "lucide-react";
import { ArrowRight, Play } from "lucide-react";
import SectionHeading from "../shared/SectionHeading";
import CtaButton from "../shared/CtaButton";
import HighlightText from "../shared/HighlightText";
import FeatureGrid from "../shared/FeatureGrid";
import { stats, features } from "../../data/AboutPageData";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section id="about" className="py-17 bg-white">
      <div className="max-w-7xl mx-auto px-4 text sm:px-6 lg:px-8">
        <div className="flex justify-center align-center  mb-16">
          <SectionHeading
            title={
              <>
                About <HighlightText text="Our " />
                <HighlightText text="Company" />
              </>
            }
            subtitle="Leading compliance partner since 1986, helping Indian businesses navigate complex labour laws with confidence."
            headingLevel="h2"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <SectionHeading
              title="Our Mission"
              subtitle={[
                "Our mission is to guide organizations through the dynamic world of Labour Laws and compliance with ethical, strategic, and cost-effective solutions. We strive to decode the legal ecosystem for our clients, helping them understand, implement, and stay ahead of statutory requirements.",
                "By embedding compliance at the heart of operations, we ensure clients not only meet legal obligations but foster a culture of accountability, governance, and long-term sustainability.",
              ]}
              headingLevel="h3"
            />

            <div className="pt-4">
              <Link to="/about">
                <CtaButton variant="primary" icon={<ArrowRight size={20} />}>
                  Know More
                </CtaButton>
              </Link>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-green-600 rounded-full"></div>
              <span className="text-slate-500 font-medium">Since 2008</span>
            </div>
          </div>

          <div className="relative">
            <FeatureGrid features={features} />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-white" size={24} />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
