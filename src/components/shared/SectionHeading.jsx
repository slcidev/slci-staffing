import React from 'react';

const headingClasses = {
  h1: 'text-4xl sm:text-5xl text-center sm:text-start lg:text-6xl font-bold text-slate-900 leading-tight',
  h2: 'text-3xl text-center sm:text-4xl lg:text-4xl font-bold text-slate-900 leading-snug',
  h3: 'text-2xl sm:text-3xl font-bold text-slate-900',
  h4: 'text-xl sm:text-2xl font-medium text-slate-900',
  h5: 'text-lg font-medium text-slate-900',
  h6: 'text-base font-medium text-slate-900',
};

const subtitleClasses = {
  h1: 'text-lg sm:text-xl sm:text-start text-slate-700 max-w-2xl',
  h2: 'text-base sm:text-xl text-center text-slate-600 max-w-3xl',
  h3: 'text-sm sm:text-lg text-start text-slate-600 max-w-2xl',
  h4: 'text-sm text-slate-700 max-w-xl',
  h5: 'text-sm text-slate-600 max-w-xl',
  h6: 'text-sm text-slate-500 max-w-xl',
};

const allowedHeadingTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

const SectionHeading = ({
  title,
  subtitle,
  headingLevel = 'h1',
  noStyle = false,
  customSubtitleClass = '',
}) => {
  const isValidHeading = allowedHeadingTags.includes(headingLevel);
  const HeadingTag = isValidHeading ? headingLevel : 'h1';

  const headingClass = noStyle ? '' : headingClasses[HeadingTag];
  const subtitleClass = noStyle
    ? ''
    : customSubtitleClass || subtitleClasses[HeadingTag];

  const subtitles = Array.isArray(subtitle) ? subtitle : [subtitle];

  return (
    <div className="space-y-4">
      <HeadingTag className={headingClass}>{title}</HeadingTag>
      {subtitles.map((text, index) => (
        <p key={index} className={`${subtitleClass} mx-auto text-center`}>
          {text}
        </p>
      ))}
    </div>
  );
};

export default SectionHeading;
