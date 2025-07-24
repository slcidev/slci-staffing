import { Code, Smartphone, Globe, BarChart3, Shield, Headphones } from 'lucide-react';

import {
  FaShieldAlt,
  FaHandshake,
  FaLeaf,
  FaBuilding,
  FaHardHat,
  FaMoneyCheckAlt,
  FaUsers,
  FaIndustry,
  FaFileInvoiceDollar
} from "react-icons/fa";

export const services = [
  {
    icon: FaShieldAlt,
    title: "Compliance Risk Review",
    description: "Identify and manage legal and regulatory risks across your organization.",
    features: [
      "Risk Gap Assessment",
      "Policy Audits",
      "Legal Compliance Map",
      "Mitigation Strategy"
    ]
  },
  {
    icon: FaHandshake,
    title: "Partner Compliance Solutions",
    description: "Ensure your vendors and partners follow industry compliance standards.",
    features: [
      "Third-party Vetting",
      "Audit Frameworks",
      "Contractual Compliance",
      "Ongoing Monitoring"
    ]
  },
  {
    icon: FaLeaf,
    title: "EHS Compliance Oversight",
    description: "Monitor and enforce environmental, health, and safety compliance at all levels.",
    features: [
      "Environmental Audits",
      "Workplace Safety Protocols",
      "EHS Policy Management",
      "Incident Reporting"
    ]
  },
  {
    icon: FaBuilding,
    title: "Unit Compliance",
    description: "Track and standardize compliance practices across multiple business units.",
    features: [
      "Unit-Based Compliance Logs",
      "Branch Training & Audits",
      "Centralized Reporting",
      "Internal Risk Monitoring"
    ]
  },
  {
    icon: FaHardHat,
    title: "Mining Regulation Support",
    description: "Stay compliant with evolving mining industry rules and environmental laws.",
    features: [
      "Permit Assistance",
      "Operational Audits",
      "Regulatory Updates",
      "Safety Compliance Plans"
    ]
  },
  {
    icon: FaMoneyCheckAlt,
    title: "Salary Compliance Assist",
    description: "Ensure payroll, bonuses, and compensation structures meet legal requirements.",
    features: [
      "Wage Structure Audits",
      "Overtime Regulation Support",
      "Employee Classification",
      "Payroll Legal Review"
    ]
  },
  {
    icon: FaUsers,
    title: "Flexible Workforce Solutions",
    description: "Compliant staffing strategies for flexible, contract, or seasonal workers.",
    features: [
      "Temporary Staffing Compliance",
      "Contractor Documentation",
      "Onboarding Support",
      "Labour Law Alignment"
    ]
  },
  {
    icon: FaIndustry,
    title: "Industrial Compliance Services",
    description: "Specialized compliance support for manufacturing and heavy industries.",
    features: [
      "Industrial Safety Checks",
      "Machine Regulation Mapping",
      "Factory Audits",
      "Hazard Compliance"
    ]
  },
  {
    icon: FaFileInvoiceDollar,
    title: "Employee Payroll Solutions",
    description: "Efficient and compliant employee payroll management solutions.",
    features: [
      "Payslip Automation",
      "Regulatory Tax Deductions",
      "Payroll Processing Tools",
      "Employee Benefits Tracking"
    ]
  }
];

export default services;
