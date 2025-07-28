import React from "react";
import { Users, Award, Target, Heart, ArrowRight, Play } from "lucide-react";
import SectionHeading from "../components/shared/SectionHeading";
import CtaButton from "../components/shared/CtaButton";
// import HighlightText from "../components/shared/HighlightText";
import FeatureGrid from "../components/shared/FeatureGrid";
import { stats, features } from "../data/AboutPageData";
import { Link } from "react-router-dom";
import ServiceHero from "../components/service/sections/ServiceHero";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}

      <ServiceHero
        title="About SLCI "
        highlight={["SLCI"]}
        subtitle="Simplify your salary processing with automation, compliance, and peace of mind."
        image="https://picsum.photos/id/5/500/300"
        ctaLabel="Get Started"
      />

      <section id="about" className="py-17 bg-white">
        <div className="max-w-7xl mx-auto px-4 text sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <SectionHeading
                title="Our Mission"
                subtitle={[
                  "To bridge the gap between innovative technology and practical business solutions. We believe in creating digital experiences that not only meet today's needs but anticipate tomorrow's challenges.",
                  "Our team of experts combines creativity with technical excellence to deliver solutions that drive measurable results and sustainable growth for our clients.",
                ]}
                headingLevel="h3"
              />

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

      {/*    <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-700 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About
            <span className="block bg-gradient-to-r from-blue-200 to-emerald-200 bg-clip-text text-transparent">
              PeacockTech
            </span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We are a passionate team of technology innovators dedicated to
            transforming businesses through cutting-edge digital solutions and
            exceptional service.
          </p>
        </div>
      </section> */}

      {/* Mission & Vision */}
      {/*  <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                To empower businesses of all sizes with innovative technology
                solutions that drive growth, enhance efficiency, and create
                lasting competitive advantages in the digital landscape.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"></div>
                  <span className="text-gray-700">
                    Innovation-driven approach
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"></div>
                  <span className="text-gray-700">
                    Client-centric solutions
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"></div>
                  <span className="text-gray-700">
                    Sustainable growth focus
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading technology partner that businesses trust for
                their digital transformation journey, recognized for our
                innovation, reliability, and commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="text-blue-600" size={40} />,
                title: "Excellence",
                description:
                  "We strive for the highest quality in every project and interaction.",
              },
              {
                icon: <Users className="text-emerald-600" size={40} />,
                title: "Collaboration",
                description:
                  "We believe in working together to achieve extraordinary results.",
              },
              {
                icon: <Target className="text-teal-600" size={40} />,
                title: "Innovation",
                description:
                  "We continuously explore new technologies and creative solutions.",
              },
              {
                icon: <Heart className="text-red-500" size={40} />,
                title: "Integrity",
                description:
                  "We conduct business with honesty, transparency, and ethical practices.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      {/*   <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Impact in Numbers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "50+", label: "Expert Team Members" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "10+", label: "Years of Experience" },
            ].map((stat, index) => (
              <div key={index} className="p-8">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-emerald-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how we can help transform your business with
            innovative technology solutions.
          </p>
          <button className="cursor-pointer  bg-white hover:shadow-2xl text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-teal-50 transition-all">
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
