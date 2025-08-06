import React from 'react'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
export const SOCIAL_LINKS = [
  { href: "#", icon: <Facebook size={20} /> },
  { href: "#", icon: <Twitter size={20} /> },
  { href: "#", icon: <Linkedin size={20} /> },
  { href: "#", icon: <Instagram size={20} /> },
];

 export const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

export const SERVICE_LINKS = [
  { href: "/services/compliance-risk-review", label: "Compliance Risk Review" },
  { href: "/services/partner-compliance-solutions", label: "Partner Compliance Solutions" },
  { href: "/services/ehs-compliance-oversight", label: "EHS Compliance Oversight" },
  { href: "/services/unit-compliance", label: "Unit Compliance" },
  { href: "/services/mining-regulation-support", label: "Mining Regulation Support" },
  { href: "/services/salary-compliance-assist", label: "Salary Compliance Assist" },
  { href: "/services/flexible-workforce-solutions", label: "Flexible Workforce Solutions" },
  { href: "/services/industrial-compliance-services", label: "Industrial Compliance Services" },
  { href: "/services/employee-payroll-solutions", label: "Employee Payroll Solutions" },
];
