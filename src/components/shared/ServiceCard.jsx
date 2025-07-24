import React from "react";

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
}) {
  return (
    <div className="w-[300px] group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-teal-100 hover:border-teal-200 hover:-translate-y-2">
      <div className="w-16 h-15 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="text-white" size={28} />
      </div>
      <h3 className="text-2xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 mb-6 leading-relaxed">{description}</p>
      <div className="space-y-2">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full" />
            <span className="text-slate-600 text-sm">{feature}</span>
          </div>
        ))}
      </div>
      {/*   <button className="mt-6 text-teal-600 font-semibold hover:text-teal-700 transition-colors duration-300 group-hover:translate-x-2">
        Learn More →
      </button> */}
    </div>
  );
}
