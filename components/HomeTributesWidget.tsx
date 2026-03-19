'use client';

import { useEffect, useRef } from 'react';

interface HomeTributesWidgetProps {
  widgetId?: string;
  maxItems?: number;
}

export default function HomeTributesWidget({
  widgetId = '735679441', // Recent funerals widget ID
  maxItems = 3,
}: HomeTributesWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Remove any existing MuchLoved script to force re-initialization
    const existingScript = document.getElementById(
      'muchloved-funerals-widget-js',
    );
    if (existingScript) {
      existingScript.remove();
    }

    // Create and add the script fresh
    const script = document.createElement('script');
    script.id = 'muchloved-funerals-widget-js';
    script.src =
      'https://www.muchloved.com/client/widgets/funerals.widget.min.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      const scriptToRemove = document.getElementById(
        'muchloved-funerals-widget-js',
      );
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []); // Run once on mount

  return (
    <div
      className={`home-tributes-widget muchloved-limit-${maxItems}`}
      ref={containerRef}
    >
      <div
        className="muchloved-funerals-widget"
        data-widgetid={widgetId}
        data-view="listings"
      />
    </div>
  );
}
