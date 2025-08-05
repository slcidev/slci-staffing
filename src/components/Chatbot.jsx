import { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    const injectBotpress = async () => {
      // Step 1: Inject inject.js
      const injectScript = document.createElement("script");
      injectScript.src = "https://cdn.botpress.cloud/webchat/v3.2/inject.js";
      injectScript.async = true;

      injectScript.onload = () => {
        console.log("Botpress inject.js loaded");

        // Step 2: Once inject.js is loaded, inject config script
        const configScript = document.createElement("script");
        configScript.src =
          "https://files.bpcontent.cloud/2025/08/02/09/20250802095638-S2890VLY.js";
        configScript.async = true;
        configScript.onload = () => {
          console.log("Botpress config script loaded");
        };
        configScript.onerror = () => {
          console.error("Failed to load Botpress config script");
        };

        document.body.appendChild(configScript);
      };

      injectScript.onerror = () => {
        console.error("Failed to load Botpress inject.js");
      };

      document.body.appendChild(injectScript);

      // Clean up (optional)
      return () => {
        document.body.removeChild(injectScript);
      };
    };

    injectBotpress();
  }, []);

  return null;
};

export default Chatbot;

/* // components/BotpressChat.js
import { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    // Inject Botpress WebChat script
    const injectScript = document.createElement("script");
    injectScript.src = "https://cdn.botpress.cloud/webchat/v3.2/inject.js";
    injectScript.async = true;
    document.body.appendChild(injectScript);

    // Inject config script
    const configScript = document.createElement("script");
    configScript.src =
      "https://files.bpcontent.cloud/2025/08/02/09/20250802095638-S2890VLY.js";
    configScript.async = true;
    document.body.appendChild(configScript);

    return () => {
      // Clean up on unmount (optional, but best practice)
      document.body.removeChild(injectScript);
      document.body.removeChild(configScript);
    };
  }, []);

  return null; // No UI, just injects scripts
};
export default Chatbot;
 */
