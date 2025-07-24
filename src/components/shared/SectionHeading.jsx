import React from 'react'

const headingClasses = {
  h1: 'text-4xl sm:text-5xl text-center sm:text-start lg:text-6xl font-bold text-slate-900 leading-tight',
  h2: 'text-3xl text-center sm:text-4xl lg:text-4xl font-bold text-slate-900 leading-snug',
  h3: 'text-2xl sm:text-3xl font-bold text-slate-900',
  h4: 'text-xl sm:text-2xl font-medium text-slate-900',
  h5: 'text-lg font-medium text-slate-900',
  h6: 'text-base font-medium text-slate-900',
  none: '', // no classes at all
}
const subtitleClasses = {
  h1: 'text-lg sm:text-xl  sm:text-start text-slate-700 max-w-2xl',
  h2: 'text-base sm:text-xl  text-center text-slate-600  max-w-3xl',
  h3: 'text-sm sm:text-lg text-start text-slate-600 max-w-2xl',
  h4: 'text-sm text-slate-700 max-w-xl',
  h5: 'text-sm text-slate-600 max-w-xl',
  h6: 'text-sm text-slate-500 max-w-xl',
  none: '',
}

const SectionHeading = ({
  title,
  subtitle,
  headingLevel = 'h1',
  noStyle = false,
  customSubtitleClass = '',
}) => {
  const HeadingTag = headingLevel;
  const headingClass = noStyle ? '' : headingClasses[headingLevel] || headingClasses['h1'];
  const subtitleClass = noStyle
    ? ''
    : customSubtitleClass || subtitleClasses[headingLevel] || subtitleClasses['h1'];

 // Normalize subtitle to array
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
}

export default SectionHeading;


// version 1
/* import React from 'react'

const SectionHeading = ({ title, subtitle, headingLevel = 'h1' }) => {
  // Define the allowed heading levels
  const HeadingTag = headingLevel; 

  return (
    <div className="spacy-y-4">
      <HeadingTag className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
        {title}
      </HeadingTag>
      {subtitle && (
        <p className="text-xl text-slate-900 max-w-2xl">{subtitle}</p>
      )}
    </div>
  )
}

export default SectionHeading
 */