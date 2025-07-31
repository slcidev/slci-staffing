import React from "react";




const CtaButton = ({
  children,
  icon,
  variant = "primary",
  href,
  id,
  onClick, // ✅ Add this to handle CTA click manually
  dataContext, // ✅ Optional context like service/page name
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex text-xs sm:text-base cursor-pointer items-center gap-2 px-4 sm:px-8 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300";

  const primaryStyles =
    "bg-gradient-to-r from-blue-600 to-green-600 text-white hover:from-blue-700 hover:to-green-700 transform hover:scale-105";

  const secondaryStyles =
    "border-2 border-blue-600 text-blue-600 hover:bg-gradient-to-r hover:from-blue-700 hover:to-green-700 hover:text-white transform hover:scale-105";

  const combinedClass = `${baseStyles} ${
    variant === "secondary" ? secondaryStyles : primaryStyles
  } ${className}`;

  const content = (
    <>
      {children}
      {icon && (
        <span className="group-hover:translate-x-1 transition-transform">
          {icon}
        </span>
      )}
    </>
  );

  // ✅ Custom handler for <button> or <a> click
  const handleClick = (e) => {
    if (onClick) {
      onClick(e, dataContext); // pass context to parent handler
    }
  };

  // If href exists, render an <a> tag
  if (href) {
    return (
      <a
        href={href}
        id={id}
        className={combinedClass}
        data-context={dataContext}
        onClick={handleClick}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      id={id}
      className={combinedClass}
      onClick={handleClick}
      data-context={dataContext}
      {...props}
    >
      {content}
    </button>
  );
};

export default CtaButton;



/* const CtaButton = ({
  children,
  icon,
  variant = "primary", // "primary" or "secondary"
  href,
  id,
  
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex text-xs sm:text-base cursor-pointer items-center  gap-2 px-4 sm:px-8 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300";

  const primaryStyles =
    "bg-gradient-to-r from-blue-600 to-green-600 text-white hover:from-blue-700 hover:to-green-700 transform hover:scale-105";

  const secondaryStyles =
    "border-2 border-blue-600 text-blue-600 hover:bg-gradient-to-r hover:from-blue-700 hover:to-green-700 hover:text-white transform hover:scale-105";

  const combinedClass = `${baseStyles} ${
    variant === "secondary" ? secondaryStyles : primaryStyles
  } ${className}`;

  const content = (
    <>
      {children}
      {icon && (
        <span className="group-hover:translate-x-1 transition-transform">
          {icon}
        </span>
      )}
    </>
  );

  // If href exists, render an <a> tag
  if (href) {
    return (
      <a href={href} id={id} className={combinedClass} {...props}>
        {content}
      </a>
    );
  }

  // Otherwise render a <button>
  return (
    <button id={id} className={combinedClass} {...props}>
      {content}
    </button>
  );
};

export default CtaButton;
 */




/* import React from "react";

const CtaButton = ({
  children,
  icon,
  variant = "primary",
  borderColor = "border-blue-600",
  textColor = "text-blue-600",
}) => {
  const base =
    "relative cursor-pointer inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300";

  if (variant === "primary") {
    return (
      <button
        className={`${base} group  bg-gradient-to-r from-blue-600 to-green-600 text-white hover:from-blue-700 hover:to-green-700 transform hover:scale-105`}
      >
        {children}
        {icon && (
          <span className="group-hover:translate-x-1 transition-transform">
            {icon}
          </span>
        )}
      </button>
    );
  } else if (variant === "secondary") {
    return (
      <button
        className={`${base} border-2 ${borderColor} ${textColor} bg-gradient-to-r hover:from-blue-700 hover:to-green-700   hover:text-white transform hover:scale-105 `}
      >
        {icon}
        {children}
      </button>
    );
  }

  // fallback
  return (
    <button
      className={`${base} bg-gradient-to-r from-blue-600 to-green-600 text-white hover:from-blue-700 hover:to-green-700 transform hover:scale-105`}
    >
      {children}
    </button>
  );
};

export default CtaButton;
 */
