import { useState } from "react";
import { NavLink } from "react-router-dom";
import NavDropdown from "./NavDropdown";
import MobileDropdown from "./MobileDropdown";
import logo from "../../assets/slci-image.png";
import {
  servicesLinks,
  productsLinks,
  resourcesLinks,
} from "../../data/NavLinksData";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full shadow-md bg-white sticky top-0 z-50">
      {/* Nav tag defines the actual navigation block */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  relative ">
        <div className="flex justify-between items-center h-16 ">
          {/* LOGO */}
          <NavLink
            to="/"
            className="text-xl font-bold text-blue-600 transition-colors duration-200"
          >
            <img src={logo} alt="Company Logo" className="h-12 w-auto" />
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center  ">
            {/* Dropdowns start */}
            <NavDropdown title="Services" columns={4} items={servicesLinks} />
            {/* <NavDropdown title="Products" columns={2} items={productsLinks} /> */}
            <NavDropdown title="Resources" columns={2} items={resourcesLinks} />
            {/* Dropdowns end */}
            <NavLink
              to="/about"
              className=" px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              About
            </NavLink>
            <NavLink
              to="/career"
              className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Career
            </NavLink>
            <NavLink
              to="/contact"
              className="px-8 py-2 bg-gradient-to-r from-blue-700 to-green-700 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_4px_6px_rgba(0,0,0,0.2)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_6px_12px_rgba(0,0,0,0.3)] text-white hover:from-blue-800 hover:to-green-800 transition-colors duration-300 rounded-full  transform hover:scale-105 "
            >
              Contact
            </NavLink>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 focus:outline-none text-2xl"
              aria-label="Toggle menu"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {/*  {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <NavLink to="/about" className="block px-4 py-2 hover:bg-gray-100">
              About
            </NavLink>
            <NavLink to="/career" className="block px-4 py-2 hover:bg-gray-100">
              Career
            </NavLink>
            <NavLink
              to="/contact"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Contact
            </NavLink>
          </div>
        )} */}
      </nav>

      {/* Off-Canvas Mobile Sidebar */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-white/10 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <span className="text-lg font-semibold text-gray-800">Menu</span>
          <button
            className="text-gray-600 text-2xl"
            onClick={() => setMobileMenuOpen(false)}
          >
            ×
          </button>
        </div>

        <div className="p-4 space-y-2 overflow-y-auto max-h-[calc(100vh-64px)]">
          <NavLink
            to="/about"
            className="block px-4 py-3 text-gray-700 font-semibold hover:bg-gray-100 rounded-lg transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </NavLink>

          <NavLink
            to="/career"
            className="block px-4 py-3 text-gray-700 font-semibold hover:bg-gray-100 rounded-lg transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            Career
          </NavLink>

          <MobileDropdown title="Services" items={servicesLinks} />
          <MobileDropdown title="Products" items={productsLinks} />
          <MobileDropdown title="Resources" items={resourcesLinks} />

          <NavLink
            to="/contact"
            className="block px-4 py-3 text-gray-700 font-semibold hover:bg-gray-100 rounded-lg transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
