import React from "react";
import Form from "../components/shared/Form";
import ContactInfo from "../components/shared/ContactInfo";
import { contactFormConfig } from "../data/FormConfig";
// import { submitToSheet } from "../utils/submitToGoogleSheet";

const Contact = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="xl:flex xl:gap-10 items-stretch">
          {/* Left Column: Intro + Form */}
          <div className="xl:w-7/12 flex flex-col">
            <div className="bg-blue-50 rounded-2xl p-8 sm:p-10 shadow-md h-full flex flex-col">
              {/* Header Text */}
              <div>
                <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                  Start a Conversation
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2">
                  Get in Touch Now
                </h2>
                <p className="mt-4 text-gray-600 leading-relaxed max-w-prose">
                  Need personalized advice? Our dedicated team is here to assist you.
                  Reach out today for expert support and tailored solutions to meet your needs.
                </p>
              </div>

              {/* Form */}
              <div className="mt-auto pt-8">
                <Form
                  formConfig={contactFormConfig.fields}
                  submitLabel={contactFormConfig.submitButtonText}
                  onSubmitHandler={(data) =>
                    submitToSheet({
                      ...data,
                      sheetName: contactFormConfig.sheetName,
                    })
                  }
                />
              </div>
            </div>
          </div>

          {/* Right Column: Contact Info */}
          <div className="xl:w-5/12 mt-10 xl:mt-0 h-full flex">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 sm:p-10 shadow-md w-full flex flex-col justify-between space-y-8">
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
