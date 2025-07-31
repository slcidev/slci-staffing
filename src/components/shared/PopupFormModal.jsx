import React, { useEffect, useState, Fragment } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { X } from "lucide-react";
import Form from "./Form";

const PopupFormModal = ({
  formConfig,
  onSubmitHandler,
  isOpen: externalIsOpen,
  setIsOpen: externalSetIsOpen,
  pageContext: externalPageContext,
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [pageContext, setPageContext] = useState(externalPageContext || "");

  const isControlled = typeof externalIsOpen === "boolean" && typeof externalSetIsOpen === "function";

  const isOpen = isControlled ? externalIsOpen : internalIsOpen;
  const setIsOpen = isControlled ? externalSetIsOpen : setInternalIsOpen;

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");

    const path = window.location.pathname;
    if (!externalPageContext) {
      setPageContext(path);
    }

    if (!hasVisited && !isControlled) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("hasVisited", "true");
        setHasOpened(true);
      }, 2000);

      return () => clearTimeout(timer);
    } else {
      setHasOpened(true);
    }
  }, [externalPageContext, isControlled, setIsOpen]);

  const closeModal = () => {
    setIsSubmitted(false);
    setIsOpen(false);
  };

  const openModal = () => setIsOpen(true);

  const handleSubmit = async (formData) => {
    const dataWithContext = {
      ...formData,
      submittedFrom: externalPageContext || pageContext,
    };

    await onSubmitHandler(dataWithContext);
    setIsSubmitted(true);
    setTimeout(() => closeModal(), 2000);
  };

  return (
    <>
      {!isOpen && hasOpened && !isControlled && (
        <button
          onClick={openModal}
          className="fixed bottom-5 right-5 px-4 py-2 rounded-full bg-blue-600 text-white shadow-lg z-50"
        >
          Open Form
        </button>
      )}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-[rgba(0,0,0,0.4)]" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center px-4 py-8 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left shadow-xl transition-all">
                  <Transition
                    appear
                    show={isOpen}
                    enter="transition-opacity duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                  >
                    <button
                      onClick={closeModal}
                      className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 hover:rotate-90 transition-transform duration-300"
                      aria-label="Close modal"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </Transition>

                  <DialogTitle className="text-lg font-semibold text-gray-800 mb-4">
                    {isSubmitted ? "Thanks!" : "Welcome Form"}
                  </DialogTitle>

                  {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center transition-all duration-500 ease-out animate-bounce-in">
                      <div className="text-green-600 text-3xl font-bold mb-2">
                        🎉 Submitted!
                      </div>
                      <p className="text-gray-500">We'll be in touch soon.</p>
                    </div>
                  ) : (
                    <Form
                      formConfig={formConfig}
                      onSubmitHandler={handleSubmit}
                      submitLabel="Submit"
                    />
                  )}
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default PopupFormModal;




/* import React, { useEffect, useState, Fragment } from "react";
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";
import { X } from "lucide-react";
import Form from "./Form";

const PopupFormModal = ({ formConfig, onSubmitHandler }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (!hasVisited) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("hasVisited", "true");
        setHasOpened(true);
      }, 2000);

      return () => clearTimeout(timer);
    } else {
      setHasOpened(true);
    }
  }, []);

  const closeModal = () => {
    setIsSubmitted(false);
    setIsOpen(false);
  };

  const openModal = () => setIsOpen(true);

  const handleSubmit = async (data) => {
    await onSubmitHandler(data);
    setIsSubmitted(true);
    setTimeout(() => closeModal(), 2000); // close after 2s
  };

  return (
    <>
      {!isOpen && hasOpened && (
        <button
          onClick={openModal}
          className="fixed bottom-5 right-5 px-4 py-2 rounded-full bg-blue-600 text-white shadow-lg z-50"
        >
          Open Form
        </button>
      )}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
      
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-[rgba(0,0,0,0.4)]  " />
          </TransitionChild>

     
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center px-4 py-8 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left shadow-xl transition-all">
               
                  <Transition
                    appear
                    show={isOpen}
                    enter="transition-opacity duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                  >
                    <button
                      onClick={closeModal}
                      className=" cursor-pointer absolute top-3 right-3 text-gray-400 hover:text-gray-600 hover:rotate-90 transition-transform duration-300"
                      aria-label="Close modal"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </Transition>

                 
                  <DialogTitle className="text-lg font-semibold text-gray-800 mb-4">
                    {isSubmitted ? "Thanks!" : "Welcome Form"}
                  </DialogTitle>

               
                  {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center transition-all duration-500 ease-out animate-bounce-in">
                      <div className="text-green-600 text-3xl font-bold mb-2">
                        🎉 Submitted!
                      </div>
                      <p className="text-gray-500">We'll be in touch soon.</p>
                    </div>
                  ) : (
                    <Form
                      formConfig={formConfig}
                      onSubmitHandler={handleSubmit}
                      submitLabel="Submit"
                    />
                  )}
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default PopupFormModal;
 */