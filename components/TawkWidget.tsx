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
    const hostname = window.location.hostname;
    const isLocalDevHost =
      hostname === 'localhost' ||
      hostname === '127.0.0.1' ||
      hostname === '::1';

    if (isLocalDevHost) {
      return;
    }

    // Initialize Tawk_API if needed
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    // Check if script already exists
    const existingScript = document.getElementById('tawk-script');

    if (!existingScript) {
      // Load the script
      const script = document.createElement('script');
      script.id = 'tawk-script';
      script.async = true;
      script.src = 'https://embed.tawk.to/5a16cc68198bd56b8c03ce90/default';
      script.charset = 'UTF-8';
      script.setAttribute('crossorigin', '*');

      document.head.appendChild(script);
    } else {
      // Script already loaded; leave Tawk to initialize on its own.
    }

    // Cleanup: minimize widget when leaving page.
    return () => {
      try {
        window.Tawk_API?.minimize?.();
        window.Tawk_API?.hideWidget?.();
      } catch {
        // Ignore cleanup errors.
      }

      document.getElementById('tawk-script')?.remove();

      document
        .querySelectorAll(
          'iframe[src*="tawk.to"], iframe[src*="embed.tawk.to"], div[id*="tawk"], div[class*="tawk"]',
        )
        .forEach((element) => {
          element.remove();
        });

      window.Tawk_API = undefined;
      window.Tawk_LoadStart = undefined;
    };
  }, []);

  return null;
}
