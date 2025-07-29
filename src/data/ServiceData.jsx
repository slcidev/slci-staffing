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
import {
  FaBalanceScale,
  FaCalendarCheck,
  FaGift,
  FaFileAlt,
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
        "Businesses of all sizes and industries need a reliable Payroll compliance service provider to ensure they meet regulatory requirements related to employee compensation. Whether you’re a startup or a large corporation with a Pan-India presence, these payroll processing services are crucial for maintaining legal compliance and operational integrity.",

    },

    ourServices: {
      description:
        "At SLCI, a leading provider among payroll processing companies, our team of experts provides comprehensive Payroll Compliance Services to support your business at every stage, ensuring seamless operations and adherence to regulatory requirements:",

      points: [
        {
          icon: FaFileInvoiceDollar,
          title: "Salary & Payslips",
          description:
            "Automated salary processing with downloadable payslips every cycle.",
          iconSize: "60px",
          ariaLabel: "Salary Processing and Payslip Icon",
        },
        {
          icon: FaBalanceScale,
          title: "Statutory Compliance",
          description:
            "Ensure PF, ESI, and TDS compliance with timely filings and reports.",
          iconSize: "50px",
          ariaLabel: "Statutory Compliance Icon",
        },
        {
          icon: FaCalendarCheck,
          title: "Leave & Attendance",
          description:
            "Integrated system to track leave, holidays, and working hours.",
          iconSize: "50px",
          ariaLabel: "Leave and Attendance Icon",
        },
        {
          icon: FaGift,
          title: "Bonus & Gratuity",
          description:
            "Manage employee bonuses and gratuity with accurate calculations.",
          iconSize: "48px",
          ariaLabel: "Bonus and Gratuity Icon",
        },
        {
          icon: FaFileAlt,
          title: "Form 16 & Reports",
          description:
            "Generate Form 16 and comprehensive year-end payroll reports.",
          iconSize: "48px",
          ariaLabel: "Form 16 and Year-End Reports Icon",
        },
      ],

      buttonLabel: "Get a Quote from our  Compliance Team!",
    },

    whyNeeded: {
      pointNeeded: [
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
