'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    Tawk_API?: {
      showWidget?: () => void;
      hideWidget?: () => void;
      maximize?: () => void;
      minimize?: () => void;
      onLoad?: () => void;
    };
    Tawk_LoadStart?: Date;
  }
}

export default function TawkWidget() {
  useEffect(() => {
    // Initialize Tawk_API
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    // Check if script already exists
    const existingScript = document.getElementById('tawk-script');

    if (!existingScript) {
      // Load the tawk.to script
      const script = document.createElement('script');
      script.id = 'tawk-script';
      script.async = true;
      script.src = 'https://embed.tawk.to/5a16cc68198bd56b8c03ce90/default';
      script.charset = 'UTF-8';
      script.setAttribute('crossorigin', '*');
      document.head.appendChild(script);

      // Show widget when loaded
      window.Tawk_API.onLoad = function () {
        window.Tawk_API?.showWidget?.();
        window.Tawk_API?.maximize?.();
      };
    } else {
      // Script already loaded, just show the widget
      window.Tawk_API?.showWidget?.();
    }

    // Cleanup: hide widget when navigating away
    return () => {
      window.Tawk_API?.hideWidget?.();
    };
  }, []);

  return null;
}
