import React from "react";


export const contactFormConfig = {
  formName: "Contact",
  sheetName: "Contact",
  fields: [
    { name: "Name", placeholder:" Enter Your Full Name", label: "Your Name", type: "text", required: true },
    { name: "Email", placeholder:"Enter Your Email",  label: "Email Address", type: "email", required: true },
    { name: "Phone", placeholder:"Enter Your Mobile Number", label: "Phone Number", type: "tel", required: true },
    { name: "Subject", placeholder:"Subject", label: "Subject", type: "text", required: true },
    { name: "Message", placeholder:"Message", label: "Message", type: "textarea",  },
  ],
  submitButtonText: "Submit Now",
  successMessage: "Message sent successfully!",
  errorMessage: "Something went wrong. Please try again.",
};
export const popupFormConfig = {
  formName: "Popup Form",
  sheetName: "PopupForm",
  fields: [
    { name: "Name", placeholder:" Enter Your Full Name", label: "Your Name", type: "text", required: true },
    { name: "Email", placeholder:"Enter Your Email",  label: "Email Address", type: "email", required: true },
    { name: "Phone", placeholder:"Enter Your Mobile Number", label: "Phone Number", type: "tel", required: true },
    { name: "Subject", placeholder:"Subject", label: "Subject", type: "text", required: true },
    { name: "Message", placeholder:"Message", label: "Message", type: "textarea",  },
  ],
  submitButtonText: "Submit Now",
  successMessage: "Message sent successfully!",
  errorMessage: "Something went wrong. Please try again.",
}

// 📁 src/data/CareerFormConfig.js
export const careerFormConfig = {
  title: "Apply for a Position",
  description: "Fill in your details and upload your resume. We'll get back to you soon.",
  fields: [
    {
      name: "fullName",
      placeholder: "Full Name",
      type: "text",
      validation: { required: "Full Name is required" },
    },
    {
      name: "email",
      placeholder: "Email Address",
      type: "email",
      validation: {
        required: "Email is required",
        pattern: {
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: "Enter a valid email address",
        },
      },
    },
    {
      name: "position",
      placeholder: "Position Applying For",
      type: "text",
      validation: { required: "Please specify the position" },
    },
    {
      name: "resume",
      placeholder: "Upload Resume (PDF/DOC)",
      type: "file",
      accept: ".pdf,.doc,.docx",
      validation: { required: "Resume upload is required" },
    },
    {
      name: "coverLetter",
      placeholder: "Upload Cover Letter (Optional)",
      type: "file",
      accept: ".pdf,.doc,.docx",
      validation: {},
    },
    {
      name: "notes",
      placeholder: "Additional Notes (Optional)",
      type: "textarea",
      validation: {},
    },
  ],
};


export const getPageFormConfig = (pageName) => [
  { name: "name", placeholder: `Name for ${pageName}`, validation: { required: "Required" } },
  { name: "email", type: "email", placeholder: "Email", validation: { required: "Required" } },
  { name: "message", type: "textarea", placeholder: "Message", validation: { required: "Required" } },
];
