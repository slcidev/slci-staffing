import {
  Code,
  Smartphone,
  Globe,
  BarChart3,
  Shield,
  Headphones,
} from "lucide-react";
import HighlightText from "../components/shared/HighlightText";
import {
  FaShieldAlt,
  FaHandshake,
  FaLeaf,
  FaBuilding,
  FaHardHat,
  FaMoneyCheckAlt,
  FaUsers,
  FaIndustry,
  FaFileInvoiceDollar,
  FaCogs,
  FaCheckCircle,
  FaCalendarAlt,
} from "react-icons/fa";

export const services = [
  {
    icon: FaShieldAlt,
    title: "Compliance Risk Review",
    description:
      "Identify and manage legal and regulatory risks across your organization.",
    features: [
      "Risk Gap Assessment",
      "Policy Audits",
      "Legal Compliance Map",
      "Mitigation Strategy",
    ],
  },
  {
    icon: FaHandshake,
    title: "Partner Compliance Solutions",
    description:
      "Ensure your vendors and partners follow industry compliance standards.",
    features: [
      "Third-party Vetting",
      "Audit Frameworks",
      "Contractual Compliance",
      "Ongoing Monitoring",
    ],
  },
  {
    icon: FaLeaf,
    title: "EHS Compliance Oversight",
    description:
      "Monitor and enforce environmental, health, and safety compliance at all levels.",
    features: [
      "Environmental Audits",
      "Workplace Safety Protocols",
      "EHS Policy Management",
      "Incident Reporting",
    ],
  },
  {
    icon: FaBuilding,
    title: "Unit Compliance",
    description:
      "Track and standardize compliance practices across multiple business units.",
    features: [
      "Unit-Based Compliance Logs",
      "Branch Training & Audits",
      "Centralized Reporting",
      "Internal Risk Monitoring",
    ],
  },
  {
    icon: FaHardHat,
    title: "Mining Regulation Support",
    description:
      "Stay compliant with evolving mining industry rules and environmental laws.",
    features: [
      "Permit Assistance",
      "Operational Audits",
      "Regulatory Updates",
      "Safety Compliance Plans",
    ],
  },
  {
    icon: FaMoneyCheckAlt,
    title: "Salary Compliance Assist",
    description:
      "Ensure payroll, bonuses, and compensation structures meet legal requirements.",
    features: [
      "Wage Structure Audits",
      "Overtime Regulation Support",
      "Employee Classification",
      "Payroll Legal Review",
    ],
  },
  {
    icon: FaUsers,
    title: "Flexible Workforce Solutions",
    description:
      "Compliant staffing strategies for flexible, contract, or seasonal workers.",
    features: [
      "Temporary Staffing Compliance",
      "Contractor Documentation",
      "Onboarding Support",
      "Labour Law Alignment",
    ],
  },
  {
    icon: FaIndustry,
    title: "Industrial Compliance Services",
    description:
      "Specialized compliance support for manufacturing and heavy industries.",
    features: [
      "Industrial Safety Checks",
      "Machine Regulation Mapping",
      "Factory Audits",
      "Hazard Compliance",
    ],
  },
  {
    icon: FaFileInvoiceDollar,
    title: "Employee Payroll Solutions",
    description:
      "Efficient and compliant employee payroll management solutions.",
    features: [
      "Payslip Automation",
      "Regulatory Tax Deductions",
      "Payroll Processing Tools",
      "Employee Benefits Tracking",
    ],
  },
];

export const ServiceDetails = {
  "compliance-risk-review": {
    hero: {
      title: "Compliance Risk Review",
      highlight: ["Payroll", "Risk", "Compliance"],
      subtitle:
        "Simplify your salary processing with automation, compliance, and peace of mind.",
      image: "https://picsum.photos/id/5/500/300",
      ctaLabel: "Get Started",
    },

    whoNeedsThis: {
      description:
        "Payroll management is essential for companies that need to efficiently manage employee compensation and stay compliant with statutory laws.",
      points: [
        {
          icon: FaCheckCircle, // Icon component
          title: "Check-In", // Title for the card
          description: "Tap to check-in for work", // Description for the card
          iconSize: "60px", // Custom size for the icon
          ariaLabel: "Check-In Icon", // aria-label for accessibility
        },
        {
          icon: FaCalendarAlt, // Icon component
          title: "Leave Application", // Title for the card
          description: "Apply for leave easily", // Description for the card
          iconSize: "50px", // Custom size for the icon
          ariaLabel: "Leave Application Icon", // aria-label for accessibility
        },
        {
          icon: FaCogs, // Icon component
          title: "Settings", // Title for the card
          description: "Update your preferences", // Description for the card
          iconSize: "40px", // Custom size for the icon
          ariaLabel: "Settings Icon", // aria-label for accessibility
        },
        {
          icon: FaCogs, // Icon component
          title: "Settings", // Title for the card
          description: "Update your preferences", // Description for the card
          iconSize: "40px", // Custom size for the icon
          ariaLabel: "Settings Icon", // aria-label for accessibility
        },
        {
          icon: FaCogs, // Icon component
          title: "Settings", // Title for the card
          description:
            "Payroll management is essential for companies that need to efficiently manage employee compensation and stay compliant with statutory laws.", // Description for the card
          iconSize: "40px", // Custom size for the icon
          ariaLabel: "Settings Icon", // aria-label for accessibility
        },
      ],
    },

    ourServices: [
      "Salary Processing & Payslips",
      "Statutory Compliance (PF, ESI, TDS)",
      "Leave & Attendance Integration",
      "Bonus & Gratuity Management",
      "Form 16 and Year-End Reports",
    ],

    whyNeeded: {
      points: [
        "Avoid penalties due to non-compliance",
        "Save time with automation",
        "Improve employee trust with accurate payouts",
        "Ensure smooth audits & reporting",
        "Focus on core business, not admin",
      ],
    },

    faq: [
      {
        question: "How often is payroll processed?",
        answer:
          "Payroll can be processed monthly, bi-weekly, or weekly based on your organizational needs.",
      },
      {
        question: "Do you handle TDS and PF filing?",
        answer:
          "Yes, we ensure all statutory deductions and filings (TDS, PF, ESI) are handled on time.",
      },
      {
        question: "Can you integrate with attendance systems?",
        answer:
          "Absolutely. We can integrate with your existing leave and attendance system for seamless processing.",
      },
      {
        question: "Is this suitable for a 10-person startup?",
        answer:
          "Yes! Our system is scalable and works great for small teams as well.",
      },
      {
        question: "Will employees get digital payslips?",
        answer:
          "Yes, employees receive secure digital payslips each month via email or portal access.",
      },
    ],
  },

  // Add more services like compliance, onboarding, audits...
};
