import React from "react";



export const popupFormConfig = {
  formName: "Popup Form",
   sheetName: "GeneralFormData ", 
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


export const generalApplicationForm = {
  title: "Apply for a Position",
    sheetName: "CareerFormData", 
  description: "Let us know the role you're interested in. If it's not listed, choose 'Other'.",
  fields: [
    {
      name: "Department",
      type: "selectWithOther", // custom type we'll handle
      placeholder: "Select a Role",
      options: [
        "Full Stack Developer",
        "UX/UI Designer",
        "DevOps Engineer",
        "Digital Marketing Specialist",
        "Other"
      ],
      validation: { required: "Please select or enter a role" },
    },
    {
      name: "Full Name",
      placeholder: "Full Name",
      type: "text",
      validation: { required: "Full Name is required" },
    },
    {
      name: "Email",
      placeholder: "Email",
      type: "email",
      validation: {
        required: "Email is required",
        pattern: {
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: "Invalid email",
        },
      },
    },
    {
      name: "Phone",
      placeholder: "Phone Number",
      type: "text",
      validation: {},
    },
    {
      name: "Resume",
      placeholder: "Upload Resume (.pdf, .docx)",
      type: "file",
      accept: ".pdf,.doc,.docx",
      validation: { required: "Resume is required" },
    },
    {
      name: "Message",
      placeholder: "Message (optional)",
      type: "textarea",
    },
  ],
};

export const jobApplicationForm = (Department) => ({
  title: `Apply for ${Department}`,
    sheetName: "CareerFormData", 
  description: "Fill in your details to apply for this position.",
  fields: [
    {
      name: "Department",
      type: "hidden",
      defaultValue: Department,
    },
    {
      name: "Full Name",
      placeholder: "Full Name",
      type: "text",
      validation: { required: "Full Name is required" },
    },
    {
      name: "Email",
      placeholder: "Email",
      type: "email",
      validation: {
        required: "Email is required",
        pattern: {
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: "Invalid email",
        },
      },
    },
    {
      name: "Phone",
      placeholder: "Phone Number",
      type: "text",
      validation: {},
    },
    {
      name: "Resume",
      placeholder: "Upload Resume (.pdf, .docx)",
      type: "file",
      accept: ".pdf,.doc,.docx",
      validation: { required: "Resume is required" },
    },
    {
      name: "Message",
      placeholder: "Message (optional)",
      type: "textarea",
    },
  ],
});


/* export const contactFormConfig = {
  formName: "Contact",
    sheetName: "GeneralFormData ", 
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
}; */