import React from "react";
import { MapPin, Clock, DollarSign, Users, Rocket, Heart } from "lucide-react";
import ServiceHero from "../components/service/sections/ServiceHero";
import { positions, benefits } from "../data/CareerData";

const Career = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}

      <ServiceHero
        title="Join Our Amazing Team "
        highlight={["Amazing", "Team", ]}
        subtitle="Simplify your salary processing with automation, compliance, and peace of mind."
        image="https://picsum.photos/id/5/500/300"
        ctaLabel="View Open Positions"
      />

      {/*    <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-700 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Join Our
            <span className="block bg-gradient-to-r from-blue-200 to-emerald-200 bg-clip-text text-transparent">
              Amazing Team
            </span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Be part of a innovative team that's shaping the future of
            technology. We're looking for passionate individuals who want to
            make a difference.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-700 hover:to-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            View Open Positions
          </button>
        </div>
      </section> */}

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-600">
              We believe in creating an environment where our team can thrive
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-xl">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600">
              Find your next career opportunity with us
            </p>
          </div>

          <div className="space-y-6">
            {positions.map((position, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {position.title}
                      </h3>
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-emerald-100 text-blue-800 rounded-full text-sm font-medium">
                        {position.department}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-4">{position.description}</p>

                    <div className="flex flex-wrap gap-6 text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock size={16} />
                        <span>{position.type}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <DollarSign size={16} />
                        <span>{position.salary}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Requirements:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {position.requirements.map((req, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                          >
                            {req}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 lg:mt-0 lg:ml-8">
                    <button className="w-full lg:w-auto bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Don't See Your Role?
              </h3>
              <p className="text-gray-600 mb-6">
                We're always looking for talented individuals. Send us your
                resume and let us know how you'd like to contribute.
              </p>
              <button className=" cursor-pointer bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                Send Resume
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-800">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-slate-500 mb-8">
            Join a team that values innovation, collaboration, and personal
            growth. Your next career adventure starts here.
          </p>
          <button className=" cursor-pointer bg-gradient-to-r  from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ">
            Apply Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default Career;
