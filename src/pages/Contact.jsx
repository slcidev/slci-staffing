import React from "react";
import Form from "../components/shared/Form";
import ContactInfo from "../components/shared/ContactInfo";
import { contactFormConfig } from "../data/FormConfig";
// import { SubmitToGoogleSheet } from "../utils/SubmitToGoogleSheet";
// import { submitToSheet } from "../utils/submitToGoogleSheet";

const Contact = () => {
  return (
    <section className="bg-white min-h-screen flex items-center py-10 ">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col lg:flex-row gap-10 h-full">
          {/* Left Column: Intro + Form */}
          <div className="w-full lg:w-7/12 flex flex-col justify-between bg-blue-50 rounded-2xl p-6 sm:p-10 shadow-md">
            {/* Header Text */}
            <div>
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                Start a Conversation
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2">
                Get in Touch Now
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed max-w-prose">
                Need personalized advice? Our dedicated team is here to assist
                you. Reach out today for expert support and tailored solutions
                to meet your needs.
              </p>
            </div>

            {/* Form */}
            <div className="">
              <Form
                formConfig={contactFormConfig.fields}
                submitLabel={contactFormConfig.submitButtonText}
               /*  onSubmitHandler={(data) =>
                  SubmitToGoogleSheet({
                    ...data,
                     Date: new Date().toLocaleString(),
                    sheetName: contactFormConfig.sheetName,
                  })
                } */
              />
            </div>
          </div>

          {/* Right Column: Contact Info */}
          <div className="w-full lg:w-5/12 flex items-stretch">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-10 shadow-md w-full flex flex-col justify-center gap-8">
              <ContactInfo
                icon="email"
                title="Email Address"
                items={["mailto:connect@slci.com", "mailto:info@slci.com"]}
              />
              <ContactInfo
                icon="phone"
                title="Contact No."
                items={["tel:+919240255044", "tel:+919240255044"]}
              />
              <ContactInfo
                icon="location"
                title="Office Location"
                text="91 Springboard, Mohan Estate, Mathura Road, Delhi – 110044, INDIA"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
