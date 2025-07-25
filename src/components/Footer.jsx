import React from "react";
import logo from "../assets/slci-image.png";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { SOCIAL_LINKS, SERVICE_LINKS, QUICK_LINKS } from "../data/FooterData";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-6">
            <img
              loading="lazy"
              src={logo}
              alt="Company Logo"
              className="h-12 w-auto filter brightness-0 invert"
            />
            <p className="text-slate-300 leading-relaxed">
              Transforming ideas into digital reality with innovative solutions
              that drive growth and success.
            </p>
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map(({ href, icon }, idx) => (
                <Link
                
                  key={idx}
                  href={href}
                  className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <div className="space-y-3">
              {QUICK_LINKS.map(({ href, label }, i) => (
                <Link
                  key={i}
                  href={href}
                  className="block text-slate-300 hover:text-blue-400 transition-colors duration-300"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <div className="space-y-3">
              {SERVICE_LINKS.map(({ href, label }, i) => (
                <Link
                  key={i}
                  href={href}
                  className="block text-slate-300 hover:text-blue-400 transition-colors duration-300"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <address>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-blue-400" size={20} />
                <span className="text-slate-300">contact@company.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-blue-400" size={20} />
                <span className="text-slate-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-blue-400" size={20} />
                <span className="text-slate-300">
                  123 Business Street, City, State 12345
                </span>
              </div>
            </div>
          </address>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center">
          <p className="text-slate-400">
            © 2024 Your Company Name. All rights reserved. | Privacy Policy |
            Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
