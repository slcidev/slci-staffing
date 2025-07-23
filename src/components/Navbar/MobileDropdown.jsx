import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const MobileDropdown = ({ title, items = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="w-full flex justify-between items-center px-4 py-3 text-left text-gray-800 font-semibold hover:bg-gray-100 rounded-lg transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <FaChevronDown
          className={`ml-2 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="pl-6 pr-2 max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          {items.flat().map((item, index) => (
            <NavLink
              key={index}
              to={item.href}
              className="block px-2 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100 transition"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileDropdown;



/* import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const MobileDropdown = ({ title, items = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        className="w-full flex justify-between items-center px-4 py-3 text-left text-gray-800 font-medium hover:bg-gray-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <FaChevronDown
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="bg-white">
          {items.flat().map((item, index) => (
            <NavLink
              key={index}
              to={item.href}
              className="block px-6 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)} // optional: collapse after click
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileDropdown;
 */