import React from "react";
import { FaStar, FaQuoteRight } from "react-icons/fa";

const TestimonialCard = ({ rating = 4, content, author, company, logo }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg relative">
      {/* Stars */}
      <div className="flex text-yellow-400 mb-4">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className={i < rating ? "" : "text-gray-300"} />
        ))}
      </div>

      {/* Testimonial text */}
      <p className="text-gray-700 text-sm mb-6">{content}</p>

      {/* User info */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12">
          <img
            loading="lazy"
            src={logo}
            alt={`${company} Logo`}
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{author}</h4>
          <span className="text-gray-500 text-xs">{company}</span>
        </div>
      </div>

      {/* Quote icon */}
      <FaQuoteRight className="absolute bottom-4 right-4 text-gray-200 text-2xl" />
    </div>
  );
};

export default TestimonialCard;
