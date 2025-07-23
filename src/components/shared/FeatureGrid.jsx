import React from 'react';
import FeatureCard from './FeatureCard';

const FeatureGrid = ({ features }) => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="space-y-6">
        {features.slice(0, 2).map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
      <div className="space-y-6 mt-12">
        {features.slice(2).map((feature, index) => (
          <FeatureCard key={index + 2} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default FeatureGrid;
