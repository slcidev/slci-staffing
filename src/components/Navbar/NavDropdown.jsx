import { useState,  } from "react";
import { NavLink } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const NavDropdown = ({ title, items = [], columns = 3 }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const dropdownRef = useRef(null);

  let timeout;

  const handleMouseEnter = () => {
    clearTimeout(timeout);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeout = setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger */}
      <button className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 font-medium space-x-1">
        <span>{title}</span>
        <FaChevronDown
          className={`mt-1 transition-transform duration-300 transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Panel */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full z-50">
          <div className="bg-white shadow-lg border-t max-w-6xl mx-auto px-6 py-6">
            <div
              className="grid gap-6"
              style={{
                gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
              }}
            >
              {items.map((column, colIndex) => (
                <div key={colIndex} className="space-y-2">
                  {column.map((item, itemIndex) => (
                    <NavLink
                      key={itemIndex}
                      to={item.href}
                      className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition duration-200"
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </NavLink>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavDropdown;

/* import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const NavDropdown = ({ title, items = [], columns = 3 }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      
      <button className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 font-medium space-x-1">
        <span>{title}</span>
        <FaChevronDown
          className={`mt-1 transition-transform duration-300 transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

   
      {isOpen && (
         <div className="absolute left-0 top-full w-screen z-50">
          <div className="bg-white shadow-lg border-t max-w-7xl mx-auto px-6 py-6">
            <div
              className="grid gap-6"
              style={{
                gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
              }}
            >
              {items.map((column, colIndex) => (
                <div key={colIndex} className="space-y-2">
                  {column.map((item, itemIndex) => (
                    <NavLink
                      key={itemIndex}
                      to={item.href}
                      className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition duration-200"
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </NavLink>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavDropdown;

 */

/* import { NavLink } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const NavDropdown = ({ title, items = [], columns = 3 }) => {
  return (
    <div className=" relative group ">
      <button className="flex items-center px-4 py-2 font-medium text-gray-700 hover:text-blue-600 space-x-1">
        <span>{title}</span>
        <FaChevronDown className="mt-1 transition-transform duration-300 transform group-hover:rotate-180" />
      </button>

      <div className="absolute left-0 top-full w-full bg-white shadow-lg border-t z-50 
                      opacity-0 pointer-events-none transition-all duration-300
                      group-hover:opacity-100 group-hover:pointer-events-auto">
        
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div
            className="grid gap-6"
            style={{
              gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
            }}
          >
            {items.map((column, colIndex) => (
              <div key={colIndex} className="space-y-2">
                {column.map((item, itemIndex) => (
                  <NavLink
                    to={item.href}
                    key={itemIndex}
                    className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavDropdown;
 */

/* import { NavLink } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const NavDropdown = ({ title, items = [], columns = 3 }) => {
  return (
    <div className="  group relative">
     
      <button className="text-gray-700 hover:text-blue-600 px-4 py-2 font-medium flex items-center space-x-1 group-hover:text-blue-600">
        <span>{title}</span>
        <FaChevronDown className=" mt-2 transition-transform duration-300 transform group-hover:rotate-180" />
      </button>

    <div className="absolute left-0 top-full w-full bg-white shadow-lg border-t opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto z-50 transition-all duration-300">

        <div className="max-w-7xl mx-auto px-6 py-6  ">
          <div
            className="grid gap-6"
            style={{
              gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
            }}
          >
            {items.map((column, colIndex) => (
              <div key={colIndex} className="space-y-2">
                {column.map((item, itemIndex) => (
                  <NavLink
                    to={item.href}
                    key={itemIndex}
                    className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 "
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavDropdown;
 */
