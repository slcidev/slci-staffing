// components/shared/InputField.jsx
import React from "react";

const InputField = ({ type = "text", name, label, placeholder, register, error }) => (
  <div className="flex flex-col">
    {label && <label htmlFor={name} className="mb-1 font-medium">{label}</label>}
    {type === "textarea" ? (
      <textarea
        id={name}
        {...register}
        placeholder={placeholder}
        className={`input ${error ? "border-red-500" : ""}`}
      />
    ) : (
      <input
        id={name}
        type={type}
        {...register}
        placeholder={placeholder}
        className={`input ${error ? "border-red-500" : ""}`}
      />
    )}
    {error && <span className="text-red-500 text-sm mt-1">{error.message}</span>}
  </div>
);


export default InputField;
