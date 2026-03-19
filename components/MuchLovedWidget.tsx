'use client';

import { useEffect, useRef, useState } from 'react';

interface MuchLovedWidgetProps {
  showSearch?: boolean;
  showUpcoming?: boolean;
  showRecent?: boolean;
  showHeadings?: boolean;
  searchWidgetId?: string;
  upcomingWidgetId?: string;
  recentWidgetId?: string;
  variant?: 'default' | 'cards';
  limit?: number;
}

export default function MuchLovedWidget({
  showSearch = true,
  showUpcoming = true,
  showRecent = true,
  showHeadings = true,
  searchWidgetId = '735679439',
  upcomingWidgetId = '735679440',
  recentWidgetId = '735679441',
  variant = 'default',
  limit,
}: MuchLovedWidgetProps) {
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
  }, []); // Run once on mount

  // Watch for search results to show/hide other sections
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

    // Check if search results have content
    const checkSearchResults = () => {
      const hasResults = searchResultsDiv.children.length > 0;
      const hasSummary = Boolean(
        searchSummaryDiv &&
        searchSummaryDiv.textContent &&
        searchSummaryDiv.textContent.trim().length > 0,
      );
      setHasSearchResults(hasResults || hasSummary);
    };

    // Create observer to watch for changes
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

    // Initial check
    checkSearchResults();

    return () => observer.disconnect();
  }, []);

  // Apply limit to hide extra items via CSS
  const containerClass = `muchloved-container ${variant === 'cards' ? 'muchloved-cards' : ''} ${limit ? `muchloved-limit-${limit}` : ''}`;

  return (
    <div className={containerClass} ref={containerRef}>
      {/* Search Section */}
      {showSearch && (
        <>
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
        </>
      )}

      {/* Upcoming Funerals Section - hidden when search results showing */}
      {showUpcoming && !hasSearchResults && (
        <>
          {showHeadings && <h2 className="ml-heading">Upcoming Funerals</h2>}
          <div
            className="muchloved-funerals-widget"
            data-widgetid={upcomingWidgetId}
            data-view="listings"
          />
        </>
      )}

      {/* Recent Funerals Section - hidden when search results showing */}
      {showRecent && !hasSearchResults && (
        <>
          {showHeadings && (
            <>
              <h2 className="ml-heading">Recent Funerals</h2>
              <div className="line" />
            </>
          )}
          <div
            className="muchloved-funerals-widget"
            data-widgetid={recentWidgetId}
            data-view="listings"
          />
        </>
      )}
    </div>
  );
}
