import { React, useState } from "react";
import Hero from "../components/Sections/Hero";
import AboutUs from "../components/Sections/AboutUs";
import Services from "../components/Sections/Services";
import Blog from "../components/Sections/Blog";
import Clients from "../components/Sections/Clients";
import WhyChooseUs from "../components/Sections/WhyChooseUs";
import Testimonials from "../components/Sections/Testimonials";
import PopupFormModal from "../components/shared/PopupFormModal";
import { popupFormConfig } from "../data/FormConfig";
import { SubmitToGoogleSheet } from "../utils/SubmitToGoogleSheet";
import toast from "react-hot-toast";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pageContext, setPageContext] = useState("/");

  const openPopupForm = () => {
    setPageContext("Homepage CTA");
    setIsOpen(true);
  };

  return (
    <main>
      <Hero onCtaClick={openPopupForm} />
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Clients />
      <Blog />
      <PopupFormModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        pageContext={pageContext}
        formConfig={popupFormConfig.fields} // must be .fields
        onSubmitHandler={(data) => {
          const sheetName = popupFormConfig?.sheetName || "GeneralFormData";

          const payload = {
            ...data,
            Description: "Submitted from Home page Page",
          };

          console.log("Submitting payload to Google Sheet:", payload); // ✅ Add this
          SubmitToGoogleSheet(payload, sheetName)
            .then(() => toast.success("Submitted successfully"))
            .catch((err) => toast.error(err.message));
        }}
      />
    </main>
  );
};

export default Home;
