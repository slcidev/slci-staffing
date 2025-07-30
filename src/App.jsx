import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import ServicePage from "./pages/ServicePage";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/ScrollTotop";
import { popupFormConfig } from "./data/FormConfig";
import PopupFormModal from "./components/shared/PopupFormModal";
console.log("PopupFormModal", PopupFormModal);



const App = () => {
  
  const handlePopupFormSubmit = async (data) => {
    console.log("Popup form submitted:", data);
    // Optionally send to Google Sheets or your API
  };

  return (
    <BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="About" element={<About />} />
          <Route path="Career" element={<Career />} />
          <Route path="Contact" element={<Contact />} />
        </Route>
      </Routes>
      <ScrollToTop />
      <PopupFormModal
        formConfig={popupFormConfig.fields}
        onSubmitHandler={handlePopupFormSubmit}
      />
    </BrowserRouter>
  );
};

export default App;

/* export default function App() {
  function Submit(e) {
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbxUX4hu2QEQ7r9TwrSo9vAHydDXv4VwtEDUacCifXaEecIH2bWHQSnFWtd9NdNIUVGDdQ/exec",
      {
        method: "POST",
        body: formDatab
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="App">
      <h1>Contact Me form</h1>
      <h2>
        This demonstrates how to send data from a website form to Google sheet
        in React or Vanilla jS
      </h2>
      <div>
        <form className="form" onSubmit={(e) => Submit(e)}>
          <input placeholder="Your Name" name="Name" type="text" />
          <input placeholder="Your Email" name="Email" type="text" />
          <input placeholder="Your Message" name="Message" type="text" />
          <input name="Name" type="submit" />
        </form>
      </div>
    </div>
  );
}
 */
