import { Outlet } from "react-router-dom";
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      {/* header will go here */}
      <Navbar/>
      <Outlet/> {/* This render the current page */}
      <Footer/>
      
    </div>
  );
};

export default MainLayout;
