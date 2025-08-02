export async function SubmitToGoogleSheet(data, sheetName = "FormResponses") {
  const endpoint = "https://script.google.com/macros/s/AKfycbx-BXSoedpkGpAssHTBgric2UE-PXhK2XGrk-WGVLMCCpIsYH4u5Wvi5MUnnEBTJSIQ/exec";

  const formData = new FormData();

  // Append each field to formData correctly
  Object.entries(data).forEach(([key, value]) => {
    if (value instanceof File) {
      formData.append(key, value, value.name);
    } else {
      formData.append(key, value);
    }
  });

  // Always send the target sheet name
  formData.append("sheetName", sheetName);

  const response = await fetch(endpoint, {
    method: "POST",
    body: formData,
    // DO NOT set Content-Type manually — browser will set it correctly
  });

  const text = await response.text();

  if (!response.ok || !text.includes("Success")) {
    throw new Error("Failed to submit data to Google Sheets.");
  }

  return text;
}


/* export async function SubmitToGoogleSheet(data) {
  const scriptURL = "https://script.google.com/macros/s/AKfycbxAdhXb-eXXw9kD9I0oTeMGzjuIblMNPydTZnuQUy6XpAR_oQB30xYtLwGmis9Cgfyx/exec"; // 

  const formBody = new URLSearchParams();

  for (const key in data) {
    formBody.append(key, data[key]);
  }

  try {
    const response = await fetch(scriptURL, {
      method: "POST",
         headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formBody.toString(),
    });

    const text = await response.text();

    if (!response.ok) {
      throw new Error("Failed to submit form: " + text);
    }

    return text; // Apps Script se aane wala response like "Added.."
  } catch (error) {
    console.error("Submit error:", error);
    throw error;
  }
}

 */

/* const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxAdhXb-eXXw9kD9I0oTeMGzjuIblMNPydTZnuQUy6XpAR_oQB30xYtLwGmis9Cgfyx/exec";

export const SubmitToGoogleSheet = async (data) => {
  try {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors", // prevents CORS error, but you get no response
      body: formData,
    });

    return { success: true };
  } catch (err) {
    console.error("Submission error:", err);
    throw new Error("Submission failed");
  }
};
 */

/* export async function submitToSheet(data) {
 const endpoint = `https://api.allorigins.win/raw?url=${encodeURIComponent(
  "https://script.google.com/macros/s/AKfycbxAdhXb-eXXw9kD9I0oTeMGzjuIblMNPydTZnuQUy6XpAR_oQB30xYtLwGmis9Cgfyx/exec"
)}`;

 // Replace with actual URL

  const formData = new URLSearchParams(data);

  const response = await fetch(endpoint, {
    method: "POST",
    body: formData,
  });

  const text = await response.text();

try {
  const result = JSON.parse(text);
  if (result.result !== "success") {
    throw new Error(result.message || "Submission failed.");
  }
  return result;
} catch (err) {
  console.error("Non-JSON response:", text);
  throw new Error("Server error or unexpected response format.");
}

} */

/* 
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxg9JATdt1XKvmQvC1C4oNhEqt-n5Vhfp0RbJztXxg4ew2PyIGu5yvsLBgnTXlqr24/exec";

export const submitToSheet = async (data) => {
  try {
    console.log("Submitting data:", data); 
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
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
 */
