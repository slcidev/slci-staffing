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
  FaChalkboardTeacher,
  FaUserShield,
  FaUserCheck,
} from "react-icons/fa";
import {
  FaBalanceScale,
  FaCalendarCheck,
  FaGift,
  FaFileAlt,
} from "react-icons/fa";

import ComplianceRisk from "../assets/svg/service-image/compliance-banner-svg.svg"
import Vendor from "../assets/svg/service-image/vendor-banner-svg.svg"     
import EHS from "../assets/svg/service-image/ehs-banner.svg"     
import Establishment from "../assets/svg/service-image/establishment-compliances-banner-svg.svg"     
import Factory from "../assets/svg/service-image/factory-banner-svg.svg"     
import Mining from "../assets/svg/service-image/mining-image-svg.svg"     
import Payroll from "../assets/svg/service-image/payroll-image-svg.svg"     
import PayrollCompliance from "../assets/svg/service-image/payroll-compliance-banner-svg.svg"     
import Staff from "../assets/svg/service-image/staff-banner-svg.svg"     
                              

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
        "Automate salary compliance and reduce legal risks with expert-backed payroll and labour audits.",
      image:` ${ComplianceRisk}`,
      ctaLabel: "Get Started",
    },

    whoNeedsThis: {
      description:
        "Any organization—startup, SME, or enterprise—with employees on payroll needs a robust compliance risk review to avoid penalties, ensure legal accuracy, and build trust with stakeholders and employees alike.",
    },

    ourServices: {
      description:
        "SLCI’s Compliance Risk Review covers every aspect of payroll and statutory obligations. We help organizations streamline salary structures, ensure filings are accurate, and maintain full legal defensibility in audits.",

      points: [
        {
          icon: FaFileInvoiceDollar,
          title: "Salary Structuring & Payslips",
          description:
            "Create optimized salary components and issue compliant payslips with auto-calculations.",
          iconSize: "60px",
          ariaLabel: "Salary and Payslip Icon",
        },
        {
          icon: FaBalanceScale,
          title: "Statutory Deductions",
          description:
            "Ensure timely deductions and filings for PF, ESI, TDS, and Labour Welfare Fund.",
          iconSize: "50px",
          ariaLabel: "Statutory Deductions Icon",
        },
        {
          icon: FaCalendarCheck,
          title: "Attendance & Leave Integration",
          description:
            "Integrate attendance, holidays, and leave records with payroll and compliance records.",
          iconSize: "50px",
          ariaLabel: "Attendance and Leave Icon",
        },
        {
          icon: FaGift,
          title: "Bonus & Gratuity Compliance",
          description:
            "Calculate bonuses and gratuity payouts per statutory timelines and eligibility rules.",
          iconSize: "48px",
          ariaLabel: "Bonus and Gratuity Icon",
        },
        {
          icon: FaFileAlt,
          title: "Form 16 & Year-End Reports",
          description:
            "Generate TDS Form 16 and full payroll compliance reports for audits or internal use.",
          iconSize: "48px",
          ariaLabel: "Form 16 and Reports Icon",
        },
      ],

      ctaLabel: "Get a Quote from our Compliance Team!",
    },

    whyNeeded: {
      pointNeeded: [
        "Minimize legal risks and penalties",
        "Streamline payroll with automation",
        "Build employee trust with accurate payouts",
        "Ensure smooth statutory audits and inspections",
        "Focus on business, not compliance headaches",
      ],
    },

    faq: [
      {
        question: "How frequently should payroll compliance be reviewed?",
        answer:
          "Ideally, payroll compliance should be reviewed monthly and audited quarterly for best practices.",
      },
      {
        question: "Do you file PF, ESI, and TDS?",
        answer:
          "Yes, we handle the complete filing lifecycle—deduction, remittance, return filing—for PF, ESI, and TDS.",
      },
      {
        question: "Can this integrate with our HRMS?",
        answer:
          "Absolutely. Our system can plug into most HRMS or ERP solutions for seamless sync.",
      },
      {
        question: "Is this service suitable for remote teams?",
        answer:
          "Yes, our platform is cloud-based and supports compliance for hybrid or fully remote teams.",
      },
      {
        question: "Do employees get digital access to payslips?",
        answer:
          "Yes, each employee receives monthly digital payslips either via secure portal or email.",
      },
    ],
  },
  "partner-compliance-solutions": {
    hero: {
      title: "Partner Compliance Solutions",
      highlight: ["Solutions"],
      subtitle:
        "Ensure your partners and contractors meet all legal obligations under Indian labour laws.",
      image: `${Vendor}`,
      ctaLabel: "Explore Now",
    },

    whoNeedsThis: {
      description:
        "Companies that work with vendors, contractors, or outsourced staff must ensure third-party compliance to reduce legal exposure. This service is ideal for manufacturing, construction, logistics, IT, and facility management firms managing multiple contractors across locations.",
    },

    ourServices: {
      description:
        "Our Partner Compliance Solutions offer peace of mind through verified documentation, audits, and real-time compliance tracking of your third-party vendors.",

      points: [
        {
          icon: FaHandshake,
          title: "Vendor Onboarding Compliance",
          description:
            "Screen vendors with statutory document checks and due diligence.",
          iconSize: "55px",
          ariaLabel: "Vendor Onboarding Compliance Icon",
        },
        {
          icon: FaFileAlt,
          title: "Contractor Compliance Audits",
          description:
            "Periodic audits to ensure contractor adherence to labour laws and statutory norms.",
          iconSize: "50px",
          ariaLabel: "Contractor Audit Icon",
        },
        {
          icon: FaBalanceScale,
          title: "Agreement & Legal Advisory",
          description:
            "Support for contract drafting, SLAs, and risk-mitigation clauses with legal clarity.",
          iconSize: "48px",
          ariaLabel: "Contract and Legal Advisory Icon",
        },
        {
          icon: FaShieldAlt,
          title: "Liability Risk Coverage",
          description:
            "Ensure you’re protected from vicarious liabilities and hidden compliance gaps.",
          iconSize: "50px",
          ariaLabel: "Risk Management Icon",
        },
      ],

      ctaLabel: "Secure Your Vendor Network Today!",
    },

    whyNeeded: {
      pointNeeded: [
        "Avoid vicarious liability",
        "Strengthen contract governance",
        "Identify and fix third-party risks",
        "Ensure audit-readiness",
        "Protect brand reputation",
      ],
    },

    faq: [
      {
        question: "What’s included in vendor onboarding compliance?",
        answer:
          "We verify labour licenses, PF/ESI registrations, wage compliance, and safety documents before engagement.",
      },
      {
        question: "Can we monitor compliance in real-time?",
        answer:
          "Yes, we offer dashboards and compliance trackers for contractor documents, status, and alerts.",
      },
      {
        question: "Do you help with contract drafting?",
        answer:
          "Absolutely. We review or draft legally compliant contracts with appropriate indemnity and SLA clauses.",
      },
      {
        question: "Is this suitable for small vendors too?",
        answer:
          "Yes. We tailor the program based on vendor size and risk exposure for flexible implementation.",
      },
    ],
  },
  "ehs-compliance-oversight": {
    hero: {
      title: "EHS Compliance Oversight",
      highlight: ["Environment", "Health", "Safety"],
      subtitle:
        "Stay inspection-ready and reduce EHS risks with proactive audits, documentation, and legal adherence.",
    image: `${EHS}`,
      ctaLabel: "Ensure Compliance",
    },

    whoNeedsThis: {
      description:
        "Industries such as manufacturing, mining, logistics, and warehousing require EHS compliance to meet statutory norms under Factories Act, Environment Protection Act, and other labour safety laws. This service is essential for organizations with site-based operations or hazardous processes.",
    },

    ourServices: {
      description:
        "SLCI’s EHS Compliance Oversight helps you create a legally compliant, safe, and sustainable workplace. We assist in documentation, inspections, legal filings, and employee training to meet the full spectrum of Environment, Health & Safety standards.",

      points: [
        {
          icon: FaLeaf,
          title: "Environmental Audit Assistance",
          description:
            "Support in pollution control board filings, waste management, and environmental impact records.",
          iconSize: "50px",
          ariaLabel: "Environmental Audit Icon",
        },
        {
          icon: FaHardHat,
          title: "Safety Compliance Audits",
          description:
            "Conduct safety inspections, gap analysis, and recommendations as per the Factories Act.",
          iconSize: "50px",
          ariaLabel: "Safety Audit Icon",
        },
        {
          icon: FaFileAlt,
          title: "Legal Registers & Records",
          description:
            "Maintain and update compliance registers such as Form 11, accident logs, and equipment checks.",
          iconSize: "48px",
          ariaLabel: "Legal Registers Icon",
        },
        {
          icon: FaChalkboardTeacher,
          title: "EHS Training & Awareness",
          description:
            "Conduct workshops for staff and management on safety practices and emergency preparedness.",
          iconSize: "48px",
          ariaLabel: "EHS Training Icon",
        },
      ],

      ctaLabel: "Book an EHS Audit Today!",
    },

    whyNeeded: {
      pointNeeded: [
        "Reduce accidents and liabilities",
        "Comply with safety and pollution control norms",
        "Avoid factory closure notices",
        "Boost operational sustainability",
        "Protect worker health and morale",
      ],
    },

    faq: [
      {
        question: "Which laws does EHS compliance cover?",
        answer:
          "Key regulations include the Factories Act, Environmental Protection Act, and Occupational Safety Codes.",
      },
      {
        question: "Do you assist during government inspections?",
        answer:
          "Yes, we help prepare for and support you during inspections by factory or pollution control authorities.",
      },
      {
        question: "Can you help set up safety documentation from scratch?",
        answer:
          "Absolutely. We provide ready-to-use formats and help build site-specific registers and records.",
      },
      {
        question: "Is employee training included?",
        answer:
          "Yes, we conduct in-person or virtual sessions on fire safety, hazardous material handling, and emergency response.",
      },
    ],
  },
  "unit-compliance": {
    hero: {
      title: "Unit Compliance",
      highlight: ["Factory", "Shop", "Establishment"],
      subtitle:
        "Ensure your unit meets all statutory obligations under state and central labour laws.",
      image: `${Establishment}`,
      ctaLabel: "Check Your Compliance",
    },

    whoNeedsThis: {
      description:
        "Every factory, warehouse, office, or commercial establishment operating under the Shops & Establishments Act or Factories Act must maintain ongoing unit-level compliance. This service is ideal for single-unit and multi-unit businesses across India.",
    },

    ourServices: {
      description:
        "SLCI helps ensure that your physical units comply with local labour laws, safety standards, welfare provisions, and record-keeping norms through structured audits, filings, and advisory.",

      points: [
        {
          icon: FaBuilding,
          title: "Factory & Establishment Registration",
          description:
            "Assistance with registration, renewals, and amendments under the applicable local laws.",
          iconSize: "50px",
          ariaLabel: "Registration Support Icon",
        },
        {
          icon: FaFileAlt,
          title: "Mandatory Registers & Notices",
          description:
            "Maintain up-to-date registers like muster roll, wages, overtime, and display required notices.",
          iconSize: "48px",
          ariaLabel: "Registers and Notices Icon",
        },
        {
          icon: FaBalanceScale,
          title: "Labour Law Filings",
          description:
            "Timely submission of returns under ESI, PF, LWF, and other state-specific labour laws.",
          iconSize: "50px",
          ariaLabel: "Labour Law Filings Icon",
        },
        {
          icon: FaUserShield,
          title: "Welfare & Safety Norms",
          description:
            "Ensure employee facilities (toilets, canteens, crèches) and safety measures are legally compliant.",
          iconSize: "48px",
          ariaLabel: "Welfare and Safety Icon",
        },
      ],

      ctaLabel: "Ensure Unit-Level Compliance",
    },

    whyNeeded: {
      pointNeeded: [
        "Avoid labour department penalties",
        "Meet state-wise legal obligations",
        "Simplify labour audits and inspections",
        "Protect employee rights and welfare",
        "Stay compliant with minimal effort",
      ],
    },

    faq: [
      {
        question: "Which laws apply to unit-level compliance?",
        answer:
          "Depending on your unit type and location, laws include Factories Act, S&E Act, and state rules.",
      },
      {
        question: "Do you help with license renewals?",
        answer:
          "Yes, we manage end-to-end processes including license issuance, renewal, and modification.",
      },
      {
        question: "Can this be handled remotely?",
        answer:
          "Yes, most compliance filings and register updates can be done digitally with periodic site visits if needed.",
      },
      {
        question: "Is this for new or existing units?",
        answer:
          "Both. We help new units start compliant and existing ones fix or maintain their compliance setup.",
      },
    ],
  },
  "mining-regulation-support": {
    hero: {
      title: "Mining Regulation Support",
      highlight: ["Mines Act", "Labour Safety", "Compliance"],
      subtitle:
        "Stay compliant with mining laws and labour safety codes for safe, legal, and sustainable operations.",
      image:`${Mining}`,
      ctaLabel: "Get Expert Help",
    },

    whoNeedsThis: {
      description:
        "Mining companies and contractors involved in exploration, extraction, processing, or transportation of minerals must comply with the Mines Act and other labour and safety laws. This service is tailored for mine operators, site contractors, and leaseholders.",
    },

    ourServices: {
      description:
        "SLCI supports mining operations with compliance under the Mines Act, 1952 and relevant Codes on Occupational Safety, Health, and Working Conditions. We help with inspections, documentation, contractor compliance, and employee welfare standards.",

      points: [
        {
          icon: FaHardHat,
          title: "Mines Act Compliance",
          description:
            "Ensure timely submissions, license renewals, and reporting under the Mines Act and DGMS guidelines.",
          iconSize: "50px",
          ariaLabel: "Mines Act Compliance Icon",
        },
        {
          icon: FaFileAlt,
          title: "Registers & Statutory Records",
          description:
            "Maintain up-to-date registers for workers, wages, accidents, and hazardous materials handling.",
          iconSize: "48px",
          ariaLabel: "Mining Registers Icon",
        },
        {
          icon: FaUsers,
          title: "Contract Labour Management",
          description:
            "Ensure contract workers deployed at mining sites follow all statutory safety and wage laws.",
          iconSize: "50px",
          ariaLabel: "Contract Worker Icon",
        },
        {
          icon: FaChalkboardTeacher,
          title: "Health & Safety Training",
          description:
            "Conduct awareness sessions for mine workers on risk management, PPE use, and site protocols.",
          iconSize: "48px",
          ariaLabel: "Health and Safety Training Icon",
        },
      ],

      ctaLabel: "Stay Compliant in Mining Operations",
    },

    whyNeeded: {
      pointNeeded: [
        "Avoid penalties and DGMS notices",
        "Protect workers in high-risk environments",
        "Ensure safe, legal site operations",
        "Comply with Mines Act and OSH Codes",
        "Streamline contractor compliance",
      ],
    },

    faq: [
      {
        question: "Do you assist with DGMS inspections?",
        answer:
          "Yes, we help prepare necessary registers, documents, and ensure the site meets inspection requirements.",
      },
      {
        question: "Can you audit safety practices at our mining site?",
        answer:
          "Absolutely. We conduct comprehensive safety and compliance audits with actionable recommendations.",
      },
      {
        question: "What if we use third-party labour contractors?",
        answer:
          "We help ensure their compliance too—so you’re not held liable for their violations.",
      },
      {
        question: "Is support available in remote areas?",
        answer:
          "Yes. Our team can provide on-ground support or remote consulting depending on location and scope.",
      },
    ],
  },
  "salary-compliance-assist": {
    hero: {
      title: "Salary Compliance Assist",
      highlight: ["Wages", "Audit", "Deductions"],
      subtitle:
        "Ensure accurate salary disbursement and statutory deductions in full alignment with labour laws.",
      image: `${PayrollCompliance}`,
      ctaLabel: "Audit Your Payroll",
    },

    whoNeedsThis: {
      description:
        "Any company disbursing salaries—whether to permanent, contractual, or outsourced staff—needs salary compliance to avoid underpayment risks, penalties, and employee disputes. This is critical for labour-intensive sectors and startups scaling teams quickly.",
    },

    ourServices: {
      description:
        "SLCI’s Salary Compliance Assist ensures that wages, deductions, and related benefits are legally accurate and audit-ready. We help align your payroll practices with central and state wage laws, bonus rules, and social security codes.",

      points: [
        {
          icon: FaMoneyCheckAlt,
          title: "Minimum Wages Compliance",
          description:
            "Ensure salaries meet state-wise minimum wages based on industry and skill level.",
          iconSize: "50px",
          ariaLabel: "Minimum Wages Icon",
        },
        {
          icon: FaFileAlt,
          title: "Wage Register & Payslip Audit",
          description:
            "Audit your wage records and payslips for accuracy and compliance gaps.",
          iconSize: "48px",
          ariaLabel: "Wage Register Audit Icon",
        },
        {
          icon: FaBalanceScale,
          title: "Bonus & Overtime Review",
          description:
            "Check calculations for bonuses, overtime, and incentives as per legal entitlements.",
          iconSize: "50px",
          ariaLabel: "Bonus Overtime Icon",
        },
        {
          icon: FaUserCheck,
          title: "Salary Structuring Advisory",
          description:
            "Get guidance on cost-effective, compliant salary breakup (basic, HRA, allowances, etc.).",
          iconSize: "48px",
          ariaLabel: "Salary Structuring Icon",
        },
      ],

      ctaLabel: "Request Salary Compliance Review",
    },

    whyNeeded: {
      pointNeeded: [
        "Prevent legal action due to wage violations",
        "Align payroll with latest wage codes",
        "Build employee trust with transparent salaries",
        "Avoid errors in bonus and overtime",
        "Support smooth inspections and audits",
      ],
    },

    faq: [
      {
        question: "How often should salary compliance be reviewed?",
        answer:
          "At least annually, or during any major payroll structure or manpower change.",
      },
      {
        question: "Do you verify bonus and gratuity payments too?",
        answer:
          "Yes, we audit all statutory components including bonus, gratuity, and overtime where applicable.",
      },
      {
        question: "Is this service available for contract workers?",
        answer:
          "Yes, especially important. We ensure contractors are paying correct salaries to deployed staff.",
      },
      {
        question:
          "Can we restructure salaries for tax and compliance benefits?",
        answer:
          "Absolutely. We provide legal structuring suggestions that are tax-efficient and compliant.",
      },
    ],
  },
  "flexible-workforce-solutions": {
    hero: {
      title: "Flexible Workforce Solutions",
      highlight: ["Contract", "Gig", "Outsourcing"],
      subtitle:
        "Manage temporary, gig, and outsourced workers compliantly across industries and geographies.",
      image: `${Staff}`,
      ctaLabel: "Streamline Your Workforce",
    },

    whoNeedsThis: {
      description:
        "Organizations engaging contract workers, gig talent, or third-party manpower must ensure labour law compliance, even when workers are not on direct rolls. This service is ideal for IT, logistics, retail, infra, and seasonal industries.",
    },

    ourServices: {
      description:
        "SLCI enables full legal compliance for flexible workforce models—contract, gig, or temp. We assist in managing labour licenses, contractor audits, wage disbursements, and documentation—ensuring every worker is protected and every process is lawful.",

      points: [
        {
          icon: FaUsers,
          title: "Contract Labour Compliance",
          description:
            "Ensure your contractors are compliant under the CLRA Act with valid licenses and registers.",
          iconSize: "50px",
          ariaLabel: "Contract Labour Icon",
        },
        {
          icon: FaFileAlt,
          title: "Documentation & Registers",
          description:
            "Maintain registers and documentation for deployed workers as per state-specific labour rules.",
          iconSize: "48px",
          ariaLabel: "Registers Icon",
        },
        {
          icon: FaUserShield,
          title: "Third-Party Vendor Audits",
          description:
            "Audit vendors and manpower suppliers to ensure statutory payments and legal adherence.",
          iconSize: "50px",
          ariaLabel: "Vendor Audit Icon",
        },
        {
          icon: FaBalanceScale,
          title: "Wages & Benefits Oversight",
          description:
            "Track that gig/contract workers receive legal wages, PF/ESI benefits, and fair treatment.",
          iconSize: "48px",
          ariaLabel: "Wages Oversight Icon",
        },
      ],

      ctaLabel: "Get Flexible Workforce Support",
    },

    whyNeeded: {
      pointNeeded: [
        "Avoid liabilities from non-compliant vendors",
        "Protect contract workers’ rights",
        "Stay compliant with CLRA and wage laws",
        "Reduce audit and inspection risks",
        "Maintain control across distributed teams",
      ],
    },

    faq: [
      {
        question: "Who is liable if our vendor is non-compliant?",
        answer:
          "The principal employer (you) can be held accountable, so we help ensure vendor compliance too.",
      },
      {
        question: "Do you manage CLRA license applications?",
        answer:
          "Yes, we assist with obtaining, renewing, and amending licenses under the Contract Labour Act.",
      },
      {
        question: "Is this service relevant for gig workers?",
        answer:
          "Yes. Gig and platform-based workers also fall under certain labour protections. We help assess applicability.",
      },
      {
        question: "How often are vendor audits recommended?",
        answer:
          "At least once every 6 months or before contract renewals, to ensure ongoing compliance.",
      },
    ],
  },
  "industrial-compliance-services": {
    hero: {
      title: "Industrial Compliance Services",
      highlight: ["Factories", "Labour", "Regulations"],
      subtitle:
        "Achieve end-to-end compliance for factories and industrial units under central and state labour laws.",
      image: `${Factory}`,
      ctaLabel: "Schedule Compliance Review",
    },

    whoNeedsThis: {
      description:
        "Factories, plants, and industrial units operating under the Factories Act or engaging multiple workers must comply with numerous labour, welfare, and safety regulations. This service is essential for manufacturing, textiles, chemicals, and similar sectors.",
    },

    ourServices: {
      description:
        "SLCI provides full-spectrum industrial compliance support—from registrations to inspections and everything in between. We help you align with Factories Act, Industrial Relations Code, Social Security Code, and related laws for operational peace of mind.",

      points: [
        {
          icon: FaIndustry,
          title: "Factory Licensing & Renewal",
          description:
            "Assistance with obtaining, renewing, and updating licenses under the Factories Act.",
          iconSize: "50px",
          ariaLabel: "Factory License Icon",
        },
        {
          icon: FaFileAlt,
          title: "Registers & Returns Filing",
          description:
            "Timely maintenance and filing of all statutory registers and monthly/annual returns.",
          iconSize: "48px",
          ariaLabel: "Statutory Filing Icon",
        },
        {
          icon: FaUsers,
          title: "Manpower Compliance",
          description:
            "Ensure all employees—regular or contract—are covered under labour laws and welfare provisions.",
          iconSize: "50px",
          ariaLabel: "Manpower Compliance Icon",
        },
        {
          icon: FaShieldAlt,
          title: "Audit & Inspection Support",
          description:
            "Pre-inspection audits, documentation readiness, and end-to-end support during factory inspections.",
          iconSize: "48px",
          ariaLabel: "Audit Inspection Icon",
        },
      ],

      ctaLabel: "Get Industrial Compliance Support",
    },

    whyNeeded: {
      pointNeeded: [
        "Avoid shutdown due to compliance gaps",
        "Ensure worker safety and welfare",
        "Prepare for labour department inspections",
        "Centralize factory compliance processes",
        "Meet state and central regulatory standards",
      ],
    },

    faq: [
      {
        question: "What’s included in factory compliance?",
        answer:
          "It includes licensing, welfare provisions, registers, return filings, and adherence to labour safety norms.",
      },
      {
        question: "Do you help with accident reporting and legal follow-ups?",
        answer:
          "Yes. We assist with documentation, reporting, and liaison with authorities post-incident.",
      },
      {
        question: "Can you audit existing compliance gaps?",
        answer:
          "Absolutely. We provide detailed audit reports with gap analysis and a legal compliance checklist.",
      },
      {
        question: "Is support localized or pan-India?",
        answer:
          "Our team operates across India, offering both remote and on-site support wherever your unit is located.",
      },
    ],
  },
  "employee-payroll-solutions": {
    hero: {
      title: "Employee Payroll Solutions",
      highlight: ["Salary", "PF/ESI", "Automation"],
      subtitle:
        "Seamless payroll processing that ensures accurate salaries, deductions, and legal compliance.",
      image: `${Payroll}`,
      ctaLabel: "Get Payroll Support",
    },

    whoNeedsThis: {
      description:
        "Organizations of all sizes looking to streamline monthly payroll, ensure legal deductions, and reduce compliance errors benefit from our managed payroll services. Ideal for startups, SMEs, and growing enterprises.",
    },

    ourServices: {
      description:
        "SLCI offers end-to-end payroll solutions including salary computation, payslip generation, statutory deductions, and Form 16 issuance—ensuring complete payroll compliance and timely disbursements.",

      points: [
        {
          icon: FaFileInvoiceDollar,
          title: "Payroll Processing",
          description:
            "Automated calculation of salaries, TDS, bonuses, and reimbursements across teams.",
          iconSize: "50px",
          ariaLabel: "Payroll Processing Icon",
        },
        {
          icon: FaBalanceScale,
          title: "PF, ESI & LWF Deductions",
          description:
            "Handle all statutory deductions and timely filing of challans and returns.",
          iconSize: "50px",
          ariaLabel: "Statutory Deductions Icon",
        },
        {
          icon: FaFileAlt,
          title: "Payslips & Reports",
          description:
            "Generate monthly payslips and audit-ready payroll summaries for internal use or compliance.",
          iconSize: "48px",
          ariaLabel: "Payslips Reports Icon",
        },
        {
          icon: FaChalkboardTeacher,
          title: "Form 16 & Year-End Support",
          description:
            "Manage Form 16 generation and year-end TDS reconciliations efficiently.",
          iconSize: "48px",
          ariaLabel: "Form 16 Icon",
        },
      ],

      ctaLabel: "Get a Payroll Demo",
    },

    whyNeeded: {
      pointNeeded: [
        "Reduce payroll errors and delays",
        "Ensure legal compliance in deductions",
        "Avoid penalties for late filings",
        "Build employee trust with transparent payslips",
        "Save time with expert-managed processing",
      ],
    },

    faq: [
      {
        question: "Can this integrate with our HRMS?",
        answer:
          "Yes, our payroll engine can integrate with most HRMS and attendance systems.",
      },
      {
        question: "Do you provide support for Form 16 distribution?",
        answer:
          "Yes. We handle Form 16 generation and assist in bulk distribution to employees.",
      },
      {
        question: "What about salary revisions or arrears?",
        answer:
          "We support retroactive salary changes and arrear calculations accurately.",
      },
      {
        question: "Is payroll data confidential and secure?",
        answer:
          "Absolutely. We follow strict data protection standards to ensure full confidentiality and compliance.",
      },
    ],
  },

  // Add more services like compliance, onboarding, audits...
};
