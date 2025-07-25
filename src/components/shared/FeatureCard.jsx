import React from "react";

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  bgFrom,
  bgTo,
  borderColor,
}) => {
  return (
    <div
      className={`bg-gradient-to-br from-${bgFrom} to-${bgTo} p-6 rounded-2xl border border-${borderColor} hover:-translate-y-2 shadow-lg hover:shadow-2xl transition-all duration-300`}
    >
      <div
        className={`w-12 h-12 bg-gradient-to-r from-${bgFrom.replace(
          "50",
          "500"
        )} to-${bgTo.replace(
          "50",
          "500"
        )} rounded-xl flex items-center justify-center mb-4`}
      >
        <Icon className="text-white" size={24} />
      </div>
      <h4 className="font-semibold text-slate-900 mb-2">{title}</h4>
      <p className="text-slate-600 text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
