'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    Tawk_API?: {
      showWidget?: () => void;
      hideWidget?: () => void;
      maximize?: () => void;
      minimize?: () => void;
      toggle?: () => void;
      popup?: () => void;
      getStatus?: () => string;
      isChatMaximized?: () => boolean;
      isChatMinimized?: () => boolean;
      isChatHidden?: () => boolean;
      isChatOngoing?: () => boolean;
      onLoad?: () => void;
    };
    Tawk_LoadStart?: Date;
  }
}

export default function TawkWidget() {
  useEffect(() => {
    // Initialize Tawk_API if needed
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    // Show the widget bubble only
    const showTawkWidget = () => {
      try {
        window.Tawk_API?.showWidget?.();

        // Force minimized state so users must click the bubble to open chat.
        setTimeout(() => {
          window.Tawk_API?.minimize?.();
        }, 150);
      } catch {
        // Widget may still be initializing.
      }
    };

    // Check if script already exists
    const existingScript = document.getElementById('tawk-script');

    if (!existingScript) {
      // Set onLoad callback
      window.Tawk_API.onLoad = showTawkWidget;

      // Load the script
      const script = document.createElement('script');
      script.id = 'tawk-script';
      script.async = true;
      script.src = 'https://embed.tawk.to/5a16cc68198bd56b8c03ce90/default';
      script.charset = 'UTF-8';
      script.setAttribute('crossorigin', '*');

      document.head.appendChild(script);
    } else {
      // Script already loaded, poll for API ready
      let attempts = 0;
      const pollAndShow = () => {
        attempts++;

        if (
          window.Tawk_API?.showWidget &&
          typeof window.Tawk_API.showWidget === 'function'
        ) {
          showTawkWidget();
        } else if (attempts < 50) {
          setTimeout(pollAndShow, 100);
        }
      };

      pollAndShow();
    }

    // Cleanup: close widget when leaving page.
    return () => {
      try {
        // Minimize first, then hide
        window.Tawk_API?.minimize?.();
        window.Tawk_API?.hideWidget?.();
      } catch {
        // Ignore cleanup errors.
      }
    };
  }, []);

  return null;
}
