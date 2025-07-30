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

export const careerFormConfig = [
  { name: "fullName", placeholder: "Full Name", validation: { required: "Required" } },
  { name: "email", type: "email", placeholder: "Email", validation: { required: "Required" } },
  { name: "position", placeholder: "Position Applying For", validation: { required: "Required" } },
  { name: "resume", type: "text", placeholder: "Resume Link", validation: { required: "Required" } },
];


export const getPageFormConfig = (pageName) => [
  { name: "name", placeholder: `Name for ${pageName}`, validation: { required: "Required" } },
  { name: "email", type: "email", placeholder: "Email", validation: { required: "Required" } },
  { name: "message", type: "textarea", placeholder: "Message", validation: { required: "Required" } },
];
