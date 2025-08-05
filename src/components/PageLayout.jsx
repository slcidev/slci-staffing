 // src/components/PageLayout.jsx
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "./Loader";

const PageLayout = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Start loading on route change
    setLoading(true);

    // Simulate delay (e.g., 800ms)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className={`transition-opacity duration-700 ${loading ? "opacity-0" : "opacity-100"}`}>
      {loading && <Loader />}
      {!loading && children}
    </div>
  );
};

export default PageLayout;
