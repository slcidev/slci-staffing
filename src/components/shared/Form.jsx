
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import InputField from "./InputField";
// import { Dialog } from "@headlessui/react";



const Form = ({
  formConfig = [],
  onSubmitHandler,
  submitLabel = "Submit",
  formTitle = "",
  layout = "stack", // or 'grid'
  showLabels = false,
  defaultValues = {},
}) => {
  const {
    register,
    handleSubmit,
    setFocus,
    reset,
    formState: { errors, isSubmitted },
  } = useForm({
    defaultValues,
    mode: "onTouched", // show validation on blur
  });

  // Focus first field with error
  useEffect(() => {
    const firstError = Object.keys(errors)[0];
    if (firstError) setFocus(firstError);
  }, [errors, setFocus]);

  const onSubmit = async (data) => {
    try {
      await onSubmitHandler(data);
      toast.success("Form submitted!");
      reset();
    } catch (err) {
      console.error("Submission error:", err);
      toast.error(err.message || "Submission failed.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {formTitle && <h3 className="text-xl font-bold mb-4">{formTitle}</h3>}

      <div className={layout === "grid" ? "grid md:grid-cols-2 gap-4" : "space-y-4"}>
        {formConfig.map((field) => (
          <div key={field.name} className="flex flex-col">
            {showLabels && (
              <label htmlFor={field.name} className="text-sm font-medium mb-1">
                {field.label || field.placeholder}
              </label>
            )}

            {field.type === "textarea" ? (
              <textarea
                id={field.name}
                {...register(field.name, {
                  required: field.required ? `${field.label || field.name} is required` : false,
                })}
                placeholder={field.placeholder}
                className={`px-4 py-2 border rounded-xl sm:rounded-3xl  sm:h-20 bg-white ${
                  errors[field.name] ? "border-red-500" : "border-gray-300"
                }`}
                aria-invalid={!!errors[field.name]}
              />
            ) : (
              <input
                id={field.name}
                type={field.type || "text"}
                {...register(field.name, {
                  required: field.required ? `${field.label || field.name} is required` : false,
                })}
                placeholder={field.placeholder}
                className={`px-4 py-2 sm:py-3 border rounded-xl sm:rounded-3xl bg-white  ${
                  errors[field.name] ? "border-red-500" : "border-gray-300"
                }`}
                aria-invalid={!!errors[field.name]}
              />
            )}

            {errors[field.name] && isSubmitted && (
              <span className="text-sm text-red-600 mt-1">
                {errors[field.name]?.message}
              </span>
            )}
          </div>
        ))}
      </div>

      <button
        type="submit"
        className="w-full mt-4 bg-gradient-to-r from-blue-600 to-green-600  text-white py-3 rounded hover:from-blue-700 hover:to-green-700 transition"
      >
        {submitLabel}
      </button>
    </form>
  );
};

export default Form;


/* import React from "react";
import { useForm } from "react-hook-form";

const Form = ({ formConfig, onSubmitHandler, submitLabel }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    onSubmitHandler(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {formConfig.map((field) => (
        <div key={field.name} className="flex flex-col">
          <label className="mb-1 font-medium">{field.label}</label>
          {field.type === "textarea" ? (
            <textarea
              {...register(field.name, field.validation)}
              placeholder={field.placeholder}
              className="border rounded p-2"
            />
          ) : (
            <input
              type={field.type || "text"}
              {...register(field.name, field.validation)}
              placeholder={field.placeholder}
              className="border rounded p-2"
            />
          )}
          {errors[field.name] && (
            <span className="text-sm text-red-500 mt-1">
              {errors[field.name]?.message}
            </span>
          )}
        </div>
      ))}

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded shadow"
      >
        {submitLabel}
      </button>
    </form>
  );
};

export default Form;

 */
