'use client';

import { useEffect, useRef, useState } from 'react';

interface TributesWidgetProps {
  searchWidgetId?: string;
  upcomingWidgetId?: string;
  recentWidgetId?: string;
}

export default function PaginatedTributesWidget({
  searchWidgetId = '735679439',
  upcomingWidgetId = '735679440',
  recentWidgetId = '735679441',
}: TributesWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasSearchResults, setHasSearchResults] = useState(false);

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
  }, []);

  // Watch for search results
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const searchResultsDiv = container.querySelector(
      '.muchloved-funerals-widget-search-results',
    );
    const searchSummaryDiv = container.querySelector(
      '.muchloved-funerals-search-summary',
    );

    if (!searchResultsDiv) return;

    const checkSearchResults = () => {
      const hasResults = searchResultsDiv.children.length > 0;
      const hasSummary = Boolean(
        searchSummaryDiv &&
        searchSummaryDiv.textContent &&
        searchSummaryDiv.textContent.trim().length > 0,
      );
      setHasSearchResults(hasResults || hasSummary);
    };

    const observer = new MutationObserver(checkSearchResults);

    observer.observe(searchResultsDiv, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    if (searchSummaryDiv) {
      observer.observe(searchSummaryDiv, {
        childList: true,
        subtree: true,
        characterData: true,
      });
    }

    checkSearchResults();

    return () => observer.disconnect();
  }, []);

  return (
    <div className="muchloved-container muchloved-cards" ref={containerRef}>
      {/* Search Section */}
      <div className="muchloved-notice-search">
        <input
          type="text"
          className="muchloved-funerals-search-box"
          data-widgetid={searchWidgetId}
          placeholder="Search all funerals by name"
        />
        <input
          type="button"
          className="muchloved-funerals-search-button"
          data-widgetid={searchWidgetId}
          value="Search"
        />
      </div>

      <div
        className="muchloved-funerals-search-summary"
        data-widgetid={searchWidgetId}
      />
      <div
        className="muchloved-funerals-widget-search-results"
        data-widgetid={searchWidgetId}
      />

      {/* Upcoming Funerals Section - hidden when search results showing */}
      {!hasSearchResults && (
        <div
          className="muchloved-funerals-widget tributes-grid"
          data-widgetid={upcomingWidgetId}
          data-view="listings"
        />
      )}

      {/* Recent Funerals Section - hidden when search results showing */}
      {!hasSearchResults && (
        <div
          className="muchloved-funerals-widget tributes-grid"
          data-widgetid={recentWidgetId}
          data-view="listings"
        />
      )}
    </div>
  );
}
