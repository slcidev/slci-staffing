import React, { useEffect, useRef, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const pathRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const pathLengthRef = useRef(0);

  useEffect(() => {
    const scrollPath = pathRef.current;
    const pathLength = scrollPath.getTotalLength();
    pathLengthRef.current = pathLength;

    scrollPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    scrollPath.style.strokeDashoffset = pathLength;

    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = pathLength - (scrollTop * pathLength) / docHeight;
      scrollPath.style.strokeDashoffset = progress;

      setIsVisible(scrollTop > 100);
    };

    window.addEventListener("scroll", updateScroll);
    updateScroll(); // initial call

    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 cursor-pointer h-14 w-14 rounded-full  
        flex items-center justify-center bg-white shadow-md transition-all duration-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
    >
      {/* SVG Progress Circle */}
      <svg className="absolute h-full w-full rotate-[-90deg]" viewBox="-1 -1 102 102">
        <path
          ref={pathRef}
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          fill="none"
          stroke="#2563eb" // Tailwind's blue-600
          strokeWidth="4"
        />
      </svg>

      {/* Arrow Icon */}
      <FaArrowUp className="text-blue-600 text-lg relative z-10" />
    </div>
  );
};

export default ScrollToTop;
