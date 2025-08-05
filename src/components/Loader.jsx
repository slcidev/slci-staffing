// src/components/Loader.jsx
import React from "react";
import logo from "../assets/slci-image.png";
const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid">
         <img
              loading="lazy"
              src={logo}
              alt="Company Logo"
              className="h-12 w-auto"
            />
      </div>
    </div>
  );
};

export default Loader;
