// components/BotpressChat.js
import { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    // Inject Botpress WebChat script
    const injectScript = document.createElement('script');
    injectScript.src = 'https://cdn.botpress.cloud/webchat/v3.2/inject.js';
    injectScript.async = true;
    document.body.appendChild(injectScript);

    // Inject config script
    const configScript = document.createElement('script');
    configScript.src = 'https://files.bpcontent.cloud/2025/08/02/09/20250802095638-S2890VLY.js';
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
