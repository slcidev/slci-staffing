import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import ServicePage from "./pages/ServicePage";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/ScrollTotop";

const App = () => {
  return (
    
    <BrowserRouter>
    <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<MainLayout />}>
         <Route index element={<Home />} />
              <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="About" element={<About />} />
          <Route path="Career" element={<Career />} />
          <Route path="Contact" element={<Contact />} />
        </Route>
      </Routes>
      <ScrollToTop/>
    </BrowserRouter>
  );
};

export default App;
