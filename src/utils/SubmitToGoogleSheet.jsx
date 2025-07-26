import React from "react";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxg9JATdt1XKvmQvC1C4oNhEqt-n5Vhfp0RbJztXxg4ew2PyIGu5yvsLBgnTXlqr24/exec";

export const submitToSheet = async (data) => {
  try {
    console.log("Submitting data:", data); 
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      // prevent CORS error but note: response will be opaque
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // Since `no-cors` mode makes the response opaque, you can't check `.ok` or `.json()` reliably
    // So, you just assume it worked if there's no error thrown
    return { success: true, };
  } catch (err) {
    console.error("Submission error:", err);
    throw new Error("Submission failed");
  }
};
