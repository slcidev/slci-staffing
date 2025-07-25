import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import ServicePage from "./pages/ServicePage";

const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
         <Route index element={<Home />} />
              <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="About" element={<About />} />
          <Route path="Career" element={<Career />} />
          <Route path="Contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
