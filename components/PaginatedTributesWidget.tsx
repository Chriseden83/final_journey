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

  const sanitizeTributeCards = (root: ParentNode) => {
    const notices = root.querySelectorAll('.ml-notice');

    notices.forEach((notice) => {
      const details = notice.querySelector('.ml-details');
      if (!details) return;
      if (details.getAttribute('data-sanitized') === 'true') return;

      const name = details.querySelector('h3.ml-name');
      const paragraphs = Array.from(details.querySelectorAll('p'));
      const locationSpan = details.querySelector('.ml-funeral-location');
      const locationLine = locationSpan?.closest('p') ?? locationSpan;

      const detailNodes = Array.from(
        notice.querySelectorAll<HTMLElement>('time, p, span, div'),
      );
      const dateLine =
        detailNodes.find((node) => {
          const text = node.textContent?.trim() ?? '';
          if (!text) return false;
          if (node.classList.contains('ml-funeral-location')) return false;
          if (node.closest('h3.ml-name')) return false;
          if (text.length > 42) return false;
          return (
            /\b\d{1,2}(st|nd|rd|th)?\s+[A-Za-z]+\s+\d{4}\b/i.test(text) ||
            /\b[A-Za-z]+\s+\d{1,2}(st|nd|rd|th)?,?\s+\d{4}\b/i.test(text) ||
            /\b\d{1,2}[\/.-]\d{1,2}[\/.-]\d{2,4}\b/.test(text) ||
            /date/i.test(node.className)
          );
        }) ??
        paragraphs.find((p) => p !== locationLine) ??
        null;

      const viewLink = Array.from(
        notice.querySelectorAll<HTMLAnchorElement>(
          'a.ml-link[target="_blank"]',
        ),
      ).find((link) => {
        const href = link.getAttribute('href') ?? '';
        return (
          href.includes('.muchloved.com') &&
          !href.includes('Gallery') &&
          !href.includes('Order')
        );
      });

      if (!name || !viewLink || !locationLine) return;

      const fragment = document.createDocumentFragment();
      fragment.appendChild(name.cloneNode(true));

      if (dateLine) {
        fragment.appendChild(dateLine.cloneNode(true));
      }

      if (locationLine && locationLine !== dateLine) {
        fragment.appendChild(locationLine.cloneNode(true));
      }

      const linkClone = viewLink.cloneNode(true) as HTMLAnchorElement;
      linkClone.textContent = 'VIEW TRIBUTE';
      fragment.appendChild(linkClone);

      details.replaceChildren(fragment);
      details.setAttribute('data-sanitized', 'true');
    });
  };

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

    const runSanitizer = () => sanitizeTributeCards(container);

    runSanitizer();

    const detailsObserver = new MutationObserver(runSanitizer);
    detailsObserver.observe(container, {
      childList: true,
      subtree: true,
    });

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

    return () => {
      observer.disconnect();
      detailsObserver.disconnect();
    };
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
